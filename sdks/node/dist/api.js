"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all3) => {
  for (var name in all3)
    __defProp(target, name, { get: all3[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// node_modules/delayed-stream/lib/delayed_stream.js
var require_delayed_stream = __commonJS({
  "node_modules/delayed-stream/lib/delayed_stream.js"(exports, module2) {
    var Stream = require("stream").Stream;
    var util2 = require("util");
    module2.exports = DelayedStream;
    function DelayedStream() {
      this.source = null;
      this.dataSize = 0;
      this.maxDataSize = 1024 * 1024;
      this.pauseStream = true;
      this._maxDataSizeExceeded = false;
      this._released = false;
      this._bufferedEvents = [];
    }
    util2.inherits(DelayedStream, Stream);
    DelayedStream.create = function(source, options) {
      var delayedStream = new this();
      options = options || {};
      for (var option in options) {
        delayedStream[option] = options[option];
      }
      delayedStream.source = source;
      var realEmit = source.emit;
      source.emit = function() {
        delayedStream._handleEmit(arguments);
        return realEmit.apply(source, arguments);
      };
      source.on("error", function() {
      });
      if (delayedStream.pauseStream) {
        source.pause();
      }
      return delayedStream;
    };
    Object.defineProperty(DelayedStream.prototype, "readable", {
      configurable: true,
      enumerable: true,
      get: function() {
        return this.source.readable;
      }
    });
    DelayedStream.prototype.setEncoding = function() {
      return this.source.setEncoding.apply(this.source, arguments);
    };
    DelayedStream.prototype.resume = function() {
      if (!this._released) {
        this.release();
      }
      this.source.resume();
    };
    DelayedStream.prototype.pause = function() {
      this.source.pause();
    };
    DelayedStream.prototype.release = function() {
      this._released = true;
      this._bufferedEvents.forEach(function(args) {
        this.emit.apply(this, args);
      }.bind(this));
      this._bufferedEvents = [];
    };
    DelayedStream.prototype.pipe = function() {
      var r = Stream.prototype.pipe.apply(this, arguments);
      this.resume();
      return r;
    };
    DelayedStream.prototype._handleEmit = function(args) {
      if (this._released) {
        this.emit.apply(this, args);
        return;
      }
      if (args[0] === "data") {
        this.dataSize += args[1].length;
        this._checkIfMaxDataSizeExceeded();
      }
      this._bufferedEvents.push(args);
    };
    DelayedStream.prototype._checkIfMaxDataSizeExceeded = function() {
      if (this._maxDataSizeExceeded) {
        return;
      }
      if (this.dataSize <= this.maxDataSize) {
        return;
      }
      this._maxDataSizeExceeded = true;
      var message = "DelayedStream#maxDataSize of " + this.maxDataSize + " bytes exceeded.";
      this.emit("error", new Error(message));
    };
  }
});

// node_modules/combined-stream/lib/combined_stream.js
var require_combined_stream = __commonJS({
  "node_modules/combined-stream/lib/combined_stream.js"(exports, module2) {
    var util2 = require("util");
    var Stream = require("stream").Stream;
    var DelayedStream = require_delayed_stream();
    module2.exports = CombinedStream;
    function CombinedStream() {
      this.writable = false;
      this.readable = true;
      this.dataSize = 0;
      this.maxDataSize = 2 * 1024 * 1024;
      this.pauseStreams = true;
      this._released = false;
      this._streams = [];
      this._currentStream = null;
      this._insideLoop = false;
      this._pendingNext = false;
    }
    util2.inherits(CombinedStream, Stream);
    CombinedStream.create = function(options) {
      var combinedStream = new this();
      options = options || {};
      for (var option in options) {
        combinedStream[option] = options[option];
      }
      return combinedStream;
    };
    CombinedStream.isStreamLike = function(stream4) {
      return typeof stream4 !== "function" && typeof stream4 !== "string" && typeof stream4 !== "boolean" && typeof stream4 !== "number" && !Buffer.isBuffer(stream4);
    };
    CombinedStream.prototype.append = function(stream4) {
      var isStreamLike = CombinedStream.isStreamLike(stream4);
      if (isStreamLike) {
        if (!(stream4 instanceof DelayedStream)) {
          var newStream = DelayedStream.create(stream4, {
            maxDataSize: Infinity,
            pauseStream: this.pauseStreams
          });
          stream4.on("data", this._checkDataSize.bind(this));
          stream4 = newStream;
        }
        this._handleErrors(stream4);
        if (this.pauseStreams) {
          stream4.pause();
        }
      }
      this._streams.push(stream4);
      return this;
    };
    CombinedStream.prototype.pipe = function(dest, options) {
      Stream.prototype.pipe.call(this, dest, options);
      this.resume();
      return dest;
    };
    CombinedStream.prototype._getNext = function() {
      this._currentStream = null;
      if (this._insideLoop) {
        this._pendingNext = true;
        return;
      }
      this._insideLoop = true;
      try {
        do {
          this._pendingNext = false;
          this._realGetNext();
        } while (this._pendingNext);
      } finally {
        this._insideLoop = false;
      }
    };
    CombinedStream.prototype._realGetNext = function() {
      var stream4 = this._streams.shift();
      if (typeof stream4 == "undefined") {
        this.end();
        return;
      }
      if (typeof stream4 !== "function") {
        this._pipeNext(stream4);
        return;
      }
      var getStream = stream4;
      getStream(function(stream5) {
        var isStreamLike = CombinedStream.isStreamLike(stream5);
        if (isStreamLike) {
          stream5.on("data", this._checkDataSize.bind(this));
          this._handleErrors(stream5);
        }
        this._pipeNext(stream5);
      }.bind(this));
    };
    CombinedStream.prototype._pipeNext = function(stream4) {
      this._currentStream = stream4;
      var isStreamLike = CombinedStream.isStreamLike(stream4);
      if (isStreamLike) {
        stream4.on("end", this._getNext.bind(this));
        stream4.pipe(this, { end: false });
        return;
      }
      var value = stream4;
      this.write(value);
      this._getNext();
    };
    CombinedStream.prototype._handleErrors = function(stream4) {
      var self2 = this;
      stream4.on("error", function(err) {
        self2._emitError(err);
      });
    };
    CombinedStream.prototype.write = function(data) {
      this.emit("data", data);
    };
    CombinedStream.prototype.pause = function() {
      if (!this.pauseStreams) {
        return;
      }
      if (this.pauseStreams && this._currentStream && typeof this._currentStream.pause == "function")
        this._currentStream.pause();
      this.emit("pause");
    };
    CombinedStream.prototype.resume = function() {
      if (!this._released) {
        this._released = true;
        this.writable = true;
        this._getNext();
      }
      if (this.pauseStreams && this._currentStream && typeof this._currentStream.resume == "function")
        this._currentStream.resume();
      this.emit("resume");
    };
    CombinedStream.prototype.end = function() {
      this._reset();
      this.emit("end");
    };
    CombinedStream.prototype.destroy = function() {
      this._reset();
      this.emit("close");
    };
    CombinedStream.prototype._reset = function() {
      this.writable = false;
      this._streams = [];
      this._currentStream = null;
    };
    CombinedStream.prototype._checkDataSize = function() {
      this._updateDataSize();
      if (this.dataSize <= this.maxDataSize) {
        return;
      }
      var message = "DelayedStream#maxDataSize of " + this.maxDataSize + " bytes exceeded.";
      this._emitError(new Error(message));
    };
    CombinedStream.prototype._updateDataSize = function() {
      this.dataSize = 0;
      var self2 = this;
      this._streams.forEach(function(stream4) {
        if (!stream4.dataSize) {
          return;
        }
        self2.dataSize += stream4.dataSize;
      });
      if (this._currentStream && this._currentStream.dataSize) {
        this.dataSize += this._currentStream.dataSize;
      }
    };
    CombinedStream.prototype._emitError = function(err) {
      this._reset();
      this.emit("error", err);
    };
  }
});

// node_modules/mime-db/db.json
var require_db = __commonJS({
  "node_modules/mime-db/db.json"(exports, module2) {
    module2.exports = {
      "application/1d-interleaved-parityfec": {
        source: "iana"
      },
      "application/3gpdash-qoe-report+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/3gpp-ims+xml": {
        source: "iana",
        compressible: true
      },
      "application/3gpphal+json": {
        source: "iana",
        compressible: true
      },
      "application/3gpphalforms+json": {
        source: "iana",
        compressible: true
      },
      "application/a2l": {
        source: "iana"
      },
      "application/ace+cbor": {
        source: "iana"
      },
      "application/activemessage": {
        source: "iana"
      },
      "application/activity+json": {
        source: "iana",
        compressible: true
      },
      "application/alto-costmap+json": {
        source: "iana",
        compressible: true
      },
      "application/alto-costmapfilter+json": {
        source: "iana",
        compressible: true
      },
      "application/alto-directory+json": {
        source: "iana",
        compressible: true
      },
      "application/alto-endpointcost+json": {
        source: "iana",
        compressible: true
      },
      "application/alto-endpointcostparams+json": {
        source: "iana",
        compressible: true
      },
      "application/alto-endpointprop+json": {
        source: "iana",
        compressible: true
      },
      "application/alto-endpointpropparams+json": {
        source: "iana",
        compressible: true
      },
      "application/alto-error+json": {
        source: "iana",
        compressible: true
      },
      "application/alto-networkmap+json": {
        source: "iana",
        compressible: true
      },
      "application/alto-networkmapfilter+json": {
        source: "iana",
        compressible: true
      },
      "application/alto-updatestreamcontrol+json": {
        source: "iana",
        compressible: true
      },
      "application/alto-updatestreamparams+json": {
        source: "iana",
        compressible: true
      },
      "application/aml": {
        source: "iana"
      },
      "application/andrew-inset": {
        source: "iana",
        extensions: ["ez"]
      },
      "application/applefile": {
        source: "iana"
      },
      "application/applixware": {
        source: "apache",
        extensions: ["aw"]
      },
      "application/at+jwt": {
        source: "iana"
      },
      "application/atf": {
        source: "iana"
      },
      "application/atfx": {
        source: "iana"
      },
      "application/atom+xml": {
        source: "iana",
        compressible: true,
        extensions: ["atom"]
      },
      "application/atomcat+xml": {
        source: "iana",
        compressible: true,
        extensions: ["atomcat"]
      },
      "application/atomdeleted+xml": {
        source: "iana",
        compressible: true,
        extensions: ["atomdeleted"]
      },
      "application/atomicmail": {
        source: "iana"
      },
      "application/atomsvc+xml": {
        source: "iana",
        compressible: true,
        extensions: ["atomsvc"]
      },
      "application/atsc-dwd+xml": {
        source: "iana",
        compressible: true,
        extensions: ["dwd"]
      },
      "application/atsc-dynamic-event-message": {
        source: "iana"
      },
      "application/atsc-held+xml": {
        source: "iana",
        compressible: true,
        extensions: ["held"]
      },
      "application/atsc-rdt+json": {
        source: "iana",
        compressible: true
      },
      "application/atsc-rsat+xml": {
        source: "iana",
        compressible: true,
        extensions: ["rsat"]
      },
      "application/atxml": {
        source: "iana"
      },
      "application/auth-policy+xml": {
        source: "iana",
        compressible: true
      },
      "application/bacnet-xdd+zip": {
        source: "iana",
        compressible: false
      },
      "application/batch-smtp": {
        source: "iana"
      },
      "application/bdoc": {
        compressible: false,
        extensions: ["bdoc"]
      },
      "application/beep+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/calendar+json": {
        source: "iana",
        compressible: true
      },
      "application/calendar+xml": {
        source: "iana",
        compressible: true,
        extensions: ["xcs"]
      },
      "application/call-completion": {
        source: "iana"
      },
      "application/cals-1840": {
        source: "iana"
      },
      "application/captive+json": {
        source: "iana",
        compressible: true
      },
      "application/cbor": {
        source: "iana"
      },
      "application/cbor-seq": {
        source: "iana"
      },
      "application/cccex": {
        source: "iana"
      },
      "application/ccmp+xml": {
        source: "iana",
        compressible: true
      },
      "application/ccxml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["ccxml"]
      },
      "application/cdfx+xml": {
        source: "iana",
        compressible: true,
        extensions: ["cdfx"]
      },
      "application/cdmi-capability": {
        source: "iana",
        extensions: ["cdmia"]
      },
      "application/cdmi-container": {
        source: "iana",
        extensions: ["cdmic"]
      },
      "application/cdmi-domain": {
        source: "iana",
        extensions: ["cdmid"]
      },
      "application/cdmi-object": {
        source: "iana",
        extensions: ["cdmio"]
      },
      "application/cdmi-queue": {
        source: "iana",
        extensions: ["cdmiq"]
      },
      "application/cdni": {
        source: "iana"
      },
      "application/cea": {
        source: "iana"
      },
      "application/cea-2018+xml": {
        source: "iana",
        compressible: true
      },
      "application/cellml+xml": {
        source: "iana",
        compressible: true
      },
      "application/cfw": {
        source: "iana"
      },
      "application/clr": {
        source: "iana"
      },
      "application/clue+xml": {
        source: "iana",
        compressible: true
      },
      "application/clue_info+xml": {
        source: "iana",
        compressible: true
      },
      "application/cms": {
        source: "iana"
      },
      "application/cnrp+xml": {
        source: "iana",
        compressible: true
      },
      "application/coap-group+json": {
        source: "iana",
        compressible: true
      },
      "application/coap-payload": {
        source: "iana"
      },
      "application/commonground": {
        source: "iana"
      },
      "application/conference-info+xml": {
        source: "iana",
        compressible: true
      },
      "application/cose": {
        source: "iana"
      },
      "application/cose-key": {
        source: "iana"
      },
      "application/cose-key-set": {
        source: "iana"
      },
      "application/cpl+xml": {
        source: "iana",
        compressible: true
      },
      "application/csrattrs": {
        source: "iana"
      },
      "application/csta+xml": {
        source: "iana",
        compressible: true
      },
      "application/cstadata+xml": {
        source: "iana",
        compressible: true
      },
      "application/csvm+json": {
        source: "iana",
        compressible: true
      },
      "application/cu-seeme": {
        source: "apache",
        extensions: ["cu"]
      },
      "application/cwt": {
        source: "iana"
      },
      "application/cybercash": {
        source: "iana"
      },
      "application/dart": {
        compressible: true
      },
      "application/dash+xml": {
        source: "iana",
        compressible: true,
        extensions: ["mpd"]
      },
      "application/dashdelta": {
        source: "iana"
      },
      "application/davmount+xml": {
        source: "iana",
        compressible: true,
        extensions: ["davmount"]
      },
      "application/dca-rft": {
        source: "iana"
      },
      "application/dcd": {
        source: "iana"
      },
      "application/dec-dx": {
        source: "iana"
      },
      "application/dialog-info+xml": {
        source: "iana",
        compressible: true
      },
      "application/dicom": {
        source: "iana"
      },
      "application/dicom+json": {
        source: "iana",
        compressible: true
      },
      "application/dicom+xml": {
        source: "iana",
        compressible: true
      },
      "application/dii": {
        source: "iana"
      },
      "application/dit": {
        source: "iana"
      },
      "application/dns": {
        source: "iana"
      },
      "application/dns+json": {
        source: "iana",
        compressible: true
      },
      "application/dns-message": {
        source: "iana"
      },
      "application/docbook+xml": {
        source: "apache",
        compressible: true,
        extensions: ["dbk"]
      },
      "application/dots+cbor": {
        source: "iana"
      },
      "application/dskpp+xml": {
        source: "iana",
        compressible: true
      },
      "application/dssc+der": {
        source: "iana",
        extensions: ["dssc"]
      },
      "application/dssc+xml": {
        source: "iana",
        compressible: true,
        extensions: ["xdssc"]
      },
      "application/dvcs": {
        source: "iana"
      },
      "application/ecmascript": {
        source: "iana",
        compressible: true,
        extensions: ["es", "ecma"]
      },
      "application/edi-consent": {
        source: "iana"
      },
      "application/edi-x12": {
        source: "iana",
        compressible: false
      },
      "application/edifact": {
        source: "iana",
        compressible: false
      },
      "application/efi": {
        source: "iana"
      },
      "application/elm+json": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/elm+xml": {
        source: "iana",
        compressible: true
      },
      "application/emergencycalldata.cap+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/emergencycalldata.comment+xml": {
        source: "iana",
        compressible: true
      },
      "application/emergencycalldata.control+xml": {
        source: "iana",
        compressible: true
      },
      "application/emergencycalldata.deviceinfo+xml": {
        source: "iana",
        compressible: true
      },
      "application/emergencycalldata.ecall.msd": {
        source: "iana"
      },
      "application/emergencycalldata.providerinfo+xml": {
        source: "iana",
        compressible: true
      },
      "application/emergencycalldata.serviceinfo+xml": {
        source: "iana",
        compressible: true
      },
      "application/emergencycalldata.subscriberinfo+xml": {
        source: "iana",
        compressible: true
      },
      "application/emergencycalldata.veds+xml": {
        source: "iana",
        compressible: true
      },
      "application/emma+xml": {
        source: "iana",
        compressible: true,
        extensions: ["emma"]
      },
      "application/emotionml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["emotionml"]
      },
      "application/encaprtp": {
        source: "iana"
      },
      "application/epp+xml": {
        source: "iana",
        compressible: true
      },
      "application/epub+zip": {
        source: "iana",
        compressible: false,
        extensions: ["epub"]
      },
      "application/eshop": {
        source: "iana"
      },
      "application/exi": {
        source: "iana",
        extensions: ["exi"]
      },
      "application/expect-ct-report+json": {
        source: "iana",
        compressible: true
      },
      "application/express": {
        source: "iana",
        extensions: ["exp"]
      },
      "application/fastinfoset": {
        source: "iana"
      },
      "application/fastsoap": {
        source: "iana"
      },
      "application/fdt+xml": {
        source: "iana",
        compressible: true,
        extensions: ["fdt"]
      },
      "application/fhir+json": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/fhir+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/fido.trusted-apps+json": {
        compressible: true
      },
      "application/fits": {
        source: "iana"
      },
      "application/flexfec": {
        source: "iana"
      },
      "application/font-sfnt": {
        source: "iana"
      },
      "application/font-tdpfr": {
        source: "iana",
        extensions: ["pfr"]
      },
      "application/font-woff": {
        source: "iana",
        compressible: false
      },
      "application/framework-attributes+xml": {
        source: "iana",
        compressible: true
      },
      "application/geo+json": {
        source: "iana",
        compressible: true,
        extensions: ["geojson"]
      },
      "application/geo+json-seq": {
        source: "iana"
      },
      "application/geopackage+sqlite3": {
        source: "iana"
      },
      "application/geoxacml+xml": {
        source: "iana",
        compressible: true
      },
      "application/gltf-buffer": {
        source: "iana"
      },
      "application/gml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["gml"]
      },
      "application/gpx+xml": {
        source: "apache",
        compressible: true,
        extensions: ["gpx"]
      },
      "application/gxf": {
        source: "apache",
        extensions: ["gxf"]
      },
      "application/gzip": {
        source: "iana",
        compressible: false,
        extensions: ["gz"]
      },
      "application/h224": {
        source: "iana"
      },
      "application/held+xml": {
        source: "iana",
        compressible: true
      },
      "application/hjson": {
        extensions: ["hjson"]
      },
      "application/http": {
        source: "iana"
      },
      "application/hyperstudio": {
        source: "iana",
        extensions: ["stk"]
      },
      "application/ibe-key-request+xml": {
        source: "iana",
        compressible: true
      },
      "application/ibe-pkg-reply+xml": {
        source: "iana",
        compressible: true
      },
      "application/ibe-pp-data": {
        source: "iana"
      },
      "application/iges": {
        source: "iana"
      },
      "application/im-iscomposing+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/index": {
        source: "iana"
      },
      "application/index.cmd": {
        source: "iana"
      },
      "application/index.obj": {
        source: "iana"
      },
      "application/index.response": {
        source: "iana"
      },
      "application/index.vnd": {
        source: "iana"
      },
      "application/inkml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["ink", "inkml"]
      },
      "application/iotp": {
        source: "iana"
      },
      "application/ipfix": {
        source: "iana",
        extensions: ["ipfix"]
      },
      "application/ipp": {
        source: "iana"
      },
      "application/isup": {
        source: "iana"
      },
      "application/its+xml": {
        source: "iana",
        compressible: true,
        extensions: ["its"]
      },
      "application/java-archive": {
        source: "apache",
        compressible: false,
        extensions: ["jar", "war", "ear"]
      },
      "application/java-serialized-object": {
        source: "apache",
        compressible: false,
        extensions: ["ser"]
      },
      "application/java-vm": {
        source: "apache",
        compressible: false,
        extensions: ["class"]
      },
      "application/javascript": {
        source: "iana",
        charset: "UTF-8",
        compressible: true,
        extensions: ["js", "mjs"]
      },
      "application/jf2feed+json": {
        source: "iana",
        compressible: true
      },
      "application/jose": {
        source: "iana"
      },
      "application/jose+json": {
        source: "iana",
        compressible: true
      },
      "application/jrd+json": {
        source: "iana",
        compressible: true
      },
      "application/jscalendar+json": {
        source: "iana",
        compressible: true
      },
      "application/json": {
        source: "iana",
        charset: "UTF-8",
        compressible: true,
        extensions: ["json", "map"]
      },
      "application/json-patch+json": {
        source: "iana",
        compressible: true
      },
      "application/json-seq": {
        source: "iana"
      },
      "application/json5": {
        extensions: ["json5"]
      },
      "application/jsonml+json": {
        source: "apache",
        compressible: true,
        extensions: ["jsonml"]
      },
      "application/jwk+json": {
        source: "iana",
        compressible: true
      },
      "application/jwk-set+json": {
        source: "iana",
        compressible: true
      },
      "application/jwt": {
        source: "iana"
      },
      "application/kpml-request+xml": {
        source: "iana",
        compressible: true
      },
      "application/kpml-response+xml": {
        source: "iana",
        compressible: true
      },
      "application/ld+json": {
        source: "iana",
        compressible: true,
        extensions: ["jsonld"]
      },
      "application/lgr+xml": {
        source: "iana",
        compressible: true,
        extensions: ["lgr"]
      },
      "application/link-format": {
        source: "iana"
      },
      "application/load-control+xml": {
        source: "iana",
        compressible: true
      },
      "application/lost+xml": {
        source: "iana",
        compressible: true,
        extensions: ["lostxml"]
      },
      "application/lostsync+xml": {
        source: "iana",
        compressible: true
      },
      "application/lpf+zip": {
        source: "iana",
        compressible: false
      },
      "application/lxf": {
        source: "iana"
      },
      "application/mac-binhex40": {
        source: "iana",
        extensions: ["hqx"]
      },
      "application/mac-compactpro": {
        source: "apache",
        extensions: ["cpt"]
      },
      "application/macwriteii": {
        source: "iana"
      },
      "application/mads+xml": {
        source: "iana",
        compressible: true,
        extensions: ["mads"]
      },
      "application/manifest+json": {
        source: "iana",
        charset: "UTF-8",
        compressible: true,
        extensions: ["webmanifest"]
      },
      "application/marc": {
        source: "iana",
        extensions: ["mrc"]
      },
      "application/marcxml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["mrcx"]
      },
      "application/mathematica": {
        source: "iana",
        extensions: ["ma", "nb", "mb"]
      },
      "application/mathml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["mathml"]
      },
      "application/mathml-content+xml": {
        source: "iana",
        compressible: true
      },
      "application/mathml-presentation+xml": {
        source: "iana",
        compressible: true
      },
      "application/mbms-associated-procedure-description+xml": {
        source: "iana",
        compressible: true
      },
      "application/mbms-deregister+xml": {
        source: "iana",
        compressible: true
      },
      "application/mbms-envelope+xml": {
        source: "iana",
        compressible: true
      },
      "application/mbms-msk+xml": {
        source: "iana",
        compressible: true
      },
      "application/mbms-msk-response+xml": {
        source: "iana",
        compressible: true
      },
      "application/mbms-protection-description+xml": {
        source: "iana",
        compressible: true
      },
      "application/mbms-reception-report+xml": {
        source: "iana",
        compressible: true
      },
      "application/mbms-register+xml": {
        source: "iana",
        compressible: true
      },
      "application/mbms-register-response+xml": {
        source: "iana",
        compressible: true
      },
      "application/mbms-schedule+xml": {
        source: "iana",
        compressible: true
      },
      "application/mbms-user-service-description+xml": {
        source: "iana",
        compressible: true
      },
      "application/mbox": {
        source: "iana",
        extensions: ["mbox"]
      },
      "application/media-policy-dataset+xml": {
        source: "iana",
        compressible: true
      },
      "application/media_control+xml": {
        source: "iana",
        compressible: true
      },
      "application/mediaservercontrol+xml": {
        source: "iana",
        compressible: true,
        extensions: ["mscml"]
      },
      "application/merge-patch+json": {
        source: "iana",
        compressible: true
      },
      "application/metalink+xml": {
        source: "apache",
        compressible: true,
        extensions: ["metalink"]
      },
      "application/metalink4+xml": {
        source: "iana",
        compressible: true,
        extensions: ["meta4"]
      },
      "application/mets+xml": {
        source: "iana",
        compressible: true,
        extensions: ["mets"]
      },
      "application/mf4": {
        source: "iana"
      },
      "application/mikey": {
        source: "iana"
      },
      "application/mipc": {
        source: "iana"
      },
      "application/missing-blocks+cbor-seq": {
        source: "iana"
      },
      "application/mmt-aei+xml": {
        source: "iana",
        compressible: true,
        extensions: ["maei"]
      },
      "application/mmt-usd+xml": {
        source: "iana",
        compressible: true,
        extensions: ["musd"]
      },
      "application/mods+xml": {
        source: "iana",
        compressible: true,
        extensions: ["mods"]
      },
      "application/moss-keys": {
        source: "iana"
      },
      "application/moss-signature": {
        source: "iana"
      },
      "application/mosskey-data": {
        source: "iana"
      },
      "application/mosskey-request": {
        source: "iana"
      },
      "application/mp21": {
        source: "iana",
        extensions: ["m21", "mp21"]
      },
      "application/mp4": {
        source: "iana",
        extensions: ["mp4s", "m4p"]
      },
      "application/mpeg4-generic": {
        source: "iana"
      },
      "application/mpeg4-iod": {
        source: "iana"
      },
      "application/mpeg4-iod-xmt": {
        source: "iana"
      },
      "application/mrb-consumer+xml": {
        source: "iana",
        compressible: true
      },
      "application/mrb-publish+xml": {
        source: "iana",
        compressible: true
      },
      "application/msc-ivr+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/msc-mixer+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/msword": {
        source: "iana",
        compressible: false,
        extensions: ["doc", "dot"]
      },
      "application/mud+json": {
        source: "iana",
        compressible: true
      },
      "application/multipart-core": {
        source: "iana"
      },
      "application/mxf": {
        source: "iana",
        extensions: ["mxf"]
      },
      "application/n-quads": {
        source: "iana",
        extensions: ["nq"]
      },
      "application/n-triples": {
        source: "iana",
        extensions: ["nt"]
      },
      "application/nasdata": {
        source: "iana"
      },
      "application/news-checkgroups": {
        source: "iana",
        charset: "US-ASCII"
      },
      "application/news-groupinfo": {
        source: "iana",
        charset: "US-ASCII"
      },
      "application/news-transmission": {
        source: "iana"
      },
      "application/nlsml+xml": {
        source: "iana",
        compressible: true
      },
      "application/node": {
        source: "iana",
        extensions: ["cjs"]
      },
      "application/nss": {
        source: "iana"
      },
      "application/oauth-authz-req+jwt": {
        source: "iana"
      },
      "application/ocsp-request": {
        source: "iana"
      },
      "application/ocsp-response": {
        source: "iana"
      },
      "application/octet-stream": {
        source: "iana",
        compressible: false,
        extensions: ["bin", "dms", "lrf", "mar", "so", "dist", "distz", "pkg", "bpk", "dump", "elc", "deploy", "exe", "dll", "deb", "dmg", "iso", "img", "msi", "msp", "msm", "buffer"]
      },
      "application/oda": {
        source: "iana",
        extensions: ["oda"]
      },
      "application/odm+xml": {
        source: "iana",
        compressible: true
      },
      "application/odx": {
        source: "iana"
      },
      "application/oebps-package+xml": {
        source: "iana",
        compressible: true,
        extensions: ["opf"]
      },
      "application/ogg": {
        source: "iana",
        compressible: false,
        extensions: ["ogx"]
      },
      "application/omdoc+xml": {
        source: "apache",
        compressible: true,
        extensions: ["omdoc"]
      },
      "application/onenote": {
        source: "apache",
        extensions: ["onetoc", "onetoc2", "onetmp", "onepkg"]
      },
      "application/opc-nodeset+xml": {
        source: "iana",
        compressible: true
      },
      "application/oscore": {
        source: "iana"
      },
      "application/oxps": {
        source: "iana",
        extensions: ["oxps"]
      },
      "application/p21": {
        source: "iana"
      },
      "application/p21+zip": {
        source: "iana",
        compressible: false
      },
      "application/p2p-overlay+xml": {
        source: "iana",
        compressible: true,
        extensions: ["relo"]
      },
      "application/parityfec": {
        source: "iana"
      },
      "application/passport": {
        source: "iana"
      },
      "application/patch-ops-error+xml": {
        source: "iana",
        compressible: true,
        extensions: ["xer"]
      },
      "application/pdf": {
        source: "iana",
        compressible: false,
        extensions: ["pdf"]
      },
      "application/pdx": {
        source: "iana"
      },
      "application/pem-certificate-chain": {
        source: "iana"
      },
      "application/pgp-encrypted": {
        source: "iana",
        compressible: false,
        extensions: ["pgp"]
      },
      "application/pgp-keys": {
        source: "iana"
      },
      "application/pgp-signature": {
        source: "iana",
        extensions: ["asc", "sig"]
      },
      "application/pics-rules": {
        source: "apache",
        extensions: ["prf"]
      },
      "application/pidf+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/pidf-diff+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/pkcs10": {
        source: "iana",
        extensions: ["p10"]
      },
      "application/pkcs12": {
        source: "iana"
      },
      "application/pkcs7-mime": {
        source: "iana",
        extensions: ["p7m", "p7c"]
      },
      "application/pkcs7-signature": {
        source: "iana",
        extensions: ["p7s"]
      },
      "application/pkcs8": {
        source: "iana",
        extensions: ["p8"]
      },
      "application/pkcs8-encrypted": {
        source: "iana"
      },
      "application/pkix-attr-cert": {
        source: "iana",
        extensions: ["ac"]
      },
      "application/pkix-cert": {
        source: "iana",
        extensions: ["cer"]
      },
      "application/pkix-crl": {
        source: "iana",
        extensions: ["crl"]
      },
      "application/pkix-pkipath": {
        source: "iana",
        extensions: ["pkipath"]
      },
      "application/pkixcmp": {
        source: "iana",
        extensions: ["pki"]
      },
      "application/pls+xml": {
        source: "iana",
        compressible: true,
        extensions: ["pls"]
      },
      "application/poc-settings+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/postscript": {
        source: "iana",
        compressible: true,
        extensions: ["ai", "eps", "ps"]
      },
      "application/ppsp-tracker+json": {
        source: "iana",
        compressible: true
      },
      "application/problem+json": {
        source: "iana",
        compressible: true
      },
      "application/problem+xml": {
        source: "iana",
        compressible: true
      },
      "application/provenance+xml": {
        source: "iana",
        compressible: true,
        extensions: ["provx"]
      },
      "application/prs.alvestrand.titrax-sheet": {
        source: "iana"
      },
      "application/prs.cww": {
        source: "iana",
        extensions: ["cww"]
      },
      "application/prs.cyn": {
        source: "iana",
        charset: "7-BIT"
      },
      "application/prs.hpub+zip": {
        source: "iana",
        compressible: false
      },
      "application/prs.nprend": {
        source: "iana"
      },
      "application/prs.plucker": {
        source: "iana"
      },
      "application/prs.rdf-xml-crypt": {
        source: "iana"
      },
      "application/prs.xsf+xml": {
        source: "iana",
        compressible: true
      },
      "application/pskc+xml": {
        source: "iana",
        compressible: true,
        extensions: ["pskcxml"]
      },
      "application/pvd+json": {
        source: "iana",
        compressible: true
      },
      "application/qsig": {
        source: "iana"
      },
      "application/raml+yaml": {
        compressible: true,
        extensions: ["raml"]
      },
      "application/raptorfec": {
        source: "iana"
      },
      "application/rdap+json": {
        source: "iana",
        compressible: true
      },
      "application/rdf+xml": {
        source: "iana",
        compressible: true,
        extensions: ["rdf", "owl"]
      },
      "application/reginfo+xml": {
        source: "iana",
        compressible: true,
        extensions: ["rif"]
      },
      "application/relax-ng-compact-syntax": {
        source: "iana",
        extensions: ["rnc"]
      },
      "application/remote-printing": {
        source: "iana"
      },
      "application/reputon+json": {
        source: "iana",
        compressible: true
      },
      "application/resource-lists+xml": {
        source: "iana",
        compressible: true,
        extensions: ["rl"]
      },
      "application/resource-lists-diff+xml": {
        source: "iana",
        compressible: true,
        extensions: ["rld"]
      },
      "application/rfc+xml": {
        source: "iana",
        compressible: true
      },
      "application/riscos": {
        source: "iana"
      },
      "application/rlmi+xml": {
        source: "iana",
        compressible: true
      },
      "application/rls-services+xml": {
        source: "iana",
        compressible: true,
        extensions: ["rs"]
      },
      "application/route-apd+xml": {
        source: "iana",
        compressible: true,
        extensions: ["rapd"]
      },
      "application/route-s-tsid+xml": {
        source: "iana",
        compressible: true,
        extensions: ["sls"]
      },
      "application/route-usd+xml": {
        source: "iana",
        compressible: true,
        extensions: ["rusd"]
      },
      "application/rpki-ghostbusters": {
        source: "iana",
        extensions: ["gbr"]
      },
      "application/rpki-manifest": {
        source: "iana",
        extensions: ["mft"]
      },
      "application/rpki-publication": {
        source: "iana"
      },
      "application/rpki-roa": {
        source: "iana",
        extensions: ["roa"]
      },
      "application/rpki-updown": {
        source: "iana"
      },
      "application/rsd+xml": {
        source: "apache",
        compressible: true,
        extensions: ["rsd"]
      },
      "application/rss+xml": {
        source: "apache",
        compressible: true,
        extensions: ["rss"]
      },
      "application/rtf": {
        source: "iana",
        compressible: true,
        extensions: ["rtf"]
      },
      "application/rtploopback": {
        source: "iana"
      },
      "application/rtx": {
        source: "iana"
      },
      "application/samlassertion+xml": {
        source: "iana",
        compressible: true
      },
      "application/samlmetadata+xml": {
        source: "iana",
        compressible: true
      },
      "application/sarif+json": {
        source: "iana",
        compressible: true
      },
      "application/sarif-external-properties+json": {
        source: "iana",
        compressible: true
      },
      "application/sbe": {
        source: "iana"
      },
      "application/sbml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["sbml"]
      },
      "application/scaip+xml": {
        source: "iana",
        compressible: true
      },
      "application/scim+json": {
        source: "iana",
        compressible: true
      },
      "application/scvp-cv-request": {
        source: "iana",
        extensions: ["scq"]
      },
      "application/scvp-cv-response": {
        source: "iana",
        extensions: ["scs"]
      },
      "application/scvp-vp-request": {
        source: "iana",
        extensions: ["spq"]
      },
      "application/scvp-vp-response": {
        source: "iana",
        extensions: ["spp"]
      },
      "application/sdp": {
        source: "iana",
        extensions: ["sdp"]
      },
      "application/secevent+jwt": {
        source: "iana"
      },
      "application/senml+cbor": {
        source: "iana"
      },
      "application/senml+json": {
        source: "iana",
        compressible: true
      },
      "application/senml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["senmlx"]
      },
      "application/senml-etch+cbor": {
        source: "iana"
      },
      "application/senml-etch+json": {
        source: "iana",
        compressible: true
      },
      "application/senml-exi": {
        source: "iana"
      },
      "application/sensml+cbor": {
        source: "iana"
      },
      "application/sensml+json": {
        source: "iana",
        compressible: true
      },
      "application/sensml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["sensmlx"]
      },
      "application/sensml-exi": {
        source: "iana"
      },
      "application/sep+xml": {
        source: "iana",
        compressible: true
      },
      "application/sep-exi": {
        source: "iana"
      },
      "application/session-info": {
        source: "iana"
      },
      "application/set-payment": {
        source: "iana"
      },
      "application/set-payment-initiation": {
        source: "iana",
        extensions: ["setpay"]
      },
      "application/set-registration": {
        source: "iana"
      },
      "application/set-registration-initiation": {
        source: "iana",
        extensions: ["setreg"]
      },
      "application/sgml": {
        source: "iana"
      },
      "application/sgml-open-catalog": {
        source: "iana"
      },
      "application/shf+xml": {
        source: "iana",
        compressible: true,
        extensions: ["shf"]
      },
      "application/sieve": {
        source: "iana",
        extensions: ["siv", "sieve"]
      },
      "application/simple-filter+xml": {
        source: "iana",
        compressible: true
      },
      "application/simple-message-summary": {
        source: "iana"
      },
      "application/simplesymbolcontainer": {
        source: "iana"
      },
      "application/sipc": {
        source: "iana"
      },
      "application/slate": {
        source: "iana"
      },
      "application/smil": {
        source: "iana"
      },
      "application/smil+xml": {
        source: "iana",
        compressible: true,
        extensions: ["smi", "smil"]
      },
      "application/smpte336m": {
        source: "iana"
      },
      "application/soap+fastinfoset": {
        source: "iana"
      },
      "application/soap+xml": {
        source: "iana",
        compressible: true
      },
      "application/sparql-query": {
        source: "iana",
        extensions: ["rq"]
      },
      "application/sparql-results+xml": {
        source: "iana",
        compressible: true,
        extensions: ["srx"]
      },
      "application/spdx+json": {
        source: "iana",
        compressible: true
      },
      "application/spirits-event+xml": {
        source: "iana",
        compressible: true
      },
      "application/sql": {
        source: "iana"
      },
      "application/srgs": {
        source: "iana",
        extensions: ["gram"]
      },
      "application/srgs+xml": {
        source: "iana",
        compressible: true,
        extensions: ["grxml"]
      },
      "application/sru+xml": {
        source: "iana",
        compressible: true,
        extensions: ["sru"]
      },
      "application/ssdl+xml": {
        source: "apache",
        compressible: true,
        extensions: ["ssdl"]
      },
      "application/ssml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["ssml"]
      },
      "application/stix+json": {
        source: "iana",
        compressible: true
      },
      "application/swid+xml": {
        source: "iana",
        compressible: true,
        extensions: ["swidtag"]
      },
      "application/tamp-apex-update": {
        source: "iana"
      },
      "application/tamp-apex-update-confirm": {
        source: "iana"
      },
      "application/tamp-community-update": {
        source: "iana"
      },
      "application/tamp-community-update-confirm": {
        source: "iana"
      },
      "application/tamp-error": {
        source: "iana"
      },
      "application/tamp-sequence-adjust": {
        source: "iana"
      },
      "application/tamp-sequence-adjust-confirm": {
        source: "iana"
      },
      "application/tamp-status-query": {
        source: "iana"
      },
      "application/tamp-status-response": {
        source: "iana"
      },
      "application/tamp-update": {
        source: "iana"
      },
      "application/tamp-update-confirm": {
        source: "iana"
      },
      "application/tar": {
        compressible: true
      },
      "application/taxii+json": {
        source: "iana",
        compressible: true
      },
      "application/td+json": {
        source: "iana",
        compressible: true
      },
      "application/tei+xml": {
        source: "iana",
        compressible: true,
        extensions: ["tei", "teicorpus"]
      },
      "application/tetra_isi": {
        source: "iana"
      },
      "application/thraud+xml": {
        source: "iana",
        compressible: true,
        extensions: ["tfi"]
      },
      "application/timestamp-query": {
        source: "iana"
      },
      "application/timestamp-reply": {
        source: "iana"
      },
      "application/timestamped-data": {
        source: "iana",
        extensions: ["tsd"]
      },
      "application/tlsrpt+gzip": {
        source: "iana"
      },
      "application/tlsrpt+json": {
        source: "iana",
        compressible: true
      },
      "application/tnauthlist": {
        source: "iana"
      },
      "application/token-introspection+jwt": {
        source: "iana"
      },
      "application/toml": {
        compressible: true,
        extensions: ["toml"]
      },
      "application/trickle-ice-sdpfrag": {
        source: "iana"
      },
      "application/trig": {
        source: "iana",
        extensions: ["trig"]
      },
      "application/ttml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["ttml"]
      },
      "application/tve-trigger": {
        source: "iana"
      },
      "application/tzif": {
        source: "iana"
      },
      "application/tzif-leap": {
        source: "iana"
      },
      "application/ubjson": {
        compressible: false,
        extensions: ["ubj"]
      },
      "application/ulpfec": {
        source: "iana"
      },
      "application/urc-grpsheet+xml": {
        source: "iana",
        compressible: true
      },
      "application/urc-ressheet+xml": {
        source: "iana",
        compressible: true,
        extensions: ["rsheet"]
      },
      "application/urc-targetdesc+xml": {
        source: "iana",
        compressible: true,
        extensions: ["td"]
      },
      "application/urc-uisocketdesc+xml": {
        source: "iana",
        compressible: true
      },
      "application/vcard+json": {
        source: "iana",
        compressible: true
      },
      "application/vcard+xml": {
        source: "iana",
        compressible: true
      },
      "application/vemmi": {
        source: "iana"
      },
      "application/vividence.scriptfile": {
        source: "apache"
      },
      "application/vnd.1000minds.decision-model+xml": {
        source: "iana",
        compressible: true,
        extensions: ["1km"]
      },
      "application/vnd.3gpp-prose+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp-prose-pc3ch+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp-v2x-local-service-information": {
        source: "iana"
      },
      "application/vnd.3gpp.5gnas": {
        source: "iana"
      },
      "application/vnd.3gpp.access-transfer-events+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.bsf+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.gmop+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.gtpc": {
        source: "iana"
      },
      "application/vnd.3gpp.interworking-data": {
        source: "iana"
      },
      "application/vnd.3gpp.lpp": {
        source: "iana"
      },
      "application/vnd.3gpp.mc-signalling-ear": {
        source: "iana"
      },
      "application/vnd.3gpp.mcdata-affiliation-command+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcdata-info+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcdata-payload": {
        source: "iana"
      },
      "application/vnd.3gpp.mcdata-service-config+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcdata-signalling": {
        source: "iana"
      },
      "application/vnd.3gpp.mcdata-ue-config+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcdata-user-profile+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcptt-affiliation-command+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcptt-floor-request+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcptt-info+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcptt-location-info+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcptt-mbms-usage-info+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcptt-service-config+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcptt-signed+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcptt-ue-config+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcptt-ue-init-config+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcptt-user-profile+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcvideo-affiliation-command+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcvideo-affiliation-info+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcvideo-info+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcvideo-location-info+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcvideo-mbms-usage-info+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcvideo-service-config+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcvideo-transmission-request+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcvideo-ue-config+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mcvideo-user-profile+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.mid-call+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.ngap": {
        source: "iana"
      },
      "application/vnd.3gpp.pfcp": {
        source: "iana"
      },
      "application/vnd.3gpp.pic-bw-large": {
        source: "iana",
        extensions: ["plb"]
      },
      "application/vnd.3gpp.pic-bw-small": {
        source: "iana",
        extensions: ["psb"]
      },
      "application/vnd.3gpp.pic-bw-var": {
        source: "iana",
        extensions: ["pvb"]
      },
      "application/vnd.3gpp.s1ap": {
        source: "iana"
      },
      "application/vnd.3gpp.sms": {
        source: "iana"
      },
      "application/vnd.3gpp.sms+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.srvcc-ext+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.srvcc-info+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.state-and-event-info+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp.ussd+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp2.bcmcsinfo+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.3gpp2.sms": {
        source: "iana"
      },
      "application/vnd.3gpp2.tcap": {
        source: "iana",
        extensions: ["tcap"]
      },
      "application/vnd.3lightssoftware.imagescal": {
        source: "iana"
      },
      "application/vnd.3m.post-it-notes": {
        source: "iana",
        extensions: ["pwn"]
      },
      "application/vnd.accpac.simply.aso": {
        source: "iana",
        extensions: ["aso"]
      },
      "application/vnd.accpac.simply.imp": {
        source: "iana",
        extensions: ["imp"]
      },
      "application/vnd.acucobol": {
        source: "iana",
        extensions: ["acu"]
      },
      "application/vnd.acucorp": {
        source: "iana",
        extensions: ["atc", "acutc"]
      },
      "application/vnd.adobe.air-application-installer-package+zip": {
        source: "apache",
        compressible: false,
        extensions: ["air"]
      },
      "application/vnd.adobe.flash.movie": {
        source: "iana"
      },
      "application/vnd.adobe.formscentral.fcdt": {
        source: "iana",
        extensions: ["fcdt"]
      },
      "application/vnd.adobe.fxp": {
        source: "iana",
        extensions: ["fxp", "fxpl"]
      },
      "application/vnd.adobe.partial-upload": {
        source: "iana"
      },
      "application/vnd.adobe.xdp+xml": {
        source: "iana",
        compressible: true,
        extensions: ["xdp"]
      },
      "application/vnd.adobe.xfdf": {
        source: "iana",
        extensions: ["xfdf"]
      },
      "application/vnd.aether.imp": {
        source: "iana"
      },
      "application/vnd.afpc.afplinedata": {
        source: "iana"
      },
      "application/vnd.afpc.afplinedata-pagedef": {
        source: "iana"
      },
      "application/vnd.afpc.cmoca-cmresource": {
        source: "iana"
      },
      "application/vnd.afpc.foca-charset": {
        source: "iana"
      },
      "application/vnd.afpc.foca-codedfont": {
        source: "iana"
      },
      "application/vnd.afpc.foca-codepage": {
        source: "iana"
      },
      "application/vnd.afpc.modca": {
        source: "iana"
      },
      "application/vnd.afpc.modca-cmtable": {
        source: "iana"
      },
      "application/vnd.afpc.modca-formdef": {
        source: "iana"
      },
      "application/vnd.afpc.modca-mediummap": {
        source: "iana"
      },
      "application/vnd.afpc.modca-objectcontainer": {
        source: "iana"
      },
      "application/vnd.afpc.modca-overlay": {
        source: "iana"
      },
      "application/vnd.afpc.modca-pagesegment": {
        source: "iana"
      },
      "application/vnd.age": {
        source: "iana",
        extensions: ["age"]
      },
      "application/vnd.ah-barcode": {
        source: "iana"
      },
      "application/vnd.ahead.space": {
        source: "iana",
        extensions: ["ahead"]
      },
      "application/vnd.airzip.filesecure.azf": {
        source: "iana",
        extensions: ["azf"]
      },
      "application/vnd.airzip.filesecure.azs": {
        source: "iana",
        extensions: ["azs"]
      },
      "application/vnd.amadeus+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.amazon.ebook": {
        source: "apache",
        extensions: ["azw"]
      },
      "application/vnd.amazon.mobi8-ebook": {
        source: "iana"
      },
      "application/vnd.americandynamics.acc": {
        source: "iana",
        extensions: ["acc"]
      },
      "application/vnd.amiga.ami": {
        source: "iana",
        extensions: ["ami"]
      },
      "application/vnd.amundsen.maze+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.android.ota": {
        source: "iana"
      },
      "application/vnd.android.package-archive": {
        source: "apache",
        compressible: false,
        extensions: ["apk"]
      },
      "application/vnd.anki": {
        source: "iana"
      },
      "application/vnd.anser-web-certificate-issue-initiation": {
        source: "iana",
        extensions: ["cii"]
      },
      "application/vnd.anser-web-funds-transfer-initiation": {
        source: "apache",
        extensions: ["fti"]
      },
      "application/vnd.antix.game-component": {
        source: "iana",
        extensions: ["atx"]
      },
      "application/vnd.apache.arrow.file": {
        source: "iana"
      },
      "application/vnd.apache.arrow.stream": {
        source: "iana"
      },
      "application/vnd.apache.thrift.binary": {
        source: "iana"
      },
      "application/vnd.apache.thrift.compact": {
        source: "iana"
      },
      "application/vnd.apache.thrift.json": {
        source: "iana"
      },
      "application/vnd.api+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.aplextor.warrp+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.apothekende.reservation+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.apple.installer+xml": {
        source: "iana",
        compressible: true,
        extensions: ["mpkg"]
      },
      "application/vnd.apple.keynote": {
        source: "iana",
        extensions: ["key"]
      },
      "application/vnd.apple.mpegurl": {
        source: "iana",
        extensions: ["m3u8"]
      },
      "application/vnd.apple.numbers": {
        source: "iana",
        extensions: ["numbers"]
      },
      "application/vnd.apple.pages": {
        source: "iana",
        extensions: ["pages"]
      },
      "application/vnd.apple.pkpass": {
        compressible: false,
        extensions: ["pkpass"]
      },
      "application/vnd.arastra.swi": {
        source: "iana"
      },
      "application/vnd.aristanetworks.swi": {
        source: "iana",
        extensions: ["swi"]
      },
      "application/vnd.artisan+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.artsquare": {
        source: "iana"
      },
      "application/vnd.astraea-software.iota": {
        source: "iana",
        extensions: ["iota"]
      },
      "application/vnd.audiograph": {
        source: "iana",
        extensions: ["aep"]
      },
      "application/vnd.autopackage": {
        source: "iana"
      },
      "application/vnd.avalon+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.avistar+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.balsamiq.bmml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["bmml"]
      },
      "application/vnd.balsamiq.bmpr": {
        source: "iana"
      },
      "application/vnd.banana-accounting": {
        source: "iana"
      },
      "application/vnd.bbf.usp.error": {
        source: "iana"
      },
      "application/vnd.bbf.usp.msg": {
        source: "iana"
      },
      "application/vnd.bbf.usp.msg+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.bekitzur-stech+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.bint.med-content": {
        source: "iana"
      },
      "application/vnd.biopax.rdf+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.blink-idb-value-wrapper": {
        source: "iana"
      },
      "application/vnd.blueice.multipass": {
        source: "iana",
        extensions: ["mpm"]
      },
      "application/vnd.bluetooth.ep.oob": {
        source: "iana"
      },
      "application/vnd.bluetooth.le.oob": {
        source: "iana"
      },
      "application/vnd.bmi": {
        source: "iana",
        extensions: ["bmi"]
      },
      "application/vnd.bpf": {
        source: "iana"
      },
      "application/vnd.bpf3": {
        source: "iana"
      },
      "application/vnd.businessobjects": {
        source: "iana",
        extensions: ["rep"]
      },
      "application/vnd.byu.uapi+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.cab-jscript": {
        source: "iana"
      },
      "application/vnd.canon-cpdl": {
        source: "iana"
      },
      "application/vnd.canon-lips": {
        source: "iana"
      },
      "application/vnd.capasystems-pg+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.cendio.thinlinc.clientconf": {
        source: "iana"
      },
      "application/vnd.century-systems.tcp_stream": {
        source: "iana"
      },
      "application/vnd.chemdraw+xml": {
        source: "iana",
        compressible: true,
        extensions: ["cdxml"]
      },
      "application/vnd.chess-pgn": {
        source: "iana"
      },
      "application/vnd.chipnuts.karaoke-mmd": {
        source: "iana",
        extensions: ["mmd"]
      },
      "application/vnd.ciedi": {
        source: "iana"
      },
      "application/vnd.cinderella": {
        source: "iana",
        extensions: ["cdy"]
      },
      "application/vnd.cirpack.isdn-ext": {
        source: "iana"
      },
      "application/vnd.citationstyles.style+xml": {
        source: "iana",
        compressible: true,
        extensions: ["csl"]
      },
      "application/vnd.claymore": {
        source: "iana",
        extensions: ["cla"]
      },
      "application/vnd.cloanto.rp9": {
        source: "iana",
        extensions: ["rp9"]
      },
      "application/vnd.clonk.c4group": {
        source: "iana",
        extensions: ["c4g", "c4d", "c4f", "c4p", "c4u"]
      },
      "application/vnd.cluetrust.cartomobile-config": {
        source: "iana",
        extensions: ["c11amc"]
      },
      "application/vnd.cluetrust.cartomobile-config-pkg": {
        source: "iana",
        extensions: ["c11amz"]
      },
      "application/vnd.coffeescript": {
        source: "iana"
      },
      "application/vnd.collabio.xodocuments.document": {
        source: "iana"
      },
      "application/vnd.collabio.xodocuments.document-template": {
        source: "iana"
      },
      "application/vnd.collabio.xodocuments.presentation": {
        source: "iana"
      },
      "application/vnd.collabio.xodocuments.presentation-template": {
        source: "iana"
      },
      "application/vnd.collabio.xodocuments.spreadsheet": {
        source: "iana"
      },
      "application/vnd.collabio.xodocuments.spreadsheet-template": {
        source: "iana"
      },
      "application/vnd.collection+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.collection.doc+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.collection.next+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.comicbook+zip": {
        source: "iana",
        compressible: false
      },
      "application/vnd.comicbook-rar": {
        source: "iana"
      },
      "application/vnd.commerce-battelle": {
        source: "iana"
      },
      "application/vnd.commonspace": {
        source: "iana",
        extensions: ["csp"]
      },
      "application/vnd.contact.cmsg": {
        source: "iana",
        extensions: ["cdbcmsg"]
      },
      "application/vnd.coreos.ignition+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.cosmocaller": {
        source: "iana",
        extensions: ["cmc"]
      },
      "application/vnd.crick.clicker": {
        source: "iana",
        extensions: ["clkx"]
      },
      "application/vnd.crick.clicker.keyboard": {
        source: "iana",
        extensions: ["clkk"]
      },
      "application/vnd.crick.clicker.palette": {
        source: "iana",
        extensions: ["clkp"]
      },
      "application/vnd.crick.clicker.template": {
        source: "iana",
        extensions: ["clkt"]
      },
      "application/vnd.crick.clicker.wordbank": {
        source: "iana",
        extensions: ["clkw"]
      },
      "application/vnd.criticaltools.wbs+xml": {
        source: "iana",
        compressible: true,
        extensions: ["wbs"]
      },
      "application/vnd.cryptii.pipe+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.crypto-shade-file": {
        source: "iana"
      },
      "application/vnd.cryptomator.encrypted": {
        source: "iana"
      },
      "application/vnd.cryptomator.vault": {
        source: "iana"
      },
      "application/vnd.ctc-posml": {
        source: "iana",
        extensions: ["pml"]
      },
      "application/vnd.ctct.ws+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.cups-pdf": {
        source: "iana"
      },
      "application/vnd.cups-postscript": {
        source: "iana"
      },
      "application/vnd.cups-ppd": {
        source: "iana",
        extensions: ["ppd"]
      },
      "application/vnd.cups-raster": {
        source: "iana"
      },
      "application/vnd.cups-raw": {
        source: "iana"
      },
      "application/vnd.curl": {
        source: "iana"
      },
      "application/vnd.curl.car": {
        source: "apache",
        extensions: ["car"]
      },
      "application/vnd.curl.pcurl": {
        source: "apache",
        extensions: ["pcurl"]
      },
      "application/vnd.cyan.dean.root+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.cybank": {
        source: "iana"
      },
      "application/vnd.cyclonedx+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.cyclonedx+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.d2l.coursepackage1p0+zip": {
        source: "iana",
        compressible: false
      },
      "application/vnd.d3m-dataset": {
        source: "iana"
      },
      "application/vnd.d3m-problem": {
        source: "iana"
      },
      "application/vnd.dart": {
        source: "iana",
        compressible: true,
        extensions: ["dart"]
      },
      "application/vnd.data-vision.rdz": {
        source: "iana",
        extensions: ["rdz"]
      },
      "application/vnd.datapackage+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.dataresource+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.dbf": {
        source: "iana",
        extensions: ["dbf"]
      },
      "application/vnd.debian.binary-package": {
        source: "iana"
      },
      "application/vnd.dece.data": {
        source: "iana",
        extensions: ["uvf", "uvvf", "uvd", "uvvd"]
      },
      "application/vnd.dece.ttml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["uvt", "uvvt"]
      },
      "application/vnd.dece.unspecified": {
        source: "iana",
        extensions: ["uvx", "uvvx"]
      },
      "application/vnd.dece.zip": {
        source: "iana",
        extensions: ["uvz", "uvvz"]
      },
      "application/vnd.denovo.fcselayout-link": {
        source: "iana",
        extensions: ["fe_launch"]
      },
      "application/vnd.desmume.movie": {
        source: "iana"
      },
      "application/vnd.dir-bi.plate-dl-nosuffix": {
        source: "iana"
      },
      "application/vnd.dm.delegation+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.dna": {
        source: "iana",
        extensions: ["dna"]
      },
      "application/vnd.document+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.dolby.mlp": {
        source: "apache",
        extensions: ["mlp"]
      },
      "application/vnd.dolby.mobile.1": {
        source: "iana"
      },
      "application/vnd.dolby.mobile.2": {
        source: "iana"
      },
      "application/vnd.doremir.scorecloud-binary-document": {
        source: "iana"
      },
      "application/vnd.dpgraph": {
        source: "iana",
        extensions: ["dpg"]
      },
      "application/vnd.dreamfactory": {
        source: "iana",
        extensions: ["dfac"]
      },
      "application/vnd.drive+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.ds-keypoint": {
        source: "apache",
        extensions: ["kpxx"]
      },
      "application/vnd.dtg.local": {
        source: "iana"
      },
      "application/vnd.dtg.local.flash": {
        source: "iana"
      },
      "application/vnd.dtg.local.html": {
        source: "iana"
      },
      "application/vnd.dvb.ait": {
        source: "iana",
        extensions: ["ait"]
      },
      "application/vnd.dvb.dvbisl+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.dvb.dvbj": {
        source: "iana"
      },
      "application/vnd.dvb.esgcontainer": {
        source: "iana"
      },
      "application/vnd.dvb.ipdcdftnotifaccess": {
        source: "iana"
      },
      "application/vnd.dvb.ipdcesgaccess": {
        source: "iana"
      },
      "application/vnd.dvb.ipdcesgaccess2": {
        source: "iana"
      },
      "application/vnd.dvb.ipdcesgpdd": {
        source: "iana"
      },
      "application/vnd.dvb.ipdcroaming": {
        source: "iana"
      },
      "application/vnd.dvb.iptv.alfec-base": {
        source: "iana"
      },
      "application/vnd.dvb.iptv.alfec-enhancement": {
        source: "iana"
      },
      "application/vnd.dvb.notif-aggregate-root+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.dvb.notif-container+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.dvb.notif-generic+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.dvb.notif-ia-msglist+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.dvb.notif-ia-registration-request+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.dvb.notif-ia-registration-response+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.dvb.notif-init+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.dvb.pfr": {
        source: "iana"
      },
      "application/vnd.dvb.service": {
        source: "iana",
        extensions: ["svc"]
      },
      "application/vnd.dxr": {
        source: "iana"
      },
      "application/vnd.dynageo": {
        source: "iana",
        extensions: ["geo"]
      },
      "application/vnd.dzr": {
        source: "iana"
      },
      "application/vnd.easykaraoke.cdgdownload": {
        source: "iana"
      },
      "application/vnd.ecdis-update": {
        source: "iana"
      },
      "application/vnd.ecip.rlp": {
        source: "iana"
      },
      "application/vnd.ecowin.chart": {
        source: "iana",
        extensions: ["mag"]
      },
      "application/vnd.ecowin.filerequest": {
        source: "iana"
      },
      "application/vnd.ecowin.fileupdate": {
        source: "iana"
      },
      "application/vnd.ecowin.series": {
        source: "iana"
      },
      "application/vnd.ecowin.seriesrequest": {
        source: "iana"
      },
      "application/vnd.ecowin.seriesupdate": {
        source: "iana"
      },
      "application/vnd.efi.img": {
        source: "iana"
      },
      "application/vnd.efi.iso": {
        source: "iana"
      },
      "application/vnd.emclient.accessrequest+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.enliven": {
        source: "iana",
        extensions: ["nml"]
      },
      "application/vnd.enphase.envoy": {
        source: "iana"
      },
      "application/vnd.eprints.data+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.epson.esf": {
        source: "iana",
        extensions: ["esf"]
      },
      "application/vnd.epson.msf": {
        source: "iana",
        extensions: ["msf"]
      },
      "application/vnd.epson.quickanime": {
        source: "iana",
        extensions: ["qam"]
      },
      "application/vnd.epson.salt": {
        source: "iana",
        extensions: ["slt"]
      },
      "application/vnd.epson.ssf": {
        source: "iana",
        extensions: ["ssf"]
      },
      "application/vnd.ericsson.quickcall": {
        source: "iana"
      },
      "application/vnd.espass-espass+zip": {
        source: "iana",
        compressible: false
      },
      "application/vnd.eszigno3+xml": {
        source: "iana",
        compressible: true,
        extensions: ["es3", "et3"]
      },
      "application/vnd.etsi.aoc+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.asic-e+zip": {
        source: "iana",
        compressible: false
      },
      "application/vnd.etsi.asic-s+zip": {
        source: "iana",
        compressible: false
      },
      "application/vnd.etsi.cug+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.iptvcommand+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.iptvdiscovery+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.iptvprofile+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.iptvsad-bc+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.iptvsad-cod+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.iptvsad-npvr+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.iptvservice+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.iptvsync+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.iptvueprofile+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.mcid+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.mheg5": {
        source: "iana"
      },
      "application/vnd.etsi.overload-control-policy-dataset+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.pstn+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.sci+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.simservs+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.timestamp-token": {
        source: "iana"
      },
      "application/vnd.etsi.tsl+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.etsi.tsl.der": {
        source: "iana"
      },
      "application/vnd.eudora.data": {
        source: "iana"
      },
      "application/vnd.evolv.ecig.profile": {
        source: "iana"
      },
      "application/vnd.evolv.ecig.settings": {
        source: "iana"
      },
      "application/vnd.evolv.ecig.theme": {
        source: "iana"
      },
      "application/vnd.exstream-empower+zip": {
        source: "iana",
        compressible: false
      },
      "application/vnd.exstream-package": {
        source: "iana"
      },
      "application/vnd.ezpix-album": {
        source: "iana",
        extensions: ["ez2"]
      },
      "application/vnd.ezpix-package": {
        source: "iana",
        extensions: ["ez3"]
      },
      "application/vnd.f-secure.mobile": {
        source: "iana"
      },
      "application/vnd.fastcopy-disk-image": {
        source: "iana"
      },
      "application/vnd.fdf": {
        source: "iana",
        extensions: ["fdf"]
      },
      "application/vnd.fdsn.mseed": {
        source: "iana",
        extensions: ["mseed"]
      },
      "application/vnd.fdsn.seed": {
        source: "iana",
        extensions: ["seed", "dataless"]
      },
      "application/vnd.ffsns": {
        source: "iana"
      },
      "application/vnd.ficlab.flb+zip": {
        source: "iana",
        compressible: false
      },
      "application/vnd.filmit.zfc": {
        source: "iana"
      },
      "application/vnd.fints": {
        source: "iana"
      },
      "application/vnd.firemonkeys.cloudcell": {
        source: "iana"
      },
      "application/vnd.flographit": {
        source: "iana",
        extensions: ["gph"]
      },
      "application/vnd.fluxtime.clip": {
        source: "iana",
        extensions: ["ftc"]
      },
      "application/vnd.font-fontforge-sfd": {
        source: "iana"
      },
      "application/vnd.framemaker": {
        source: "iana",
        extensions: ["fm", "frame", "maker", "book"]
      },
      "application/vnd.frogans.fnc": {
        source: "iana",
        extensions: ["fnc"]
      },
      "application/vnd.frogans.ltf": {
        source: "iana",
        extensions: ["ltf"]
      },
      "application/vnd.fsc.weblaunch": {
        source: "iana",
        extensions: ["fsc"]
      },
      "application/vnd.fujifilm.fb.docuworks": {
        source: "iana"
      },
      "application/vnd.fujifilm.fb.docuworks.binder": {
        source: "iana"
      },
      "application/vnd.fujifilm.fb.docuworks.container": {
        source: "iana"
      },
      "application/vnd.fujifilm.fb.jfi+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.fujitsu.oasys": {
        source: "iana",
        extensions: ["oas"]
      },
      "application/vnd.fujitsu.oasys2": {
        source: "iana",
        extensions: ["oa2"]
      },
      "application/vnd.fujitsu.oasys3": {
        source: "iana",
        extensions: ["oa3"]
      },
      "application/vnd.fujitsu.oasysgp": {
        source: "iana",
        extensions: ["fg5"]
      },
      "application/vnd.fujitsu.oasysprs": {
        source: "iana",
        extensions: ["bh2"]
      },
      "application/vnd.fujixerox.art-ex": {
        source: "iana"
      },
      "application/vnd.fujixerox.art4": {
        source: "iana"
      },
      "application/vnd.fujixerox.ddd": {
        source: "iana",
        extensions: ["ddd"]
      },
      "application/vnd.fujixerox.docuworks": {
        source: "iana",
        extensions: ["xdw"]
      },
      "application/vnd.fujixerox.docuworks.binder": {
        source: "iana",
        extensions: ["xbd"]
      },
      "application/vnd.fujixerox.docuworks.container": {
        source: "iana"
      },
      "application/vnd.fujixerox.hbpl": {
        source: "iana"
      },
      "application/vnd.fut-misnet": {
        source: "iana"
      },
      "application/vnd.futoin+cbor": {
        source: "iana"
      },
      "application/vnd.futoin+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.fuzzysheet": {
        source: "iana",
        extensions: ["fzs"]
      },
      "application/vnd.genomatix.tuxedo": {
        source: "iana",
        extensions: ["txd"]
      },
      "application/vnd.gentics.grd+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.geo+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.geocube+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.geogebra.file": {
        source: "iana",
        extensions: ["ggb"]
      },
      "application/vnd.geogebra.slides": {
        source: "iana"
      },
      "application/vnd.geogebra.tool": {
        source: "iana",
        extensions: ["ggt"]
      },
      "application/vnd.geometry-explorer": {
        source: "iana",
        extensions: ["gex", "gre"]
      },
      "application/vnd.geonext": {
        source: "iana",
        extensions: ["gxt"]
      },
      "application/vnd.geoplan": {
        source: "iana",
        extensions: ["g2w"]
      },
      "application/vnd.geospace": {
        source: "iana",
        extensions: ["g3w"]
      },
      "application/vnd.gerber": {
        source: "iana"
      },
      "application/vnd.globalplatform.card-content-mgt": {
        source: "iana"
      },
      "application/vnd.globalplatform.card-content-mgt-response": {
        source: "iana"
      },
      "application/vnd.gmx": {
        source: "iana",
        extensions: ["gmx"]
      },
      "application/vnd.google-apps.document": {
        compressible: false,
        extensions: ["gdoc"]
      },
      "application/vnd.google-apps.presentation": {
        compressible: false,
        extensions: ["gslides"]
      },
      "application/vnd.google-apps.spreadsheet": {
        compressible: false,
        extensions: ["gsheet"]
      },
      "application/vnd.google-earth.kml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["kml"]
      },
      "application/vnd.google-earth.kmz": {
        source: "iana",
        compressible: false,
        extensions: ["kmz"]
      },
      "application/vnd.gov.sk.e-form+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.gov.sk.e-form+zip": {
        source: "iana",
        compressible: false
      },
      "application/vnd.gov.sk.xmldatacontainer+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.grafeq": {
        source: "iana",
        extensions: ["gqf", "gqs"]
      },
      "application/vnd.gridmp": {
        source: "iana"
      },
      "application/vnd.groove-account": {
        source: "iana",
        extensions: ["gac"]
      },
      "application/vnd.groove-help": {
        source: "iana",
        extensions: ["ghf"]
      },
      "application/vnd.groove-identity-message": {
        source: "iana",
        extensions: ["gim"]
      },
      "application/vnd.groove-injector": {
        source: "iana",
        extensions: ["grv"]
      },
      "application/vnd.groove-tool-message": {
        source: "iana",
        extensions: ["gtm"]
      },
      "application/vnd.groove-tool-template": {
        source: "iana",
        extensions: ["tpl"]
      },
      "application/vnd.groove-vcard": {
        source: "iana",
        extensions: ["vcg"]
      },
      "application/vnd.hal+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.hal+xml": {
        source: "iana",
        compressible: true,
        extensions: ["hal"]
      },
      "application/vnd.handheld-entertainment+xml": {
        source: "iana",
        compressible: true,
        extensions: ["zmm"]
      },
      "application/vnd.hbci": {
        source: "iana",
        extensions: ["hbci"]
      },
      "application/vnd.hc+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.hcl-bireports": {
        source: "iana"
      },
      "application/vnd.hdt": {
        source: "iana"
      },
      "application/vnd.heroku+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.hhe.lesson-player": {
        source: "iana",
        extensions: ["les"]
      },
      "application/vnd.hp-hpgl": {
        source: "iana",
        extensions: ["hpgl"]
      },
      "application/vnd.hp-hpid": {
        source: "iana",
        extensions: ["hpid"]
      },
      "application/vnd.hp-hps": {
        source: "iana",
        extensions: ["hps"]
      },
      "application/vnd.hp-jlyt": {
        source: "iana",
        extensions: ["jlt"]
      },
      "application/vnd.hp-pcl": {
        source: "iana",
        extensions: ["pcl"]
      },
      "application/vnd.hp-pclxl": {
        source: "iana",
        extensions: ["pclxl"]
      },
      "application/vnd.httphone": {
        source: "iana"
      },
      "application/vnd.hydrostatix.sof-data": {
        source: "iana",
        extensions: ["sfd-hdstx"]
      },
      "application/vnd.hyper+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.hyper-item+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.hyperdrive+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.hzn-3d-crossword": {
        source: "iana"
      },
      "application/vnd.ibm.afplinedata": {
        source: "iana"
      },
      "application/vnd.ibm.electronic-media": {
        source: "iana"
      },
      "application/vnd.ibm.minipay": {
        source: "iana",
        extensions: ["mpy"]
      },
      "application/vnd.ibm.modcap": {
        source: "iana",
        extensions: ["afp", "listafp", "list3820"]
      },
      "application/vnd.ibm.rights-management": {
        source: "iana",
        extensions: ["irm"]
      },
      "application/vnd.ibm.secure-container": {
        source: "iana",
        extensions: ["sc"]
      },
      "application/vnd.iccprofile": {
        source: "iana",
        extensions: ["icc", "icm"]
      },
      "application/vnd.ieee.1905": {
        source: "iana"
      },
      "application/vnd.igloader": {
        source: "iana",
        extensions: ["igl"]
      },
      "application/vnd.imagemeter.folder+zip": {
        source: "iana",
        compressible: false
      },
      "application/vnd.imagemeter.image+zip": {
        source: "iana",
        compressible: false
      },
      "application/vnd.immervision-ivp": {
        source: "iana",
        extensions: ["ivp"]
      },
      "application/vnd.immervision-ivu": {
        source: "iana",
        extensions: ["ivu"]
      },
      "application/vnd.ims.imsccv1p1": {
        source: "iana"
      },
      "application/vnd.ims.imsccv1p2": {
        source: "iana"
      },
      "application/vnd.ims.imsccv1p3": {
        source: "iana"
      },
      "application/vnd.ims.lis.v2.result+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.ims.lti.v2.toolconsumerprofile+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.ims.lti.v2.toolproxy+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.ims.lti.v2.toolproxy.id+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.ims.lti.v2.toolsettings+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.ims.lti.v2.toolsettings.simple+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.informedcontrol.rms+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.informix-visionary": {
        source: "iana"
      },
      "application/vnd.infotech.project": {
        source: "iana"
      },
      "application/vnd.infotech.project+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.innopath.wamp.notification": {
        source: "iana"
      },
      "application/vnd.insors.igm": {
        source: "iana",
        extensions: ["igm"]
      },
      "application/vnd.intercon.formnet": {
        source: "iana",
        extensions: ["xpw", "xpx"]
      },
      "application/vnd.intergeo": {
        source: "iana",
        extensions: ["i2g"]
      },
      "application/vnd.intertrust.digibox": {
        source: "iana"
      },
      "application/vnd.intertrust.nncp": {
        source: "iana"
      },
      "application/vnd.intu.qbo": {
        source: "iana",
        extensions: ["qbo"]
      },
      "application/vnd.intu.qfx": {
        source: "iana",
        extensions: ["qfx"]
      },
      "application/vnd.iptc.g2.catalogitem+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.iptc.g2.conceptitem+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.iptc.g2.knowledgeitem+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.iptc.g2.newsitem+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.iptc.g2.newsmessage+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.iptc.g2.packageitem+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.iptc.g2.planningitem+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.ipunplugged.rcprofile": {
        source: "iana",
        extensions: ["rcprofile"]
      },
      "application/vnd.irepository.package+xml": {
        source: "iana",
        compressible: true,
        extensions: ["irp"]
      },
      "application/vnd.is-xpr": {
        source: "iana",
        extensions: ["xpr"]
      },
      "application/vnd.isac.fcs": {
        source: "iana",
        extensions: ["fcs"]
      },
      "application/vnd.iso11783-10+zip": {
        source: "iana",
        compressible: false
      },
      "application/vnd.jam": {
        source: "iana",
        extensions: ["jam"]
      },
      "application/vnd.japannet-directory-service": {
        source: "iana"
      },
      "application/vnd.japannet-jpnstore-wakeup": {
        source: "iana"
      },
      "application/vnd.japannet-payment-wakeup": {
        source: "iana"
      },
      "application/vnd.japannet-registration": {
        source: "iana"
      },
      "application/vnd.japannet-registration-wakeup": {
        source: "iana"
      },
      "application/vnd.japannet-setstore-wakeup": {
        source: "iana"
      },
      "application/vnd.japannet-verification": {
        source: "iana"
      },
      "application/vnd.japannet-verification-wakeup": {
        source: "iana"
      },
      "application/vnd.jcp.javame.midlet-rms": {
        source: "iana",
        extensions: ["rms"]
      },
      "application/vnd.jisp": {
        source: "iana",
        extensions: ["jisp"]
      },
      "application/vnd.joost.joda-archive": {
        source: "iana",
        extensions: ["joda"]
      },
      "application/vnd.jsk.isdn-ngn": {
        source: "iana"
      },
      "application/vnd.kahootz": {
        source: "iana",
        extensions: ["ktz", "ktr"]
      },
      "application/vnd.kde.karbon": {
        source: "iana",
        extensions: ["karbon"]
      },
      "application/vnd.kde.kchart": {
        source: "iana",
        extensions: ["chrt"]
      },
      "application/vnd.kde.kformula": {
        source: "iana",
        extensions: ["kfo"]
      },
      "application/vnd.kde.kivio": {
        source: "iana",
        extensions: ["flw"]
      },
      "application/vnd.kde.kontour": {
        source: "iana",
        extensions: ["kon"]
      },
      "application/vnd.kde.kpresenter": {
        source: "iana",
        extensions: ["kpr", "kpt"]
      },
      "application/vnd.kde.kspread": {
        source: "iana",
        extensions: ["ksp"]
      },
      "application/vnd.kde.kword": {
        source: "iana",
        extensions: ["kwd", "kwt"]
      },
      "application/vnd.kenameaapp": {
        source: "iana",
        extensions: ["htke"]
      },
      "application/vnd.kidspiration": {
        source: "iana",
        extensions: ["kia"]
      },
      "application/vnd.kinar": {
        source: "iana",
        extensions: ["kne", "knp"]
      },
      "application/vnd.koan": {
        source: "iana",
        extensions: ["skp", "skd", "skt", "skm"]
      },
      "application/vnd.kodak-descriptor": {
        source: "iana",
        extensions: ["sse"]
      },
      "application/vnd.las": {
        source: "iana"
      },
      "application/vnd.las.las+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.las.las+xml": {
        source: "iana",
        compressible: true,
        extensions: ["lasxml"]
      },
      "application/vnd.laszip": {
        source: "iana"
      },
      "application/vnd.leap+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.liberty-request+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.llamagraphics.life-balance.desktop": {
        source: "iana",
        extensions: ["lbd"]
      },
      "application/vnd.llamagraphics.life-balance.exchange+xml": {
        source: "iana",
        compressible: true,
        extensions: ["lbe"]
      },
      "application/vnd.logipipe.circuit+zip": {
        source: "iana",
        compressible: false
      },
      "application/vnd.loom": {
        source: "iana"
      },
      "application/vnd.lotus-1-2-3": {
        source: "iana",
        extensions: ["123"]
      },
      "application/vnd.lotus-approach": {
        source: "iana",
        extensions: ["apr"]
      },
      "application/vnd.lotus-freelance": {
        source: "iana",
        extensions: ["pre"]
      },
      "application/vnd.lotus-notes": {
        source: "iana",
        extensions: ["nsf"]
      },
      "application/vnd.lotus-organizer": {
        source: "iana",
        extensions: ["org"]
      },
      "application/vnd.lotus-screencam": {
        source: "iana",
        extensions: ["scm"]
      },
      "application/vnd.lotus-wordpro": {
        source: "iana",
        extensions: ["lwp"]
      },
      "application/vnd.macports.portpkg": {
        source: "iana",
        extensions: ["portpkg"]
      },
      "application/vnd.mapbox-vector-tile": {
        source: "iana",
        extensions: ["mvt"]
      },
      "application/vnd.marlin.drm.actiontoken+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.marlin.drm.conftoken+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.marlin.drm.license+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.marlin.drm.mdcf": {
        source: "iana"
      },
      "application/vnd.mason+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.maxmind.maxmind-db": {
        source: "iana"
      },
      "application/vnd.mcd": {
        source: "iana",
        extensions: ["mcd"]
      },
      "application/vnd.medcalcdata": {
        source: "iana",
        extensions: ["mc1"]
      },
      "application/vnd.mediastation.cdkey": {
        source: "iana",
        extensions: ["cdkey"]
      },
      "application/vnd.meridian-slingshot": {
        source: "iana"
      },
      "application/vnd.mfer": {
        source: "iana",
        extensions: ["mwf"]
      },
      "application/vnd.mfmp": {
        source: "iana",
        extensions: ["mfm"]
      },
      "application/vnd.micro+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.micrografx.flo": {
        source: "iana",
        extensions: ["flo"]
      },
      "application/vnd.micrografx.igx": {
        source: "iana",
        extensions: ["igx"]
      },
      "application/vnd.microsoft.portable-executable": {
        source: "iana"
      },
      "application/vnd.microsoft.windows.thumbnail-cache": {
        source: "iana"
      },
      "application/vnd.miele+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.mif": {
        source: "iana",
        extensions: ["mif"]
      },
      "application/vnd.minisoft-hp3000-save": {
        source: "iana"
      },
      "application/vnd.mitsubishi.misty-guard.trustweb": {
        source: "iana"
      },
      "application/vnd.mobius.daf": {
        source: "iana",
        extensions: ["daf"]
      },
      "application/vnd.mobius.dis": {
        source: "iana",
        extensions: ["dis"]
      },
      "application/vnd.mobius.mbk": {
        source: "iana",
        extensions: ["mbk"]
      },
      "application/vnd.mobius.mqy": {
        source: "iana",
        extensions: ["mqy"]
      },
      "application/vnd.mobius.msl": {
        source: "iana",
        extensions: ["msl"]
      },
      "application/vnd.mobius.plc": {
        source: "iana",
        extensions: ["plc"]
      },
      "application/vnd.mobius.txf": {
        source: "iana",
        extensions: ["txf"]
      },
      "application/vnd.mophun.application": {
        source: "iana",
        extensions: ["mpn"]
      },
      "application/vnd.mophun.certificate": {
        source: "iana",
        extensions: ["mpc"]
      },
      "application/vnd.motorola.flexsuite": {
        source: "iana"
      },
      "application/vnd.motorola.flexsuite.adsi": {
        source: "iana"
      },
      "application/vnd.motorola.flexsuite.fis": {
        source: "iana"
      },
      "application/vnd.motorola.flexsuite.gotap": {
        source: "iana"
      },
      "application/vnd.motorola.flexsuite.kmr": {
        source: "iana"
      },
      "application/vnd.motorola.flexsuite.ttc": {
        source: "iana"
      },
      "application/vnd.motorola.flexsuite.wem": {
        source: "iana"
      },
      "application/vnd.motorola.iprm": {
        source: "iana"
      },
      "application/vnd.mozilla.xul+xml": {
        source: "iana",
        compressible: true,
        extensions: ["xul"]
      },
      "application/vnd.ms-3mfdocument": {
        source: "iana"
      },
      "application/vnd.ms-artgalry": {
        source: "iana",
        extensions: ["cil"]
      },
      "application/vnd.ms-asf": {
        source: "iana"
      },
      "application/vnd.ms-cab-compressed": {
        source: "iana",
        extensions: ["cab"]
      },
      "application/vnd.ms-color.iccprofile": {
        source: "apache"
      },
      "application/vnd.ms-excel": {
        source: "iana",
        compressible: false,
        extensions: ["xls", "xlm", "xla", "xlc", "xlt", "xlw"]
      },
      "application/vnd.ms-excel.addin.macroenabled.12": {
        source: "iana",
        extensions: ["xlam"]
      },
      "application/vnd.ms-excel.sheet.binary.macroenabled.12": {
        source: "iana",
        extensions: ["xlsb"]
      },
      "application/vnd.ms-excel.sheet.macroenabled.12": {
        source: "iana",
        extensions: ["xlsm"]
      },
      "application/vnd.ms-excel.template.macroenabled.12": {
        source: "iana",
        extensions: ["xltm"]
      },
      "application/vnd.ms-fontobject": {
        source: "iana",
        compressible: true,
        extensions: ["eot"]
      },
      "application/vnd.ms-htmlhelp": {
        source: "iana",
        extensions: ["chm"]
      },
      "application/vnd.ms-ims": {
        source: "iana",
        extensions: ["ims"]
      },
      "application/vnd.ms-lrm": {
        source: "iana",
        extensions: ["lrm"]
      },
      "application/vnd.ms-office.activex+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.ms-officetheme": {
        source: "iana",
        extensions: ["thmx"]
      },
      "application/vnd.ms-opentype": {
        source: "apache",
        compressible: true
      },
      "application/vnd.ms-outlook": {
        compressible: false,
        extensions: ["msg"]
      },
      "application/vnd.ms-package.obfuscated-opentype": {
        source: "apache"
      },
      "application/vnd.ms-pki.seccat": {
        source: "apache",
        extensions: ["cat"]
      },
      "application/vnd.ms-pki.stl": {
        source: "apache",
        extensions: ["stl"]
      },
      "application/vnd.ms-playready.initiator+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.ms-powerpoint": {
        source: "iana",
        compressible: false,
        extensions: ["ppt", "pps", "pot"]
      },
      "application/vnd.ms-powerpoint.addin.macroenabled.12": {
        source: "iana",
        extensions: ["ppam"]
      },
      "application/vnd.ms-powerpoint.presentation.macroenabled.12": {
        source: "iana",
        extensions: ["pptm"]
      },
      "application/vnd.ms-powerpoint.slide.macroenabled.12": {
        source: "iana",
        extensions: ["sldm"]
      },
      "application/vnd.ms-powerpoint.slideshow.macroenabled.12": {
        source: "iana",
        extensions: ["ppsm"]
      },
      "application/vnd.ms-powerpoint.template.macroenabled.12": {
        source: "iana",
        extensions: ["potm"]
      },
      "application/vnd.ms-printdevicecapabilities+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.ms-printing.printticket+xml": {
        source: "apache",
        compressible: true
      },
      "application/vnd.ms-printschematicket+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.ms-project": {
        source: "iana",
        extensions: ["mpp", "mpt"]
      },
      "application/vnd.ms-tnef": {
        source: "iana"
      },
      "application/vnd.ms-windows.devicepairing": {
        source: "iana"
      },
      "application/vnd.ms-windows.nwprinting.oob": {
        source: "iana"
      },
      "application/vnd.ms-windows.printerpairing": {
        source: "iana"
      },
      "application/vnd.ms-windows.wsd.oob": {
        source: "iana"
      },
      "application/vnd.ms-wmdrm.lic-chlg-req": {
        source: "iana"
      },
      "application/vnd.ms-wmdrm.lic-resp": {
        source: "iana"
      },
      "application/vnd.ms-wmdrm.meter-chlg-req": {
        source: "iana"
      },
      "application/vnd.ms-wmdrm.meter-resp": {
        source: "iana"
      },
      "application/vnd.ms-word.document.macroenabled.12": {
        source: "iana",
        extensions: ["docm"]
      },
      "application/vnd.ms-word.template.macroenabled.12": {
        source: "iana",
        extensions: ["dotm"]
      },
      "application/vnd.ms-works": {
        source: "iana",
        extensions: ["wps", "wks", "wcm", "wdb"]
      },
      "application/vnd.ms-wpl": {
        source: "iana",
        extensions: ["wpl"]
      },
      "application/vnd.ms-xpsdocument": {
        source: "iana",
        compressible: false,
        extensions: ["xps"]
      },
      "application/vnd.msa-disk-image": {
        source: "iana"
      },
      "application/vnd.mseq": {
        source: "iana",
        extensions: ["mseq"]
      },
      "application/vnd.msign": {
        source: "iana"
      },
      "application/vnd.multiad.creator": {
        source: "iana"
      },
      "application/vnd.multiad.creator.cif": {
        source: "iana"
      },
      "application/vnd.music-niff": {
        source: "iana"
      },
      "application/vnd.musician": {
        source: "iana",
        extensions: ["mus"]
      },
      "application/vnd.muvee.style": {
        source: "iana",
        extensions: ["msty"]
      },
      "application/vnd.mynfc": {
        source: "iana",
        extensions: ["taglet"]
      },
      "application/vnd.nacamar.ybrid+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.ncd.control": {
        source: "iana"
      },
      "application/vnd.ncd.reference": {
        source: "iana"
      },
      "application/vnd.nearst.inv+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.nebumind.line": {
        source: "iana"
      },
      "application/vnd.nervana": {
        source: "iana"
      },
      "application/vnd.netfpx": {
        source: "iana"
      },
      "application/vnd.neurolanguage.nlu": {
        source: "iana",
        extensions: ["nlu"]
      },
      "application/vnd.nimn": {
        source: "iana"
      },
      "application/vnd.nintendo.nitro.rom": {
        source: "iana"
      },
      "application/vnd.nintendo.snes.rom": {
        source: "iana"
      },
      "application/vnd.nitf": {
        source: "iana",
        extensions: ["ntf", "nitf"]
      },
      "application/vnd.noblenet-directory": {
        source: "iana",
        extensions: ["nnd"]
      },
      "application/vnd.noblenet-sealer": {
        source: "iana",
        extensions: ["nns"]
      },
      "application/vnd.noblenet-web": {
        source: "iana",
        extensions: ["nnw"]
      },
      "application/vnd.nokia.catalogs": {
        source: "iana"
      },
      "application/vnd.nokia.conml+wbxml": {
        source: "iana"
      },
      "application/vnd.nokia.conml+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.nokia.iptv.config+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.nokia.isds-radio-presets": {
        source: "iana"
      },
      "application/vnd.nokia.landmark+wbxml": {
        source: "iana"
      },
      "application/vnd.nokia.landmark+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.nokia.landmarkcollection+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.nokia.n-gage.ac+xml": {
        source: "iana",
        compressible: true,
        extensions: ["ac"]
      },
      "application/vnd.nokia.n-gage.data": {
        source: "iana",
        extensions: ["ngdat"]
      },
      "application/vnd.nokia.n-gage.symbian.install": {
        source: "iana",
        extensions: ["n-gage"]
      },
      "application/vnd.nokia.ncd": {
        source: "iana"
      },
      "application/vnd.nokia.pcd+wbxml": {
        source: "iana"
      },
      "application/vnd.nokia.pcd+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.nokia.radio-preset": {
        source: "iana",
        extensions: ["rpst"]
      },
      "application/vnd.nokia.radio-presets": {
        source: "iana",
        extensions: ["rpss"]
      },
      "application/vnd.novadigm.edm": {
        source: "iana",
        extensions: ["edm"]
      },
      "application/vnd.novadigm.edx": {
        source: "iana",
        extensions: ["edx"]
      },
      "application/vnd.novadigm.ext": {
        source: "iana",
        extensions: ["ext"]
      },
      "application/vnd.ntt-local.content-share": {
        source: "iana"
      },
      "application/vnd.ntt-local.file-transfer": {
        source: "iana"
      },
      "application/vnd.ntt-local.ogw_remote-access": {
        source: "iana"
      },
      "application/vnd.ntt-local.sip-ta_remote": {
        source: "iana"
      },
      "application/vnd.ntt-local.sip-ta_tcp_stream": {
        source: "iana"
      },
      "application/vnd.oasis.opendocument.chart": {
        source: "iana",
        extensions: ["odc"]
      },
      "application/vnd.oasis.opendocument.chart-template": {
        source: "iana",
        extensions: ["otc"]
      },
      "application/vnd.oasis.opendocument.database": {
        source: "iana",
        extensions: ["odb"]
      },
      "application/vnd.oasis.opendocument.formula": {
        source: "iana",
        extensions: ["odf"]
      },
      "application/vnd.oasis.opendocument.formula-template": {
        source: "iana",
        extensions: ["odft"]
      },
      "application/vnd.oasis.opendocument.graphics": {
        source: "iana",
        compressible: false,
        extensions: ["odg"]
      },
      "application/vnd.oasis.opendocument.graphics-template": {
        source: "iana",
        extensions: ["otg"]
      },
      "application/vnd.oasis.opendocument.image": {
        source: "iana",
        extensions: ["odi"]
      },
      "application/vnd.oasis.opendocument.image-template": {
        source: "iana",
        extensions: ["oti"]
      },
      "application/vnd.oasis.opendocument.presentation": {
        source: "iana",
        compressible: false,
        extensions: ["odp"]
      },
      "application/vnd.oasis.opendocument.presentation-template": {
        source: "iana",
        extensions: ["otp"]
      },
      "application/vnd.oasis.opendocument.spreadsheet": {
        source: "iana",
        compressible: false,
        extensions: ["ods"]
      },
      "application/vnd.oasis.opendocument.spreadsheet-template": {
        source: "iana",
        extensions: ["ots"]
      },
      "application/vnd.oasis.opendocument.text": {
        source: "iana",
        compressible: false,
        extensions: ["odt"]
      },
      "application/vnd.oasis.opendocument.text-master": {
        source: "iana",
        extensions: ["odm"]
      },
      "application/vnd.oasis.opendocument.text-template": {
        source: "iana",
        extensions: ["ott"]
      },
      "application/vnd.oasis.opendocument.text-web": {
        source: "iana",
        extensions: ["oth"]
      },
      "application/vnd.obn": {
        source: "iana"
      },
      "application/vnd.ocf+cbor": {
        source: "iana"
      },
      "application/vnd.oci.image.manifest.v1+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oftn.l10n+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oipf.contentaccessdownload+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oipf.contentaccessstreaming+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oipf.cspg-hexbinary": {
        source: "iana"
      },
      "application/vnd.oipf.dae.svg+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oipf.dae.xhtml+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oipf.mippvcontrolmessage+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oipf.pae.gem": {
        source: "iana"
      },
      "application/vnd.oipf.spdiscovery+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oipf.spdlist+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oipf.ueprofile+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oipf.userprofile+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.olpc-sugar": {
        source: "iana",
        extensions: ["xo"]
      },
      "application/vnd.oma-scws-config": {
        source: "iana"
      },
      "application/vnd.oma-scws-http-request": {
        source: "iana"
      },
      "application/vnd.oma-scws-http-response": {
        source: "iana"
      },
      "application/vnd.oma.bcast.associated-procedure-parameter+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.bcast.drm-trigger+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.bcast.imd+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.bcast.ltkm": {
        source: "iana"
      },
      "application/vnd.oma.bcast.notification+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.bcast.provisioningtrigger": {
        source: "iana"
      },
      "application/vnd.oma.bcast.sgboot": {
        source: "iana"
      },
      "application/vnd.oma.bcast.sgdd+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.bcast.sgdu": {
        source: "iana"
      },
      "application/vnd.oma.bcast.simple-symbol-container": {
        source: "iana"
      },
      "application/vnd.oma.bcast.smartcard-trigger+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.bcast.sprov+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.bcast.stkm": {
        source: "iana"
      },
      "application/vnd.oma.cab-address-book+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.cab-feature-handler+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.cab-pcc+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.cab-subs-invite+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.cab-user-prefs+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.dcd": {
        source: "iana"
      },
      "application/vnd.oma.dcdc": {
        source: "iana"
      },
      "application/vnd.oma.dd2+xml": {
        source: "iana",
        compressible: true,
        extensions: ["dd2"]
      },
      "application/vnd.oma.drm.risd+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.group-usage-list+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.lwm2m+cbor": {
        source: "iana"
      },
      "application/vnd.oma.lwm2m+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.lwm2m+tlv": {
        source: "iana"
      },
      "application/vnd.oma.pal+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.poc.detailed-progress-report+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.poc.final-report+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.poc.groups+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.poc.invocation-descriptor+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.poc.optimized-progress-report+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.push": {
        source: "iana"
      },
      "application/vnd.oma.scidm.messages+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oma.xcap-directory+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.omads-email+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/vnd.omads-file+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/vnd.omads-folder+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/vnd.omaloc-supl-init": {
        source: "iana"
      },
      "application/vnd.onepager": {
        source: "iana"
      },
      "application/vnd.onepagertamp": {
        source: "iana"
      },
      "application/vnd.onepagertamx": {
        source: "iana"
      },
      "application/vnd.onepagertat": {
        source: "iana"
      },
      "application/vnd.onepagertatp": {
        source: "iana"
      },
      "application/vnd.onepagertatx": {
        source: "iana"
      },
      "application/vnd.openblox.game+xml": {
        source: "iana",
        compressible: true,
        extensions: ["obgx"]
      },
      "application/vnd.openblox.game-binary": {
        source: "iana"
      },
      "application/vnd.openeye.oeb": {
        source: "iana"
      },
      "application/vnd.openofficeorg.extension": {
        source: "apache",
        extensions: ["oxt"]
      },
      "application/vnd.openstreetmap.data+xml": {
        source: "iana",
        compressible: true,
        extensions: ["osm"]
      },
      "application/vnd.opentimestamps.ots": {
        source: "iana"
      },
      "application/vnd.openxmlformats-officedocument.custom-properties+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.customxmlproperties+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.drawing+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.drawingml.chart+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.drawingml.diagramcolors+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.drawingml.diagramdata+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.drawingml.diagramlayout+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.drawingml.diagramstyle+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.extended-properties+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.commentauthors+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.comments+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.handoutmaster+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.notesmaster+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.notesslide+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.presentation": {
        source: "iana",
        compressible: false,
        extensions: ["pptx"]
      },
      "application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.presprops+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.slide": {
        source: "iana",
        extensions: ["sldx"]
      },
      "application/vnd.openxmlformats-officedocument.presentationml.slide+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.slidelayout+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.slidemaster+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.slideshow": {
        source: "iana",
        extensions: ["ppsx"]
      },
      "application/vnd.openxmlformats-officedocument.presentationml.slideshow.main+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.slideupdateinfo+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.tablestyles+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.tags+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.template": {
        source: "iana",
        extensions: ["potx"]
      },
      "application/vnd.openxmlformats-officedocument.presentationml.template.main+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.presentationml.viewprops+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.calcchain+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.externallink+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcachedefinition+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcacherecords+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.pivottable+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.querytable+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionheaders+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionlog+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedstrings+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": {
        source: "iana",
        compressible: false,
        extensions: ["xlsx"]
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetmetadata+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.tablesinglecells+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.template": {
        source: "iana",
        extensions: ["xltx"]
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.usernames+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.volatiledependencies+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.theme+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.themeoverride+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.vmldrawing": {
        source: "iana"
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document": {
        source: "iana",
        compressible: false,
        extensions: ["docx"]
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document.glossary+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.endnotes+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.fonttable+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.template": {
        source: "iana",
        extensions: ["dotx"]
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.template.main+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-officedocument.wordprocessingml.websettings+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-package.core-properties+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-package.digital-signature-xmlsignature+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.openxmlformats-package.relationships+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oracle.resource+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.orange.indata": {
        source: "iana"
      },
      "application/vnd.osa.netdeploy": {
        source: "iana"
      },
      "application/vnd.osgeo.mapguide.package": {
        source: "iana",
        extensions: ["mgp"]
      },
      "application/vnd.osgi.bundle": {
        source: "iana"
      },
      "application/vnd.osgi.dp": {
        source: "iana",
        extensions: ["dp"]
      },
      "application/vnd.osgi.subsystem": {
        source: "iana",
        extensions: ["esa"]
      },
      "application/vnd.otps.ct-kip+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.oxli.countgraph": {
        source: "iana"
      },
      "application/vnd.pagerduty+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.palm": {
        source: "iana",
        extensions: ["pdb", "pqa", "oprc"]
      },
      "application/vnd.panoply": {
        source: "iana"
      },
      "application/vnd.paos.xml": {
        source: "iana"
      },
      "application/vnd.patentdive": {
        source: "iana"
      },
      "application/vnd.patientecommsdoc": {
        source: "iana"
      },
      "application/vnd.pawaafile": {
        source: "iana",
        extensions: ["paw"]
      },
      "application/vnd.pcos": {
        source: "iana"
      },
      "application/vnd.pg.format": {
        source: "iana",
        extensions: ["str"]
      },
      "application/vnd.pg.osasli": {
        source: "iana",
        extensions: ["ei6"]
      },
      "application/vnd.piaccess.application-licence": {
        source: "iana"
      },
      "application/vnd.picsel": {
        source: "iana",
        extensions: ["efif"]
      },
      "application/vnd.pmi.widget": {
        source: "iana",
        extensions: ["wg"]
      },
      "application/vnd.poc.group-advertisement+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.pocketlearn": {
        source: "iana",
        extensions: ["plf"]
      },
      "application/vnd.powerbuilder6": {
        source: "iana",
        extensions: ["pbd"]
      },
      "application/vnd.powerbuilder6-s": {
        source: "iana"
      },
      "application/vnd.powerbuilder7": {
        source: "iana"
      },
      "application/vnd.powerbuilder7-s": {
        source: "iana"
      },
      "application/vnd.powerbuilder75": {
        source: "iana"
      },
      "application/vnd.powerbuilder75-s": {
        source: "iana"
      },
      "application/vnd.preminet": {
        source: "iana"
      },
      "application/vnd.previewsystems.box": {
        source: "iana",
        extensions: ["box"]
      },
      "application/vnd.proteus.magazine": {
        source: "iana",
        extensions: ["mgz"]
      },
      "application/vnd.psfs": {
        source: "iana"
      },
      "application/vnd.publishare-delta-tree": {
        source: "iana",
        extensions: ["qps"]
      },
      "application/vnd.pvi.ptid1": {
        source: "iana",
        extensions: ["ptid"]
      },
      "application/vnd.pwg-multiplexed": {
        source: "iana"
      },
      "application/vnd.pwg-xhtml-print+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.qualcomm.brew-app-res": {
        source: "iana"
      },
      "application/vnd.quarantainenet": {
        source: "iana"
      },
      "application/vnd.quark.quarkxpress": {
        source: "iana",
        extensions: ["qxd", "qxt", "qwd", "qwt", "qxl", "qxb"]
      },
      "application/vnd.quobject-quoxdocument": {
        source: "iana"
      },
      "application/vnd.radisys.moml+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.radisys.msml+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.radisys.msml-audit+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.radisys.msml-audit-conf+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.radisys.msml-audit-conn+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.radisys.msml-audit-dialog+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.radisys.msml-audit-stream+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.radisys.msml-conf+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.radisys.msml-dialog+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.radisys.msml-dialog-base+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.radisys.msml-dialog-fax-detect+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.radisys.msml-dialog-fax-sendrecv+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.radisys.msml-dialog-group+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.radisys.msml-dialog-speech+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.radisys.msml-dialog-transform+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.rainstor.data": {
        source: "iana"
      },
      "application/vnd.rapid": {
        source: "iana"
      },
      "application/vnd.rar": {
        source: "iana",
        extensions: ["rar"]
      },
      "application/vnd.realvnc.bed": {
        source: "iana",
        extensions: ["bed"]
      },
      "application/vnd.recordare.musicxml": {
        source: "iana",
        extensions: ["mxl"]
      },
      "application/vnd.recordare.musicxml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["musicxml"]
      },
      "application/vnd.renlearn.rlprint": {
        source: "iana"
      },
      "application/vnd.resilient.logic": {
        source: "iana"
      },
      "application/vnd.restful+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.rig.cryptonote": {
        source: "iana",
        extensions: ["cryptonote"]
      },
      "application/vnd.rim.cod": {
        source: "apache",
        extensions: ["cod"]
      },
      "application/vnd.rn-realmedia": {
        source: "apache",
        extensions: ["rm"]
      },
      "application/vnd.rn-realmedia-vbr": {
        source: "apache",
        extensions: ["rmvb"]
      },
      "application/vnd.route66.link66+xml": {
        source: "iana",
        compressible: true,
        extensions: ["link66"]
      },
      "application/vnd.rs-274x": {
        source: "iana"
      },
      "application/vnd.ruckus.download": {
        source: "iana"
      },
      "application/vnd.s3sms": {
        source: "iana"
      },
      "application/vnd.sailingtracker.track": {
        source: "iana",
        extensions: ["st"]
      },
      "application/vnd.sar": {
        source: "iana"
      },
      "application/vnd.sbm.cid": {
        source: "iana"
      },
      "application/vnd.sbm.mid2": {
        source: "iana"
      },
      "application/vnd.scribus": {
        source: "iana"
      },
      "application/vnd.sealed.3df": {
        source: "iana"
      },
      "application/vnd.sealed.csf": {
        source: "iana"
      },
      "application/vnd.sealed.doc": {
        source: "iana"
      },
      "application/vnd.sealed.eml": {
        source: "iana"
      },
      "application/vnd.sealed.mht": {
        source: "iana"
      },
      "application/vnd.sealed.net": {
        source: "iana"
      },
      "application/vnd.sealed.ppt": {
        source: "iana"
      },
      "application/vnd.sealed.tiff": {
        source: "iana"
      },
      "application/vnd.sealed.xls": {
        source: "iana"
      },
      "application/vnd.sealedmedia.softseal.html": {
        source: "iana"
      },
      "application/vnd.sealedmedia.softseal.pdf": {
        source: "iana"
      },
      "application/vnd.seemail": {
        source: "iana",
        extensions: ["see"]
      },
      "application/vnd.seis+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.sema": {
        source: "iana",
        extensions: ["sema"]
      },
      "application/vnd.semd": {
        source: "iana",
        extensions: ["semd"]
      },
      "application/vnd.semf": {
        source: "iana",
        extensions: ["semf"]
      },
      "application/vnd.shade-save-file": {
        source: "iana"
      },
      "application/vnd.shana.informed.formdata": {
        source: "iana",
        extensions: ["ifm"]
      },
      "application/vnd.shana.informed.formtemplate": {
        source: "iana",
        extensions: ["itp"]
      },
      "application/vnd.shana.informed.interchange": {
        source: "iana",
        extensions: ["iif"]
      },
      "application/vnd.shana.informed.package": {
        source: "iana",
        extensions: ["ipk"]
      },
      "application/vnd.shootproof+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.shopkick+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.shp": {
        source: "iana"
      },
      "application/vnd.shx": {
        source: "iana"
      },
      "application/vnd.sigrok.session": {
        source: "iana"
      },
      "application/vnd.simtech-mindmapper": {
        source: "iana",
        extensions: ["twd", "twds"]
      },
      "application/vnd.siren+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.smaf": {
        source: "iana",
        extensions: ["mmf"]
      },
      "application/vnd.smart.notebook": {
        source: "iana"
      },
      "application/vnd.smart.teacher": {
        source: "iana",
        extensions: ["teacher"]
      },
      "application/vnd.snesdev-page-table": {
        source: "iana"
      },
      "application/vnd.software602.filler.form+xml": {
        source: "iana",
        compressible: true,
        extensions: ["fo"]
      },
      "application/vnd.software602.filler.form-xml-zip": {
        source: "iana"
      },
      "application/vnd.solent.sdkm+xml": {
        source: "iana",
        compressible: true,
        extensions: ["sdkm", "sdkd"]
      },
      "application/vnd.spotfire.dxp": {
        source: "iana",
        extensions: ["dxp"]
      },
      "application/vnd.spotfire.sfs": {
        source: "iana",
        extensions: ["sfs"]
      },
      "application/vnd.sqlite3": {
        source: "iana"
      },
      "application/vnd.sss-cod": {
        source: "iana"
      },
      "application/vnd.sss-dtf": {
        source: "iana"
      },
      "application/vnd.sss-ntf": {
        source: "iana"
      },
      "application/vnd.stardivision.calc": {
        source: "apache",
        extensions: ["sdc"]
      },
      "application/vnd.stardivision.draw": {
        source: "apache",
        extensions: ["sda"]
      },
      "application/vnd.stardivision.impress": {
        source: "apache",
        extensions: ["sdd"]
      },
      "application/vnd.stardivision.math": {
        source: "apache",
        extensions: ["smf"]
      },
      "application/vnd.stardivision.writer": {
        source: "apache",
        extensions: ["sdw", "vor"]
      },
      "application/vnd.stardivision.writer-global": {
        source: "apache",
        extensions: ["sgl"]
      },
      "application/vnd.stepmania.package": {
        source: "iana",
        extensions: ["smzip"]
      },
      "application/vnd.stepmania.stepchart": {
        source: "iana",
        extensions: ["sm"]
      },
      "application/vnd.street-stream": {
        source: "iana"
      },
      "application/vnd.sun.wadl+xml": {
        source: "iana",
        compressible: true,
        extensions: ["wadl"]
      },
      "application/vnd.sun.xml.calc": {
        source: "apache",
        extensions: ["sxc"]
      },
      "application/vnd.sun.xml.calc.template": {
        source: "apache",
        extensions: ["stc"]
      },
      "application/vnd.sun.xml.draw": {
        source: "apache",
        extensions: ["sxd"]
      },
      "application/vnd.sun.xml.draw.template": {
        source: "apache",
        extensions: ["std"]
      },
      "application/vnd.sun.xml.impress": {
        source: "apache",
        extensions: ["sxi"]
      },
      "application/vnd.sun.xml.impress.template": {
        source: "apache",
        extensions: ["sti"]
      },
      "application/vnd.sun.xml.math": {
        source: "apache",
        extensions: ["sxm"]
      },
      "application/vnd.sun.xml.writer": {
        source: "apache",
        extensions: ["sxw"]
      },
      "application/vnd.sun.xml.writer.global": {
        source: "apache",
        extensions: ["sxg"]
      },
      "application/vnd.sun.xml.writer.template": {
        source: "apache",
        extensions: ["stw"]
      },
      "application/vnd.sus-calendar": {
        source: "iana",
        extensions: ["sus", "susp"]
      },
      "application/vnd.svd": {
        source: "iana",
        extensions: ["svd"]
      },
      "application/vnd.swiftview-ics": {
        source: "iana"
      },
      "application/vnd.sycle+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.symbian.install": {
        source: "apache",
        extensions: ["sis", "sisx"]
      },
      "application/vnd.syncml+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true,
        extensions: ["xsm"]
      },
      "application/vnd.syncml.dm+wbxml": {
        source: "iana",
        charset: "UTF-8",
        extensions: ["bdm"]
      },
      "application/vnd.syncml.dm+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true,
        extensions: ["xdm"]
      },
      "application/vnd.syncml.dm.notification": {
        source: "iana"
      },
      "application/vnd.syncml.dmddf+wbxml": {
        source: "iana"
      },
      "application/vnd.syncml.dmddf+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true,
        extensions: ["ddf"]
      },
      "application/vnd.syncml.dmtnds+wbxml": {
        source: "iana"
      },
      "application/vnd.syncml.dmtnds+xml": {
        source: "iana",
        charset: "UTF-8",
        compressible: true
      },
      "application/vnd.syncml.ds.notification": {
        source: "iana"
      },
      "application/vnd.tableschema+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.tao.intent-module-archive": {
        source: "iana",
        extensions: ["tao"]
      },
      "application/vnd.tcpdump.pcap": {
        source: "iana",
        extensions: ["pcap", "cap", "dmp"]
      },
      "application/vnd.think-cell.ppttc+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.tmd.mediaflex.api+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.tml": {
        source: "iana"
      },
      "application/vnd.tmobile-livetv": {
        source: "iana",
        extensions: ["tmo"]
      },
      "application/vnd.tri.onesource": {
        source: "iana"
      },
      "application/vnd.trid.tpt": {
        source: "iana",
        extensions: ["tpt"]
      },
      "application/vnd.triscape.mxs": {
        source: "iana",
        extensions: ["mxs"]
      },
      "application/vnd.trueapp": {
        source: "iana",
        extensions: ["tra"]
      },
      "application/vnd.truedoc": {
        source: "iana"
      },
      "application/vnd.ubisoft.webplayer": {
        source: "iana"
      },
      "application/vnd.ufdl": {
        source: "iana",
        extensions: ["ufd", "ufdl"]
      },
      "application/vnd.uiq.theme": {
        source: "iana",
        extensions: ["utz"]
      },
      "application/vnd.umajin": {
        source: "iana",
        extensions: ["umj"]
      },
      "application/vnd.unity": {
        source: "iana",
        extensions: ["unityweb"]
      },
      "application/vnd.uoml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["uoml"]
      },
      "application/vnd.uplanet.alert": {
        source: "iana"
      },
      "application/vnd.uplanet.alert-wbxml": {
        source: "iana"
      },
      "application/vnd.uplanet.bearer-choice": {
        source: "iana"
      },
      "application/vnd.uplanet.bearer-choice-wbxml": {
        source: "iana"
      },
      "application/vnd.uplanet.cacheop": {
        source: "iana"
      },
      "application/vnd.uplanet.cacheop-wbxml": {
        source: "iana"
      },
      "application/vnd.uplanet.channel": {
        source: "iana"
      },
      "application/vnd.uplanet.channel-wbxml": {
        source: "iana"
      },
      "application/vnd.uplanet.list": {
        source: "iana"
      },
      "application/vnd.uplanet.list-wbxml": {
        source: "iana"
      },
      "application/vnd.uplanet.listcmd": {
        source: "iana"
      },
      "application/vnd.uplanet.listcmd-wbxml": {
        source: "iana"
      },
      "application/vnd.uplanet.signal": {
        source: "iana"
      },
      "application/vnd.uri-map": {
        source: "iana"
      },
      "application/vnd.valve.source.material": {
        source: "iana"
      },
      "application/vnd.vcx": {
        source: "iana",
        extensions: ["vcx"]
      },
      "application/vnd.vd-study": {
        source: "iana"
      },
      "application/vnd.vectorworks": {
        source: "iana"
      },
      "application/vnd.vel+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.verimatrix.vcas": {
        source: "iana"
      },
      "application/vnd.veritone.aion+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.veryant.thin": {
        source: "iana"
      },
      "application/vnd.ves.encrypted": {
        source: "iana"
      },
      "application/vnd.vidsoft.vidconference": {
        source: "iana"
      },
      "application/vnd.visio": {
        source: "iana",
        extensions: ["vsd", "vst", "vss", "vsw"]
      },
      "application/vnd.visionary": {
        source: "iana",
        extensions: ["vis"]
      },
      "application/vnd.vividence.scriptfile": {
        source: "iana"
      },
      "application/vnd.vsf": {
        source: "iana",
        extensions: ["vsf"]
      },
      "application/vnd.wap.sic": {
        source: "iana"
      },
      "application/vnd.wap.slc": {
        source: "iana"
      },
      "application/vnd.wap.wbxml": {
        source: "iana",
        charset: "UTF-8",
        extensions: ["wbxml"]
      },
      "application/vnd.wap.wmlc": {
        source: "iana",
        extensions: ["wmlc"]
      },
      "application/vnd.wap.wmlscriptc": {
        source: "iana",
        extensions: ["wmlsc"]
      },
      "application/vnd.webturbo": {
        source: "iana",
        extensions: ["wtb"]
      },
      "application/vnd.wfa.dpp": {
        source: "iana"
      },
      "application/vnd.wfa.p2p": {
        source: "iana"
      },
      "application/vnd.wfa.wsc": {
        source: "iana"
      },
      "application/vnd.windows.devicepairing": {
        source: "iana"
      },
      "application/vnd.wmc": {
        source: "iana"
      },
      "application/vnd.wmf.bootstrap": {
        source: "iana"
      },
      "application/vnd.wolfram.mathematica": {
        source: "iana"
      },
      "application/vnd.wolfram.mathematica.package": {
        source: "iana"
      },
      "application/vnd.wolfram.player": {
        source: "iana",
        extensions: ["nbp"]
      },
      "application/vnd.wordperfect": {
        source: "iana",
        extensions: ["wpd"]
      },
      "application/vnd.wqd": {
        source: "iana",
        extensions: ["wqd"]
      },
      "application/vnd.wrq-hp3000-labelled": {
        source: "iana"
      },
      "application/vnd.wt.stf": {
        source: "iana",
        extensions: ["stf"]
      },
      "application/vnd.wv.csp+wbxml": {
        source: "iana"
      },
      "application/vnd.wv.csp+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.wv.ssp+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.xacml+json": {
        source: "iana",
        compressible: true
      },
      "application/vnd.xara": {
        source: "iana",
        extensions: ["xar"]
      },
      "application/vnd.xfdl": {
        source: "iana",
        extensions: ["xfdl"]
      },
      "application/vnd.xfdl.webform": {
        source: "iana"
      },
      "application/vnd.xmi+xml": {
        source: "iana",
        compressible: true
      },
      "application/vnd.xmpie.cpkg": {
        source: "iana"
      },
      "application/vnd.xmpie.dpkg": {
        source: "iana"
      },
      "application/vnd.xmpie.plan": {
        source: "iana"
      },
      "application/vnd.xmpie.ppkg": {
        source: "iana"
      },
      "application/vnd.xmpie.xlim": {
        source: "iana"
      },
      "application/vnd.yamaha.hv-dic": {
        source: "iana",
        extensions: ["hvd"]
      },
      "application/vnd.yamaha.hv-script": {
        source: "iana",
        extensions: ["hvs"]
      },
      "application/vnd.yamaha.hv-voice": {
        source: "iana",
        extensions: ["hvp"]
      },
      "application/vnd.yamaha.openscoreformat": {
        source: "iana",
        extensions: ["osf"]
      },
      "application/vnd.yamaha.openscoreformat.osfpvg+xml": {
        source: "iana",
        compressible: true,
        extensions: ["osfpvg"]
      },
      "application/vnd.yamaha.remote-setup": {
        source: "iana"
      },
      "application/vnd.yamaha.smaf-audio": {
        source: "iana",
        extensions: ["saf"]
      },
      "application/vnd.yamaha.smaf-phrase": {
        source: "iana",
        extensions: ["spf"]
      },
      "application/vnd.yamaha.through-ngn": {
        source: "iana"
      },
      "application/vnd.yamaha.tunnel-udpencap": {
        source: "iana"
      },
      "application/vnd.yaoweme": {
        source: "iana"
      },
      "application/vnd.yellowriver-custom-menu": {
        source: "iana",
        extensions: ["cmp"]
      },
      "application/vnd.youtube.yt": {
        source: "iana"
      },
      "application/vnd.zul": {
        source: "iana",
        extensions: ["zir", "zirz"]
      },
      "application/vnd.zzazz.deck+xml": {
        source: "iana",
        compressible: true,
        extensions: ["zaz"]
      },
      "application/voicexml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["vxml"]
      },
      "application/voucher-cms+json": {
        source: "iana",
        compressible: true
      },
      "application/vq-rtcpxr": {
        source: "iana"
      },
      "application/wasm": {
        source: "iana",
        compressible: true,
        extensions: ["wasm"]
      },
      "application/watcherinfo+xml": {
        source: "iana",
        compressible: true
      },
      "application/webpush-options+json": {
        source: "iana",
        compressible: true
      },
      "application/whoispp-query": {
        source: "iana"
      },
      "application/whoispp-response": {
        source: "iana"
      },
      "application/widget": {
        source: "iana",
        extensions: ["wgt"]
      },
      "application/winhlp": {
        source: "apache",
        extensions: ["hlp"]
      },
      "application/wita": {
        source: "iana"
      },
      "application/wordperfect5.1": {
        source: "iana"
      },
      "application/wsdl+xml": {
        source: "iana",
        compressible: true,
        extensions: ["wsdl"]
      },
      "application/wspolicy+xml": {
        source: "iana",
        compressible: true,
        extensions: ["wspolicy"]
      },
      "application/x-7z-compressed": {
        source: "apache",
        compressible: false,
        extensions: ["7z"]
      },
      "application/x-abiword": {
        source: "apache",
        extensions: ["abw"]
      },
      "application/x-ace-compressed": {
        source: "apache",
        extensions: ["ace"]
      },
      "application/x-amf": {
        source: "apache"
      },
      "application/x-apple-diskimage": {
        source: "apache",
        extensions: ["dmg"]
      },
      "application/x-arj": {
        compressible: false,
        extensions: ["arj"]
      },
      "application/x-authorware-bin": {
        source: "apache",
        extensions: ["aab", "x32", "u32", "vox"]
      },
      "application/x-authorware-map": {
        source: "apache",
        extensions: ["aam"]
      },
      "application/x-authorware-seg": {
        source: "apache",
        extensions: ["aas"]
      },
      "application/x-bcpio": {
        source: "apache",
        extensions: ["bcpio"]
      },
      "application/x-bdoc": {
        compressible: false,
        extensions: ["bdoc"]
      },
      "application/x-bittorrent": {
        source: "apache",
        extensions: ["torrent"]
      },
      "application/x-blorb": {
        source: "apache",
        extensions: ["blb", "blorb"]
      },
      "application/x-bzip": {
        source: "apache",
        compressible: false,
        extensions: ["bz"]
      },
      "application/x-bzip2": {
        source: "apache",
        compressible: false,
        extensions: ["bz2", "boz"]
      },
      "application/x-cbr": {
        source: "apache",
        extensions: ["cbr", "cba", "cbt", "cbz", "cb7"]
      },
      "application/x-cdlink": {
        source: "apache",
        extensions: ["vcd"]
      },
      "application/x-cfs-compressed": {
        source: "apache",
        extensions: ["cfs"]
      },
      "application/x-chat": {
        source: "apache",
        extensions: ["chat"]
      },
      "application/x-chess-pgn": {
        source: "apache",
        extensions: ["pgn"]
      },
      "application/x-chrome-extension": {
        extensions: ["crx"]
      },
      "application/x-cocoa": {
        source: "nginx",
        extensions: ["cco"]
      },
      "application/x-compress": {
        source: "apache"
      },
      "application/x-conference": {
        source: "apache",
        extensions: ["nsc"]
      },
      "application/x-cpio": {
        source: "apache",
        extensions: ["cpio"]
      },
      "application/x-csh": {
        source: "apache",
        extensions: ["csh"]
      },
      "application/x-deb": {
        compressible: false
      },
      "application/x-debian-package": {
        source: "apache",
        extensions: ["deb", "udeb"]
      },
      "application/x-dgc-compressed": {
        source: "apache",
        extensions: ["dgc"]
      },
      "application/x-director": {
        source: "apache",
        extensions: ["dir", "dcr", "dxr", "cst", "cct", "cxt", "w3d", "fgd", "swa"]
      },
      "application/x-doom": {
        source: "apache",
        extensions: ["wad"]
      },
      "application/x-dtbncx+xml": {
        source: "apache",
        compressible: true,
        extensions: ["ncx"]
      },
      "application/x-dtbook+xml": {
        source: "apache",
        compressible: true,
        extensions: ["dtb"]
      },
      "application/x-dtbresource+xml": {
        source: "apache",
        compressible: true,
        extensions: ["res"]
      },
      "application/x-dvi": {
        source: "apache",
        compressible: false,
        extensions: ["dvi"]
      },
      "application/x-envoy": {
        source: "apache",
        extensions: ["evy"]
      },
      "application/x-eva": {
        source: "apache",
        extensions: ["eva"]
      },
      "application/x-font-bdf": {
        source: "apache",
        extensions: ["bdf"]
      },
      "application/x-font-dos": {
        source: "apache"
      },
      "application/x-font-framemaker": {
        source: "apache"
      },
      "application/x-font-ghostscript": {
        source: "apache",
        extensions: ["gsf"]
      },
      "application/x-font-libgrx": {
        source: "apache"
      },
      "application/x-font-linux-psf": {
        source: "apache",
        extensions: ["psf"]
      },
      "application/x-font-pcf": {
        source: "apache",
        extensions: ["pcf"]
      },
      "application/x-font-snf": {
        source: "apache",
        extensions: ["snf"]
      },
      "application/x-font-speedo": {
        source: "apache"
      },
      "application/x-font-sunos-news": {
        source: "apache"
      },
      "application/x-font-type1": {
        source: "apache",
        extensions: ["pfa", "pfb", "pfm", "afm"]
      },
      "application/x-font-vfont": {
        source: "apache"
      },
      "application/x-freearc": {
        source: "apache",
        extensions: ["arc"]
      },
      "application/x-futuresplash": {
        source: "apache",
        extensions: ["spl"]
      },
      "application/x-gca-compressed": {
        source: "apache",
        extensions: ["gca"]
      },
      "application/x-glulx": {
        source: "apache",
        extensions: ["ulx"]
      },
      "application/x-gnumeric": {
        source: "apache",
        extensions: ["gnumeric"]
      },
      "application/x-gramps-xml": {
        source: "apache",
        extensions: ["gramps"]
      },
      "application/x-gtar": {
        source: "apache",
        extensions: ["gtar"]
      },
      "application/x-gzip": {
        source: "apache"
      },
      "application/x-hdf": {
        source: "apache",
        extensions: ["hdf"]
      },
      "application/x-httpd-php": {
        compressible: true,
        extensions: ["php"]
      },
      "application/x-install-instructions": {
        source: "apache",
        extensions: ["install"]
      },
      "application/x-iso9660-image": {
        source: "apache",
        extensions: ["iso"]
      },
      "application/x-iwork-keynote-sffkey": {
        extensions: ["key"]
      },
      "application/x-iwork-numbers-sffnumbers": {
        extensions: ["numbers"]
      },
      "application/x-iwork-pages-sffpages": {
        extensions: ["pages"]
      },
      "application/x-java-archive-diff": {
        source: "nginx",
        extensions: ["jardiff"]
      },
      "application/x-java-jnlp-file": {
        source: "apache",
        compressible: false,
        extensions: ["jnlp"]
      },
      "application/x-javascript": {
        compressible: true
      },
      "application/x-keepass2": {
        extensions: ["kdbx"]
      },
      "application/x-latex": {
        source: "apache",
        compressible: false,
        extensions: ["latex"]
      },
      "application/x-lua-bytecode": {
        extensions: ["luac"]
      },
      "application/x-lzh-compressed": {
        source: "apache",
        extensions: ["lzh", "lha"]
      },
      "application/x-makeself": {
        source: "nginx",
        extensions: ["run"]
      },
      "application/x-mie": {
        source: "apache",
        extensions: ["mie"]
      },
      "application/x-mobipocket-ebook": {
        source: "apache",
        extensions: ["prc", "mobi"]
      },
      "application/x-mpegurl": {
        compressible: false
      },
      "application/x-ms-application": {
        source: "apache",
        extensions: ["application"]
      },
      "application/x-ms-shortcut": {
        source: "apache",
        extensions: ["lnk"]
      },
      "application/x-ms-wmd": {
        source: "apache",
        extensions: ["wmd"]
      },
      "application/x-ms-wmz": {
        source: "apache",
        extensions: ["wmz"]
      },
      "application/x-ms-xbap": {
        source: "apache",
        extensions: ["xbap"]
      },
      "application/x-msaccess": {
        source: "apache",
        extensions: ["mdb"]
      },
      "application/x-msbinder": {
        source: "apache",
        extensions: ["obd"]
      },
      "application/x-mscardfile": {
        source: "apache",
        extensions: ["crd"]
      },
      "application/x-msclip": {
        source: "apache",
        extensions: ["clp"]
      },
      "application/x-msdos-program": {
        extensions: ["exe"]
      },
      "application/x-msdownload": {
        source: "apache",
        extensions: ["exe", "dll", "com", "bat", "msi"]
      },
      "application/x-msmediaview": {
        source: "apache",
        extensions: ["mvb", "m13", "m14"]
      },
      "application/x-msmetafile": {
        source: "apache",
        extensions: ["wmf", "wmz", "emf", "emz"]
      },
      "application/x-msmoney": {
        source: "apache",
        extensions: ["mny"]
      },
      "application/x-mspublisher": {
        source: "apache",
        extensions: ["pub"]
      },
      "application/x-msschedule": {
        source: "apache",
        extensions: ["scd"]
      },
      "application/x-msterminal": {
        source: "apache",
        extensions: ["trm"]
      },
      "application/x-mswrite": {
        source: "apache",
        extensions: ["wri"]
      },
      "application/x-netcdf": {
        source: "apache",
        extensions: ["nc", "cdf"]
      },
      "application/x-ns-proxy-autoconfig": {
        compressible: true,
        extensions: ["pac"]
      },
      "application/x-nzb": {
        source: "apache",
        extensions: ["nzb"]
      },
      "application/x-perl": {
        source: "nginx",
        extensions: ["pl", "pm"]
      },
      "application/x-pilot": {
        source: "nginx",
        extensions: ["prc", "pdb"]
      },
      "application/x-pkcs12": {
        source: "apache",
        compressible: false,
        extensions: ["p12", "pfx"]
      },
      "application/x-pkcs7-certificates": {
        source: "apache",
        extensions: ["p7b", "spc"]
      },
      "application/x-pkcs7-certreqresp": {
        source: "apache",
        extensions: ["p7r"]
      },
      "application/x-pki-message": {
        source: "iana"
      },
      "application/x-rar-compressed": {
        source: "apache",
        compressible: false,
        extensions: ["rar"]
      },
      "application/x-redhat-package-manager": {
        source: "nginx",
        extensions: ["rpm"]
      },
      "application/x-research-info-systems": {
        source: "apache",
        extensions: ["ris"]
      },
      "application/x-sea": {
        source: "nginx",
        extensions: ["sea"]
      },
      "application/x-sh": {
        source: "apache",
        compressible: true,
        extensions: ["sh"]
      },
      "application/x-shar": {
        source: "apache",
        extensions: ["shar"]
      },
      "application/x-shockwave-flash": {
        source: "apache",
        compressible: false,
        extensions: ["swf"]
      },
      "application/x-silverlight-app": {
        source: "apache",
        extensions: ["xap"]
      },
      "application/x-sql": {
        source: "apache",
        extensions: ["sql"]
      },
      "application/x-stuffit": {
        source: "apache",
        compressible: false,
        extensions: ["sit"]
      },
      "application/x-stuffitx": {
        source: "apache",
        extensions: ["sitx"]
      },
      "application/x-subrip": {
        source: "apache",
        extensions: ["srt"]
      },
      "application/x-sv4cpio": {
        source: "apache",
        extensions: ["sv4cpio"]
      },
      "application/x-sv4crc": {
        source: "apache",
        extensions: ["sv4crc"]
      },
      "application/x-t3vm-image": {
        source: "apache",
        extensions: ["t3"]
      },
      "application/x-tads": {
        source: "apache",
        extensions: ["gam"]
      },
      "application/x-tar": {
        source: "apache",
        compressible: true,
        extensions: ["tar"]
      },
      "application/x-tcl": {
        source: "apache",
        extensions: ["tcl", "tk"]
      },
      "application/x-tex": {
        source: "apache",
        extensions: ["tex"]
      },
      "application/x-tex-tfm": {
        source: "apache",
        extensions: ["tfm"]
      },
      "application/x-texinfo": {
        source: "apache",
        extensions: ["texinfo", "texi"]
      },
      "application/x-tgif": {
        source: "apache",
        extensions: ["obj"]
      },
      "application/x-ustar": {
        source: "apache",
        extensions: ["ustar"]
      },
      "application/x-virtualbox-hdd": {
        compressible: true,
        extensions: ["hdd"]
      },
      "application/x-virtualbox-ova": {
        compressible: true,
        extensions: ["ova"]
      },
      "application/x-virtualbox-ovf": {
        compressible: true,
        extensions: ["ovf"]
      },
      "application/x-virtualbox-vbox": {
        compressible: true,
        extensions: ["vbox"]
      },
      "application/x-virtualbox-vbox-extpack": {
        compressible: false,
        extensions: ["vbox-extpack"]
      },
      "application/x-virtualbox-vdi": {
        compressible: true,
        extensions: ["vdi"]
      },
      "application/x-virtualbox-vhd": {
        compressible: true,
        extensions: ["vhd"]
      },
      "application/x-virtualbox-vmdk": {
        compressible: true,
        extensions: ["vmdk"]
      },
      "application/x-wais-source": {
        source: "apache",
        extensions: ["src"]
      },
      "application/x-web-app-manifest+json": {
        compressible: true,
        extensions: ["webapp"]
      },
      "application/x-www-form-urlencoded": {
        source: "iana",
        compressible: true
      },
      "application/x-x509-ca-cert": {
        source: "iana",
        extensions: ["der", "crt", "pem"]
      },
      "application/x-x509-ca-ra-cert": {
        source: "iana"
      },
      "application/x-x509-next-ca-cert": {
        source: "iana"
      },
      "application/x-xfig": {
        source: "apache",
        extensions: ["fig"]
      },
      "application/x-xliff+xml": {
        source: "apache",
        compressible: true,
        extensions: ["xlf"]
      },
      "application/x-xpinstall": {
        source: "apache",
        compressible: false,
        extensions: ["xpi"]
      },
      "application/x-xz": {
        source: "apache",
        extensions: ["xz"]
      },
      "application/x-zmachine": {
        source: "apache",
        extensions: ["z1", "z2", "z3", "z4", "z5", "z6", "z7", "z8"]
      },
      "application/x400-bp": {
        source: "iana"
      },
      "application/xacml+xml": {
        source: "iana",
        compressible: true
      },
      "application/xaml+xml": {
        source: "apache",
        compressible: true,
        extensions: ["xaml"]
      },
      "application/xcap-att+xml": {
        source: "iana",
        compressible: true,
        extensions: ["xav"]
      },
      "application/xcap-caps+xml": {
        source: "iana",
        compressible: true,
        extensions: ["xca"]
      },
      "application/xcap-diff+xml": {
        source: "iana",
        compressible: true,
        extensions: ["xdf"]
      },
      "application/xcap-el+xml": {
        source: "iana",
        compressible: true,
        extensions: ["xel"]
      },
      "application/xcap-error+xml": {
        source: "iana",
        compressible: true
      },
      "application/xcap-ns+xml": {
        source: "iana",
        compressible: true,
        extensions: ["xns"]
      },
      "application/xcon-conference-info+xml": {
        source: "iana",
        compressible: true
      },
      "application/xcon-conference-info-diff+xml": {
        source: "iana",
        compressible: true
      },
      "application/xenc+xml": {
        source: "iana",
        compressible: true,
        extensions: ["xenc"]
      },
      "application/xhtml+xml": {
        source: "iana",
        compressible: true,
        extensions: ["xhtml", "xht"]
      },
      "application/xhtml-voice+xml": {
        source: "apache",
        compressible: true
      },
      "application/xliff+xml": {
        source: "iana",
        compressible: true,
        extensions: ["xlf"]
      },
      "application/xml": {
        source: "iana",
        compressible: true,
        extensions: ["xml", "xsl", "xsd", "rng"]
      },
      "application/xml-dtd": {
        source: "iana",
        compressible: true,
        extensions: ["dtd"]
      },
      "application/xml-external-parsed-entity": {
        source: "iana"
      },
      "application/xml-patch+xml": {
        source: "iana",
        compressible: true
      },
      "application/xmpp+xml": {
        source: "iana",
        compressible: true
      },
      "application/xop+xml": {
        source: "iana",
        compressible: true,
        extensions: ["xop"]
      },
      "application/xproc+xml": {
        source: "apache",
        compressible: true,
        extensions: ["xpl"]
      },
      "application/xslt+xml": {
        source: "iana",
        compressible: true,
        extensions: ["xsl", "xslt"]
      },
      "application/xspf+xml": {
        source: "apache",
        compressible: true,
        extensions: ["xspf"]
      },
      "application/xv+xml": {
        source: "iana",
        compressible: true,
        extensions: ["mxml", "xhvml", "xvml", "xvm"]
      },
      "application/yang": {
        source: "iana",
        extensions: ["yang"]
      },
      "application/yang-data+json": {
        source: "iana",
        compressible: true
      },
      "application/yang-data+xml": {
        source: "iana",
        compressible: true
      },
      "application/yang-patch+json": {
        source: "iana",
        compressible: true
      },
      "application/yang-patch+xml": {
        source: "iana",
        compressible: true
      },
      "application/yin+xml": {
        source: "iana",
        compressible: true,
        extensions: ["yin"]
      },
      "application/zip": {
        source: "iana",
        compressible: false,
        extensions: ["zip"]
      },
      "application/zlib": {
        source: "iana"
      },
      "application/zstd": {
        source: "iana"
      },
      "audio/1d-interleaved-parityfec": {
        source: "iana"
      },
      "audio/32kadpcm": {
        source: "iana"
      },
      "audio/3gpp": {
        source: "iana",
        compressible: false,
        extensions: ["3gpp"]
      },
      "audio/3gpp2": {
        source: "iana"
      },
      "audio/aac": {
        source: "iana"
      },
      "audio/ac3": {
        source: "iana"
      },
      "audio/adpcm": {
        source: "apache",
        extensions: ["adp"]
      },
      "audio/amr": {
        source: "iana",
        extensions: ["amr"]
      },
      "audio/amr-wb": {
        source: "iana"
      },
      "audio/amr-wb+": {
        source: "iana"
      },
      "audio/aptx": {
        source: "iana"
      },
      "audio/asc": {
        source: "iana"
      },
      "audio/atrac-advanced-lossless": {
        source: "iana"
      },
      "audio/atrac-x": {
        source: "iana"
      },
      "audio/atrac3": {
        source: "iana"
      },
      "audio/basic": {
        source: "iana",
        compressible: false,
        extensions: ["au", "snd"]
      },
      "audio/bv16": {
        source: "iana"
      },
      "audio/bv32": {
        source: "iana"
      },
      "audio/clearmode": {
        source: "iana"
      },
      "audio/cn": {
        source: "iana"
      },
      "audio/dat12": {
        source: "iana"
      },
      "audio/dls": {
        source: "iana"
      },
      "audio/dsr-es201108": {
        source: "iana"
      },
      "audio/dsr-es202050": {
        source: "iana"
      },
      "audio/dsr-es202211": {
        source: "iana"
      },
      "audio/dsr-es202212": {
        source: "iana"
      },
      "audio/dv": {
        source: "iana"
      },
      "audio/dvi4": {
        source: "iana"
      },
      "audio/eac3": {
        source: "iana"
      },
      "audio/encaprtp": {
        source: "iana"
      },
      "audio/evrc": {
        source: "iana"
      },
      "audio/evrc-qcp": {
        source: "iana"
      },
      "audio/evrc0": {
        source: "iana"
      },
      "audio/evrc1": {
        source: "iana"
      },
      "audio/evrcb": {
        source: "iana"
      },
      "audio/evrcb0": {
        source: "iana"
      },
      "audio/evrcb1": {
        source: "iana"
      },
      "audio/evrcnw": {
        source: "iana"
      },
      "audio/evrcnw0": {
        source: "iana"
      },
      "audio/evrcnw1": {
        source: "iana"
      },
      "audio/evrcwb": {
        source: "iana"
      },
      "audio/evrcwb0": {
        source: "iana"
      },
      "audio/evrcwb1": {
        source: "iana"
      },
      "audio/evs": {
        source: "iana"
      },
      "audio/flexfec": {
        source: "iana"
      },
      "audio/fwdred": {
        source: "iana"
      },
      "audio/g711-0": {
        source: "iana"
      },
      "audio/g719": {
        source: "iana"
      },
      "audio/g722": {
        source: "iana"
      },
      "audio/g7221": {
        source: "iana"
      },
      "audio/g723": {
        source: "iana"
      },
      "audio/g726-16": {
        source: "iana"
      },
      "audio/g726-24": {
        source: "iana"
      },
      "audio/g726-32": {
        source: "iana"
      },
      "audio/g726-40": {
        source: "iana"
      },
      "audio/g728": {
        source: "iana"
      },
      "audio/g729": {
        source: "iana"
      },
      "audio/g7291": {
        source: "iana"
      },
      "audio/g729d": {
        source: "iana"
      },
      "audio/g729e": {
        source: "iana"
      },
      "audio/gsm": {
        source: "iana"
      },
      "audio/gsm-efr": {
        source: "iana"
      },
      "audio/gsm-hr-08": {
        source: "iana"
      },
      "audio/ilbc": {
        source: "iana"
      },
      "audio/ip-mr_v2.5": {
        source: "iana"
      },
      "audio/isac": {
        source: "apache"
      },
      "audio/l16": {
        source: "iana"
      },
      "audio/l20": {
        source: "iana"
      },
      "audio/l24": {
        source: "iana",
        compressible: false
      },
      "audio/l8": {
        source: "iana"
      },
      "audio/lpc": {
        source: "iana"
      },
      "audio/melp": {
        source: "iana"
      },
      "audio/melp1200": {
        source: "iana"
      },
      "audio/melp2400": {
        source: "iana"
      },
      "audio/melp600": {
        source: "iana"
      },
      "audio/mhas": {
        source: "iana"
      },
      "audio/midi": {
        source: "apache",
        extensions: ["mid", "midi", "kar", "rmi"]
      },
      "audio/mobile-xmf": {
        source: "iana",
        extensions: ["mxmf"]
      },
      "audio/mp3": {
        compressible: false,
        extensions: ["mp3"]
      },
      "audio/mp4": {
        source: "iana",
        compressible: false,
        extensions: ["m4a", "mp4a"]
      },
      "audio/mp4a-latm": {
        source: "iana"
      },
      "audio/mpa": {
        source: "iana"
      },
      "audio/mpa-robust": {
        source: "iana"
      },
      "audio/mpeg": {
        source: "iana",
        compressible: false,
        extensions: ["mpga", "mp2", "mp2a", "mp3", "m2a", "m3a"]
      },
      "audio/mpeg4-generic": {
        source: "iana"
      },
      "audio/musepack": {
        source: "apache"
      },
      "audio/ogg": {
        source: "iana",
        compressible: false,
        extensions: ["oga", "ogg", "spx", "opus"]
      },
      "audio/opus": {
        source: "iana"
      },
      "audio/parityfec": {
        source: "iana"
      },
      "audio/pcma": {
        source: "iana"
      },
      "audio/pcma-wb": {
        source: "iana"
      },
      "audio/pcmu": {
        source: "iana"
      },
      "audio/pcmu-wb": {
        source: "iana"
      },
      "audio/prs.sid": {
        source: "iana"
      },
      "audio/qcelp": {
        source: "iana"
      },
      "audio/raptorfec": {
        source: "iana"
      },
      "audio/red": {
        source: "iana"
      },
      "audio/rtp-enc-aescm128": {
        source: "iana"
      },
      "audio/rtp-midi": {
        source: "iana"
      },
      "audio/rtploopback": {
        source: "iana"
      },
      "audio/rtx": {
        source: "iana"
      },
      "audio/s3m": {
        source: "apache",
        extensions: ["s3m"]
      },
      "audio/scip": {
        source: "iana"
      },
      "audio/silk": {
        source: "apache",
        extensions: ["sil"]
      },
      "audio/smv": {
        source: "iana"
      },
      "audio/smv-qcp": {
        source: "iana"
      },
      "audio/smv0": {
        source: "iana"
      },
      "audio/sofa": {
        source: "iana"
      },
      "audio/sp-midi": {
        source: "iana"
      },
      "audio/speex": {
        source: "iana"
      },
      "audio/t140c": {
        source: "iana"
      },
      "audio/t38": {
        source: "iana"
      },
      "audio/telephone-event": {
        source: "iana"
      },
      "audio/tetra_acelp": {
        source: "iana"
      },
      "audio/tetra_acelp_bb": {
        source: "iana"
      },
      "audio/tone": {
        source: "iana"
      },
      "audio/tsvcis": {
        source: "iana"
      },
      "audio/uemclip": {
        source: "iana"
      },
      "audio/ulpfec": {
        source: "iana"
      },
      "audio/usac": {
        source: "iana"
      },
      "audio/vdvi": {
        source: "iana"
      },
      "audio/vmr-wb": {
        source: "iana"
      },
      "audio/vnd.3gpp.iufp": {
        source: "iana"
      },
      "audio/vnd.4sb": {
        source: "iana"
      },
      "audio/vnd.audiokoz": {
        source: "iana"
      },
      "audio/vnd.celp": {
        source: "iana"
      },
      "audio/vnd.cisco.nse": {
        source: "iana"
      },
      "audio/vnd.cmles.radio-events": {
        source: "iana"
      },
      "audio/vnd.cns.anp1": {
        source: "iana"
      },
      "audio/vnd.cns.inf1": {
        source: "iana"
      },
      "audio/vnd.dece.audio": {
        source: "iana",
        extensions: ["uva", "uvva"]
      },
      "audio/vnd.digital-winds": {
        source: "iana",
        extensions: ["eol"]
      },
      "audio/vnd.dlna.adts": {
        source: "iana"
      },
      "audio/vnd.dolby.heaac.1": {
        source: "iana"
      },
      "audio/vnd.dolby.heaac.2": {
        source: "iana"
      },
      "audio/vnd.dolby.mlp": {
        source: "iana"
      },
      "audio/vnd.dolby.mps": {
        source: "iana"
      },
      "audio/vnd.dolby.pl2": {
        source: "iana"
      },
      "audio/vnd.dolby.pl2x": {
        source: "iana"
      },
      "audio/vnd.dolby.pl2z": {
        source: "iana"
      },
      "audio/vnd.dolby.pulse.1": {
        source: "iana"
      },
      "audio/vnd.dra": {
        source: "iana",
        extensions: ["dra"]
      },
      "audio/vnd.dts": {
        source: "iana",
        extensions: ["dts"]
      },
      "audio/vnd.dts.hd": {
        source: "iana",
        extensions: ["dtshd"]
      },
      "audio/vnd.dts.uhd": {
        source: "iana"
      },
      "audio/vnd.dvb.file": {
        source: "iana"
      },
      "audio/vnd.everad.plj": {
        source: "iana"
      },
      "audio/vnd.hns.audio": {
        source: "iana"
      },
      "audio/vnd.lucent.voice": {
        source: "iana",
        extensions: ["lvp"]
      },
      "audio/vnd.ms-playready.media.pya": {
        source: "iana",
        extensions: ["pya"]
      },
      "audio/vnd.nokia.mobile-xmf": {
        source: "iana"
      },
      "audio/vnd.nortel.vbk": {
        source: "iana"
      },
      "audio/vnd.nuera.ecelp4800": {
        source: "iana",
        extensions: ["ecelp4800"]
      },
      "audio/vnd.nuera.ecelp7470": {
        source: "iana",
        extensions: ["ecelp7470"]
      },
      "audio/vnd.nuera.ecelp9600": {
        source: "iana",
        extensions: ["ecelp9600"]
      },
      "audio/vnd.octel.sbc": {
        source: "iana"
      },
      "audio/vnd.presonus.multitrack": {
        source: "iana"
      },
      "audio/vnd.qcelp": {
        source: "iana"
      },
      "audio/vnd.rhetorex.32kadpcm": {
        source: "iana"
      },
      "audio/vnd.rip": {
        source: "iana",
        extensions: ["rip"]
      },
      "audio/vnd.rn-realaudio": {
        compressible: false
      },
      "audio/vnd.sealedmedia.softseal.mpeg": {
        source: "iana"
      },
      "audio/vnd.vmx.cvsd": {
        source: "iana"
      },
      "audio/vnd.wave": {
        compressible: false
      },
      "audio/vorbis": {
        source: "iana",
        compressible: false
      },
      "audio/vorbis-config": {
        source: "iana"
      },
      "audio/wav": {
        compressible: false,
        extensions: ["wav"]
      },
      "audio/wave": {
        compressible: false,
        extensions: ["wav"]
      },
      "audio/webm": {
        source: "apache",
        compressible: false,
        extensions: ["weba"]
      },
      "audio/x-aac": {
        source: "apache",
        compressible: false,
        extensions: ["aac"]
      },
      "audio/x-aiff": {
        source: "apache",
        extensions: ["aif", "aiff", "aifc"]
      },
      "audio/x-caf": {
        source: "apache",
        compressible: false,
        extensions: ["caf"]
      },
      "audio/x-flac": {
        source: "apache",
        extensions: ["flac"]
      },
      "audio/x-m4a": {
        source: "nginx",
        extensions: ["m4a"]
      },
      "audio/x-matroska": {
        source: "apache",
        extensions: ["mka"]
      },
      "audio/x-mpegurl": {
        source: "apache",
        extensions: ["m3u"]
      },
      "audio/x-ms-wax": {
        source: "apache",
        extensions: ["wax"]
      },
      "audio/x-ms-wma": {
        source: "apache",
        extensions: ["wma"]
      },
      "audio/x-pn-realaudio": {
        source: "apache",
        extensions: ["ram", "ra"]
      },
      "audio/x-pn-realaudio-plugin": {
        source: "apache",
        extensions: ["rmp"]
      },
      "audio/x-realaudio": {
        source: "nginx",
        extensions: ["ra"]
      },
      "audio/x-tta": {
        source: "apache"
      },
      "audio/x-wav": {
        source: "apache",
        extensions: ["wav"]
      },
      "audio/xm": {
        source: "apache",
        extensions: ["xm"]
      },
      "chemical/x-cdx": {
        source: "apache",
        extensions: ["cdx"]
      },
      "chemical/x-cif": {
        source: "apache",
        extensions: ["cif"]
      },
      "chemical/x-cmdf": {
        source: "apache",
        extensions: ["cmdf"]
      },
      "chemical/x-cml": {
        source: "apache",
        extensions: ["cml"]
      },
      "chemical/x-csml": {
        source: "apache",
        extensions: ["csml"]
      },
      "chemical/x-pdb": {
        source: "apache"
      },
      "chemical/x-xyz": {
        source: "apache",
        extensions: ["xyz"]
      },
      "font/collection": {
        source: "iana",
        extensions: ["ttc"]
      },
      "font/otf": {
        source: "iana",
        compressible: true,
        extensions: ["otf"]
      },
      "font/sfnt": {
        source: "iana"
      },
      "font/ttf": {
        source: "iana",
        compressible: true,
        extensions: ["ttf"]
      },
      "font/woff": {
        source: "iana",
        extensions: ["woff"]
      },
      "font/woff2": {
        source: "iana",
        extensions: ["woff2"]
      },
      "image/aces": {
        source: "iana",
        extensions: ["exr"]
      },
      "image/apng": {
        compressible: false,
        extensions: ["apng"]
      },
      "image/avci": {
        source: "iana"
      },
      "image/avcs": {
        source: "iana"
      },
      "image/avif": {
        source: "iana",
        compressible: false,
        extensions: ["avif"]
      },
      "image/bmp": {
        source: "iana",
        compressible: true,
        extensions: ["bmp"]
      },
      "image/cgm": {
        source: "iana",
        extensions: ["cgm"]
      },
      "image/dicom-rle": {
        source: "iana",
        extensions: ["drle"]
      },
      "image/emf": {
        source: "iana",
        extensions: ["emf"]
      },
      "image/fits": {
        source: "iana",
        extensions: ["fits"]
      },
      "image/g3fax": {
        source: "iana",
        extensions: ["g3"]
      },
      "image/gif": {
        source: "iana",
        compressible: false,
        extensions: ["gif"]
      },
      "image/heic": {
        source: "iana",
        extensions: ["heic"]
      },
      "image/heic-sequence": {
        source: "iana",
        extensions: ["heics"]
      },
      "image/heif": {
        source: "iana",
        extensions: ["heif"]
      },
      "image/heif-sequence": {
        source: "iana",
        extensions: ["heifs"]
      },
      "image/hej2k": {
        source: "iana",
        extensions: ["hej2"]
      },
      "image/hsj2": {
        source: "iana",
        extensions: ["hsj2"]
      },
      "image/ief": {
        source: "iana",
        extensions: ["ief"]
      },
      "image/jls": {
        source: "iana",
        extensions: ["jls"]
      },
      "image/jp2": {
        source: "iana",
        compressible: false,
        extensions: ["jp2", "jpg2"]
      },
      "image/jpeg": {
        source: "iana",
        compressible: false,
        extensions: ["jpeg", "jpg", "jpe"]
      },
      "image/jph": {
        source: "iana",
        extensions: ["jph"]
      },
      "image/jphc": {
        source: "iana",
        extensions: ["jhc"]
      },
      "image/jpm": {
        source: "iana",
        compressible: false,
        extensions: ["jpm"]
      },
      "image/jpx": {
        source: "iana",
        compressible: false,
        extensions: ["jpx", "jpf"]
      },
      "image/jxr": {
        source: "iana",
        extensions: ["jxr"]
      },
      "image/jxra": {
        source: "iana",
        extensions: ["jxra"]
      },
      "image/jxrs": {
        source: "iana",
        extensions: ["jxrs"]
      },
      "image/jxs": {
        source: "iana",
        extensions: ["jxs"]
      },
      "image/jxsc": {
        source: "iana",
        extensions: ["jxsc"]
      },
      "image/jxsi": {
        source: "iana",
        extensions: ["jxsi"]
      },
      "image/jxss": {
        source: "iana",
        extensions: ["jxss"]
      },
      "image/ktx": {
        source: "iana",
        extensions: ["ktx"]
      },
      "image/ktx2": {
        source: "iana",
        extensions: ["ktx2"]
      },
      "image/naplps": {
        source: "iana"
      },
      "image/pjpeg": {
        compressible: false
      },
      "image/png": {
        source: "iana",
        compressible: false,
        extensions: ["png"]
      },
      "image/prs.btif": {
        source: "iana",
        extensions: ["btif"]
      },
      "image/prs.pti": {
        source: "iana",
        extensions: ["pti"]
      },
      "image/pwg-raster": {
        source: "iana"
      },
      "image/sgi": {
        source: "apache",
        extensions: ["sgi"]
      },
      "image/svg+xml": {
        source: "iana",
        compressible: true,
        extensions: ["svg", "svgz"]
      },
      "image/t38": {
        source: "iana",
        extensions: ["t38"]
      },
      "image/tiff": {
        source: "iana",
        compressible: false,
        extensions: ["tif", "tiff"]
      },
      "image/tiff-fx": {
        source: "iana",
        extensions: ["tfx"]
      },
      "image/vnd.adobe.photoshop": {
        source: "iana",
        compressible: true,
        extensions: ["psd"]
      },
      "image/vnd.airzip.accelerator.azv": {
        source: "iana",
        extensions: ["azv"]
      },
      "image/vnd.cns.inf2": {
        source: "iana"
      },
      "image/vnd.dece.graphic": {
        source: "iana",
        extensions: ["uvi", "uvvi", "uvg", "uvvg"]
      },
      "image/vnd.djvu": {
        source: "iana",
        extensions: ["djvu", "djv"]
      },
      "image/vnd.dvb.subtitle": {
        source: "iana",
        extensions: ["sub"]
      },
      "image/vnd.dwg": {
        source: "iana",
        extensions: ["dwg"]
      },
      "image/vnd.dxf": {
        source: "iana",
        extensions: ["dxf"]
      },
      "image/vnd.fastbidsheet": {
        source: "iana",
        extensions: ["fbs"]
      },
      "image/vnd.fpx": {
        source: "iana",
        extensions: ["fpx"]
      },
      "image/vnd.fst": {
        source: "iana",
        extensions: ["fst"]
      },
      "image/vnd.fujixerox.edmics-mmr": {
        source: "iana",
        extensions: ["mmr"]
      },
      "image/vnd.fujixerox.edmics-rlc": {
        source: "iana",
        extensions: ["rlc"]
      },
      "image/vnd.globalgraphics.pgb": {
        source: "iana"
      },
      "image/vnd.microsoft.icon": {
        source: "iana",
        compressible: true,
        extensions: ["ico"]
      },
      "image/vnd.mix": {
        source: "iana"
      },
      "image/vnd.mozilla.apng": {
        source: "iana"
      },
      "image/vnd.ms-dds": {
        compressible: true,
        extensions: ["dds"]
      },
      "image/vnd.ms-modi": {
        source: "iana",
        extensions: ["mdi"]
      },
      "image/vnd.ms-photo": {
        source: "apache",
        extensions: ["wdp"]
      },
      "image/vnd.net-fpx": {
        source: "iana",
        extensions: ["npx"]
      },
      "image/vnd.pco.b16": {
        source: "iana",
        extensions: ["b16"]
      },
      "image/vnd.radiance": {
        source: "iana"
      },
      "image/vnd.sealed.png": {
        source: "iana"
      },
      "image/vnd.sealedmedia.softseal.gif": {
        source: "iana"
      },
      "image/vnd.sealedmedia.softseal.jpg": {
        source: "iana"
      },
      "image/vnd.svf": {
        source: "iana"
      },
      "image/vnd.tencent.tap": {
        source: "iana",
        extensions: ["tap"]
      },
      "image/vnd.valve.source.texture": {
        source: "iana",
        extensions: ["vtf"]
      },
      "image/vnd.wap.wbmp": {
        source: "iana",
        extensions: ["wbmp"]
      },
      "image/vnd.xiff": {
        source: "iana",
        extensions: ["xif"]
      },
      "image/vnd.zbrush.pcx": {
        source: "iana",
        extensions: ["pcx"]
      },
      "image/webp": {
        source: "apache",
        extensions: ["webp"]
      },
      "image/wmf": {
        source: "iana",
        extensions: ["wmf"]
      },
      "image/x-3ds": {
        source: "apache",
        extensions: ["3ds"]
      },
      "image/x-cmu-raster": {
        source: "apache",
        extensions: ["ras"]
      },
      "image/x-cmx": {
        source: "apache",
        extensions: ["cmx"]
      },
      "image/x-freehand": {
        source: "apache",
        extensions: ["fh", "fhc", "fh4", "fh5", "fh7"]
      },
      "image/x-icon": {
        source: "apache",
        compressible: true,
        extensions: ["ico"]
      },
      "image/x-jng": {
        source: "nginx",
        extensions: ["jng"]
      },
      "image/x-mrsid-image": {
        source: "apache",
        extensions: ["sid"]
      },
      "image/x-ms-bmp": {
        source: "nginx",
        compressible: true,
        extensions: ["bmp"]
      },
      "image/x-pcx": {
        source: "apache",
        extensions: ["pcx"]
      },
      "image/x-pict": {
        source: "apache",
        extensions: ["pic", "pct"]
      },
      "image/x-portable-anymap": {
        source: "apache",
        extensions: ["pnm"]
      },
      "image/x-portable-bitmap": {
        source: "apache",
        extensions: ["pbm"]
      },
      "image/x-portable-graymap": {
        source: "apache",
        extensions: ["pgm"]
      },
      "image/x-portable-pixmap": {
        source: "apache",
        extensions: ["ppm"]
      },
      "image/x-rgb": {
        source: "apache",
        extensions: ["rgb"]
      },
      "image/x-tga": {
        source: "apache",
        extensions: ["tga"]
      },
      "image/x-xbitmap": {
        source: "apache",
        extensions: ["xbm"]
      },
      "image/x-xcf": {
        compressible: false
      },
      "image/x-xpixmap": {
        source: "apache",
        extensions: ["xpm"]
      },
      "image/x-xwindowdump": {
        source: "apache",
        extensions: ["xwd"]
      },
      "message/cpim": {
        source: "iana"
      },
      "message/delivery-status": {
        source: "iana"
      },
      "message/disposition-notification": {
        source: "iana",
        extensions: [
          "disposition-notification"
        ]
      },
      "message/external-body": {
        source: "iana"
      },
      "message/feedback-report": {
        source: "iana"
      },
      "message/global": {
        source: "iana",
        extensions: ["u8msg"]
      },
      "message/global-delivery-status": {
        source: "iana",
        extensions: ["u8dsn"]
      },
      "message/global-disposition-notification": {
        source: "iana",
        extensions: ["u8mdn"]
      },
      "message/global-headers": {
        source: "iana",
        extensions: ["u8hdr"]
      },
      "message/http": {
        source: "iana",
        compressible: false
      },
      "message/imdn+xml": {
        source: "iana",
        compressible: true
      },
      "message/news": {
        source: "iana"
      },
      "message/partial": {
        source: "iana",
        compressible: false
      },
      "message/rfc822": {
        source: "iana",
        compressible: true,
        extensions: ["eml", "mime"]
      },
      "message/s-http": {
        source: "iana"
      },
      "message/sip": {
        source: "iana"
      },
      "message/sipfrag": {
        source: "iana"
      },
      "message/tracking-status": {
        source: "iana"
      },
      "message/vnd.si.simp": {
        source: "iana"
      },
      "message/vnd.wfa.wsc": {
        source: "iana",
        extensions: ["wsc"]
      },
      "model/3mf": {
        source: "iana",
        extensions: ["3mf"]
      },
      "model/e57": {
        source: "iana"
      },
      "model/gltf+json": {
        source: "iana",
        compressible: true,
        extensions: ["gltf"]
      },
      "model/gltf-binary": {
        source: "iana",
        compressible: true,
        extensions: ["glb"]
      },
      "model/iges": {
        source: "iana",
        compressible: false,
        extensions: ["igs", "iges"]
      },
      "model/mesh": {
        source: "iana",
        compressible: false,
        extensions: ["msh", "mesh", "silo"]
      },
      "model/mtl": {
        source: "iana",
        extensions: ["mtl"]
      },
      "model/obj": {
        source: "iana",
        extensions: ["obj"]
      },
      "model/step": {
        source: "iana"
      },
      "model/step+xml": {
        source: "iana",
        compressible: true,
        extensions: ["stpx"]
      },
      "model/step+zip": {
        source: "iana",
        compressible: false,
        extensions: ["stpz"]
      },
      "model/step-xml+zip": {
        source: "iana",
        compressible: false,
        extensions: ["stpxz"]
      },
      "model/stl": {
        source: "iana",
        extensions: ["stl"]
      },
      "model/vnd.collada+xml": {
        source: "iana",
        compressible: true,
        extensions: ["dae"]
      },
      "model/vnd.dwf": {
        source: "iana",
        extensions: ["dwf"]
      },
      "model/vnd.flatland.3dml": {
        source: "iana"
      },
      "model/vnd.gdl": {
        source: "iana",
        extensions: ["gdl"]
      },
      "model/vnd.gs-gdl": {
        source: "apache"
      },
      "model/vnd.gs.gdl": {
        source: "iana"
      },
      "model/vnd.gtw": {
        source: "iana",
        extensions: ["gtw"]
      },
      "model/vnd.moml+xml": {
        source: "iana",
        compressible: true
      },
      "model/vnd.mts": {
        source: "iana",
        extensions: ["mts"]
      },
      "model/vnd.opengex": {
        source: "iana",
        extensions: ["ogex"]
      },
      "model/vnd.parasolid.transmit.binary": {
        source: "iana",
        extensions: ["x_b"]
      },
      "model/vnd.parasolid.transmit.text": {
        source: "iana",
        extensions: ["x_t"]
      },
      "model/vnd.pytha.pyox": {
        source: "iana"
      },
      "model/vnd.rosette.annotated-data-model": {
        source: "iana"
      },
      "model/vnd.sap.vds": {
        source: "iana",
        extensions: ["vds"]
      },
      "model/vnd.usdz+zip": {
        source: "iana",
        compressible: false,
        extensions: ["usdz"]
      },
      "model/vnd.valve.source.compiled-map": {
        source: "iana",
        extensions: ["bsp"]
      },
      "model/vnd.vtu": {
        source: "iana",
        extensions: ["vtu"]
      },
      "model/vrml": {
        source: "iana",
        compressible: false,
        extensions: ["wrl", "vrml"]
      },
      "model/x3d+binary": {
        source: "apache",
        compressible: false,
        extensions: ["x3db", "x3dbz"]
      },
      "model/x3d+fastinfoset": {
        source: "iana",
        extensions: ["x3db"]
      },
      "model/x3d+vrml": {
        source: "apache",
        compressible: false,
        extensions: ["x3dv", "x3dvz"]
      },
      "model/x3d+xml": {
        source: "iana",
        compressible: true,
        extensions: ["x3d", "x3dz"]
      },
      "model/x3d-vrml": {
        source: "iana",
        extensions: ["x3dv"]
      },
      "multipart/alternative": {
        source: "iana",
        compressible: false
      },
      "multipart/appledouble": {
        source: "iana"
      },
      "multipart/byteranges": {
        source: "iana"
      },
      "multipart/digest": {
        source: "iana"
      },
      "multipart/encrypted": {
        source: "iana",
        compressible: false
      },
      "multipart/form-data": {
        source: "iana",
        compressible: false
      },
      "multipart/header-set": {
        source: "iana"
      },
      "multipart/mixed": {
        source: "iana"
      },
      "multipart/multilingual": {
        source: "iana"
      },
      "multipart/parallel": {
        source: "iana"
      },
      "multipart/related": {
        source: "iana",
        compressible: false
      },
      "multipart/report": {
        source: "iana"
      },
      "multipart/signed": {
        source: "iana",
        compressible: false
      },
      "multipart/vnd.bint.med-plus": {
        source: "iana"
      },
      "multipart/voice-message": {
        source: "iana"
      },
      "multipart/x-mixed-replace": {
        source: "iana"
      },
      "text/1d-interleaved-parityfec": {
        source: "iana"
      },
      "text/cache-manifest": {
        source: "iana",
        compressible: true,
        extensions: ["appcache", "manifest"]
      },
      "text/calendar": {
        source: "iana",
        extensions: ["ics", "ifb"]
      },
      "text/calender": {
        compressible: true
      },
      "text/cmd": {
        compressible: true
      },
      "text/coffeescript": {
        extensions: ["coffee", "litcoffee"]
      },
      "text/cql": {
        source: "iana"
      },
      "text/cql-expression": {
        source: "iana"
      },
      "text/cql-identifier": {
        source: "iana"
      },
      "text/css": {
        source: "iana",
        charset: "UTF-8",
        compressible: true,
        extensions: ["css"]
      },
      "text/csv": {
        source: "iana",
        compressible: true,
        extensions: ["csv"]
      },
      "text/csv-schema": {
        source: "iana"
      },
      "text/directory": {
        source: "iana"
      },
      "text/dns": {
        source: "iana"
      },
      "text/ecmascript": {
        source: "iana"
      },
      "text/encaprtp": {
        source: "iana"
      },
      "text/enriched": {
        source: "iana"
      },
      "text/fhirpath": {
        source: "iana"
      },
      "text/flexfec": {
        source: "iana"
      },
      "text/fwdred": {
        source: "iana"
      },
      "text/gff3": {
        source: "iana"
      },
      "text/grammar-ref-list": {
        source: "iana"
      },
      "text/html": {
        source: "iana",
        compressible: true,
        extensions: ["html", "htm", "shtml"]
      },
      "text/jade": {
        extensions: ["jade"]
      },
      "text/javascript": {
        source: "iana",
        compressible: true
      },
      "text/jcr-cnd": {
        source: "iana"
      },
      "text/jsx": {
        compressible: true,
        extensions: ["jsx"]
      },
      "text/less": {
        compressible: true,
        extensions: ["less"]
      },
      "text/markdown": {
        source: "iana",
        compressible: true,
        extensions: ["markdown", "md"]
      },
      "text/mathml": {
        source: "nginx",
        extensions: ["mml"]
      },
      "text/mdx": {
        compressible: true,
        extensions: ["mdx"]
      },
      "text/mizar": {
        source: "iana"
      },
      "text/n3": {
        source: "iana",
        charset: "UTF-8",
        compressible: true,
        extensions: ["n3"]
      },
      "text/parameters": {
        source: "iana",
        charset: "UTF-8"
      },
      "text/parityfec": {
        source: "iana"
      },
      "text/plain": {
        source: "iana",
        compressible: true,
        extensions: ["txt", "text", "conf", "def", "list", "log", "in", "ini"]
      },
      "text/provenance-notation": {
        source: "iana",
        charset: "UTF-8"
      },
      "text/prs.fallenstein.rst": {
        source: "iana"
      },
      "text/prs.lines.tag": {
        source: "iana",
        extensions: ["dsc"]
      },
      "text/prs.prop.logic": {
        source: "iana"
      },
      "text/raptorfec": {
        source: "iana"
      },
      "text/red": {
        source: "iana"
      },
      "text/rfc822-headers": {
        source: "iana"
      },
      "text/richtext": {
        source: "iana",
        compressible: true,
        extensions: ["rtx"]
      },
      "text/rtf": {
        source: "iana",
        compressible: true,
        extensions: ["rtf"]
      },
      "text/rtp-enc-aescm128": {
        source: "iana"
      },
      "text/rtploopback": {
        source: "iana"
      },
      "text/rtx": {
        source: "iana"
      },
      "text/sgml": {
        source: "iana",
        extensions: ["sgml", "sgm"]
      },
      "text/shaclc": {
        source: "iana"
      },
      "text/shex": {
        source: "iana",
        extensions: ["shex"]
      },
      "text/slim": {
        extensions: ["slim", "slm"]
      },
      "text/spdx": {
        source: "iana",
        extensions: ["spdx"]
      },
      "text/strings": {
        source: "iana"
      },
      "text/stylus": {
        extensions: ["stylus", "styl"]
      },
      "text/t140": {
        source: "iana"
      },
      "text/tab-separated-values": {
        source: "iana",
        compressible: true,
        extensions: ["tsv"]
      },
      "text/troff": {
        source: "iana",
        extensions: ["t", "tr", "roff", "man", "me", "ms"]
      },
      "text/turtle": {
        source: "iana",
        charset: "UTF-8",
        extensions: ["ttl"]
      },
      "text/ulpfec": {
        source: "iana"
      },
      "text/uri-list": {
        source: "iana",
        compressible: true,
        extensions: ["uri", "uris", "urls"]
      },
      "text/vcard": {
        source: "iana",
        compressible: true,
        extensions: ["vcard"]
      },
      "text/vnd.a": {
        source: "iana"
      },
      "text/vnd.abc": {
        source: "iana"
      },
      "text/vnd.ascii-art": {
        source: "iana"
      },
      "text/vnd.curl": {
        source: "iana",
        extensions: ["curl"]
      },
      "text/vnd.curl.dcurl": {
        source: "apache",
        extensions: ["dcurl"]
      },
      "text/vnd.curl.mcurl": {
        source: "apache",
        extensions: ["mcurl"]
      },
      "text/vnd.curl.scurl": {
        source: "apache",
        extensions: ["scurl"]
      },
      "text/vnd.debian.copyright": {
        source: "iana",
        charset: "UTF-8"
      },
      "text/vnd.dmclientscript": {
        source: "iana"
      },
      "text/vnd.dvb.subtitle": {
        source: "iana",
        extensions: ["sub"]
      },
      "text/vnd.esmertec.theme-descriptor": {
        source: "iana",
        charset: "UTF-8"
      },
      "text/vnd.familysearch.gedcom": {
        source: "iana",
        extensions: ["ged"]
      },
      "text/vnd.ficlab.flt": {
        source: "iana"
      },
      "text/vnd.fly": {
        source: "iana",
        extensions: ["fly"]
      },
      "text/vnd.fmi.flexstor": {
        source: "iana",
        extensions: ["flx"]
      },
      "text/vnd.gml": {
        source: "iana"
      },
      "text/vnd.graphviz": {
        source: "iana",
        extensions: ["gv"]
      },
      "text/vnd.hans": {
        source: "iana"
      },
      "text/vnd.hgl": {
        source: "iana"
      },
      "text/vnd.in3d.3dml": {
        source: "iana",
        extensions: ["3dml"]
      },
      "text/vnd.in3d.spot": {
        source: "iana",
        extensions: ["spot"]
      },
      "text/vnd.iptc.newsml": {
        source: "iana"
      },
      "text/vnd.iptc.nitf": {
        source: "iana"
      },
      "text/vnd.latex-z": {
        source: "iana"
      },
      "text/vnd.motorola.reflex": {
        source: "iana"
      },
      "text/vnd.ms-mediapackage": {
        source: "iana"
      },
      "text/vnd.net2phone.commcenter.command": {
        source: "iana"
      },
      "text/vnd.radisys.msml-basic-layout": {
        source: "iana"
      },
      "text/vnd.senx.warpscript": {
        source: "iana"
      },
      "text/vnd.si.uricatalogue": {
        source: "iana"
      },
      "text/vnd.sosi": {
        source: "iana"
      },
      "text/vnd.sun.j2me.app-descriptor": {
        source: "iana",
        charset: "UTF-8",
        extensions: ["jad"]
      },
      "text/vnd.trolltech.linguist": {
        source: "iana",
        charset: "UTF-8"
      },
      "text/vnd.wap.si": {
        source: "iana"
      },
      "text/vnd.wap.sl": {
        source: "iana"
      },
      "text/vnd.wap.wml": {
        source: "iana",
        extensions: ["wml"]
      },
      "text/vnd.wap.wmlscript": {
        source: "iana",
        extensions: ["wmls"]
      },
      "text/vtt": {
        source: "iana",
        charset: "UTF-8",
        compressible: true,
        extensions: ["vtt"]
      },
      "text/x-asm": {
        source: "apache",
        extensions: ["s", "asm"]
      },
      "text/x-c": {
        source: "apache",
        extensions: ["c", "cc", "cxx", "cpp", "h", "hh", "dic"]
      },
      "text/x-component": {
        source: "nginx",
        extensions: ["htc"]
      },
      "text/x-fortran": {
        source: "apache",
        extensions: ["f", "for", "f77", "f90"]
      },
      "text/x-gwt-rpc": {
        compressible: true
      },
      "text/x-handlebars-template": {
        extensions: ["hbs"]
      },
      "text/x-java-source": {
        source: "apache",
        extensions: ["java"]
      },
      "text/x-jquery-tmpl": {
        compressible: true
      },
      "text/x-lua": {
        extensions: ["lua"]
      },
      "text/x-markdown": {
        compressible: true,
        extensions: ["mkd"]
      },
      "text/x-nfo": {
        source: "apache",
        extensions: ["nfo"]
      },
      "text/x-opml": {
        source: "apache",
        extensions: ["opml"]
      },
      "text/x-org": {
        compressible: true,
        extensions: ["org"]
      },
      "text/x-pascal": {
        source: "apache",
        extensions: ["p", "pas"]
      },
      "text/x-processing": {
        compressible: true,
        extensions: ["pde"]
      },
      "text/x-sass": {
        extensions: ["sass"]
      },
      "text/x-scss": {
        extensions: ["scss"]
      },
      "text/x-setext": {
        source: "apache",
        extensions: ["etx"]
      },
      "text/x-sfv": {
        source: "apache",
        extensions: ["sfv"]
      },
      "text/x-suse-ymp": {
        compressible: true,
        extensions: ["ymp"]
      },
      "text/x-uuencode": {
        source: "apache",
        extensions: ["uu"]
      },
      "text/x-vcalendar": {
        source: "apache",
        extensions: ["vcs"]
      },
      "text/x-vcard": {
        source: "apache",
        extensions: ["vcf"]
      },
      "text/xml": {
        source: "iana",
        compressible: true,
        extensions: ["xml"]
      },
      "text/xml-external-parsed-entity": {
        source: "iana"
      },
      "text/yaml": {
        compressible: true,
        extensions: ["yaml", "yml"]
      },
      "video/1d-interleaved-parityfec": {
        source: "iana"
      },
      "video/3gpp": {
        source: "iana",
        extensions: ["3gp", "3gpp"]
      },
      "video/3gpp-tt": {
        source: "iana"
      },
      "video/3gpp2": {
        source: "iana",
        extensions: ["3g2"]
      },
      "video/av1": {
        source: "iana"
      },
      "video/bmpeg": {
        source: "iana"
      },
      "video/bt656": {
        source: "iana"
      },
      "video/celb": {
        source: "iana"
      },
      "video/dv": {
        source: "iana"
      },
      "video/encaprtp": {
        source: "iana"
      },
      "video/ffv1": {
        source: "iana"
      },
      "video/flexfec": {
        source: "iana"
      },
      "video/h261": {
        source: "iana",
        extensions: ["h261"]
      },
      "video/h263": {
        source: "iana",
        extensions: ["h263"]
      },
      "video/h263-1998": {
        source: "iana"
      },
      "video/h263-2000": {
        source: "iana"
      },
      "video/h264": {
        source: "iana",
        extensions: ["h264"]
      },
      "video/h264-rcdo": {
        source: "iana"
      },
      "video/h264-svc": {
        source: "iana"
      },
      "video/h265": {
        source: "iana"
      },
      "video/iso.segment": {
        source: "iana",
        extensions: ["m4s"]
      },
      "video/jpeg": {
        source: "iana",
        extensions: ["jpgv"]
      },
      "video/jpeg2000": {
        source: "iana"
      },
      "video/jpm": {
        source: "apache",
        extensions: ["jpm", "jpgm"]
      },
      "video/jxsv": {
        source: "iana"
      },
      "video/mj2": {
        source: "iana",
        extensions: ["mj2", "mjp2"]
      },
      "video/mp1s": {
        source: "iana"
      },
      "video/mp2p": {
        source: "iana"
      },
      "video/mp2t": {
        source: "iana",
        extensions: ["ts"]
      },
      "video/mp4": {
        source: "iana",
        compressible: false,
        extensions: ["mp4", "mp4v", "mpg4"]
      },
      "video/mp4v-es": {
        source: "iana"
      },
      "video/mpeg": {
        source: "iana",
        compressible: false,
        extensions: ["mpeg", "mpg", "mpe", "m1v", "m2v"]
      },
      "video/mpeg4-generic": {
        source: "iana"
      },
      "video/mpv": {
        source: "iana"
      },
      "video/nv": {
        source: "iana"
      },
      "video/ogg": {
        source: "iana",
        compressible: false,
        extensions: ["ogv"]
      },
      "video/parityfec": {
        source: "iana"
      },
      "video/pointer": {
        source: "iana"
      },
      "video/quicktime": {
        source: "iana",
        compressible: false,
        extensions: ["qt", "mov"]
      },
      "video/raptorfec": {
        source: "iana"
      },
      "video/raw": {
        source: "iana"
      },
      "video/rtp-enc-aescm128": {
        source: "iana"
      },
      "video/rtploopback": {
        source: "iana"
      },
      "video/rtx": {
        source: "iana"
      },
      "video/scip": {
        source: "iana"
      },
      "video/smpte291": {
        source: "iana"
      },
      "video/smpte292m": {
        source: "iana"
      },
      "video/ulpfec": {
        source: "iana"
      },
      "video/vc1": {
        source: "iana"
      },
      "video/vc2": {
        source: "iana"
      },
      "video/vnd.cctv": {
        source: "iana"
      },
      "video/vnd.dece.hd": {
        source: "iana",
        extensions: ["uvh", "uvvh"]
      },
      "video/vnd.dece.mobile": {
        source: "iana",
        extensions: ["uvm", "uvvm"]
      },
      "video/vnd.dece.mp4": {
        source: "iana"
      },
      "video/vnd.dece.pd": {
        source: "iana",
        extensions: ["uvp", "uvvp"]
      },
      "video/vnd.dece.sd": {
        source: "iana",
        extensions: ["uvs", "uvvs"]
      },
      "video/vnd.dece.video": {
        source: "iana",
        extensions: ["uvv", "uvvv"]
      },
      "video/vnd.directv.mpeg": {
        source: "iana"
      },
      "video/vnd.directv.mpeg-tts": {
        source: "iana"
      },
      "video/vnd.dlna.mpeg-tts": {
        source: "iana"
      },
      "video/vnd.dvb.file": {
        source: "iana",
        extensions: ["dvb"]
      },
      "video/vnd.fvt": {
        source: "iana",
        extensions: ["fvt"]
      },
      "video/vnd.hns.video": {
        source: "iana"
      },
      "video/vnd.iptvforum.1dparityfec-1010": {
        source: "iana"
      },
      "video/vnd.iptvforum.1dparityfec-2005": {
        source: "iana"
      },
      "video/vnd.iptvforum.2dparityfec-1010": {
        source: "iana"
      },
      "video/vnd.iptvforum.2dparityfec-2005": {
        source: "iana"
      },
      "video/vnd.iptvforum.ttsavc": {
        source: "iana"
      },
      "video/vnd.iptvforum.ttsmpeg2": {
        source: "iana"
      },
      "video/vnd.motorola.video": {
        source: "iana"
      },
      "video/vnd.motorola.videop": {
        source: "iana"
      },
      "video/vnd.mpegurl": {
        source: "iana",
        extensions: ["mxu", "m4u"]
      },
      "video/vnd.ms-playready.media.pyv": {
        source: "iana",
        extensions: ["pyv"]
      },
      "video/vnd.nokia.interleaved-multimedia": {
        source: "iana"
      },
      "video/vnd.nokia.mp4vr": {
        source: "iana"
      },
      "video/vnd.nokia.videovoip": {
        source: "iana"
      },
      "video/vnd.objectvideo": {
        source: "iana"
      },
      "video/vnd.radgamettools.bink": {
        source: "iana"
      },
      "video/vnd.radgamettools.smacker": {
        source: "iana"
      },
      "video/vnd.sealed.mpeg1": {
        source: "iana"
      },
      "video/vnd.sealed.mpeg4": {
        source: "iana"
      },
      "video/vnd.sealed.swf": {
        source: "iana"
      },
      "video/vnd.sealedmedia.softseal.mov": {
        source: "iana"
      },
      "video/vnd.uvvu.mp4": {
        source: "iana",
        extensions: ["uvu", "uvvu"]
      },
      "video/vnd.vivo": {
        source: "iana",
        extensions: ["viv"]
      },
      "video/vnd.youtube.yt": {
        source: "iana"
      },
      "video/vp8": {
        source: "iana"
      },
      "video/vp9": {
        source: "iana"
      },
      "video/webm": {
        source: "apache",
        compressible: false,
        extensions: ["webm"]
      },
      "video/x-f4v": {
        source: "apache",
        extensions: ["f4v"]
      },
      "video/x-fli": {
        source: "apache",
        extensions: ["fli"]
      },
      "video/x-flv": {
        source: "apache",
        compressible: false,
        extensions: ["flv"]
      },
      "video/x-m4v": {
        source: "apache",
        extensions: ["m4v"]
      },
      "video/x-matroska": {
        source: "apache",
        compressible: false,
        extensions: ["mkv", "mk3d", "mks"]
      },
      "video/x-mng": {
        source: "apache",
        extensions: ["mng"]
      },
      "video/x-ms-asf": {
        source: "apache",
        extensions: ["asf", "asx"]
      },
      "video/x-ms-vob": {
        source: "apache",
        extensions: ["vob"]
      },
      "video/x-ms-wm": {
        source: "apache",
        extensions: ["wm"]
      },
      "video/x-ms-wmv": {
        source: "apache",
        compressible: false,
        extensions: ["wmv"]
      },
      "video/x-ms-wmx": {
        source: "apache",
        extensions: ["wmx"]
      },
      "video/x-ms-wvx": {
        source: "apache",
        extensions: ["wvx"]
      },
      "video/x-msvideo": {
        source: "apache",
        extensions: ["avi"]
      },
      "video/x-sgi-movie": {
        source: "apache",
        extensions: ["movie"]
      },
      "video/x-smv": {
        source: "apache",
        extensions: ["smv"]
      },
      "x-conference/x-cooltalk": {
        source: "apache",
        extensions: ["ice"]
      },
      "x-shader/x-fragment": {
        compressible: true
      },
      "x-shader/x-vertex": {
        compressible: true
      }
    };
  }
});

// node_modules/mime-db/index.js
var require_mime_db = __commonJS({
  "node_modules/mime-db/index.js"(exports, module2) {
    module2.exports = require_db();
  }
});

// node_modules/mime-types/index.js
var require_mime_types = __commonJS({
  "node_modules/mime-types/index.js"(exports) {
    "use strict";
    var db = require_mime_db();
    var extname = require("path").extname;
    var EXTRACT_TYPE_REGEXP = /^\s*([^;\s]*)(?:;|\s|$)/;
    var TEXT_TYPE_REGEXP = /^text\//i;
    exports.charset = charset;
    exports.charsets = { lookup: charset };
    exports.contentType = contentType;
    exports.extension = extension;
    exports.extensions = /* @__PURE__ */ Object.create(null);
    exports.lookup = lookup;
    exports.types = /* @__PURE__ */ Object.create(null);
    populateMaps(exports.extensions, exports.types);
    function charset(type) {
      if (!type || typeof type !== "string") {
        return false;
      }
      var match = EXTRACT_TYPE_REGEXP.exec(type);
      var mime = match && db[match[1].toLowerCase()];
      if (mime && mime.charset) {
        return mime.charset;
      }
      if (match && TEXT_TYPE_REGEXP.test(match[1])) {
        return "UTF-8";
      }
      return false;
    }
    function contentType(str) {
      if (!str || typeof str !== "string") {
        return false;
      }
      var mime = str.indexOf("/") === -1 ? exports.lookup(str) : str;
      if (!mime) {
        return false;
      }
      if (mime.indexOf("charset") === -1) {
        var charset2 = exports.charset(mime);
        if (charset2)
          mime += "; charset=" + charset2.toLowerCase();
      }
      return mime;
    }
    function extension(type) {
      if (!type || typeof type !== "string") {
        return false;
      }
      var match = EXTRACT_TYPE_REGEXP.exec(type);
      var exts = match && exports.extensions[match[1].toLowerCase()];
      if (!exts || !exts.length) {
        return false;
      }
      return exts[0];
    }
    function lookup(path) {
      if (!path || typeof path !== "string") {
        return false;
      }
      var extension2 = extname("x." + path).toLowerCase().substr(1);
      if (!extension2) {
        return false;
      }
      return exports.types[extension2] || false;
    }
    function populateMaps(extensions, types) {
      var preference = ["nginx", "apache", void 0, "iana"];
      Object.keys(db).forEach(function forEachMimeType(type) {
        var mime = db[type];
        var exts = mime.extensions;
        if (!exts || !exts.length) {
          return;
        }
        extensions[type] = exts;
        for (var i = 0; i < exts.length; i++) {
          var extension2 = exts[i];
          if (types[extension2]) {
            var from = preference.indexOf(db[types[extension2]].source);
            var to = preference.indexOf(mime.source);
            if (types[extension2] !== "application/octet-stream" && (from > to || from === to && types[extension2].substr(0, 12) === "application/")) {
              continue;
            }
          }
          types[extension2] = type;
        }
      });
    }
  }
});

// node_modules/asynckit/lib/defer.js
var require_defer = __commonJS({
  "node_modules/asynckit/lib/defer.js"(exports, module2) {
    module2.exports = defer;
    function defer(fn) {
      var nextTick = typeof setImmediate == "function" ? setImmediate : typeof process == "object" && typeof process.nextTick == "function" ? process.nextTick : null;
      if (nextTick) {
        nextTick(fn);
      } else {
        setTimeout(fn, 0);
      }
    }
  }
});

// node_modules/asynckit/lib/async.js
var require_async = __commonJS({
  "node_modules/asynckit/lib/async.js"(exports, module2) {
    var defer = require_defer();
    module2.exports = async;
    function async(callback) {
      var isAsync = false;
      defer(function() {
        isAsync = true;
      });
      return function async_callback(err, result) {
        if (isAsync) {
          callback(err, result);
        } else {
          defer(function nextTick_callback() {
            callback(err, result);
          });
        }
      };
    }
  }
});

// node_modules/asynckit/lib/abort.js
var require_abort = __commonJS({
  "node_modules/asynckit/lib/abort.js"(exports, module2) {
    module2.exports = abort;
    function abort(state) {
      Object.keys(state.jobs).forEach(clean.bind(state));
      state.jobs = {};
    }
    function clean(key) {
      if (typeof this.jobs[key] == "function") {
        this.jobs[key]();
      }
    }
  }
});

// node_modules/asynckit/lib/iterate.js
var require_iterate = __commonJS({
  "node_modules/asynckit/lib/iterate.js"(exports, module2) {
    var async = require_async();
    var abort = require_abort();
    module2.exports = iterate;
    function iterate(list, iterator, state, callback) {
      var key = state["keyedList"] ? state["keyedList"][state.index] : state.index;
      state.jobs[key] = runJob(iterator, key, list[key], function(error, output) {
        if (!(key in state.jobs)) {
          return;
        }
        delete state.jobs[key];
        if (error) {
          abort(state);
        } else {
          state.results[key] = output;
        }
        callback(error, state.results);
      });
    }
    function runJob(iterator, key, item, callback) {
      var aborter;
      if (iterator.length == 2) {
        aborter = iterator(item, async(callback));
      } else {
        aborter = iterator(item, key, async(callback));
      }
      return aborter;
    }
  }
});

// node_modules/asynckit/lib/state.js
var require_state = __commonJS({
  "node_modules/asynckit/lib/state.js"(exports, module2) {
    module2.exports = state;
    function state(list, sortMethod) {
      var isNamedList = !Array.isArray(list), initState = {
        index: 0,
        keyedList: isNamedList || sortMethod ? Object.keys(list) : null,
        jobs: {},
        results: isNamedList ? {} : [],
        size: isNamedList ? Object.keys(list).length : list.length
      };
      if (sortMethod) {
        initState.keyedList.sort(isNamedList ? sortMethod : function(a, b) {
          return sortMethod(list[a], list[b]);
        });
      }
      return initState;
    }
  }
});

// node_modules/asynckit/lib/terminator.js
var require_terminator = __commonJS({
  "node_modules/asynckit/lib/terminator.js"(exports, module2) {
    var abort = require_abort();
    var async = require_async();
    module2.exports = terminator;
    function terminator(callback) {
      if (!Object.keys(this.jobs).length) {
        return;
      }
      this.index = this.size;
      abort(this);
      async(callback)(null, this.results);
    }
  }
});

// node_modules/asynckit/parallel.js
var require_parallel = __commonJS({
  "node_modules/asynckit/parallel.js"(exports, module2) {
    var iterate = require_iterate();
    var initState = require_state();
    var terminator = require_terminator();
    module2.exports = parallel;
    function parallel(list, iterator, callback) {
      var state = initState(list);
      while (state.index < (state["keyedList"] || list).length) {
        iterate(list, iterator, state, function(error, result) {
          if (error) {
            callback(error, result);
            return;
          }
          if (Object.keys(state.jobs).length === 0) {
            callback(null, state.results);
            return;
          }
        });
        state.index++;
      }
      return terminator.bind(state, callback);
    }
  }
});

// node_modules/asynckit/serialOrdered.js
var require_serialOrdered = __commonJS({
  "node_modules/asynckit/serialOrdered.js"(exports, module2) {
    var iterate = require_iterate();
    var initState = require_state();
    var terminator = require_terminator();
    module2.exports = serialOrdered;
    module2.exports.ascending = ascending;
    module2.exports.descending = descending;
    function serialOrdered(list, iterator, sortMethod, callback) {
      var state = initState(list, sortMethod);
      iterate(list, iterator, state, function iteratorHandler(error, result) {
        if (error) {
          callback(error, result);
          return;
        }
        state.index++;
        if (state.index < (state["keyedList"] || list).length) {
          iterate(list, iterator, state, iteratorHandler);
          return;
        }
        callback(null, state.results);
      });
      return terminator.bind(state, callback);
    }
    function ascending(a, b) {
      return a < b ? -1 : a > b ? 1 : 0;
    }
    function descending(a, b) {
      return -1 * ascending(a, b);
    }
  }
});

// node_modules/asynckit/serial.js
var require_serial = __commonJS({
  "node_modules/asynckit/serial.js"(exports, module2) {
    var serialOrdered = require_serialOrdered();
    module2.exports = serial;
    function serial(list, iterator, callback) {
      return serialOrdered(list, iterator, null, callback);
    }
  }
});

// node_modules/asynckit/index.js
var require_asynckit = __commonJS({
  "node_modules/asynckit/index.js"(exports, module2) {
    module2.exports = {
      parallel: require_parallel(),
      serial: require_serial(),
      serialOrdered: require_serialOrdered()
    };
  }
});

// node_modules/form-data/lib/populate.js
var require_populate = __commonJS({
  "node_modules/form-data/lib/populate.js"(exports, module2) {
    module2.exports = function(dst, src) {
      Object.keys(src).forEach(function(prop) {
        dst[prop] = dst[prop] || src[prop];
      });
      return dst;
    };
  }
});

// node_modules/form-data/lib/form_data.js
var require_form_data = __commonJS({
  "node_modules/form-data/lib/form_data.js"(exports, module2) {
    var CombinedStream = require_combined_stream();
    var util2 = require("util");
    var path = require("path");
    var http2 = require("http");
    var https2 = require("https");
    var parseUrl = require("url").parse;
    var fs = require("fs");
    var Stream = require("stream").Stream;
    var mime = require_mime_types();
    var asynckit = require_asynckit();
    var populate = require_populate();
    module2.exports = FormData3;
    util2.inherits(FormData3, CombinedStream);
    function FormData3(options) {
      if (!(this instanceof FormData3)) {
        return new FormData3(options);
      }
      this._overheadLength = 0;
      this._valueLength = 0;
      this._valuesToMeasure = [];
      CombinedStream.call(this);
      options = options || {};
      for (var option in options) {
        this[option] = options[option];
      }
    }
    FormData3.LINE_BREAK = "\r\n";
    FormData3.DEFAULT_CONTENT_TYPE = "application/octet-stream";
    FormData3.prototype.append = function(field, value, options) {
      options = options || {};
      if (typeof options == "string") {
        options = { filename: options };
      }
      var append2 = CombinedStream.prototype.append.bind(this);
      if (typeof value == "number") {
        value = "" + value;
      }
      if (util2.isArray(value)) {
        this._error(new Error("Arrays are not supported."));
        return;
      }
      var header = this._multiPartHeader(field, value, options);
      var footer = this._multiPartFooter();
      append2(header);
      append2(value);
      append2(footer);
      this._trackLength(header, value, options);
    };
    FormData3.prototype._trackLength = function(header, value, options) {
      var valueLength = 0;
      if (options.knownLength != null) {
        valueLength += +options.knownLength;
      } else if (Buffer.isBuffer(value)) {
        valueLength = value.length;
      } else if (typeof value === "string") {
        valueLength = Buffer.byteLength(value);
      }
      this._valueLength += valueLength;
      this._overheadLength += Buffer.byteLength(header) + FormData3.LINE_BREAK.length;
      if (!value || !value.path && !(value.readable && value.hasOwnProperty("httpVersion")) && !(value instanceof Stream)) {
        return;
      }
      if (!options.knownLength) {
        this._valuesToMeasure.push(value);
      }
    };
    FormData3.prototype._lengthRetriever = function(value, callback) {
      if (value.hasOwnProperty("fd")) {
        if (value.end != void 0 && value.end != Infinity && value.start != void 0) {
          callback(null, value.end + 1 - (value.start ? value.start : 0));
        } else {
          fs.stat(value.path, function(err, stat) {
            var fileSize;
            if (err) {
              callback(err);
              return;
            }
            fileSize = stat.size - (value.start ? value.start : 0);
            callback(null, fileSize);
          });
        }
      } else if (value.hasOwnProperty("httpVersion")) {
        callback(null, +value.headers["content-length"]);
      } else if (value.hasOwnProperty("httpModule")) {
        value.on("response", function(response) {
          value.pause();
          callback(null, +response.headers["content-length"]);
        });
        value.resume();
      } else {
        callback("Unknown stream");
      }
    };
    FormData3.prototype._multiPartHeader = function(field, value, options) {
      if (typeof options.header == "string") {
        return options.header;
      }
      var contentDisposition = this._getContentDisposition(value, options);
      var contentType = this._getContentType(value, options);
      var contents = "";
      var headers = {
        "Content-Disposition": ["form-data", 'name="' + field + '"'].concat(contentDisposition || []),
        "Content-Type": [].concat(contentType || [])
      };
      if (typeof options.header == "object") {
        populate(headers, options.header);
      }
      var header;
      for (var prop in headers) {
        if (!headers.hasOwnProperty(prop))
          continue;
        header = headers[prop];
        if (header == null) {
          continue;
        }
        if (!Array.isArray(header)) {
          header = [header];
        }
        if (header.length) {
          contents += prop + ": " + header.join("; ") + FormData3.LINE_BREAK;
        }
      }
      return "--" + this.getBoundary() + FormData3.LINE_BREAK + contents + FormData3.LINE_BREAK;
    };
    FormData3.prototype._getContentDisposition = function(value, options) {
      var filename, contentDisposition;
      if (typeof options.filepath === "string") {
        filename = path.normalize(options.filepath).replace(/\\/g, "/");
      } else if (options.filename || value.name || value.path) {
        filename = path.basename(options.filename || value.name || value.path);
      } else if (value.readable && value.hasOwnProperty("httpVersion")) {
        filename = path.basename(value.client._httpMessage.path || "");
      }
      if (filename) {
        contentDisposition = 'filename="' + filename + '"';
      }
      return contentDisposition;
    };
    FormData3.prototype._getContentType = function(value, options) {
      var contentType = options.contentType;
      if (!contentType && value.name) {
        contentType = mime.lookup(value.name);
      }
      if (!contentType && value.path) {
        contentType = mime.lookup(value.path);
      }
      if (!contentType && value.readable && value.hasOwnProperty("httpVersion")) {
        contentType = value.headers["content-type"];
      }
      if (!contentType && (options.filepath || options.filename)) {
        contentType = mime.lookup(options.filepath || options.filename);
      }
      if (!contentType && typeof value == "object") {
        contentType = FormData3.DEFAULT_CONTENT_TYPE;
      }
      return contentType;
    };
    FormData3.prototype._multiPartFooter = function() {
      return function(next) {
        var footer = FormData3.LINE_BREAK;
        var lastPart = this._streams.length === 0;
        if (lastPart) {
          footer += this._lastBoundary();
        }
        next(footer);
      }.bind(this);
    };
    FormData3.prototype._lastBoundary = function() {
      return "--" + this.getBoundary() + "--" + FormData3.LINE_BREAK;
    };
    FormData3.prototype.getHeaders = function(userHeaders) {
      var header;
      var formHeaders = {
        "content-type": "multipart/form-data; boundary=" + this.getBoundary()
      };
      for (header in userHeaders) {
        if (userHeaders.hasOwnProperty(header)) {
          formHeaders[header.toLowerCase()] = userHeaders[header];
        }
      }
      return formHeaders;
    };
    FormData3.prototype.setBoundary = function(boundary) {
      this._boundary = boundary;
    };
    FormData3.prototype.getBoundary = function() {
      if (!this._boundary) {
        this._generateBoundary();
      }
      return this._boundary;
    };
    FormData3.prototype.getBuffer = function() {
      var dataBuffer = new Buffer.alloc(0);
      var boundary = this.getBoundary();
      for (var i = 0, len = this._streams.length; i < len; i++) {
        if (typeof this._streams[i] !== "function") {
          if (Buffer.isBuffer(this._streams[i])) {
            dataBuffer = Buffer.concat([dataBuffer, this._streams[i]]);
          } else {
            dataBuffer = Buffer.concat([dataBuffer, Buffer.from(this._streams[i])]);
          }
          if (typeof this._streams[i] !== "string" || this._streams[i].substring(2, boundary.length + 2) !== boundary) {
            dataBuffer = Buffer.concat([dataBuffer, Buffer.from(FormData3.LINE_BREAK)]);
          }
        }
      }
      return Buffer.concat([dataBuffer, Buffer.from(this._lastBoundary())]);
    };
    FormData3.prototype._generateBoundary = function() {
      var boundary = "--------------------------";
      for (var i = 0; i < 24; i++) {
        boundary += Math.floor(Math.random() * 10).toString(16);
      }
      this._boundary = boundary;
    };
    FormData3.prototype.getLengthSync = function() {
      var knownLength = this._overheadLength + this._valueLength;
      if (this._streams.length) {
        knownLength += this._lastBoundary().length;
      }
      if (!this.hasKnownLength()) {
        this._error(new Error("Cannot calculate proper length in synchronous way."));
      }
      return knownLength;
    };
    FormData3.prototype.hasKnownLength = function() {
      var hasKnownLength = true;
      if (this._valuesToMeasure.length) {
        hasKnownLength = false;
      }
      return hasKnownLength;
    };
    FormData3.prototype.getLength = function(cb) {
      var knownLength = this._overheadLength + this._valueLength;
      if (this._streams.length) {
        knownLength += this._lastBoundary().length;
      }
      if (!this._valuesToMeasure.length) {
        process.nextTick(cb.bind(this, null, knownLength));
        return;
      }
      asynckit.parallel(this._valuesToMeasure, this._lengthRetriever, function(err, values) {
        if (err) {
          cb(err);
          return;
        }
        values.forEach(function(length) {
          knownLength += length;
        });
        cb(null, knownLength);
      });
    };
    FormData3.prototype.submit = function(params, cb) {
      var request, options, defaults2 = { method: "post" };
      if (typeof params == "string") {
        params = parseUrl(params);
        options = populate({
          port: params.port,
          path: params.pathname,
          host: params.hostname,
          protocol: params.protocol
        }, defaults2);
      } else {
        options = populate(params, defaults2);
        if (!options.port) {
          options.port = options.protocol == "https:" ? 443 : 80;
        }
      }
      options.headers = this.getHeaders(params.headers);
      if (options.protocol == "https:") {
        request = https2.request(options);
      } else {
        request = http2.request(options);
      }
      this.getLength(function(err, length) {
        if (err && err !== "Unknown stream") {
          this._error(err);
          return;
        }
        if (length) {
          request.setHeader("Content-Length", length);
        }
        this.pipe(request);
        if (cb) {
          var onResponse;
          var callback = function(error, responce) {
            request.removeListener("error", callback);
            request.removeListener("response", onResponse);
            return cb.call(this, error, responce);
          };
          onResponse = callback.bind(this, null);
          request.on("error", callback);
          request.on("response", onResponse);
        }
      }.bind(this));
      return request;
    };
    FormData3.prototype._error = function(err) {
      if (!this.error) {
        this.error = err;
        this.pause();
        this.emit("error", err);
      }
    };
    FormData3.prototype.toString = function() {
      return "[object FormData]";
    };
  }
});

// node_modules/proxy-from-env/index.js
var require_proxy_from_env = __commonJS({
  "node_modules/proxy-from-env/index.js"(exports) {
    "use strict";
    var parseUrl = require("url").parse;
    var DEFAULT_PORTS = {
      ftp: 21,
      gopher: 70,
      http: 80,
      https: 443,
      ws: 80,
      wss: 443
    };
    var stringEndsWith = String.prototype.endsWith || function(s) {
      return s.length <= this.length && this.indexOf(s, this.length - s.length) !== -1;
    };
    function getProxyForUrl2(url2) {
      var parsedUrl = typeof url2 === "string" ? parseUrl(url2) : url2 || {};
      var proto = parsedUrl.protocol;
      var hostname = parsedUrl.host;
      var port = parsedUrl.port;
      if (typeof hostname !== "string" || !hostname || typeof proto !== "string") {
        return "";
      }
      proto = proto.split(":", 1)[0];
      hostname = hostname.replace(/:\d*$/, "");
      port = parseInt(port) || DEFAULT_PORTS[proto] || 0;
      if (!shouldProxy(hostname, port)) {
        return "";
      }
      var proxy = getEnv("npm_config_" + proto + "_proxy") || getEnv(proto + "_proxy") || getEnv("npm_config_proxy") || getEnv("all_proxy");
      if (proxy && proxy.indexOf("://") === -1) {
        proxy = proto + "://" + proxy;
      }
      return proxy;
    }
    function shouldProxy(hostname, port) {
      var NO_PROXY = (getEnv("npm_config_no_proxy") || getEnv("no_proxy")).toLowerCase();
      if (!NO_PROXY) {
        return true;
      }
      if (NO_PROXY === "*") {
        return false;
      }
      return NO_PROXY.split(/[,\s]/).every(function(proxy) {
        if (!proxy) {
          return true;
        }
        var parsedProxy = proxy.match(/^(.+):(\d+)$/);
        var parsedProxyHostname = parsedProxy ? parsedProxy[1] : proxy;
        var parsedProxyPort = parsedProxy ? parseInt(parsedProxy[2]) : 0;
        if (parsedProxyPort && parsedProxyPort !== port) {
          return true;
        }
        if (!/^[.*]/.test(parsedProxyHostname)) {
          return hostname !== parsedProxyHostname;
        }
        if (parsedProxyHostname.charAt(0) === "*") {
          parsedProxyHostname = parsedProxyHostname.slice(1);
        }
        return !stringEndsWith.call(hostname, parsedProxyHostname);
      });
    }
    function getEnv(key) {
      return process.env[key.toLowerCase()] || process.env[key.toUpperCase()] || "";
    }
    exports.getProxyForUrl = getProxyForUrl2;
  }
});

// node_modules/ms/index.js
var require_ms = __commonJS({
  "node_modules/ms/index.js"(exports, module2) {
    var s = 1e3;
    var m = s * 60;
    var h = m * 60;
    var d = h * 24;
    var w = d * 7;
    var y = d * 365.25;
    module2.exports = function(val, options) {
      options = options || {};
      var type = typeof val;
      if (type === "string" && val.length > 0) {
        return parse(val);
      } else if (type === "number" && isFinite(val)) {
        return options.long ? fmtLong(val) : fmtShort(val);
      }
      throw new Error(
        "val is not a non-empty string or a valid number. val=" + JSON.stringify(val)
      );
    };
    function parse(str) {
      str = String(str);
      if (str.length > 100) {
        return;
      }
      var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        str
      );
      if (!match) {
        return;
      }
      var n = parseFloat(match[1]);
      var type = (match[2] || "ms").toLowerCase();
      switch (type) {
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
          return n * y;
        case "weeks":
        case "week":
        case "w":
          return n * w;
        case "days":
        case "day":
        case "d":
          return n * d;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
          return n * h;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
          return n * m;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
          return n * s;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
          return n;
        default:
          return void 0;
      }
    }
    function fmtShort(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return Math.round(ms / d) + "d";
      }
      if (msAbs >= h) {
        return Math.round(ms / h) + "h";
      }
      if (msAbs >= m) {
        return Math.round(ms / m) + "m";
      }
      if (msAbs >= s) {
        return Math.round(ms / s) + "s";
      }
      return ms + "ms";
    }
    function fmtLong(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return plural(ms, msAbs, d, "day");
      }
      if (msAbs >= h) {
        return plural(ms, msAbs, h, "hour");
      }
      if (msAbs >= m) {
        return plural(ms, msAbs, m, "minute");
      }
      if (msAbs >= s) {
        return plural(ms, msAbs, s, "second");
      }
      return ms + " ms";
    }
    function plural(ms, msAbs, n, name) {
      var isPlural = msAbs >= n * 1.5;
      return Math.round(ms / n) + " " + name + (isPlural ? "s" : "");
    }
  }
});

// node_modules/debug/src/common.js
var require_common = __commonJS({
  "node_modules/debug/src/common.js"(exports, module2) {
    function setup(env) {
      createDebug.debug = createDebug;
      createDebug.default = createDebug;
      createDebug.coerce = coerce;
      createDebug.disable = disable;
      createDebug.enable = enable;
      createDebug.enabled = enabled;
      createDebug.humanize = require_ms();
      createDebug.destroy = destroy;
      Object.keys(env).forEach((key) => {
        createDebug[key] = env[key];
      });
      createDebug.names = [];
      createDebug.skips = [];
      createDebug.formatters = {};
      function selectColor(namespace) {
        let hash = 0;
        for (let i = 0; i < namespace.length; i++) {
          hash = (hash << 5) - hash + namespace.charCodeAt(i);
          hash |= 0;
        }
        return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
      }
      createDebug.selectColor = selectColor;
      function createDebug(namespace) {
        let prevTime;
        let enableOverride = null;
        let namespacesCache;
        let enabledCache;
        function debug(...args) {
          if (!debug.enabled) {
            return;
          }
          const self2 = debug;
          const curr = Number(new Date());
          const ms = curr - (prevTime || curr);
          self2.diff = ms;
          self2.prev = prevTime;
          self2.curr = curr;
          prevTime = curr;
          args[0] = createDebug.coerce(args[0]);
          if (typeof args[0] !== "string") {
            args.unshift("%O");
          }
          let index = 0;
          args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
            if (match === "%%") {
              return "%";
            }
            index++;
            const formatter = createDebug.formatters[format];
            if (typeof formatter === "function") {
              const val = args[index];
              match = formatter.call(self2, val);
              args.splice(index, 1);
              index--;
            }
            return match;
          });
          createDebug.formatArgs.call(self2, args);
          const logFn = self2.log || createDebug.log;
          logFn.apply(self2, args);
        }
        debug.namespace = namespace;
        debug.useColors = createDebug.useColors();
        debug.color = createDebug.selectColor(namespace);
        debug.extend = extend2;
        debug.destroy = createDebug.destroy;
        Object.defineProperty(debug, "enabled", {
          enumerable: true,
          configurable: false,
          get: () => {
            if (enableOverride !== null) {
              return enableOverride;
            }
            if (namespacesCache !== createDebug.namespaces) {
              namespacesCache = createDebug.namespaces;
              enabledCache = createDebug.enabled(namespace);
            }
            return enabledCache;
          },
          set: (v) => {
            enableOverride = v;
          }
        });
        if (typeof createDebug.init === "function") {
          createDebug.init(debug);
        }
        return debug;
      }
      function extend2(namespace, delimiter) {
        const newDebug = createDebug(this.namespace + (typeof delimiter === "undefined" ? ":" : delimiter) + namespace);
        newDebug.log = this.log;
        return newDebug;
      }
      function enable(namespaces) {
        createDebug.save(namespaces);
        createDebug.namespaces = namespaces;
        createDebug.names = [];
        createDebug.skips = [];
        let i;
        const split = (typeof namespaces === "string" ? namespaces : "").split(/[\s,]+/);
        const len = split.length;
        for (i = 0; i < len; i++) {
          if (!split[i]) {
            continue;
          }
          namespaces = split[i].replace(/\*/g, ".*?");
          if (namespaces[0] === "-") {
            createDebug.skips.push(new RegExp("^" + namespaces.substr(1) + "$"));
          } else {
            createDebug.names.push(new RegExp("^" + namespaces + "$"));
          }
        }
      }
      function disable() {
        const namespaces = [
          ...createDebug.names.map(toNamespace),
          ...createDebug.skips.map(toNamespace).map((namespace) => "-" + namespace)
        ].join(",");
        createDebug.enable("");
        return namespaces;
      }
      function enabled(name) {
        if (name[name.length - 1] === "*") {
          return true;
        }
        let i;
        let len;
        for (i = 0, len = createDebug.skips.length; i < len; i++) {
          if (createDebug.skips[i].test(name)) {
            return false;
          }
        }
        for (i = 0, len = createDebug.names.length; i < len; i++) {
          if (createDebug.names[i].test(name)) {
            return true;
          }
        }
        return false;
      }
      function toNamespace(regexp) {
        return regexp.toString().substring(2, regexp.toString().length - 2).replace(/\.\*\?$/, "*");
      }
      function coerce(val) {
        if (val instanceof Error) {
          return val.stack || val.message;
        }
        return val;
      }
      function destroy() {
        console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
      }
      createDebug.enable(createDebug.load());
      return createDebug;
    }
    module2.exports = setup;
  }
});

// node_modules/debug/src/browser.js
var require_browser = __commonJS({
  "node_modules/debug/src/browser.js"(exports, module2) {
    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load;
    exports.useColors = useColors;
    exports.storage = localstorage();
    exports.destroy = (() => {
      let warned = false;
      return () => {
        if (!warned) {
          warned = true;
          console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
        }
      };
    })();
    exports.colors = [
      "#0000CC",
      "#0000FF",
      "#0033CC",
      "#0033FF",
      "#0066CC",
      "#0066FF",
      "#0099CC",
      "#0099FF",
      "#00CC00",
      "#00CC33",
      "#00CC66",
      "#00CC99",
      "#00CCCC",
      "#00CCFF",
      "#3300CC",
      "#3300FF",
      "#3333CC",
      "#3333FF",
      "#3366CC",
      "#3366FF",
      "#3399CC",
      "#3399FF",
      "#33CC00",
      "#33CC33",
      "#33CC66",
      "#33CC99",
      "#33CCCC",
      "#33CCFF",
      "#6600CC",
      "#6600FF",
      "#6633CC",
      "#6633FF",
      "#66CC00",
      "#66CC33",
      "#9900CC",
      "#9900FF",
      "#9933CC",
      "#9933FF",
      "#99CC00",
      "#99CC33",
      "#CC0000",
      "#CC0033",
      "#CC0066",
      "#CC0099",
      "#CC00CC",
      "#CC00FF",
      "#CC3300",
      "#CC3333",
      "#CC3366",
      "#CC3399",
      "#CC33CC",
      "#CC33FF",
      "#CC6600",
      "#CC6633",
      "#CC9900",
      "#CC9933",
      "#CCCC00",
      "#CCCC33",
      "#FF0000",
      "#FF0033",
      "#FF0066",
      "#FF0099",
      "#FF00CC",
      "#FF00FF",
      "#FF3300",
      "#FF3333",
      "#FF3366",
      "#FF3399",
      "#FF33CC",
      "#FF33FF",
      "#FF6600",
      "#FF6633",
      "#FF9900",
      "#FF9933",
      "#FFCC00",
      "#FFCC33"
    ];
    function useColors() {
      if (typeof window !== "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) {
        return true;
      }
      if (typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
        return false;
      }
      return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    function formatArgs(args) {
      args[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + args[0] + (this.useColors ? "%c " : " ") + "+" + module2.exports.humanize(this.diff);
      if (!this.useColors) {
        return;
      }
      const c = "color: " + this.color;
      args.splice(1, 0, c, "color: inherit");
      let index = 0;
      let lastC = 0;
      args[0].replace(/%[a-zA-Z%]/g, (match) => {
        if (match === "%%") {
          return;
        }
        index++;
        if (match === "%c") {
          lastC = index;
        }
      });
      args.splice(lastC, 0, c);
    }
    exports.log = console.debug || console.log || (() => {
    });
    function save(namespaces) {
      try {
        if (namespaces) {
          exports.storage.setItem("debug", namespaces);
        } else {
          exports.storage.removeItem("debug");
        }
      } catch (error) {
      }
    }
    function load() {
      let r;
      try {
        r = exports.storage.getItem("debug");
      } catch (error) {
      }
      if (!r && typeof process !== "undefined" && "env" in process) {
        r = process.env.DEBUG;
      }
      return r;
    }
    function localstorage() {
      try {
        return localStorage;
      } catch (error) {
      }
    }
    module2.exports = require_common()(exports);
    var { formatters } = module2.exports;
    formatters.j = function(v) {
      try {
        return JSON.stringify(v);
      } catch (error) {
        return "[UnexpectedJSONParseError]: " + error.message;
      }
    };
  }
});

// node_modules/has-flag/index.js
var require_has_flag = __commonJS({
  "node_modules/has-flag/index.js"(exports, module2) {
    "use strict";
    module2.exports = (flag, argv = process.argv) => {
      const prefix = flag.startsWith("-") ? "" : flag.length === 1 ? "-" : "--";
      const position = argv.indexOf(prefix + flag);
      const terminatorPosition = argv.indexOf("--");
      return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
    };
  }
});

// node_modules/supports-color/index.js
var require_supports_color = __commonJS({
  "node_modules/supports-color/index.js"(exports, module2) {
    "use strict";
    var os = require("os");
    var tty = require("tty");
    var hasFlag = require_has_flag();
    var { env } = process;
    var forceColor;
    if (hasFlag("no-color") || hasFlag("no-colors") || hasFlag("color=false") || hasFlag("color=never")) {
      forceColor = 0;
    } else if (hasFlag("color") || hasFlag("colors") || hasFlag("color=true") || hasFlag("color=always")) {
      forceColor = 1;
    }
    if ("FORCE_COLOR" in env) {
      if (env.FORCE_COLOR === "true") {
        forceColor = 1;
      } else if (env.FORCE_COLOR === "false") {
        forceColor = 0;
      } else {
        forceColor = env.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(env.FORCE_COLOR, 10), 3);
      }
    }
    function translateLevel(level) {
      if (level === 0) {
        return false;
      }
      return {
        level,
        hasBasic: true,
        has256: level >= 2,
        has16m: level >= 3
      };
    }
    function supportsColor(haveStream, streamIsTTY) {
      if (forceColor === 0) {
        return 0;
      }
      if (hasFlag("color=16m") || hasFlag("color=full") || hasFlag("color=truecolor")) {
        return 3;
      }
      if (hasFlag("color=256")) {
        return 2;
      }
      if (haveStream && !streamIsTTY && forceColor === void 0) {
        return 0;
      }
      const min = forceColor || 0;
      if (env.TERM === "dumb") {
        return min;
      }
      if (process.platform === "win32") {
        const osRelease = os.release().split(".");
        if (Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {
          return Number(osRelease[2]) >= 14931 ? 3 : 2;
        }
        return 1;
      }
      if ("CI" in env) {
        if (["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "GITHUB_ACTIONS", "BUILDKITE"].some((sign) => sign in env) || env.CI_NAME === "codeship") {
          return 1;
        }
        return min;
      }
      if ("TEAMCITY_VERSION" in env) {
        return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
      }
      if (env.COLORTERM === "truecolor") {
        return 3;
      }
      if ("TERM_PROGRAM" in env) {
        const version = parseInt((env.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
        switch (env.TERM_PROGRAM) {
          case "iTerm.app":
            return version >= 3 ? 3 : 2;
          case "Apple_Terminal":
            return 2;
        }
      }
      if (/-256(color)?$/i.test(env.TERM)) {
        return 2;
      }
      if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
        return 1;
      }
      if ("COLORTERM" in env) {
        return 1;
      }
      return min;
    }
    function getSupportLevel(stream4) {
      const level = supportsColor(stream4, stream4 && stream4.isTTY);
      return translateLevel(level);
    }
    module2.exports = {
      supportsColor: getSupportLevel,
      stdout: translateLevel(supportsColor(true, tty.isatty(1))),
      stderr: translateLevel(supportsColor(true, tty.isatty(2)))
    };
  }
});

// node_modules/debug/src/node.js
var require_node = __commonJS({
  "node_modules/debug/src/node.js"(exports, module2) {
    var tty = require("tty");
    var util2 = require("util");
    exports.init = init;
    exports.log = log;
    exports.formatArgs = formatArgs;
    exports.save = save;
    exports.load = load;
    exports.useColors = useColors;
    exports.destroy = util2.deprecate(
      () => {
      },
      "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
    );
    exports.colors = [6, 2, 3, 4, 5, 1];
    try {
      const supportsColor = require_supports_color();
      if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
        exports.colors = [
          20,
          21,
          26,
          27,
          32,
          33,
          38,
          39,
          40,
          41,
          42,
          43,
          44,
          45,
          56,
          57,
          62,
          63,
          68,
          69,
          74,
          75,
          76,
          77,
          78,
          79,
          80,
          81,
          92,
          93,
          98,
          99,
          112,
          113,
          128,
          129,
          134,
          135,
          148,
          149,
          160,
          161,
          162,
          163,
          164,
          165,
          166,
          167,
          168,
          169,
          170,
          171,
          172,
          173,
          178,
          179,
          184,
          185,
          196,
          197,
          198,
          199,
          200,
          201,
          202,
          203,
          204,
          205,
          206,
          207,
          208,
          209,
          214,
          215,
          220,
          221
        ];
      }
    } catch (error) {
    }
    exports.inspectOpts = Object.keys(process.env).filter((key) => {
      return /^debug_/i.test(key);
    }).reduce((obj, key) => {
      const prop = key.substring(6).toLowerCase().replace(/_([a-z])/g, (_, k) => {
        return k.toUpperCase();
      });
      let val = process.env[key];
      if (/^(yes|on|true|enabled)$/i.test(val)) {
        val = true;
      } else if (/^(no|off|false|disabled)$/i.test(val)) {
        val = false;
      } else if (val === "null") {
        val = null;
      } else {
        val = Number(val);
      }
      obj[prop] = val;
      return obj;
    }, {});
    function useColors() {
      return "colors" in exports.inspectOpts ? Boolean(exports.inspectOpts.colors) : tty.isatty(process.stderr.fd);
    }
    function formatArgs(args) {
      const { namespace: name, useColors: useColors2 } = this;
      if (useColors2) {
        const c = this.color;
        const colorCode = "\x1B[3" + (c < 8 ? c : "8;5;" + c);
        const prefix = `  ${colorCode};1m${name} \x1B[0m`;
        args[0] = prefix + args[0].split("\n").join("\n" + prefix);
        args.push(colorCode + "m+" + module2.exports.humanize(this.diff) + "\x1B[0m");
      } else {
        args[0] = getDate() + name + " " + args[0];
      }
    }
    function getDate() {
      if (exports.inspectOpts.hideDate) {
        return "";
      }
      return new Date().toISOString() + " ";
    }
    function log(...args) {
      return process.stderr.write(util2.format(...args) + "\n");
    }
    function save(namespaces) {
      if (namespaces) {
        process.env.DEBUG = namespaces;
      } else {
        delete process.env.DEBUG;
      }
    }
    function load() {
      return process.env.DEBUG;
    }
    function init(debug) {
      debug.inspectOpts = {};
      const keys = Object.keys(exports.inspectOpts);
      for (let i = 0; i < keys.length; i++) {
        debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
      }
    }
    module2.exports = require_common()(exports);
    var { formatters } = module2.exports;
    formatters.o = function(v) {
      this.inspectOpts.colors = this.useColors;
      return util2.inspect(v, this.inspectOpts).split("\n").map((str) => str.trim()).join(" ");
    };
    formatters.O = function(v) {
      this.inspectOpts.colors = this.useColors;
      return util2.inspect(v, this.inspectOpts);
    };
  }
});

// node_modules/debug/src/index.js
var require_src = __commonJS({
  "node_modules/debug/src/index.js"(exports, module2) {
    if (typeof process === "undefined" || process.type === "renderer" || process.browser === true || process.__nwjs) {
      module2.exports = require_browser();
    } else {
      module2.exports = require_node();
    }
  }
});

// node_modules/follow-redirects/debug.js
var require_debug = __commonJS({
  "node_modules/follow-redirects/debug.js"(exports, module2) {
    var debug;
    module2.exports = function() {
      if (!debug) {
        try {
          debug = require_src()("follow-redirects");
        } catch (error) {
        }
        if (typeof debug !== "function") {
          debug = function() {
          };
        }
      }
      debug.apply(null, arguments);
    };
  }
});

// node_modules/follow-redirects/index.js
var require_follow_redirects = __commonJS({
  "node_modules/follow-redirects/index.js"(exports, module2) {
    var url2 = require("url");
    var URL2 = url2.URL;
    var http2 = require("http");
    var https2 = require("https");
    var Writable = require("stream").Writable;
    var assert = require("assert");
    var debug = require_debug();
    var events = ["abort", "aborted", "connect", "error", "socket", "timeout"];
    var eventHandlers = /* @__PURE__ */ Object.create(null);
    events.forEach(function(event) {
      eventHandlers[event] = function(arg1, arg2, arg3) {
        this._redirectable.emit(event, arg1, arg2, arg3);
      };
    });
    var InvalidUrlError = createErrorType(
      "ERR_INVALID_URL",
      "Invalid URL",
      TypeError
    );
    var RedirectionError = createErrorType(
      "ERR_FR_REDIRECTION_FAILURE",
      "Redirected request failed"
    );
    var TooManyRedirectsError = createErrorType(
      "ERR_FR_TOO_MANY_REDIRECTS",
      "Maximum number of redirects exceeded"
    );
    var MaxBodyLengthExceededError = createErrorType(
      "ERR_FR_MAX_BODY_LENGTH_EXCEEDED",
      "Request body larger than maxBodyLength limit"
    );
    var WriteAfterEndError = createErrorType(
      "ERR_STREAM_WRITE_AFTER_END",
      "write after end"
    );
    var destroy = Writable.prototype.destroy || noop2;
    function RedirectableRequest(options, responseCallback) {
      Writable.call(this);
      this._sanitizeOptions(options);
      this._options = options;
      this._ended = false;
      this._ending = false;
      this._redirectCount = 0;
      this._redirects = [];
      this._requestBodyLength = 0;
      this._requestBodyBuffers = [];
      if (responseCallback) {
        this.on("response", responseCallback);
      }
      var self2 = this;
      this._onNativeResponse = function(response) {
        self2._processResponse(response);
      };
      this._performRequest();
    }
    RedirectableRequest.prototype = Object.create(Writable.prototype);
    RedirectableRequest.prototype.abort = function() {
      destroyRequest(this._currentRequest);
      this._currentRequest.abort();
      this.emit("abort");
    };
    RedirectableRequest.prototype.destroy = function(error) {
      destroyRequest(this._currentRequest, error);
      destroy.call(this, error);
      return this;
    };
    RedirectableRequest.prototype.write = function(data, encoding, callback) {
      if (this._ending) {
        throw new WriteAfterEndError();
      }
      if (!isString2(data) && !isBuffer2(data)) {
        throw new TypeError("data should be a string, Buffer or Uint8Array");
      }
      if (isFunction2(encoding)) {
        callback = encoding;
        encoding = null;
      }
      if (data.length === 0) {
        if (callback) {
          callback();
        }
        return;
      }
      if (this._requestBodyLength + data.length <= this._options.maxBodyLength) {
        this._requestBodyLength += data.length;
        this._requestBodyBuffers.push({ data, encoding });
        this._currentRequest.write(data, encoding, callback);
      } else {
        this.emit("error", new MaxBodyLengthExceededError());
        this.abort();
      }
    };
    RedirectableRequest.prototype.end = function(data, encoding, callback) {
      if (isFunction2(data)) {
        callback = data;
        data = encoding = null;
      } else if (isFunction2(encoding)) {
        callback = encoding;
        encoding = null;
      }
      if (!data) {
        this._ended = this._ending = true;
        this._currentRequest.end(null, null, callback);
      } else {
        var self2 = this;
        var currentRequest = this._currentRequest;
        this.write(data, encoding, function() {
          self2._ended = true;
          currentRequest.end(null, null, callback);
        });
        this._ending = true;
      }
    };
    RedirectableRequest.prototype.setHeader = function(name, value) {
      this._options.headers[name] = value;
      this._currentRequest.setHeader(name, value);
    };
    RedirectableRequest.prototype.removeHeader = function(name) {
      delete this._options.headers[name];
      this._currentRequest.removeHeader(name);
    };
    RedirectableRequest.prototype.setTimeout = function(msecs, callback) {
      var self2 = this;
      function destroyOnTimeout(socket) {
        socket.setTimeout(msecs);
        socket.removeListener("timeout", socket.destroy);
        socket.addListener("timeout", socket.destroy);
      }
      function startTimer(socket) {
        if (self2._timeout) {
          clearTimeout(self2._timeout);
        }
        self2._timeout = setTimeout(function() {
          self2.emit("timeout");
          clearTimer();
        }, msecs);
        destroyOnTimeout(socket);
      }
      function clearTimer() {
        if (self2._timeout) {
          clearTimeout(self2._timeout);
          self2._timeout = null;
        }
        self2.removeListener("abort", clearTimer);
        self2.removeListener("error", clearTimer);
        self2.removeListener("response", clearTimer);
        self2.removeListener("close", clearTimer);
        if (callback) {
          self2.removeListener("timeout", callback);
        }
        if (!self2.socket) {
          self2._currentRequest.removeListener("socket", startTimer);
        }
      }
      if (callback) {
        this.on("timeout", callback);
      }
      if (this.socket) {
        startTimer(this.socket);
      } else {
        this._currentRequest.once("socket", startTimer);
      }
      this.on("socket", destroyOnTimeout);
      this.on("abort", clearTimer);
      this.on("error", clearTimer);
      this.on("response", clearTimer);
      this.on("close", clearTimer);
      return this;
    };
    [
      "flushHeaders",
      "getHeader",
      "setNoDelay",
      "setSocketKeepAlive"
    ].forEach(function(method) {
      RedirectableRequest.prototype[method] = function(a, b) {
        return this._currentRequest[method](a, b);
      };
    });
    ["aborted", "connection", "socket"].forEach(function(property) {
      Object.defineProperty(RedirectableRequest.prototype, property, {
        get: function() {
          return this._currentRequest[property];
        }
      });
    });
    RedirectableRequest.prototype._sanitizeOptions = function(options) {
      if (!options.headers) {
        options.headers = {};
      }
      if (options.host) {
        if (!options.hostname) {
          options.hostname = options.host;
        }
        delete options.host;
      }
      if (!options.pathname && options.path) {
        var searchPos = options.path.indexOf("?");
        if (searchPos < 0) {
          options.pathname = options.path;
        } else {
          options.pathname = options.path.substring(0, searchPos);
          options.search = options.path.substring(searchPos);
        }
      }
    };
    RedirectableRequest.prototype._performRequest = function() {
      var protocol = this._options.protocol;
      var nativeProtocol = this._options.nativeProtocols[protocol];
      if (!nativeProtocol) {
        this.emit("error", new TypeError("Unsupported protocol " + protocol));
        return;
      }
      if (this._options.agents) {
        var scheme = protocol.slice(0, -1);
        this._options.agent = this._options.agents[scheme];
      }
      var request = this._currentRequest = nativeProtocol.request(this._options, this._onNativeResponse);
      request._redirectable = this;
      for (var event of events) {
        request.on(event, eventHandlers[event]);
      }
      this._currentUrl = /^\//.test(this._options.path) ? url2.format(this._options) : this._options.path;
      if (this._isRedirect) {
        var i = 0;
        var self2 = this;
        var buffers = this._requestBodyBuffers;
        (function writeNext(error) {
          if (request === self2._currentRequest) {
            if (error) {
              self2.emit("error", error);
            } else if (i < buffers.length) {
              var buffer = buffers[i++];
              if (!request.finished) {
                request.write(buffer.data, buffer.encoding, writeNext);
              }
            } else if (self2._ended) {
              request.end();
            }
          }
        })();
      }
    };
    RedirectableRequest.prototype._processResponse = function(response) {
      var statusCode = response.statusCode;
      if (this._options.trackRedirects) {
        this._redirects.push({
          url: this._currentUrl,
          headers: response.headers,
          statusCode
        });
      }
      var location = response.headers.location;
      if (!location || this._options.followRedirects === false || statusCode < 300 || statusCode >= 400) {
        response.responseUrl = this._currentUrl;
        response.redirects = this._redirects;
        this.emit("response", response);
        this._requestBodyBuffers = [];
        return;
      }
      destroyRequest(this._currentRequest);
      response.destroy();
      if (++this._redirectCount > this._options.maxRedirects) {
        this.emit("error", new TooManyRedirectsError());
        return;
      }
      var requestHeaders;
      var beforeRedirect = this._options.beforeRedirect;
      if (beforeRedirect) {
        requestHeaders = Object.assign({
          Host: response.req.getHeader("host")
        }, this._options.headers);
      }
      var method = this._options.method;
      if ((statusCode === 301 || statusCode === 302) && this._options.method === "POST" || statusCode === 303 && !/^(?:GET|HEAD)$/.test(this._options.method)) {
        this._options.method = "GET";
        this._requestBodyBuffers = [];
        removeMatchingHeaders(/^content-/i, this._options.headers);
      }
      var currentHostHeader = removeMatchingHeaders(/^host$/i, this._options.headers);
      var currentUrlParts = url2.parse(this._currentUrl);
      var currentHost = currentHostHeader || currentUrlParts.host;
      var currentUrl = /^\w+:/.test(location) ? this._currentUrl : url2.format(Object.assign(currentUrlParts, { host: currentHost }));
      var redirectUrl;
      try {
        redirectUrl = url2.resolve(currentUrl, location);
      } catch (cause) {
        this.emit("error", new RedirectionError({ cause }));
        return;
      }
      debug("redirecting to", redirectUrl);
      this._isRedirect = true;
      var redirectUrlParts = url2.parse(redirectUrl);
      Object.assign(this._options, redirectUrlParts);
      if (redirectUrlParts.protocol !== currentUrlParts.protocol && redirectUrlParts.protocol !== "https:" || redirectUrlParts.host !== currentHost && !isSubdomain(redirectUrlParts.host, currentHost)) {
        removeMatchingHeaders(/^(?:authorization|cookie)$/i, this._options.headers);
      }
      if (isFunction2(beforeRedirect)) {
        var responseDetails = {
          headers: response.headers,
          statusCode
        };
        var requestDetails = {
          url: currentUrl,
          method,
          headers: requestHeaders
        };
        try {
          beforeRedirect(this._options, responseDetails, requestDetails);
        } catch (err) {
          this.emit("error", err);
          return;
        }
        this._sanitizeOptions(this._options);
      }
      try {
        this._performRequest();
      } catch (cause) {
        this.emit("error", new RedirectionError({ cause }));
      }
    };
    function wrap(protocols) {
      var exports2 = {
        maxRedirects: 21,
        maxBodyLength: 10 * 1024 * 1024
      };
      var nativeProtocols = {};
      Object.keys(protocols).forEach(function(scheme) {
        var protocol = scheme + ":";
        var nativeProtocol = nativeProtocols[protocol] = protocols[scheme];
        var wrappedProtocol = exports2[scheme] = Object.create(nativeProtocol);
        function request(input, options, callback) {
          if (isString2(input)) {
            var parsed;
            try {
              parsed = urlToOptions(new URL2(input));
            } catch (err) {
              parsed = url2.parse(input);
            }
            if (!isString2(parsed.protocol)) {
              throw new InvalidUrlError({ input });
            }
            input = parsed;
          } else if (URL2 && input instanceof URL2) {
            input = urlToOptions(input);
          } else {
            callback = options;
            options = input;
            input = { protocol };
          }
          if (isFunction2(options)) {
            callback = options;
            options = null;
          }
          options = Object.assign({
            maxRedirects: exports2.maxRedirects,
            maxBodyLength: exports2.maxBodyLength
          }, input, options);
          options.nativeProtocols = nativeProtocols;
          if (!isString2(options.host) && !isString2(options.hostname)) {
            options.hostname = "::1";
          }
          assert.equal(options.protocol, protocol, "protocol mismatch");
          debug("options", options);
          return new RedirectableRequest(options, callback);
        }
        function get(input, options, callback) {
          var wrappedRequest = wrappedProtocol.request(input, options, callback);
          wrappedRequest.end();
          return wrappedRequest;
        }
        Object.defineProperties(wrappedProtocol, {
          request: { value: request, configurable: true, enumerable: true, writable: true },
          get: { value: get, configurable: true, enumerable: true, writable: true }
        });
      });
      return exports2;
    }
    function noop2() {
    }
    function urlToOptions(urlObject) {
      var options = {
        protocol: urlObject.protocol,
        hostname: urlObject.hostname.startsWith("[") ? urlObject.hostname.slice(1, -1) : urlObject.hostname,
        hash: urlObject.hash,
        search: urlObject.search,
        pathname: urlObject.pathname,
        path: urlObject.pathname + urlObject.search,
        href: urlObject.href
      };
      if (urlObject.port !== "") {
        options.port = Number(urlObject.port);
      }
      return options;
    }
    function removeMatchingHeaders(regex, headers) {
      var lastValue;
      for (var header in headers) {
        if (regex.test(header)) {
          lastValue = headers[header];
          delete headers[header];
        }
      }
      return lastValue === null || typeof lastValue === "undefined" ? void 0 : String(lastValue).trim();
    }
    function createErrorType(code, message, baseClass) {
      function CustomError(properties) {
        Error.captureStackTrace(this, this.constructor);
        Object.assign(this, properties || {});
        this.code = code;
        this.message = this.cause ? message + ": " + this.cause.message : message;
      }
      CustomError.prototype = new (baseClass || Error)();
      CustomError.prototype.constructor = CustomError;
      CustomError.prototype.name = "Error [" + code + "]";
      return CustomError;
    }
    function destroyRequest(request, error) {
      for (var event of events) {
        request.removeListener(event, eventHandlers[event]);
      }
      request.on("error", noop2);
      request.destroy(error);
    }
    function isSubdomain(subdomain, domain) {
      assert(isString2(subdomain) && isString2(domain));
      var dot = subdomain.length - domain.length - 1;
      return dot > 0 && subdomain[dot] === "." && subdomain.endsWith(domain);
    }
    function isString2(value) {
      return typeof value === "string" || value instanceof String;
    }
    function isFunction2(value) {
      return typeof value === "function";
    }
    function isBuffer2(value) {
      return typeof value === "object" && "length" in value;
    }
    module2.exports = wrap({ http: http2, https: https2 });
    module2.exports.wrap = wrap;
  }
});

// node_modules/has-symbols/shams.js
var require_shams = __commonJS({
  "node_modules/has-symbols/shams.js"(exports, module2) {
    "use strict";
    module2.exports = function hasSymbols() {
      if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
        return false;
      }
      if (typeof Symbol.iterator === "symbol") {
        return true;
      }
      var obj = {};
      var sym = Symbol("test");
      var symObj = Object(sym);
      if (typeof sym === "string") {
        return false;
      }
      if (Object.prototype.toString.call(sym) !== "[object Symbol]") {
        return false;
      }
      if (Object.prototype.toString.call(symObj) !== "[object Symbol]") {
        return false;
      }
      var symVal = 42;
      obj[sym] = symVal;
      for (sym in obj) {
        return false;
      }
      if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) {
        return false;
      }
      if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) {
        return false;
      }
      var syms = Object.getOwnPropertySymbols(obj);
      if (syms.length !== 1 || syms[0] !== sym) {
        return false;
      }
      if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
        return false;
      }
      if (typeof Object.getOwnPropertyDescriptor === "function") {
        var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
        if (descriptor.value !== symVal || descriptor.enumerable !== true) {
          return false;
        }
      }
      return true;
    };
  }
});

// node_modules/has-symbols/index.js
var require_has_symbols = __commonJS({
  "node_modules/has-symbols/index.js"(exports, module2) {
    "use strict";
    var origSymbol = typeof Symbol !== "undefined" && Symbol;
    var hasSymbolSham = require_shams();
    module2.exports = function hasNativeSymbols() {
      if (typeof origSymbol !== "function") {
        return false;
      }
      if (typeof Symbol !== "function") {
        return false;
      }
      if (typeof origSymbol("foo") !== "symbol") {
        return false;
      }
      if (typeof Symbol("bar") !== "symbol") {
        return false;
      }
      return hasSymbolSham();
    };
  }
});

// node_modules/function-bind/implementation.js
var require_implementation = __commonJS({
  "node_modules/function-bind/implementation.js"(exports, module2) {
    "use strict";
    var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
    var toStr = Object.prototype.toString;
    var max = Math.max;
    var funcType = "[object Function]";
    var concatty = function concatty2(a, b) {
      var arr = [];
      for (var i = 0; i < a.length; i += 1) {
        arr[i] = a[i];
      }
      for (var j = 0; j < b.length; j += 1) {
        arr[j + a.length] = b[j];
      }
      return arr;
    };
    var slicy = function slicy2(arrLike, offset) {
      var arr = [];
      for (var i = offset || 0, j = 0; i < arrLike.length; i += 1, j += 1) {
        arr[j] = arrLike[i];
      }
      return arr;
    };
    var joiny = function(arr, joiner) {
      var str = "";
      for (var i = 0; i < arr.length; i += 1) {
        str += arr[i];
        if (i + 1 < arr.length) {
          str += joiner;
        }
      }
      return str;
    };
    module2.exports = function bind2(that) {
      var target = this;
      if (typeof target !== "function" || toStr.apply(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
      }
      var args = slicy(arguments, 1);
      var bound;
      var binder = function() {
        if (this instanceof bound) {
          var result = target.apply(
            this,
            concatty(args, arguments)
          );
          if (Object(result) === result) {
            return result;
          }
          return this;
        }
        return target.apply(
          that,
          concatty(args, arguments)
        );
      };
      var boundLength = max(0, target.length - args.length);
      var boundArgs = [];
      for (var i = 0; i < boundLength; i++) {
        boundArgs[i] = "$" + i;
      }
      bound = Function("binder", "return function (" + joiny(boundArgs, ",") + "){ return binder.apply(this,arguments); }")(binder);
      if (target.prototype) {
        var Empty = function Empty2() {
        };
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
      }
      return bound;
    };
  }
});

// node_modules/function-bind/index.js
var require_function_bind = __commonJS({
  "node_modules/function-bind/index.js"(exports, module2) {
    "use strict";
    var implementation = require_implementation();
    module2.exports = Function.prototype.bind || implementation;
  }
});

// node_modules/has/src/index.js
var require_src2 = __commonJS({
  "node_modules/has/src/index.js"(exports, module2) {
    "use strict";
    var bind2 = require_function_bind();
    module2.exports = bind2.call(Function.call, Object.prototype.hasOwnProperty);
  }
});

// node_modules/get-intrinsic/index.js
var require_get_intrinsic = __commonJS({
  "node_modules/get-intrinsic/index.js"(exports, module2) {
    "use strict";
    var undefined2;
    var $SyntaxError = SyntaxError;
    var $Function = Function;
    var $TypeError = TypeError;
    var getEvalledConstructor = function(expressionSyntax) {
      try {
        return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
      } catch (e) {
      }
    };
    var $gOPD = Object.getOwnPropertyDescriptor;
    if ($gOPD) {
      try {
        $gOPD({}, "");
      } catch (e) {
        $gOPD = null;
      }
    }
    var throwTypeError = function() {
      throw new $TypeError();
    };
    var ThrowTypeError = $gOPD ? function() {
      try {
        arguments.callee;
        return throwTypeError;
      } catch (calleeThrows) {
        try {
          return $gOPD(arguments, "callee").get;
        } catch (gOPDthrows) {
          return throwTypeError;
        }
      }
    }() : throwTypeError;
    var hasSymbols = require_has_symbols()();
    var getProto = Object.getPrototypeOf || function(x) {
      return x.__proto__;
    };
    var needsEval = {};
    var TypedArray = typeof Uint8Array === "undefined" ? undefined2 : getProto(Uint8Array);
    var INTRINSICS = {
      "%AggregateError%": typeof AggregateError === "undefined" ? undefined2 : AggregateError,
      "%Array%": Array,
      "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined2 : ArrayBuffer,
      "%ArrayIteratorPrototype%": hasSymbols ? getProto([][Symbol.iterator]()) : undefined2,
      "%AsyncFromSyncIteratorPrototype%": undefined2,
      "%AsyncFunction%": needsEval,
      "%AsyncGenerator%": needsEval,
      "%AsyncGeneratorFunction%": needsEval,
      "%AsyncIteratorPrototype%": needsEval,
      "%Atomics%": typeof Atomics === "undefined" ? undefined2 : Atomics,
      "%BigInt%": typeof BigInt === "undefined" ? undefined2 : BigInt,
      "%Boolean%": Boolean,
      "%DataView%": typeof DataView === "undefined" ? undefined2 : DataView,
      "%Date%": Date,
      "%decodeURI%": decodeURI,
      "%decodeURIComponent%": decodeURIComponent,
      "%encodeURI%": encodeURI,
      "%encodeURIComponent%": encodeURIComponent,
      "%Error%": Error,
      "%eval%": eval,
      "%EvalError%": EvalError,
      "%Float32Array%": typeof Float32Array === "undefined" ? undefined2 : Float32Array,
      "%Float64Array%": typeof Float64Array === "undefined" ? undefined2 : Float64Array,
      "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined2 : FinalizationRegistry,
      "%Function%": $Function,
      "%GeneratorFunction%": needsEval,
      "%Int8Array%": typeof Int8Array === "undefined" ? undefined2 : Int8Array,
      "%Int16Array%": typeof Int16Array === "undefined" ? undefined2 : Int16Array,
      "%Int32Array%": typeof Int32Array === "undefined" ? undefined2 : Int32Array,
      "%isFinite%": isFinite,
      "%isNaN%": isNaN,
      "%IteratorPrototype%": hasSymbols ? getProto(getProto([][Symbol.iterator]())) : undefined2,
      "%JSON%": typeof JSON === "object" ? JSON : undefined2,
      "%Map%": typeof Map === "undefined" ? undefined2 : Map,
      "%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols ? undefined2 : getProto((/* @__PURE__ */ new Map())[Symbol.iterator]()),
      "%Math%": Math,
      "%Number%": Number,
      "%Object%": Object,
      "%parseFloat%": parseFloat,
      "%parseInt%": parseInt,
      "%Promise%": typeof Promise === "undefined" ? undefined2 : Promise,
      "%Proxy%": typeof Proxy === "undefined" ? undefined2 : Proxy,
      "%RangeError%": RangeError,
      "%ReferenceError%": ReferenceError,
      "%Reflect%": typeof Reflect === "undefined" ? undefined2 : Reflect,
      "%RegExp%": RegExp,
      "%Set%": typeof Set === "undefined" ? undefined2 : Set,
      "%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols ? undefined2 : getProto((/* @__PURE__ */ new Set())[Symbol.iterator]()),
      "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined2 : SharedArrayBuffer,
      "%String%": String,
      "%StringIteratorPrototype%": hasSymbols ? getProto(""[Symbol.iterator]()) : undefined2,
      "%Symbol%": hasSymbols ? Symbol : undefined2,
      "%SyntaxError%": $SyntaxError,
      "%ThrowTypeError%": ThrowTypeError,
      "%TypedArray%": TypedArray,
      "%TypeError%": $TypeError,
      "%Uint8Array%": typeof Uint8Array === "undefined" ? undefined2 : Uint8Array,
      "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined2 : Uint8ClampedArray,
      "%Uint16Array%": typeof Uint16Array === "undefined" ? undefined2 : Uint16Array,
      "%Uint32Array%": typeof Uint32Array === "undefined" ? undefined2 : Uint32Array,
      "%URIError%": URIError,
      "%WeakMap%": typeof WeakMap === "undefined" ? undefined2 : WeakMap,
      "%WeakRef%": typeof WeakRef === "undefined" ? undefined2 : WeakRef,
      "%WeakSet%": typeof WeakSet === "undefined" ? undefined2 : WeakSet
    };
    var doEval = function doEval2(name) {
      var value;
      if (name === "%AsyncFunction%") {
        value = getEvalledConstructor("async function () {}");
      } else if (name === "%GeneratorFunction%") {
        value = getEvalledConstructor("function* () {}");
      } else if (name === "%AsyncGeneratorFunction%") {
        value = getEvalledConstructor("async function* () {}");
      } else if (name === "%AsyncGenerator%") {
        var fn = doEval2("%AsyncGeneratorFunction%");
        if (fn) {
          value = fn.prototype;
        }
      } else if (name === "%AsyncIteratorPrototype%") {
        var gen = doEval2("%AsyncGenerator%");
        if (gen) {
          value = getProto(gen.prototype);
        }
      }
      INTRINSICS[name] = value;
      return value;
    };
    var LEGACY_ALIASES = {
      "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
      "%ArrayPrototype%": ["Array", "prototype"],
      "%ArrayProto_entries%": ["Array", "prototype", "entries"],
      "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
      "%ArrayProto_keys%": ["Array", "prototype", "keys"],
      "%ArrayProto_values%": ["Array", "prototype", "values"],
      "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
      "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
      "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
      "%BooleanPrototype%": ["Boolean", "prototype"],
      "%DataViewPrototype%": ["DataView", "prototype"],
      "%DatePrototype%": ["Date", "prototype"],
      "%ErrorPrototype%": ["Error", "prototype"],
      "%EvalErrorPrototype%": ["EvalError", "prototype"],
      "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
      "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
      "%FunctionPrototype%": ["Function", "prototype"],
      "%Generator%": ["GeneratorFunction", "prototype"],
      "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
      "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
      "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
      "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
      "%JSONParse%": ["JSON", "parse"],
      "%JSONStringify%": ["JSON", "stringify"],
      "%MapPrototype%": ["Map", "prototype"],
      "%NumberPrototype%": ["Number", "prototype"],
      "%ObjectPrototype%": ["Object", "prototype"],
      "%ObjProto_toString%": ["Object", "prototype", "toString"],
      "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
      "%PromisePrototype%": ["Promise", "prototype"],
      "%PromiseProto_then%": ["Promise", "prototype", "then"],
      "%Promise_all%": ["Promise", "all"],
      "%Promise_reject%": ["Promise", "reject"],
      "%Promise_resolve%": ["Promise", "resolve"],
      "%RangeErrorPrototype%": ["RangeError", "prototype"],
      "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
      "%RegExpPrototype%": ["RegExp", "prototype"],
      "%SetPrototype%": ["Set", "prototype"],
      "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
      "%StringPrototype%": ["String", "prototype"],
      "%SymbolPrototype%": ["Symbol", "prototype"],
      "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
      "%TypedArrayPrototype%": ["TypedArray", "prototype"],
      "%TypeErrorPrototype%": ["TypeError", "prototype"],
      "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
      "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
      "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
      "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
      "%URIErrorPrototype%": ["URIError", "prototype"],
      "%WeakMapPrototype%": ["WeakMap", "prototype"],
      "%WeakSetPrototype%": ["WeakSet", "prototype"]
    };
    var bind2 = require_function_bind();
    var hasOwn = require_src2();
    var $concat = bind2.call(Function.call, Array.prototype.concat);
    var $spliceApply = bind2.call(Function.apply, Array.prototype.splice);
    var $replace = bind2.call(Function.call, String.prototype.replace);
    var $strSlice = bind2.call(Function.call, String.prototype.slice);
    var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
    var reEscapeChar = /\\(\\)?/g;
    var stringToPath = function stringToPath2(string) {
      var first = $strSlice(string, 0, 1);
      var last = $strSlice(string, -1);
      if (first === "%" && last !== "%") {
        throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
      } else if (last === "%" && first !== "%") {
        throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
      }
      var result = [];
      $replace(string, rePropName, function(match, number, quote, subString) {
        result[result.length] = quote ? $replace(subString, reEscapeChar, "$1") : number || match;
      });
      return result;
    };
    var getBaseIntrinsic = function getBaseIntrinsic2(name, allowMissing) {
      var intrinsicName = name;
      var alias;
      if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
        alias = LEGACY_ALIASES[intrinsicName];
        intrinsicName = "%" + alias[0] + "%";
      }
      if (hasOwn(INTRINSICS, intrinsicName)) {
        var value = INTRINSICS[intrinsicName];
        if (value === needsEval) {
          value = doEval(intrinsicName);
        }
        if (typeof value === "undefined" && !allowMissing) {
          throw new $TypeError("intrinsic " + name + " exists, but is not available. Please file an issue!");
        }
        return {
          alias,
          name: intrinsicName,
          value
        };
      }
      throw new $SyntaxError("intrinsic " + name + " does not exist!");
    };
    module2.exports = function GetIntrinsic(name, allowMissing) {
      if (typeof name !== "string" || name.length === 0) {
        throw new $TypeError("intrinsic name must be a non-empty string");
      }
      if (arguments.length > 1 && typeof allowMissing !== "boolean") {
        throw new $TypeError('"allowMissing" argument must be a boolean');
      }
      var parts = stringToPath(name);
      var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
      var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
      var intrinsicRealName = intrinsic.name;
      var value = intrinsic.value;
      var skipFurtherCaching = false;
      var alias = intrinsic.alias;
      if (alias) {
        intrinsicBaseName = alias[0];
        $spliceApply(parts, $concat([0, 1], alias));
      }
      for (var i = 1, isOwn = true; i < parts.length; i += 1) {
        var part = parts[i];
        var first = $strSlice(part, 0, 1);
        var last = $strSlice(part, -1);
        if ((first === '"' || first === "'" || first === "`" || (last === '"' || last === "'" || last === "`")) && first !== last) {
          throw new $SyntaxError("property names with quotes must have matching quotes");
        }
        if (part === "constructor" || !isOwn) {
          skipFurtherCaching = true;
        }
        intrinsicBaseName += "." + part;
        intrinsicRealName = "%" + intrinsicBaseName + "%";
        if (hasOwn(INTRINSICS, intrinsicRealName)) {
          value = INTRINSICS[intrinsicRealName];
        } else if (value != null) {
          if (!(part in value)) {
            if (!allowMissing) {
              throw new $TypeError("base intrinsic for " + name + " exists, but the property is not available.");
            }
            return void 0;
          }
          if ($gOPD && i + 1 >= parts.length) {
            var desc = $gOPD(value, part);
            isOwn = !!desc;
            if (isOwn && "get" in desc && !("originalValue" in desc.get)) {
              value = desc.get;
            } else {
              value = value[part];
            }
          } else {
            isOwn = hasOwn(value, part);
            value = value[part];
          }
          if (isOwn && !skipFurtherCaching) {
            INTRINSICS[intrinsicRealName] = value;
          }
        }
      }
      return value;
    };
  }
});

// node_modules/call-bind/index.js
var require_call_bind = __commonJS({
  "node_modules/call-bind/index.js"(exports, module2) {
    "use strict";
    var bind2 = require_function_bind();
    var GetIntrinsic = require_get_intrinsic();
    var $apply = GetIntrinsic("%Function.prototype.apply%");
    var $call = GetIntrinsic("%Function.prototype.call%");
    var $reflectApply = GetIntrinsic("%Reflect.apply%", true) || bind2.call($call, $apply);
    var $gOPD = GetIntrinsic("%Object.getOwnPropertyDescriptor%", true);
    var $defineProperty = GetIntrinsic("%Object.defineProperty%", true);
    var $max = GetIntrinsic("%Math.max%");
    if ($defineProperty) {
      try {
        $defineProperty({}, "a", { value: 1 });
      } catch (e) {
        $defineProperty = null;
      }
    }
    module2.exports = function callBind(originalFunction) {
      var func = $reflectApply(bind2, $call, arguments);
      if ($gOPD && $defineProperty) {
        var desc = $gOPD(func, "length");
        if (desc.configurable) {
          $defineProperty(
            func,
            "length",
            { value: 1 + $max(0, originalFunction.length - (arguments.length - 1)) }
          );
        }
      }
      return func;
    };
    var applyBind = function applyBind2() {
      return $reflectApply(bind2, $apply, arguments);
    };
    if ($defineProperty) {
      $defineProperty(module2.exports, "apply", { value: applyBind });
    } else {
      module2.exports.apply = applyBind;
    }
  }
});

// node_modules/call-bind/callBound.js
var require_callBound = __commonJS({
  "node_modules/call-bind/callBound.js"(exports, module2) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var callBind = require_call_bind();
    var $indexOf = callBind(GetIntrinsic("String.prototype.indexOf"));
    module2.exports = function callBoundIntrinsic(name, allowMissing) {
      var intrinsic = GetIntrinsic(name, !!allowMissing);
      if (typeof intrinsic === "function" && $indexOf(name, ".prototype.") > -1) {
        return callBind(intrinsic);
      }
      return intrinsic;
    };
  }
});

// node_modules/object-inspect/util.inspect.js
var require_util_inspect = __commonJS({
  "node_modules/object-inspect/util.inspect.js"(exports, module2) {
    module2.exports = require("util").inspect;
  }
});

// node_modules/object-inspect/index.js
var require_object_inspect = __commonJS({
  "node_modules/object-inspect/index.js"(exports, module2) {
    var hasMap = typeof Map === "function" && Map.prototype;
    var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null;
    var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === "function" ? mapSizeDescriptor.get : null;
    var mapForEach = hasMap && Map.prototype.forEach;
    var hasSet = typeof Set === "function" && Set.prototype;
    var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null;
    var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === "function" ? setSizeDescriptor.get : null;
    var setForEach = hasSet && Set.prototype.forEach;
    var hasWeakMap = typeof WeakMap === "function" && WeakMap.prototype;
    var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
    var hasWeakSet = typeof WeakSet === "function" && WeakSet.prototype;
    var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
    var hasWeakRef = typeof WeakRef === "function" && WeakRef.prototype;
    var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
    var booleanValueOf = Boolean.prototype.valueOf;
    var objectToString = Object.prototype.toString;
    var functionToString = Function.prototype.toString;
    var $match = String.prototype.match;
    var $slice = String.prototype.slice;
    var $replace = String.prototype.replace;
    var $toUpperCase = String.prototype.toUpperCase;
    var $toLowerCase = String.prototype.toLowerCase;
    var $test = RegExp.prototype.test;
    var $concat = Array.prototype.concat;
    var $join = Array.prototype.join;
    var $arrSlice = Array.prototype.slice;
    var $floor = Math.floor;
    var bigIntValueOf = typeof BigInt === "function" ? BigInt.prototype.valueOf : null;
    var gOPS = Object.getOwnPropertySymbols;
    var symToString = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? Symbol.prototype.toString : null;
    var hasShammedSymbols = typeof Symbol === "function" && typeof Symbol.iterator === "object";
    var toStringTag = typeof Symbol === "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? "object" : "symbol") ? Symbol.toStringTag : null;
    var isEnumerable = Object.prototype.propertyIsEnumerable;
    var gPO = (typeof Reflect === "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(O) {
      return O.__proto__;
    } : null);
    function addNumericSeparator(num, str) {
      if (num === Infinity || num === -Infinity || num !== num || num && num > -1e3 && num < 1e3 || $test.call(/e/, str)) {
        return str;
      }
      var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
      if (typeof num === "number") {
        var int = num < 0 ? -$floor(-num) : $floor(num);
        if (int !== num) {
          var intStr = String(int);
          var dec = $slice.call(str, intStr.length + 1);
          return $replace.call(intStr, sepRegex, "$&_") + "." + $replace.call($replace.call(dec, /([0-9]{3})/g, "$&_"), /_$/, "");
        }
      }
      return $replace.call(str, sepRegex, "$&_");
    }
    var inspectCustom = require_util_inspect().custom;
    var inspectSymbol = inspectCustom && isSymbol(inspectCustom) ? inspectCustom : null;
    module2.exports = function inspect_(obj, options, depth, seen) {
      var opts = options || {};
      if (has(opts, "quoteStyle") && (opts.quoteStyle !== "single" && opts.quoteStyle !== "double")) {
        throw new TypeError('option "quoteStyle" must be "single" or "double"');
      }
      if (has(opts, "maxStringLength") && (typeof opts.maxStringLength === "number" ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity : opts.maxStringLength !== null)) {
        throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
      }
      var customInspect = has(opts, "customInspect") ? opts.customInspect : true;
      if (typeof customInspect !== "boolean" && customInspect !== "symbol") {
        throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
      }
      if (has(opts, "indent") && opts.indent !== null && opts.indent !== "	" && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)) {
        throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
      }
      if (has(opts, "numericSeparator") && typeof opts.numericSeparator !== "boolean") {
        throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
      }
      var numericSeparator = opts.numericSeparator;
      if (typeof obj === "undefined") {
        return "undefined";
      }
      if (obj === null) {
        return "null";
      }
      if (typeof obj === "boolean") {
        return obj ? "true" : "false";
      }
      if (typeof obj === "string") {
        return inspectString(obj, opts);
      }
      if (typeof obj === "number") {
        if (obj === 0) {
          return Infinity / obj > 0 ? "0" : "-0";
        }
        var str = String(obj);
        return numericSeparator ? addNumericSeparator(obj, str) : str;
      }
      if (typeof obj === "bigint") {
        var bigIntStr = String(obj) + "n";
        return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
      }
      var maxDepth = typeof opts.depth === "undefined" ? 5 : opts.depth;
      if (typeof depth === "undefined") {
        depth = 0;
      }
      if (depth >= maxDepth && maxDepth > 0 && typeof obj === "object") {
        return isArray2(obj) ? "[Array]" : "[Object]";
      }
      var indent = getIndent(opts, depth);
      if (typeof seen === "undefined") {
        seen = [];
      } else if (indexOf(seen, obj) >= 0) {
        return "[Circular]";
      }
      function inspect(value, from, noIndent) {
        if (from) {
          seen = $arrSlice.call(seen);
          seen.push(from);
        }
        if (noIndent) {
          var newOpts = {
            depth: opts.depth
          };
          if (has(opts, "quoteStyle")) {
            newOpts.quoteStyle = opts.quoteStyle;
          }
          return inspect_(value, newOpts, depth + 1, seen);
        }
        return inspect_(value, opts, depth + 1, seen);
      }
      if (typeof obj === "function") {
        var name = nameOf(obj);
        var keys = arrObjKeys(obj, inspect);
        return "[Function" + (name ? ": " + name : " (anonymous)") + "]" + (keys.length > 0 ? " { " + $join.call(keys, ", ") + " }" : "");
      }
      if (isSymbol(obj)) {
        var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, "$1") : symToString.call(obj);
        return typeof obj === "object" && !hasShammedSymbols ? markBoxed(symString) : symString;
      }
      if (isElement(obj)) {
        var s = "<" + $toLowerCase.call(String(obj.nodeName));
        var attrs = obj.attributes || [];
        for (var i = 0; i < attrs.length; i++) {
          s += " " + attrs[i].name + "=" + wrapQuotes(quote(attrs[i].value), "double", opts);
        }
        s += ">";
        if (obj.childNodes && obj.childNodes.length) {
          s += "...";
        }
        s += "</" + $toLowerCase.call(String(obj.nodeName)) + ">";
        return s;
      }
      if (isArray2(obj)) {
        if (obj.length === 0) {
          return "[]";
        }
        var xs = arrObjKeys(obj, inspect);
        if (indent && !singleLineValues(xs)) {
          return "[" + indentedJoin(xs, indent) + "]";
        }
        return "[ " + $join.call(xs, ", ") + " ]";
      }
      if (isError(obj)) {
        var parts = arrObjKeys(obj, inspect);
        if ("cause" in obj && !isEnumerable.call(obj, "cause")) {
          return "{ [" + String(obj) + "] " + $join.call($concat.call("[cause]: " + inspect(obj.cause), parts), ", ") + " }";
        }
        if (parts.length === 0) {
          return "[" + String(obj) + "]";
        }
        return "{ [" + String(obj) + "] " + $join.call(parts, ", ") + " }";
      }
      if (typeof obj === "object" && customInspect) {
        if (inspectSymbol && typeof obj[inspectSymbol] === "function") {
          return obj[inspectSymbol]();
        } else if (customInspect !== "symbol" && typeof obj.inspect === "function") {
          return obj.inspect();
        }
      }
      if (isMap(obj)) {
        var mapParts = [];
        mapForEach.call(obj, function(value, key) {
          mapParts.push(inspect(key, obj, true) + " => " + inspect(value, obj));
        });
        return collectionOf("Map", mapSize.call(obj), mapParts, indent);
      }
      if (isSet(obj)) {
        var setParts = [];
        setForEach.call(obj, function(value) {
          setParts.push(inspect(value, obj));
        });
        return collectionOf("Set", setSize.call(obj), setParts, indent);
      }
      if (isWeakMap(obj)) {
        return weakCollectionOf("WeakMap");
      }
      if (isWeakSet(obj)) {
        return weakCollectionOf("WeakSet");
      }
      if (isWeakRef(obj)) {
        return weakCollectionOf("WeakRef");
      }
      if (isNumber2(obj)) {
        return markBoxed(inspect(Number(obj)));
      }
      if (isBigInt(obj)) {
        return markBoxed(inspect(bigIntValueOf.call(obj)));
      }
      if (isBoolean2(obj)) {
        return markBoxed(booleanValueOf.call(obj));
      }
      if (isString2(obj)) {
        return markBoxed(inspect(String(obj)));
      }
      if (!isDate2(obj) && !isRegExp2(obj)) {
        var ys = arrObjKeys(obj, inspect);
        var isPlainObject2 = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
        var protoTag = obj instanceof Object ? "" : "null prototype";
        var stringTag = !isPlainObject2 && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? "Object" : "";
        var constructorTag = isPlainObject2 || typeof obj.constructor !== "function" ? "" : obj.constructor.name ? obj.constructor.name + " " : "";
        var tag = constructorTag + (stringTag || protoTag ? "[" + $join.call($concat.call([], stringTag || [], protoTag || []), ": ") + "] " : "");
        if (ys.length === 0) {
          return tag + "{}";
        }
        if (indent) {
          return tag + "{" + indentedJoin(ys, indent) + "}";
        }
        return tag + "{ " + $join.call(ys, ", ") + " }";
      }
      return String(obj);
    };
    function wrapQuotes(s, defaultStyle, opts) {
      var quoteChar = (opts.quoteStyle || defaultStyle) === "double" ? '"' : "'";
      return quoteChar + s + quoteChar;
    }
    function quote(s) {
      return $replace.call(String(s), /"/g, "&quot;");
    }
    function isArray2(obj) {
      return toStr(obj) === "[object Array]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    function isDate2(obj) {
      return toStr(obj) === "[object Date]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    function isRegExp2(obj) {
      return toStr(obj) === "[object RegExp]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    function isError(obj) {
      return toStr(obj) === "[object Error]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    function isString2(obj) {
      return toStr(obj) === "[object String]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    function isNumber2(obj) {
      return toStr(obj) === "[object Number]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    function isBoolean2(obj) {
      return toStr(obj) === "[object Boolean]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
    }
    function isSymbol(obj) {
      if (hasShammedSymbols) {
        return obj && typeof obj === "object" && obj instanceof Symbol;
      }
      if (typeof obj === "symbol") {
        return true;
      }
      if (!obj || typeof obj !== "object" || !symToString) {
        return false;
      }
      try {
        symToString.call(obj);
        return true;
      } catch (e) {
      }
      return false;
    }
    function isBigInt(obj) {
      if (!obj || typeof obj !== "object" || !bigIntValueOf) {
        return false;
      }
      try {
        bigIntValueOf.call(obj);
        return true;
      } catch (e) {
      }
      return false;
    }
    var hasOwn = Object.prototype.hasOwnProperty || function(key) {
      return key in this;
    };
    function has(obj, key) {
      return hasOwn.call(obj, key);
    }
    function toStr(obj) {
      return objectToString.call(obj);
    }
    function nameOf(f) {
      if (f.name) {
        return f.name;
      }
      var m = $match.call(functionToString.call(f), /^function\s*([\w$]+)/);
      if (m) {
        return m[1];
      }
      return null;
    }
    function indexOf(xs, x) {
      if (xs.indexOf) {
        return xs.indexOf(x);
      }
      for (var i = 0, l = xs.length; i < l; i++) {
        if (xs[i] === x) {
          return i;
        }
      }
      return -1;
    }
    function isMap(x) {
      if (!mapSize || !x || typeof x !== "object") {
        return false;
      }
      try {
        mapSize.call(x);
        try {
          setSize.call(x);
        } catch (s) {
          return true;
        }
        return x instanceof Map;
      } catch (e) {
      }
      return false;
    }
    function isWeakMap(x) {
      if (!weakMapHas || !x || typeof x !== "object") {
        return false;
      }
      try {
        weakMapHas.call(x, weakMapHas);
        try {
          weakSetHas.call(x, weakSetHas);
        } catch (s) {
          return true;
        }
        return x instanceof WeakMap;
      } catch (e) {
      }
      return false;
    }
    function isWeakRef(x) {
      if (!weakRefDeref || !x || typeof x !== "object") {
        return false;
      }
      try {
        weakRefDeref.call(x);
        return true;
      } catch (e) {
      }
      return false;
    }
    function isSet(x) {
      if (!setSize || !x || typeof x !== "object") {
        return false;
      }
      try {
        setSize.call(x);
        try {
          mapSize.call(x);
        } catch (m) {
          return true;
        }
        return x instanceof Set;
      } catch (e) {
      }
      return false;
    }
    function isWeakSet(x) {
      if (!weakSetHas || !x || typeof x !== "object") {
        return false;
      }
      try {
        weakSetHas.call(x, weakSetHas);
        try {
          weakMapHas.call(x, weakMapHas);
        } catch (s) {
          return true;
        }
        return x instanceof WeakSet;
      } catch (e) {
      }
      return false;
    }
    function isElement(x) {
      if (!x || typeof x !== "object") {
        return false;
      }
      if (typeof HTMLElement !== "undefined" && x instanceof HTMLElement) {
        return true;
      }
      return typeof x.nodeName === "string" && typeof x.getAttribute === "function";
    }
    function inspectString(str, opts) {
      if (str.length > opts.maxStringLength) {
        var remaining = str.length - opts.maxStringLength;
        var trailer = "... " + remaining + " more character" + (remaining > 1 ? "s" : "");
        return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;
      }
      var s = $replace.call($replace.call(str, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, lowbyte);
      return wrapQuotes(s, "single", opts);
    }
    function lowbyte(c) {
      var n = c.charCodeAt(0);
      var x = {
        8: "b",
        9: "t",
        10: "n",
        12: "f",
        13: "r"
      }[n];
      if (x) {
        return "\\" + x;
      }
      return "\\x" + (n < 16 ? "0" : "") + $toUpperCase.call(n.toString(16));
    }
    function markBoxed(str) {
      return "Object(" + str + ")";
    }
    function weakCollectionOf(type) {
      return type + " { ? }";
    }
    function collectionOf(type, size, entries, indent) {
      var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ", ");
      return type + " (" + size + ") {" + joinedEntries + "}";
    }
    function singleLineValues(xs) {
      for (var i = 0; i < xs.length; i++) {
        if (indexOf(xs[i], "\n") >= 0) {
          return false;
        }
      }
      return true;
    }
    function getIndent(opts, depth) {
      var baseIndent;
      if (opts.indent === "	") {
        baseIndent = "	";
      } else if (typeof opts.indent === "number" && opts.indent > 0) {
        baseIndent = $join.call(Array(opts.indent + 1), " ");
      } else {
        return null;
      }
      return {
        base: baseIndent,
        prev: $join.call(Array(depth + 1), baseIndent)
      };
    }
    function indentedJoin(xs, indent) {
      if (xs.length === 0) {
        return "";
      }
      var lineJoiner = "\n" + indent.prev + indent.base;
      return lineJoiner + $join.call(xs, "," + lineJoiner) + "\n" + indent.prev;
    }
    function arrObjKeys(obj, inspect) {
      var isArr = isArray2(obj);
      var xs = [];
      if (isArr) {
        xs.length = obj.length;
        for (var i = 0; i < obj.length; i++) {
          xs[i] = has(obj, i) ? inspect(obj[i], obj) : "";
        }
      }
      var syms = typeof gOPS === "function" ? gOPS(obj) : [];
      var symMap;
      if (hasShammedSymbols) {
        symMap = {};
        for (var k = 0; k < syms.length; k++) {
          symMap["$" + syms[k]] = syms[k];
        }
      }
      for (var key in obj) {
        if (!has(obj, key)) {
          continue;
        }
        if (isArr && String(Number(key)) === key && key < obj.length) {
          continue;
        }
        if (hasShammedSymbols && symMap["$" + key] instanceof Symbol) {
          continue;
        } else if ($test.call(/[^\w$]/, key)) {
          xs.push(inspect(key, obj) + ": " + inspect(obj[key], obj));
        } else {
          xs.push(key + ": " + inspect(obj[key], obj));
        }
      }
      if (typeof gOPS === "function") {
        for (var j = 0; j < syms.length; j++) {
          if (isEnumerable.call(obj, syms[j])) {
            xs.push("[" + inspect(syms[j]) + "]: " + inspect(obj[syms[j]], obj));
          }
        }
      }
      return xs;
    }
  }
});

// node_modules/side-channel/index.js
var require_side_channel = __commonJS({
  "node_modules/side-channel/index.js"(exports, module2) {
    "use strict";
    var GetIntrinsic = require_get_intrinsic();
    var callBound = require_callBound();
    var inspect = require_object_inspect();
    var $TypeError = GetIntrinsic("%TypeError%");
    var $WeakMap = GetIntrinsic("%WeakMap%", true);
    var $Map = GetIntrinsic("%Map%", true);
    var $weakMapGet = callBound("WeakMap.prototype.get", true);
    var $weakMapSet = callBound("WeakMap.prototype.set", true);
    var $weakMapHas = callBound("WeakMap.prototype.has", true);
    var $mapGet = callBound("Map.prototype.get", true);
    var $mapSet = callBound("Map.prototype.set", true);
    var $mapHas = callBound("Map.prototype.has", true);
    var listGetNode = function(list, key) {
      for (var prev = list, curr; (curr = prev.next) !== null; prev = curr) {
        if (curr.key === key) {
          prev.next = curr.next;
          curr.next = list.next;
          list.next = curr;
          return curr;
        }
      }
    };
    var listGet = function(objects, key) {
      var node = listGetNode(objects, key);
      return node && node.value;
    };
    var listSet = function(objects, key, value) {
      var node = listGetNode(objects, key);
      if (node) {
        node.value = value;
      } else {
        objects.next = {
          key,
          next: objects.next,
          value
        };
      }
    };
    var listHas = function(objects, key) {
      return !!listGetNode(objects, key);
    };
    module2.exports = function getSideChannel() {
      var $wm;
      var $m;
      var $o;
      var channel = {
        assert: function(key) {
          if (!channel.has(key)) {
            throw new $TypeError("Side channel does not contain " + inspect(key));
          }
        },
        get: function(key) {
          if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
            if ($wm) {
              return $weakMapGet($wm, key);
            }
          } else if ($Map) {
            if ($m) {
              return $mapGet($m, key);
            }
          } else {
            if ($o) {
              return listGet($o, key);
            }
          }
        },
        has: function(key) {
          if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
            if ($wm) {
              return $weakMapHas($wm, key);
            }
          } else if ($Map) {
            if ($m) {
              return $mapHas($m, key);
            }
          } else {
            if ($o) {
              return listHas($o, key);
            }
          }
          return false;
        },
        set: function(key, value) {
          if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
            if (!$wm) {
              $wm = new $WeakMap();
            }
            $weakMapSet($wm, key, value);
          } else if ($Map) {
            if (!$m) {
              $m = new $Map();
            }
            $mapSet($m, key, value);
          } else {
            if (!$o) {
              $o = { key: {}, next: null };
            }
            listSet($o, key, value);
          }
        }
      };
      return channel;
    };
  }
});

// node_modules/qs/lib/formats.js
var require_formats = __commonJS({
  "node_modules/qs/lib/formats.js"(exports, module2) {
    "use strict";
    var replace = String.prototype.replace;
    var percentTwenties = /%20/g;
    var Format = {
      RFC1738: "RFC1738",
      RFC3986: "RFC3986"
    };
    module2.exports = {
      "default": Format.RFC3986,
      formatters: {
        RFC1738: function(value) {
          return replace.call(value, percentTwenties, "+");
        },
        RFC3986: function(value) {
          return String(value);
        }
      },
      RFC1738: Format.RFC1738,
      RFC3986: Format.RFC3986
    };
  }
});

// node_modules/qs/lib/utils.js
var require_utils = __commonJS({
  "node_modules/qs/lib/utils.js"(exports, module2) {
    "use strict";
    var formats = require_formats();
    var has = Object.prototype.hasOwnProperty;
    var isArray2 = Array.isArray;
    var hexTable = function() {
      var array = [];
      for (var i = 0; i < 256; ++i) {
        array.push("%" + ((i < 16 ? "0" : "") + i.toString(16)).toUpperCase());
      }
      return array;
    }();
    var compactQueue = function compactQueue2(queue) {
      while (queue.length > 1) {
        var item = queue.pop();
        var obj = item.obj[item.prop];
        if (isArray2(obj)) {
          var compacted = [];
          for (var j = 0; j < obj.length; ++j) {
            if (typeof obj[j] !== "undefined") {
              compacted.push(obj[j]);
            }
          }
          item.obj[item.prop] = compacted;
        }
      }
    };
    var arrayToObject2 = function arrayToObject3(source, options) {
      var obj = options && options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      for (var i = 0; i < source.length; ++i) {
        if (typeof source[i] !== "undefined") {
          obj[i] = source[i];
        }
      }
      return obj;
    };
    var merge2 = function merge3(target, source, options) {
      if (!source) {
        return target;
      }
      if (typeof source !== "object") {
        if (isArray2(target)) {
          target.push(source);
        } else if (target && typeof target === "object") {
          if (options && (options.plainObjects || options.allowPrototypes) || !has.call(Object.prototype, source)) {
            target[source] = true;
          }
        } else {
          return [target, source];
        }
        return target;
      }
      if (!target || typeof target !== "object") {
        return [target].concat(source);
      }
      var mergeTarget = target;
      if (isArray2(target) && !isArray2(source)) {
        mergeTarget = arrayToObject2(target, options);
      }
      if (isArray2(target) && isArray2(source)) {
        source.forEach(function(item, i) {
          if (has.call(target, i)) {
            var targetItem = target[i];
            if (targetItem && typeof targetItem === "object" && item && typeof item === "object") {
              target[i] = merge3(targetItem, item, options);
            } else {
              target.push(item);
            }
          } else {
            target[i] = item;
          }
        });
        return target;
      }
      return Object.keys(source).reduce(function(acc, key) {
        var value = source[key];
        if (has.call(acc, key)) {
          acc[key] = merge3(acc[key], value, options);
        } else {
          acc[key] = value;
        }
        return acc;
      }, mergeTarget);
    };
    var assign = function assignSingleSource(target, source) {
      return Object.keys(source).reduce(function(acc, key) {
        acc[key] = source[key];
        return acc;
      }, target);
    };
    var decode = function(str, decoder, charset) {
      var strWithoutPlus = str.replace(/\+/g, " ");
      if (charset === "iso-8859-1") {
        return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
      }
      try {
        return decodeURIComponent(strWithoutPlus);
      } catch (e) {
        return strWithoutPlus;
      }
    };
    var encode3 = function encode4(str, defaultEncoder, charset, kind, format) {
      if (str.length === 0) {
        return str;
      }
      var string = str;
      if (typeof str === "symbol") {
        string = Symbol.prototype.toString.call(str);
      } else if (typeof str !== "string") {
        string = String(str);
      }
      if (charset === "iso-8859-1") {
        return escape(string).replace(/%u[0-9a-f]{4}/gi, function($0) {
          return "%26%23" + parseInt($0.slice(2), 16) + "%3B";
        });
      }
      var out = "";
      for (var i = 0; i < string.length; ++i) {
        var c = string.charCodeAt(i);
        if (c === 45 || c === 46 || c === 95 || c === 126 || c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122 || format === formats.RFC1738 && (c === 40 || c === 41)) {
          out += string.charAt(i);
          continue;
        }
        if (c < 128) {
          out = out + hexTable[c];
          continue;
        }
        if (c < 2048) {
          out = out + (hexTable[192 | c >> 6] + hexTable[128 | c & 63]);
          continue;
        }
        if (c < 55296 || c >= 57344) {
          out = out + (hexTable[224 | c >> 12] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63]);
          continue;
        }
        i += 1;
        c = 65536 + ((c & 1023) << 10 | string.charCodeAt(i) & 1023);
        out += hexTable[240 | c >> 18] + hexTable[128 | c >> 12 & 63] + hexTable[128 | c >> 6 & 63] + hexTable[128 | c & 63];
      }
      return out;
    };
    var compact = function compact2(value) {
      var queue = [{ obj: { o: value }, prop: "o" }];
      var refs = [];
      for (var i = 0; i < queue.length; ++i) {
        var item = queue[i];
        var obj = item.obj[item.prop];
        var keys = Object.keys(obj);
        for (var j = 0; j < keys.length; ++j) {
          var key = keys[j];
          var val = obj[key];
          if (typeof val === "object" && val !== null && refs.indexOf(val) === -1) {
            queue.push({ obj, prop: key });
            refs.push(val);
          }
        }
      }
      compactQueue(queue);
      return value;
    };
    var isRegExp2 = function isRegExp3(obj) {
      return Object.prototype.toString.call(obj) === "[object RegExp]";
    };
    var isBuffer2 = function isBuffer3(obj) {
      if (!obj || typeof obj !== "object") {
        return false;
      }
      return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
    };
    var combine = function combine2(a, b) {
      return [].concat(a, b);
    };
    var maybeMap = function maybeMap2(val, fn) {
      if (isArray2(val)) {
        var mapped = [];
        for (var i = 0; i < val.length; i += 1) {
          mapped.push(fn(val[i]));
        }
        return mapped;
      }
      return fn(val);
    };
    module2.exports = {
      arrayToObject: arrayToObject2,
      assign,
      combine,
      compact,
      decode,
      encode: encode3,
      isBuffer: isBuffer2,
      isRegExp: isRegExp2,
      maybeMap,
      merge: merge2
    };
  }
});

// node_modules/qs/lib/stringify.js
var require_stringify = __commonJS({
  "node_modules/qs/lib/stringify.js"(exports, module2) {
    "use strict";
    var getSideChannel = require_side_channel();
    var utils = require_utils();
    var formats = require_formats();
    var has = Object.prototype.hasOwnProperty;
    var arrayPrefixGenerators = {
      brackets: function brackets(prefix) {
        return prefix + "[]";
      },
      comma: "comma",
      indices: function indices(prefix, key) {
        return prefix + "[" + key + "]";
      },
      repeat: function repeat(prefix) {
        return prefix;
      }
    };
    var isArray2 = Array.isArray;
    var split = String.prototype.split;
    var push = Array.prototype.push;
    var pushToArray = function(arr, valueOrArray) {
      push.apply(arr, isArray2(valueOrArray) ? valueOrArray : [valueOrArray]);
    };
    var toISO = Date.prototype.toISOString;
    var defaultFormat = formats["default"];
    var defaults2 = {
      addQueryPrefix: false,
      allowDots: false,
      charset: "utf-8",
      charsetSentinel: false,
      delimiter: "&",
      encode: true,
      encoder: utils.encode,
      encodeValuesOnly: false,
      format: defaultFormat,
      formatter: formats.formatters[defaultFormat],
      indices: false,
      serializeDate: function serializeDate(date) {
        return toISO.call(date);
      },
      skipNulls: false,
      strictNullHandling: false
    };
    var isNonNullishPrimitive = function isNonNullishPrimitive2(v) {
      return typeof v === "string" || typeof v === "number" || typeof v === "boolean" || typeof v === "symbol" || typeof v === "bigint";
    };
    var sentinel = {};
    var stringify = function stringify2(object, prefix, generateArrayPrefix, strictNullHandling, skipNulls, encoder, filter2, sort, allowDots, serializeDate, format, formatter, encodeValuesOnly, charset, sideChannel) {
      var obj = object;
      var tmpSc = sideChannel;
      var step = 0;
      var findFlag = false;
      while ((tmpSc = tmpSc.get(sentinel)) !== void 0 && !findFlag) {
        var pos = tmpSc.get(object);
        step += 1;
        if (typeof pos !== "undefined") {
          if (pos === step) {
            throw new RangeError("Cyclic object value");
          } else {
            findFlag = true;
          }
        }
        if (typeof tmpSc.get(sentinel) === "undefined") {
          step = 0;
        }
      }
      if (typeof filter2 === "function") {
        obj = filter2(prefix, obj);
      } else if (obj instanceof Date) {
        obj = serializeDate(obj);
      } else if (generateArrayPrefix === "comma" && isArray2(obj)) {
        obj = utils.maybeMap(obj, function(value2) {
          if (value2 instanceof Date) {
            return serializeDate(value2);
          }
          return value2;
        });
      }
      if (obj === null) {
        if (strictNullHandling) {
          return encoder && !encodeValuesOnly ? encoder(prefix, defaults2.encoder, charset, "key", format) : prefix;
        }
        obj = "";
      }
      if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
        if (encoder) {
          var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults2.encoder, charset, "key", format);
          if (generateArrayPrefix === "comma" && encodeValuesOnly) {
            var valuesArray = split.call(String(obj), ",");
            var valuesJoined = "";
            for (var i = 0; i < valuesArray.length; ++i) {
              valuesJoined += (i === 0 ? "" : ",") + formatter(encoder(valuesArray[i], defaults2.encoder, charset, "value", format));
            }
            return [formatter(keyValue) + "=" + valuesJoined];
          }
          return [formatter(keyValue) + "=" + formatter(encoder(obj, defaults2.encoder, charset, "value", format))];
        }
        return [formatter(prefix) + "=" + formatter(String(obj))];
      }
      var values = [];
      if (typeof obj === "undefined") {
        return values;
      }
      var objKeys;
      if (generateArrayPrefix === "comma" && isArray2(obj)) {
        objKeys = [{ value: obj.length > 0 ? obj.join(",") || null : void 0 }];
      } else if (isArray2(filter2)) {
        objKeys = filter2;
      } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
      }
      for (var j = 0; j < objKeys.length; ++j) {
        var key = objKeys[j];
        var value = typeof key === "object" && typeof key.value !== "undefined" ? key.value : obj[key];
        if (skipNulls && value === null) {
          continue;
        }
        var keyPrefix = isArray2(obj) ? typeof generateArrayPrefix === "function" ? generateArrayPrefix(prefix, key) : prefix : prefix + (allowDots ? "." + key : "[" + key + "]");
        sideChannel.set(object, step);
        var valueSideChannel = getSideChannel();
        valueSideChannel.set(sentinel, sideChannel);
        pushToArray(values, stringify2(
          value,
          keyPrefix,
          generateArrayPrefix,
          strictNullHandling,
          skipNulls,
          encoder,
          filter2,
          sort,
          allowDots,
          serializeDate,
          format,
          formatter,
          encodeValuesOnly,
          charset,
          valueSideChannel
        ));
      }
      return values;
    };
    var normalizeStringifyOptions = function normalizeStringifyOptions2(opts) {
      if (!opts) {
        return defaults2;
      }
      if (opts.encoder !== null && typeof opts.encoder !== "undefined" && typeof opts.encoder !== "function") {
        throw new TypeError("Encoder has to be a function.");
      }
      var charset = opts.charset || defaults2.charset;
      if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") {
        throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
      }
      var format = formats["default"];
      if (typeof opts.format !== "undefined") {
        if (!has.call(formats.formatters, opts.format)) {
          throw new TypeError("Unknown format option provided.");
        }
        format = opts.format;
      }
      var formatter = formats.formatters[format];
      var filter2 = defaults2.filter;
      if (typeof opts.filter === "function" || isArray2(opts.filter)) {
        filter2 = opts.filter;
      }
      return {
        addQueryPrefix: typeof opts.addQueryPrefix === "boolean" ? opts.addQueryPrefix : defaults2.addQueryPrefix,
        allowDots: typeof opts.allowDots === "undefined" ? defaults2.allowDots : !!opts.allowDots,
        charset,
        charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults2.charsetSentinel,
        delimiter: typeof opts.delimiter === "undefined" ? defaults2.delimiter : opts.delimiter,
        encode: typeof opts.encode === "boolean" ? opts.encode : defaults2.encode,
        encoder: typeof opts.encoder === "function" ? opts.encoder : defaults2.encoder,
        encodeValuesOnly: typeof opts.encodeValuesOnly === "boolean" ? opts.encodeValuesOnly : defaults2.encodeValuesOnly,
        filter: filter2,
        format,
        formatter,
        serializeDate: typeof opts.serializeDate === "function" ? opts.serializeDate : defaults2.serializeDate,
        skipNulls: typeof opts.skipNulls === "boolean" ? opts.skipNulls : defaults2.skipNulls,
        sort: typeof opts.sort === "function" ? opts.sort : null,
        strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults2.strictNullHandling
      };
    };
    module2.exports = function(object, opts) {
      var obj = object;
      var options = normalizeStringifyOptions(opts);
      var objKeys;
      var filter2;
      if (typeof options.filter === "function") {
        filter2 = options.filter;
        obj = filter2("", obj);
      } else if (isArray2(options.filter)) {
        filter2 = options.filter;
        objKeys = filter2;
      }
      var keys = [];
      if (typeof obj !== "object" || obj === null) {
        return "";
      }
      var arrayFormat;
      if (opts && opts.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = opts.arrayFormat;
      } else if (opts && "indices" in opts) {
        arrayFormat = opts.indices ? "indices" : "repeat";
      } else {
        arrayFormat = "indices";
      }
      var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];
      if (!objKeys) {
        objKeys = Object.keys(obj);
      }
      if (options.sort) {
        objKeys.sort(options.sort);
      }
      var sideChannel = getSideChannel();
      for (var i = 0; i < objKeys.length; ++i) {
        var key = objKeys[i];
        if (options.skipNulls && obj[key] === null) {
          continue;
        }
        pushToArray(keys, stringify(
          obj[key],
          key,
          generateArrayPrefix,
          options.strictNullHandling,
          options.skipNulls,
          options.encode ? options.encoder : null,
          options.filter,
          options.sort,
          options.allowDots,
          options.serializeDate,
          options.format,
          options.formatter,
          options.encodeValuesOnly,
          options.charset,
          sideChannel
        ));
      }
      var joined = keys.join(options.delimiter);
      var prefix = options.addQueryPrefix === true ? "?" : "";
      if (options.charsetSentinel) {
        if (options.charset === "iso-8859-1") {
          prefix += "utf8=%26%2310003%3B&";
        } else {
          prefix += "utf8=%E2%9C%93&";
        }
      }
      return joined.length > 0 ? prefix + joined : "";
    };
  }
});

// node_modules/qs/lib/parse.js
var require_parse = __commonJS({
  "node_modules/qs/lib/parse.js"(exports, module2) {
    "use strict";
    var utils = require_utils();
    var has = Object.prototype.hasOwnProperty;
    var isArray2 = Array.isArray;
    var defaults2 = {
      allowDots: false,
      allowPrototypes: false,
      allowSparse: false,
      arrayLimit: 20,
      charset: "utf-8",
      charsetSentinel: false,
      comma: false,
      decoder: utils.decode,
      delimiter: "&",
      depth: 5,
      ignoreQueryPrefix: false,
      interpretNumericEntities: false,
      parameterLimit: 1e3,
      parseArrays: true,
      plainObjects: false,
      strictNullHandling: false
    };
    var interpretNumericEntities = function(str) {
      return str.replace(/&#(\d+);/g, function($0, numberStr) {
        return String.fromCharCode(parseInt(numberStr, 10));
      });
    };
    var parseArrayValue = function(val, options) {
      if (val && typeof val === "string" && options.comma && val.indexOf(",") > -1) {
        return val.split(",");
      }
      return val;
    };
    var isoSentinel = "utf8=%26%2310003%3B";
    var charsetSentinel = "utf8=%E2%9C%93";
    var parseValues = function parseQueryStringValues(str, options) {
      var obj = {};
      var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, "") : str;
      var limit = options.parameterLimit === Infinity ? void 0 : options.parameterLimit;
      var parts = cleanStr.split(options.delimiter, limit);
      var skipIndex = -1;
      var i;
      var charset = options.charset;
      if (options.charsetSentinel) {
        for (i = 0; i < parts.length; ++i) {
          if (parts[i].indexOf("utf8=") === 0) {
            if (parts[i] === charsetSentinel) {
              charset = "utf-8";
            } else if (parts[i] === isoSentinel) {
              charset = "iso-8859-1";
            }
            skipIndex = i;
            i = parts.length;
          }
        }
      }
      for (i = 0; i < parts.length; ++i) {
        if (i === skipIndex) {
          continue;
        }
        var part = parts[i];
        var bracketEqualsPos = part.indexOf("]=");
        var pos = bracketEqualsPos === -1 ? part.indexOf("=") : bracketEqualsPos + 1;
        var key, val;
        if (pos === -1) {
          key = options.decoder(part, defaults2.decoder, charset, "key");
          val = options.strictNullHandling ? null : "";
        } else {
          key = options.decoder(part.slice(0, pos), defaults2.decoder, charset, "key");
          val = utils.maybeMap(
            parseArrayValue(part.slice(pos + 1), options),
            function(encodedVal) {
              return options.decoder(encodedVal, defaults2.decoder, charset, "value");
            }
          );
        }
        if (val && options.interpretNumericEntities && charset === "iso-8859-1") {
          val = interpretNumericEntities(val);
        }
        if (part.indexOf("[]=") > -1) {
          val = isArray2(val) ? [val] : val;
        }
        if (has.call(obj, key)) {
          obj[key] = utils.combine(obj[key], val);
        } else {
          obj[key] = val;
        }
      }
      return obj;
    };
    var parseObject = function(chain, val, options, valuesParsed) {
      var leaf = valuesParsed ? val : parseArrayValue(val, options);
      for (var i = chain.length - 1; i >= 0; --i) {
        var obj;
        var root = chain[i];
        if (root === "[]" && options.parseArrays) {
          obj = [].concat(leaf);
        } else {
          obj = options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
          var cleanRoot = root.charAt(0) === "[" && root.charAt(root.length - 1) === "]" ? root.slice(1, -1) : root;
          var index = parseInt(cleanRoot, 10);
          if (!options.parseArrays && cleanRoot === "") {
            obj = { 0: leaf };
          } else if (!isNaN(index) && root !== cleanRoot && String(index) === cleanRoot && index >= 0 && (options.parseArrays && index <= options.arrayLimit)) {
            obj = [];
            obj[index] = leaf;
          } else if (cleanRoot !== "__proto__") {
            obj[cleanRoot] = leaf;
          }
        }
        leaf = obj;
      }
      return leaf;
    };
    var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
      if (!givenKey) {
        return;
      }
      var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, "[$1]") : givenKey;
      var brackets = /(\[[^[\]]*])/;
      var child = /(\[[^[\]]*])/g;
      var segment = options.depth > 0 && brackets.exec(key);
      var parent = segment ? key.slice(0, segment.index) : key;
      var keys = [];
      if (parent) {
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
          if (!options.allowPrototypes) {
            return;
          }
        }
        keys.push(parent);
      }
      var i = 0;
      while (options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth) {
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
          if (!options.allowPrototypes) {
            return;
          }
        }
        keys.push(segment[1]);
      }
      if (segment) {
        keys.push("[" + key.slice(segment.index) + "]");
      }
      return parseObject(keys, val, options, valuesParsed);
    };
    var normalizeParseOptions = function normalizeParseOptions2(opts) {
      if (!opts) {
        return defaults2;
      }
      if (opts.decoder !== null && opts.decoder !== void 0 && typeof opts.decoder !== "function") {
        throw new TypeError("Decoder has to be a function.");
      }
      if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") {
        throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
      }
      var charset = typeof opts.charset === "undefined" ? defaults2.charset : opts.charset;
      return {
        allowDots: typeof opts.allowDots === "undefined" ? defaults2.allowDots : !!opts.allowDots,
        allowPrototypes: typeof opts.allowPrototypes === "boolean" ? opts.allowPrototypes : defaults2.allowPrototypes,
        allowSparse: typeof opts.allowSparse === "boolean" ? opts.allowSparse : defaults2.allowSparse,
        arrayLimit: typeof opts.arrayLimit === "number" ? opts.arrayLimit : defaults2.arrayLimit,
        charset,
        charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults2.charsetSentinel,
        comma: typeof opts.comma === "boolean" ? opts.comma : defaults2.comma,
        decoder: typeof opts.decoder === "function" ? opts.decoder : defaults2.decoder,
        delimiter: typeof opts.delimiter === "string" || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults2.delimiter,
        depth: typeof opts.depth === "number" || opts.depth === false ? +opts.depth : defaults2.depth,
        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
        interpretNumericEntities: typeof opts.interpretNumericEntities === "boolean" ? opts.interpretNumericEntities : defaults2.interpretNumericEntities,
        parameterLimit: typeof opts.parameterLimit === "number" ? opts.parameterLimit : defaults2.parameterLimit,
        parseArrays: opts.parseArrays !== false,
        plainObjects: typeof opts.plainObjects === "boolean" ? opts.plainObjects : defaults2.plainObjects,
        strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults2.strictNullHandling
      };
    };
    module2.exports = function(str, opts) {
      var options = normalizeParseOptions(opts);
      if (str === "" || str === null || typeof str === "undefined") {
        return options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      }
      var tempObj = typeof str === "string" ? parseValues(str, options) : str;
      var obj = options.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      var keys = Object.keys(tempObj);
      for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options, typeof str === "string");
        obj = utils.merge(obj, newObj, options);
      }
      if (options.allowSparse === true) {
        return obj;
      }
      return utils.compact(obj);
    };
  }
});

// node_modules/qs/lib/index.js
var require_lib = __commonJS({
  "node_modules/qs/lib/index.js"(exports, module2) {
    "use strict";
    var stringify = require_stringify();
    var parse = require_parse();
    var formats = require_formats();
    module2.exports = {
      formats,
      parse,
      stringify
    };
  }
});

// api.ts
var api_exports = {};
__export(api_exports, {
  APIS: () => APIS,
  AccountApi: () => AccountApi,
  AccountCreateRequest: () => AccountCreateRequest,
  AccountCreateResponse: () => AccountCreateResponse,
  AccountGetResponse: () => AccountGetResponse,
  AccountResponse: () => AccountResponse,
  AccountResponseQuotas: () => AccountResponseQuotas,
  AccountUpdateRequest: () => AccountUpdateRequest,
  AccountVerifyRequest: () => AccountVerifyRequest,
  AccountVerifyResponse: () => AccountVerifyResponse,
  AccountVerifyResponseAccount: () => AccountVerifyResponseAccount,
  ApiAppApi: () => ApiAppApi,
  ApiAppCreateRequest: () => ApiAppCreateRequest,
  ApiAppGetResponse: () => ApiAppGetResponse,
  ApiAppListResponse: () => ApiAppListResponse,
  ApiAppResponse: () => ApiAppResponse,
  ApiAppResponseOAuth: () => ApiAppResponseOAuth,
  ApiAppResponseOptions: () => ApiAppResponseOptions,
  ApiAppResponseOwnerAccount: () => ApiAppResponseOwnerAccount,
  ApiAppResponseWhiteLabelingOptions: () => ApiAppResponseWhiteLabelingOptions,
  ApiAppUpdateRequest: () => ApiAppUpdateRequest,
  ApiKeyAuth: () => ApiKeyAuth,
  BulkSendJobApi: () => BulkSendJobApi,
  BulkSendJobGetResponse: () => BulkSendJobGetResponse,
  BulkSendJobGetResponseSignatureRequests: () => BulkSendJobGetResponseSignatureRequests,
  BulkSendJobListResponse: () => BulkSendJobListResponse,
  BulkSendJobResponse: () => BulkSendJobResponse,
  BulkSendJobSendResponse: () => BulkSendJobSendResponse,
  EmbeddedApi: () => EmbeddedApi,
  EmbeddedEditUrlRequest: () => EmbeddedEditUrlRequest,
  EmbeddedEditUrlResponse: () => EmbeddedEditUrlResponse,
  EmbeddedEditUrlResponseEmbedded: () => EmbeddedEditUrlResponseEmbedded,
  EmbeddedSignUrlResponse: () => EmbeddedSignUrlResponse,
  EmbeddedSignUrlResponseEmbedded: () => EmbeddedSignUrlResponseEmbedded,
  ErrorResponse: () => ErrorResponse,
  ErrorResponseError: () => ErrorResponseError,
  EventCallbackHelper: () => EventCallbackHelper,
  EventCallbackRequest: () => EventCallbackRequest,
  EventCallbackRequestEvent: () => EventCallbackRequestEvent,
  EventCallbackRequestEventMetadata: () => EventCallbackRequestEventMetadata,
  FileResponse: () => FileResponse,
  FileResponseDataUri: () => FileResponseDataUri,
  HttpBasicAuth: () => HttpBasicAuth,
  HttpBearerAuth: () => HttpBearerAuth,
  HttpError: () => HttpError,
  ListInfoResponse: () => ListInfoResponse,
  OAuth: () => OAuth,
  OAuthApi: () => OAuthApi,
  OAuthTokenGenerateRequest: () => OAuthTokenGenerateRequest,
  OAuthTokenRefreshRequest: () => OAuthTokenRefreshRequest,
  OAuthTokenResponse: () => OAuthTokenResponse,
  ObjectSerializer: () => ObjectSerializer,
  ReportApi: () => ReportApi,
  ReportCreateRequest: () => ReportCreateRequest,
  ReportCreateResponse: () => ReportCreateResponse,
  ReportResponse: () => ReportResponse,
  SignatureRequestApi: () => SignatureRequestApi,
  SignatureRequestBulkCreateEmbeddedWithTemplateRequest: () => SignatureRequestBulkCreateEmbeddedWithTemplateRequest,
  SignatureRequestBulkSendWithTemplateRequest: () => SignatureRequestBulkSendWithTemplateRequest,
  SignatureRequestCreateEmbeddedRequest: () => SignatureRequestCreateEmbeddedRequest,
  SignatureRequestCreateEmbeddedWithTemplateRequest: () => SignatureRequestCreateEmbeddedWithTemplateRequest,
  SignatureRequestEditEmbeddedRequest: () => SignatureRequestEditEmbeddedRequest,
  SignatureRequestEditEmbeddedWithTemplateRequest: () => SignatureRequestEditEmbeddedWithTemplateRequest,
  SignatureRequestEditRequest: () => SignatureRequestEditRequest,
  SignatureRequestEditWithTemplateRequest: () => SignatureRequestEditWithTemplateRequest,
  SignatureRequestGetResponse: () => SignatureRequestGetResponse,
  SignatureRequestListResponse: () => SignatureRequestListResponse,
  SignatureRequestRemindRequest: () => SignatureRequestRemindRequest,
  SignatureRequestResponse: () => SignatureRequestResponse,
  SignatureRequestResponseAttachment: () => SignatureRequestResponseAttachment,
  SignatureRequestResponseCustomFieldBase: () => SignatureRequestResponseCustomFieldBase,
  SignatureRequestResponseCustomFieldCheckbox: () => SignatureRequestResponseCustomFieldCheckbox,
  SignatureRequestResponseCustomFieldText: () => SignatureRequestResponseCustomFieldText,
  SignatureRequestResponseCustomFieldTypeEnum: () => SignatureRequestResponseCustomFieldTypeEnum,
  SignatureRequestResponseDataBase: () => SignatureRequestResponseDataBase,
  SignatureRequestResponseDataTypeEnum: () => SignatureRequestResponseDataTypeEnum,
  SignatureRequestResponseDataValueCheckbox: () => SignatureRequestResponseDataValueCheckbox,
  SignatureRequestResponseDataValueCheckboxMerge: () => SignatureRequestResponseDataValueCheckboxMerge,
  SignatureRequestResponseDataValueDateSigned: () => SignatureRequestResponseDataValueDateSigned,
  SignatureRequestResponseDataValueDropdown: () => SignatureRequestResponseDataValueDropdown,
  SignatureRequestResponseDataValueInitials: () => SignatureRequestResponseDataValueInitials,
  SignatureRequestResponseDataValueRadio: () => SignatureRequestResponseDataValueRadio,
  SignatureRequestResponseDataValueSignature: () => SignatureRequestResponseDataValueSignature,
  SignatureRequestResponseDataValueText: () => SignatureRequestResponseDataValueText,
  SignatureRequestResponseDataValueTextMerge: () => SignatureRequestResponseDataValueTextMerge,
  SignatureRequestResponseSignatures: () => SignatureRequestResponseSignatures,
  SignatureRequestSendRequest: () => SignatureRequestSendRequest,
  SignatureRequestSendWithTemplateRequest: () => SignatureRequestSendWithTemplateRequest,
  SignatureRequestUpdateRequest: () => SignatureRequestUpdateRequest,
  SubAttachment: () => SubAttachment,
  SubBulkSignerList: () => SubBulkSignerList,
  SubBulkSignerListCustomField: () => SubBulkSignerListCustomField,
  SubCC: () => SubCC,
  SubCustomField: () => SubCustomField,
  SubEditorOptions: () => SubEditorOptions,
  SubFieldOptions: () => SubFieldOptions,
  SubFormFieldGroup: () => SubFormFieldGroup,
  SubFormFieldRule: () => SubFormFieldRule,
  SubFormFieldRuleAction: () => SubFormFieldRuleAction,
  SubFormFieldRuleTrigger: () => SubFormFieldRuleTrigger,
  SubFormFieldsPerDocumentBase: () => SubFormFieldsPerDocumentBase,
  SubFormFieldsPerDocumentCheckbox: () => SubFormFieldsPerDocumentCheckbox,
  SubFormFieldsPerDocumentCheckboxMerge: () => SubFormFieldsPerDocumentCheckboxMerge,
  SubFormFieldsPerDocumentDateSigned: () => SubFormFieldsPerDocumentDateSigned,
  SubFormFieldsPerDocumentDropdown: () => SubFormFieldsPerDocumentDropdown,
  SubFormFieldsPerDocumentFontEnum: () => SubFormFieldsPerDocumentFontEnum,
  SubFormFieldsPerDocumentHyperlink: () => SubFormFieldsPerDocumentHyperlink,
  SubFormFieldsPerDocumentInitials: () => SubFormFieldsPerDocumentInitials,
  SubFormFieldsPerDocumentRadio: () => SubFormFieldsPerDocumentRadio,
  SubFormFieldsPerDocumentSignature: () => SubFormFieldsPerDocumentSignature,
  SubFormFieldsPerDocumentText: () => SubFormFieldsPerDocumentText,
  SubFormFieldsPerDocumentTextMerge: () => SubFormFieldsPerDocumentTextMerge,
  SubFormFieldsPerDocumentTypeEnum: () => SubFormFieldsPerDocumentTypeEnum,
  SubMergeField: () => SubMergeField,
  SubOAuth: () => SubOAuth,
  SubOptions: () => SubOptions,
  SubSignatureRequestGroupedSigners: () => SubSignatureRequestGroupedSigners,
  SubSignatureRequestSigner: () => SubSignatureRequestSigner,
  SubSignatureRequestTemplateSigner: () => SubSignatureRequestTemplateSigner,
  SubSigningOptions: () => SubSigningOptions,
  SubTeamResponse: () => SubTeamResponse,
  SubTemplateRole: () => SubTemplateRole,
  SubUnclaimedDraftSigner: () => SubUnclaimedDraftSigner,
  SubUnclaimedDraftTemplateSigner: () => SubUnclaimedDraftTemplateSigner,
  SubWhiteLabelingOptions: () => SubWhiteLabelingOptions,
  TeamAddMemberRequest: () => TeamAddMemberRequest,
  TeamApi: () => TeamApi,
  TeamCreateRequest: () => TeamCreateRequest,
  TeamGetInfoResponse: () => TeamGetInfoResponse,
  TeamGetResponse: () => TeamGetResponse,
  TeamInfoResponse: () => TeamInfoResponse,
  TeamInviteResponse: () => TeamInviteResponse,
  TeamInvitesResponse: () => TeamInvitesResponse,
  TeamMemberResponse: () => TeamMemberResponse,
  TeamMembersResponse: () => TeamMembersResponse,
  TeamParentResponse: () => TeamParentResponse,
  TeamRemoveMemberRequest: () => TeamRemoveMemberRequest,
  TeamResponse: () => TeamResponse,
  TeamSubTeamsResponse: () => TeamSubTeamsResponse,
  TeamUpdateRequest: () => TeamUpdateRequest,
  TemplateAddUserRequest: () => TemplateAddUserRequest,
  TemplateApi: () => TemplateApi,
  TemplateCreateEmbeddedDraftRequest: () => TemplateCreateEmbeddedDraftRequest,
  TemplateCreateEmbeddedDraftResponse: () => TemplateCreateEmbeddedDraftResponse,
  TemplateCreateEmbeddedDraftResponseTemplate: () => TemplateCreateEmbeddedDraftResponseTemplate,
  TemplateCreateRequest: () => TemplateCreateRequest,
  TemplateCreateResponse: () => TemplateCreateResponse,
  TemplateCreateResponseTemplate: () => TemplateCreateResponseTemplate,
  TemplateEditResponse: () => TemplateEditResponse,
  TemplateGetResponse: () => TemplateGetResponse,
  TemplateListResponse: () => TemplateListResponse,
  TemplateRemoveUserRequest: () => TemplateRemoveUserRequest,
  TemplateResponse: () => TemplateResponse,
  TemplateResponseAccount: () => TemplateResponseAccount,
  TemplateResponseAccountQuota: () => TemplateResponseAccountQuota,
  TemplateResponseCCRole: () => TemplateResponseCCRole,
  TemplateResponseDocument: () => TemplateResponseDocument,
  TemplateResponseDocumentCustomFieldBase: () => TemplateResponseDocumentCustomFieldBase,
  TemplateResponseDocumentCustomFieldCheckbox: () => TemplateResponseDocumentCustomFieldCheckbox,
  TemplateResponseDocumentCustomFieldText: () => TemplateResponseDocumentCustomFieldText,
  TemplateResponseDocumentFieldGroup: () => TemplateResponseDocumentFieldGroup,
  TemplateResponseDocumentFieldGroupRule: () => TemplateResponseDocumentFieldGroupRule,
  TemplateResponseDocumentFormFieldBase: () => TemplateResponseDocumentFormFieldBase,
  TemplateResponseDocumentFormFieldCheckbox: () => TemplateResponseDocumentFormFieldCheckbox,
  TemplateResponseDocumentFormFieldDateSigned: () => TemplateResponseDocumentFormFieldDateSigned,
  TemplateResponseDocumentFormFieldDropdown: () => TemplateResponseDocumentFormFieldDropdown,
  TemplateResponseDocumentFormFieldHyperlink: () => TemplateResponseDocumentFormFieldHyperlink,
  TemplateResponseDocumentFormFieldInitials: () => TemplateResponseDocumentFormFieldInitials,
  TemplateResponseDocumentFormFieldRadio: () => TemplateResponseDocumentFormFieldRadio,
  TemplateResponseDocumentFormFieldSignature: () => TemplateResponseDocumentFormFieldSignature,
  TemplateResponseDocumentFormFieldText: () => TemplateResponseDocumentFormFieldText,
  TemplateResponseDocumentStaticFieldBase: () => TemplateResponseDocumentStaticFieldBase,
  TemplateResponseDocumentStaticFieldCheckbox: () => TemplateResponseDocumentStaticFieldCheckbox,
  TemplateResponseDocumentStaticFieldDateSigned: () => TemplateResponseDocumentStaticFieldDateSigned,
  TemplateResponseDocumentStaticFieldDropdown: () => TemplateResponseDocumentStaticFieldDropdown,
  TemplateResponseDocumentStaticFieldHyperlink: () => TemplateResponseDocumentStaticFieldHyperlink,
  TemplateResponseDocumentStaticFieldInitials: () => TemplateResponseDocumentStaticFieldInitials,
  TemplateResponseDocumentStaticFieldRadio: () => TemplateResponseDocumentStaticFieldRadio,
  TemplateResponseDocumentStaticFieldSignature: () => TemplateResponseDocumentStaticFieldSignature,
  TemplateResponseDocumentStaticFieldText: () => TemplateResponseDocumentStaticFieldText,
  TemplateResponseFieldAvgTextLength: () => TemplateResponseFieldAvgTextLength,
  TemplateResponseSignerRole: () => TemplateResponseSignerRole,
  TemplateUpdateFilesRequest: () => TemplateUpdateFilesRequest,
  TemplateUpdateFilesResponse: () => TemplateUpdateFilesResponse,
  TemplateUpdateFilesResponseTemplate: () => TemplateUpdateFilesResponseTemplate,
  USER_AGENT: () => USER_AGENT,
  UnclaimedDraftApi: () => UnclaimedDraftApi,
  UnclaimedDraftCreateEmbeddedRequest: () => UnclaimedDraftCreateEmbeddedRequest,
  UnclaimedDraftCreateEmbeddedWithTemplateRequest: () => UnclaimedDraftCreateEmbeddedWithTemplateRequest,
  UnclaimedDraftCreateRequest: () => UnclaimedDraftCreateRequest,
  UnclaimedDraftCreateResponse: () => UnclaimedDraftCreateResponse,
  UnclaimedDraftEditAndResendRequest: () => UnclaimedDraftEditAndResendRequest,
  UnclaimedDraftResponse: () => UnclaimedDraftResponse,
  VoidAuth: () => VoidAuth,
  WarningResponse: () => WarningResponse,
  enumsMap: () => enumsMap,
  generateFormData: () => generateFormData,
  queryParamsSerializer: () => queryParamsSerializer,
  toFormData: () => toFormData3,
  typeMap: () => typeMap
});
module.exports = __toCommonJS(api_exports);

// node_modules/axios/lib/helpers/bind.js
function bind(fn, thisArg) {
  return function wrap() {
    return fn.apply(thisArg, arguments);
  };
}

// node_modules/axios/lib/utils.js
var { toString } = Object.prototype;
var { getPrototypeOf } = Object;
var kindOf = ((cache) => (thing) => {
  const str = toString.call(thing);
  return cache[str] || (cache[str] = str.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null));
var kindOfTest = (type) => {
  type = type.toLowerCase();
  return (thing) => kindOf(thing) === type;
};
var typeOfTest = (type) => (thing) => typeof thing === type;
var { isArray } = Array;
var isUndefined = typeOfTest("undefined");
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor) && isFunction(val.constructor.isBuffer) && val.constructor.isBuffer(val);
}
var isArrayBuffer = kindOfTest("ArrayBuffer");
function isArrayBufferView(val) {
  let result;
  if (typeof ArrayBuffer !== "undefined" && ArrayBuffer.isView) {
    result = ArrayBuffer.isView(val);
  } else {
    result = val && val.buffer && isArrayBuffer(val.buffer);
  }
  return result;
}
var isString = typeOfTest("string");
var isFunction = typeOfTest("function");
var isNumber = typeOfTest("number");
var isObject = (thing) => thing !== null && typeof thing === "object";
var isBoolean = (thing) => thing === true || thing === false;
var isPlainObject = (val) => {
  if (kindOf(val) !== "object") {
    return false;
  }
  const prototype3 = getPrototypeOf(val);
  return (prototype3 === null || prototype3 === Object.prototype || Object.getPrototypeOf(prototype3) === null) && !(Symbol.toStringTag in val) && !(Symbol.iterator in val);
};
var isDate = kindOfTest("Date");
var isFile = kindOfTest("File");
var isBlob = kindOfTest("Blob");
var isFileList = kindOfTest("FileList");
var isStream = (val) => isObject(val) && isFunction(val.pipe);
var isFormData = (thing) => {
  let kind;
  return thing && (typeof FormData === "function" && thing instanceof FormData || isFunction(thing.append) && ((kind = kindOf(thing)) === "formdata" || kind === "object" && isFunction(thing.toString) && thing.toString() === "[object FormData]"));
};
var isURLSearchParams = kindOfTest("URLSearchParams");
var trim = (str) => str.trim ? str.trim() : str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function forEach(obj, fn, { allOwnKeys = false } = {}) {
  if (obj === null || typeof obj === "undefined") {
    return;
  }
  let i;
  let l;
  if (typeof obj !== "object") {
    obj = [obj];
  }
  if (isArray(obj)) {
    for (i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    const keys = allOwnKeys ? Object.getOwnPropertyNames(obj) : Object.keys(obj);
    const len = keys.length;
    let key;
    for (i = 0; i < len; i++) {
      key = keys[i];
      fn.call(null, obj[key], key, obj);
    }
  }
}
function findKey(obj, key) {
  key = key.toLowerCase();
  const keys = Object.keys(obj);
  let i = keys.length;
  let _key;
  while (i-- > 0) {
    _key = keys[i];
    if (key === _key.toLowerCase()) {
      return _key;
    }
  }
  return null;
}
var _global = (() => {
  if (typeof globalThis !== "undefined")
    return globalThis;
  return typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : global;
})();
var isContextDefined = (context) => !isUndefined(context) && context !== _global;
function merge() {
  const { caseless } = isContextDefined(this) && this || {};
  const result = {};
  const assignValue = (val, key) => {
    const targetKey = caseless && findKey(result, key) || key;
    if (isPlainObject(result[targetKey]) && isPlainObject(val)) {
      result[targetKey] = merge(result[targetKey], val);
    } else if (isPlainObject(val)) {
      result[targetKey] = merge({}, val);
    } else if (isArray(val)) {
      result[targetKey] = val.slice();
    } else {
      result[targetKey] = val;
    }
  };
  for (let i = 0, l = arguments.length; i < l; i++) {
    arguments[i] && forEach(arguments[i], assignValue);
  }
  return result;
}
var extend = (a, b, thisArg, { allOwnKeys } = {}) => {
  forEach(b, (val, key) => {
    if (thisArg && isFunction(val)) {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  }, { allOwnKeys });
  return a;
};
var stripBOM = (content) => {
  if (content.charCodeAt(0) === 65279) {
    content = content.slice(1);
  }
  return content;
};
var inherits = (constructor, superConstructor, props, descriptors2) => {
  constructor.prototype = Object.create(superConstructor.prototype, descriptors2);
  constructor.prototype.constructor = constructor;
  Object.defineProperty(constructor, "super", {
    value: superConstructor.prototype
  });
  props && Object.assign(constructor.prototype, props);
};
var toFlatObject = (sourceObj, destObj, filter2, propFilter) => {
  let props;
  let i;
  let prop;
  const merged = {};
  destObj = destObj || {};
  if (sourceObj == null)
    return destObj;
  do {
    props = Object.getOwnPropertyNames(sourceObj);
    i = props.length;
    while (i-- > 0) {
      prop = props[i];
      if ((!propFilter || propFilter(prop, sourceObj, destObj)) && !merged[prop]) {
        destObj[prop] = sourceObj[prop];
        merged[prop] = true;
      }
    }
    sourceObj = filter2 !== false && getPrototypeOf(sourceObj);
  } while (sourceObj && (!filter2 || filter2(sourceObj, destObj)) && sourceObj !== Object.prototype);
  return destObj;
};
var endsWith = (str, searchString, position) => {
  str = String(str);
  if (position === void 0 || position > str.length) {
    position = str.length;
  }
  position -= searchString.length;
  const lastIndex = str.indexOf(searchString, position);
  return lastIndex !== -1 && lastIndex === position;
};
var toArray = (thing) => {
  if (!thing)
    return null;
  if (isArray(thing))
    return thing;
  let i = thing.length;
  if (!isNumber(i))
    return null;
  const arr = new Array(i);
  while (i-- > 0) {
    arr[i] = thing[i];
  }
  return arr;
};
var isTypedArray = ((TypedArray) => {
  return (thing) => {
    return TypedArray && thing instanceof TypedArray;
  };
})(typeof Uint8Array !== "undefined" && getPrototypeOf(Uint8Array));
var forEachEntry = (obj, fn) => {
  const generator = obj && obj[Symbol.iterator];
  const iterator = generator.call(obj);
  let result;
  while ((result = iterator.next()) && !result.done) {
    const pair = result.value;
    fn.call(obj, pair[0], pair[1]);
  }
};
var matchAll = (regExp, str) => {
  let matches;
  const arr = [];
  while ((matches = regExp.exec(str)) !== null) {
    arr.push(matches);
  }
  return arr;
};
var isHTMLForm = kindOfTest("HTMLFormElement");
var toCamelCase = (str) => {
  return str.toLowerCase().replace(
    /[-_\s]([a-z\d])(\w*)/g,
    function replacer(m, p1, p2) {
      return p1.toUpperCase() + p2;
    }
  );
};
var hasOwnProperty = (({ hasOwnProperty: hasOwnProperty2 }) => (obj, prop) => hasOwnProperty2.call(obj, prop))(Object.prototype);
var isRegExp = kindOfTest("RegExp");
var reduceDescriptors = (obj, reducer) => {
  const descriptors2 = Object.getOwnPropertyDescriptors(obj);
  const reducedDescriptors = {};
  forEach(descriptors2, (descriptor, name) => {
    let ret;
    if ((ret = reducer(descriptor, name, obj)) !== false) {
      reducedDescriptors[name] = ret || descriptor;
    }
  });
  Object.defineProperties(obj, reducedDescriptors);
};
var freezeMethods = (obj) => {
  reduceDescriptors(obj, (descriptor, name) => {
    if (isFunction(obj) && ["arguments", "caller", "callee"].indexOf(name) !== -1) {
      return false;
    }
    const value = obj[name];
    if (!isFunction(value))
      return;
    descriptor.enumerable = false;
    if ("writable" in descriptor) {
      descriptor.writable = false;
      return;
    }
    if (!descriptor.set) {
      descriptor.set = () => {
        throw Error("Can not rewrite read-only method '" + name + "'");
      };
    }
  });
};
var toObjectSet = (arrayOrString, delimiter) => {
  const obj = {};
  const define = (arr) => {
    arr.forEach((value) => {
      obj[value] = true;
    });
  };
  isArray(arrayOrString) ? define(arrayOrString) : define(String(arrayOrString).split(delimiter));
  return obj;
};
var noop = () => {
};
var toFiniteNumber = (value, defaultValue) => {
  value = +value;
  return Number.isFinite(value) ? value : defaultValue;
};
var ALPHA = "abcdefghijklmnopqrstuvwxyz";
var DIGIT = "0123456789";
var ALPHABET = {
  DIGIT,
  ALPHA,
  ALPHA_DIGIT: ALPHA + ALPHA.toUpperCase() + DIGIT
};
var generateString = (size = 16, alphabet = ALPHABET.ALPHA_DIGIT) => {
  let str = "";
  const { length } = alphabet;
  while (size--) {
    str += alphabet[Math.random() * length | 0];
  }
  return str;
};
function isSpecCompliantForm(thing) {
  return !!(thing && isFunction(thing.append) && thing[Symbol.toStringTag] === "FormData" && thing[Symbol.iterator]);
}
var toJSONObject = (obj) => {
  const stack = new Array(10);
  const visit = (source, i) => {
    if (isObject(source)) {
      if (stack.indexOf(source) >= 0) {
        return;
      }
      if (!("toJSON" in source)) {
        stack[i] = source;
        const target = isArray(source) ? [] : {};
        forEach(source, (value, key) => {
          const reducedValue = visit(value, i + 1);
          !isUndefined(reducedValue) && (target[key] = reducedValue);
        });
        stack[i] = void 0;
        return target;
      }
    }
    return source;
  };
  return visit(obj, 0);
};
var isAsyncFn = kindOfTest("AsyncFunction");
var isThenable = (thing) => thing && (isObject(thing) || isFunction(thing)) && isFunction(thing.then) && isFunction(thing.catch);
var utils_default = {
  isArray,
  isArrayBuffer,
  isBuffer,
  isFormData,
  isArrayBufferView,
  isString,
  isNumber,
  isBoolean,
  isObject,
  isPlainObject,
  isUndefined,
  isDate,
  isFile,
  isBlob,
  isRegExp,
  isFunction,
  isStream,
  isURLSearchParams,
  isTypedArray,
  isFileList,
  forEach,
  merge,
  extend,
  trim,
  stripBOM,
  inherits,
  toFlatObject,
  kindOf,
  kindOfTest,
  endsWith,
  toArray,
  forEachEntry,
  matchAll,
  isHTMLForm,
  hasOwnProperty,
  hasOwnProp: hasOwnProperty,
  reduceDescriptors,
  freezeMethods,
  toObjectSet,
  toCamelCase,
  noop,
  toFiniteNumber,
  findKey,
  global: _global,
  isContextDefined,
  ALPHABET,
  generateString,
  isSpecCompliantForm,
  toJSONObject,
  isAsyncFn,
  isThenable
};

// node_modules/axios/lib/core/AxiosError.js
function AxiosError(message, code, config, request, response) {
  Error.call(this);
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, this.constructor);
  } else {
    this.stack = new Error().stack;
  }
  this.message = message;
  this.name = "AxiosError";
  code && (this.code = code);
  config && (this.config = config);
  request && (this.request = request);
  response && (this.response = response);
}
utils_default.inherits(AxiosError, Error, {
  toJSON: function toJSON() {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: utils_default.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
var prototype = AxiosError.prototype;
var descriptors = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
].forEach((code) => {
  descriptors[code] = { value: code };
});
Object.defineProperties(AxiosError, descriptors);
Object.defineProperty(prototype, "isAxiosError", { value: true });
AxiosError.from = (error, code, config, request, response, customProps) => {
  const axiosError = Object.create(prototype);
  utils_default.toFlatObject(error, axiosError, function filter2(obj) {
    return obj !== Error.prototype;
  }, (prop) => {
    return prop !== "isAxiosError";
  });
  AxiosError.call(axiosError, error.message, code, config, request, response);
  axiosError.cause = error;
  axiosError.name = error.name;
  customProps && Object.assign(axiosError, customProps);
  return axiosError;
};
var AxiosError_default = AxiosError;

// node_modules/axios/lib/platform/node/classes/FormData.js
var import_form_data = __toESM(require_form_data(), 1);
var FormData_default = import_form_data.default;

// node_modules/axios/lib/helpers/toFormData.js
function isVisitable(thing) {
  return utils_default.isPlainObject(thing) || utils_default.isArray(thing);
}
function removeBrackets(key) {
  return utils_default.endsWith(key, "[]") ? key.slice(0, -2) : key;
}
function renderKey(path, key, dots) {
  if (!path)
    return key;
  return path.concat(key).map(function each(token, i) {
    token = removeBrackets(token);
    return !dots && i ? "[" + token + "]" : token;
  }).join(dots ? "." : "");
}
function isFlatArray(arr) {
  return utils_default.isArray(arr) && !arr.some(isVisitable);
}
var predicates = utils_default.toFlatObject(utils_default, {}, null, function filter(prop) {
  return /^is[A-Z]/.test(prop);
});
function toFormData(obj, formData2, options) {
  if (!utils_default.isObject(obj)) {
    throw new TypeError("target must be an object");
  }
  formData2 = formData2 || new (FormData_default || FormData)();
  options = utils_default.toFlatObject(options, {
    metaTokens: true,
    dots: false,
    indexes: false
  }, false, function defined(option, source) {
    return !utils_default.isUndefined(source[option]);
  });
  const metaTokens = options.metaTokens;
  const visitor = options.visitor || defaultVisitor;
  const dots = options.dots;
  const indexes = options.indexes;
  const _Blob = options.Blob || typeof Blob !== "undefined" && Blob;
  const useBlob = _Blob && utils_default.isSpecCompliantForm(formData2);
  if (!utils_default.isFunction(visitor)) {
    throw new TypeError("visitor must be a function");
  }
  function convertValue(value) {
    if (value === null)
      return "";
    if (utils_default.isDate(value)) {
      return value.toISOString();
    }
    if (!useBlob && utils_default.isBlob(value)) {
      throw new AxiosError_default("Blob is not supported. Use a Buffer instead.");
    }
    if (utils_default.isArrayBuffer(value) || utils_default.isTypedArray(value)) {
      return useBlob && typeof Blob === "function" ? new Blob([value]) : Buffer.from(value);
    }
    return value;
  }
  function defaultVisitor(value, key, path) {
    let arr = value;
    if (value && !path && typeof value === "object") {
      if (utils_default.endsWith(key, "{}")) {
        key = metaTokens ? key : key.slice(0, -2);
        value = JSON.stringify(value);
      } else if (utils_default.isArray(value) && isFlatArray(value) || (utils_default.isFileList(value) || utils_default.endsWith(key, "[]")) && (arr = utils_default.toArray(value))) {
        key = removeBrackets(key);
        arr.forEach(function each(el, index) {
          !(utils_default.isUndefined(el) || el === null) && formData2.append(
            indexes === true ? renderKey([key], index, dots) : indexes === null ? key : key + "[]",
            convertValue(el)
          );
        });
        return false;
      }
    }
    if (isVisitable(value)) {
      return true;
    }
    formData2.append(renderKey(path, key, dots), convertValue(value));
    return false;
  }
  const stack = [];
  const exposedHelpers = Object.assign(predicates, {
    defaultVisitor,
    convertValue,
    isVisitable
  });
  function build(value, path) {
    if (utils_default.isUndefined(value))
      return;
    if (stack.indexOf(value) !== -1) {
      throw Error("Circular reference detected in " + path.join("."));
    }
    stack.push(value);
    utils_default.forEach(value, function each(el, key) {
      const result = !(utils_default.isUndefined(el) || el === null) && visitor.call(
        formData2,
        el,
        utils_default.isString(key) ? key.trim() : key,
        path,
        exposedHelpers
      );
      if (result === true) {
        build(el, path ? path.concat(key) : [key]);
      }
    });
    stack.pop();
  }
  if (!utils_default.isObject(obj)) {
    throw new TypeError("data must be an object");
  }
  build(obj);
  return formData2;
}
var toFormData_default = toFormData;

// node_modules/axios/lib/helpers/AxiosURLSearchParams.js
function encode(str) {
  const charMap = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(str).replace(/[!'()~]|%20|%00/g, function replacer(match) {
    return charMap[match];
  });
}
function AxiosURLSearchParams(params, options) {
  this._pairs = [];
  params && toFormData_default(params, this, options);
}
var prototype2 = AxiosURLSearchParams.prototype;
prototype2.append = function append(name, value) {
  this._pairs.push([name, value]);
};
prototype2.toString = function toString2(encoder) {
  const _encode = encoder ? function(value) {
    return encoder.call(this, value, encode);
  } : encode;
  return this._pairs.map(function each(pair) {
    return _encode(pair[0]) + "=" + _encode(pair[1]);
  }, "").join("&");
};
var AxiosURLSearchParams_default = AxiosURLSearchParams;

// node_modules/axios/lib/helpers/buildURL.js
function encode2(val) {
  return encodeURIComponent(val).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function buildURL(url2, params, options) {
  if (!params) {
    return url2;
  }
  const _encode = options && options.encode || encode2;
  const serializeFn = options && options.serialize;
  let serializedParams;
  if (serializeFn) {
    serializedParams = serializeFn(params, options);
  } else {
    serializedParams = utils_default.isURLSearchParams(params) ? params.toString() : new AxiosURLSearchParams_default(params, options).toString(_encode);
  }
  if (serializedParams) {
    const hashmarkIndex = url2.indexOf("#");
    if (hashmarkIndex !== -1) {
      url2 = url2.slice(0, hashmarkIndex);
    }
    url2 += (url2.indexOf("?") === -1 ? "?" : "&") + serializedParams;
  }
  return url2;
}

// node_modules/axios/lib/core/InterceptorManager.js
var InterceptorManager = class {
  constructor() {
    this.handlers = [];
  }
  use(fulfilled, rejected, options) {
    this.handlers.push({
      fulfilled,
      rejected,
      synchronous: options ? options.synchronous : false,
      runWhen: options ? options.runWhen : null
    });
    return this.handlers.length - 1;
  }
  eject(id) {
    if (this.handlers[id]) {
      this.handlers[id] = null;
    }
  }
  clear() {
    if (this.handlers) {
      this.handlers = [];
    }
  }
  forEach(fn) {
    utils_default.forEach(this.handlers, function forEachHandler(h) {
      if (h !== null) {
        fn(h);
      }
    });
  }
};
var InterceptorManager_default = InterceptorManager;

// node_modules/axios/lib/defaults/transitional.js
var transitional_default = {
  silentJSONParsing: true,
  forcedJSONParsing: true,
  clarifyTimeoutError: false
};

// node_modules/axios/lib/platform/node/classes/URLSearchParams.js
var import_url = __toESM(require("url"), 1);
var URLSearchParams_default = import_url.default.URLSearchParams;

// node_modules/axios/lib/platform/node/index.js
var node_default = {
  isNode: true,
  classes: {
    URLSearchParams: URLSearchParams_default,
    FormData: FormData_default,
    Blob: typeof Blob !== "undefined" && Blob || null
  },
  protocols: ["http", "https", "file", "data"]
};

// node_modules/axios/lib/helpers/toURLEncodedForm.js
function toURLEncodedForm(data, options) {
  return toFormData_default(data, new node_default.classes.URLSearchParams(), Object.assign({
    visitor: function(value, key, path, helpers) {
      if (node_default.isNode && utils_default.isBuffer(value)) {
        this.append(key, value.toString("base64"));
        return false;
      }
      return helpers.defaultVisitor.apply(this, arguments);
    }
  }, options));
}

// node_modules/axios/lib/helpers/formDataToJSON.js
function parsePropPath(name) {
  return utils_default.matchAll(/\w+|\[(\w*)]/g, name).map((match) => {
    return match[0] === "[]" ? "" : match[1] || match[0];
  });
}
function arrayToObject(arr) {
  const obj = {};
  const keys = Object.keys(arr);
  let i;
  const len = keys.length;
  let key;
  for (i = 0; i < len; i++) {
    key = keys[i];
    obj[key] = arr[key];
  }
  return obj;
}
function formDataToJSON(formData2) {
  function buildPath(path, value, target, index) {
    let name = path[index++];
    const isNumericKey = Number.isFinite(+name);
    const isLast = index >= path.length;
    name = !name && utils_default.isArray(target) ? target.length : name;
    if (isLast) {
      if (utils_default.hasOwnProp(target, name)) {
        target[name] = [target[name], value];
      } else {
        target[name] = value;
      }
      return !isNumericKey;
    }
    if (!target[name] || !utils_default.isObject(target[name])) {
      target[name] = [];
    }
    const result = buildPath(path, value, target[name], index);
    if (result && utils_default.isArray(target[name])) {
      target[name] = arrayToObject(target[name]);
    }
    return !isNumericKey;
  }
  if (utils_default.isFormData(formData2) && utils_default.isFunction(formData2.entries)) {
    const obj = {};
    utils_default.forEachEntry(formData2, (name, value) => {
      buildPath(parsePropPath(name), value, obj, 0);
    });
    return obj;
  }
  return null;
}
var formDataToJSON_default = formDataToJSON;

// node_modules/axios/lib/defaults/index.js
function stringifySafely(rawValue, parser, encoder) {
  if (utils_default.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils_default.trim(rawValue);
    } catch (e) {
      if (e.name !== "SyntaxError") {
        throw e;
      }
    }
  }
  return (encoder || JSON.stringify)(rawValue);
}
var defaults = {
  transitional: transitional_default,
  adapter: ["xhr", "http"],
  transformRequest: [function transformRequest(data, headers) {
    const contentType = headers.getContentType() || "";
    const hasJSONContentType = contentType.indexOf("application/json") > -1;
    const isObjectPayload = utils_default.isObject(data);
    if (isObjectPayload && utils_default.isHTMLForm(data)) {
      data = new FormData(data);
    }
    const isFormData2 = utils_default.isFormData(data);
    if (isFormData2) {
      if (!hasJSONContentType) {
        return data;
      }
      return hasJSONContentType ? JSON.stringify(formDataToJSON_default(data)) : data;
    }
    if (utils_default.isArrayBuffer(data) || utils_default.isBuffer(data) || utils_default.isStream(data) || utils_default.isFile(data) || utils_default.isBlob(data)) {
      return data;
    }
    if (utils_default.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils_default.isURLSearchParams(data)) {
      headers.setContentType("application/x-www-form-urlencoded;charset=utf-8", false);
      return data.toString();
    }
    let isFileList2;
    if (isObjectPayload) {
      if (contentType.indexOf("application/x-www-form-urlencoded") > -1) {
        return toURLEncodedForm(data, this.formSerializer).toString();
      }
      if ((isFileList2 = utils_default.isFileList(data)) || contentType.indexOf("multipart/form-data") > -1) {
        const _FormData = this.env && this.env.FormData;
        return toFormData_default(
          isFileList2 ? { "files[]": data } : data,
          _FormData && new _FormData(),
          this.formSerializer
        );
      }
    }
    if (isObjectPayload || hasJSONContentType) {
      headers.setContentType("application/json", false);
      return stringifySafely(data);
    }
    return data;
  }],
  transformResponse: [function transformResponse(data) {
    const transitional2 = this.transitional || defaults.transitional;
    const forcedJSONParsing = transitional2 && transitional2.forcedJSONParsing;
    const JSONRequested = this.responseType === "json";
    if (data && utils_default.isString(data) && (forcedJSONParsing && !this.responseType || JSONRequested)) {
      const silentJSONParsing = transitional2 && transitional2.silentJSONParsing;
      const strictJSONParsing = !silentJSONParsing && JSONRequested;
      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === "SyntaxError") {
            throw AxiosError_default.from(e, AxiosError_default.ERR_BAD_RESPONSE, this, null, this.response);
          }
          throw e;
        }
      }
    }
    return data;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: node_default.classes.FormData,
    Blob: node_default.classes.Blob
  },
  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  },
  headers: {
    common: {
      "Accept": "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
utils_default.forEach(["delete", "get", "head", "post", "put", "patch"], (method) => {
  defaults.headers[method] = {};
});
var defaults_default = defaults;

// node_modules/axios/lib/helpers/parseHeaders.js
var ignoreDuplicateOf = utils_default.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]);
var parseHeaders_default = (rawHeaders) => {
  const parsed = {};
  let key;
  let val;
  let i;
  rawHeaders && rawHeaders.split("\n").forEach(function parser(line) {
    i = line.indexOf(":");
    key = line.substring(0, i).trim().toLowerCase();
    val = line.substring(i + 1).trim();
    if (!key || parsed[key] && ignoreDuplicateOf[key]) {
      return;
    }
    if (key === "set-cookie") {
      if (parsed[key]) {
        parsed[key].push(val);
      } else {
        parsed[key] = [val];
      }
    } else {
      parsed[key] = parsed[key] ? parsed[key] + ", " + val : val;
    }
  });
  return parsed;
};

// node_modules/axios/lib/core/AxiosHeaders.js
var $internals = Symbol("internals");
function normalizeHeader(header) {
  return header && String(header).trim().toLowerCase();
}
function normalizeValue(value) {
  if (value === false || value == null) {
    return value;
  }
  return utils_default.isArray(value) ? value.map(normalizeValue) : String(value);
}
function parseTokens(str) {
  const tokens = /* @__PURE__ */ Object.create(null);
  const tokensRE = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let match;
  while (match = tokensRE.exec(str)) {
    tokens[match[1]] = match[2];
  }
  return tokens;
}
var isValidHeaderName = (str) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(str.trim());
function matchHeaderValue(context, value, header, filter2, isHeaderNameFilter) {
  if (utils_default.isFunction(filter2)) {
    return filter2.call(this, value, header);
  }
  if (isHeaderNameFilter) {
    value = header;
  }
  if (!utils_default.isString(value))
    return;
  if (utils_default.isString(filter2)) {
    return value.indexOf(filter2) !== -1;
  }
  if (utils_default.isRegExp(filter2)) {
    return filter2.test(value);
  }
}
function formatHeader(header) {
  return header.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (w, char, str) => {
    return char.toUpperCase() + str;
  });
}
function buildAccessors(obj, header) {
  const accessorName = utils_default.toCamelCase(" " + header);
  ["get", "set", "has"].forEach((methodName) => {
    Object.defineProperty(obj, methodName + accessorName, {
      value: function(arg1, arg2, arg3) {
        return this[methodName].call(this, header, arg1, arg2, arg3);
      },
      configurable: true
    });
  });
}
var AxiosHeaders = class {
  constructor(headers) {
    headers && this.set(headers);
  }
  set(header, valueOrRewrite, rewrite) {
    const self2 = this;
    function setHeader(_value, _header, _rewrite) {
      const lHeader = normalizeHeader(_header);
      if (!lHeader) {
        throw new Error("header name must be a non-empty string");
      }
      const key = utils_default.findKey(self2, lHeader);
      if (!key || self2[key] === void 0 || _rewrite === true || _rewrite === void 0 && self2[key] !== false) {
        self2[key || _header] = normalizeValue(_value);
      }
    }
    const setHeaders = (headers, _rewrite) => utils_default.forEach(headers, (_value, _header) => setHeader(_value, _header, _rewrite));
    if (utils_default.isPlainObject(header) || header instanceof this.constructor) {
      setHeaders(header, valueOrRewrite);
    } else if (utils_default.isString(header) && (header = header.trim()) && !isValidHeaderName(header)) {
      setHeaders(parseHeaders_default(header), valueOrRewrite);
    } else {
      header != null && setHeader(valueOrRewrite, header, rewrite);
    }
    return this;
  }
  get(header, parser) {
    header = normalizeHeader(header);
    if (header) {
      const key = utils_default.findKey(this, header);
      if (key) {
        const value = this[key];
        if (!parser) {
          return value;
        }
        if (parser === true) {
          return parseTokens(value);
        }
        if (utils_default.isFunction(parser)) {
          return parser.call(this, value, key);
        }
        if (utils_default.isRegExp(parser)) {
          return parser.exec(value);
        }
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(header, matcher) {
    header = normalizeHeader(header);
    if (header) {
      const key = utils_default.findKey(this, header);
      return !!(key && this[key] !== void 0 && (!matcher || matchHeaderValue(this, this[key], key, matcher)));
    }
    return false;
  }
  delete(header, matcher) {
    const self2 = this;
    let deleted = false;
    function deleteHeader(_header) {
      _header = normalizeHeader(_header);
      if (_header) {
        const key = utils_default.findKey(self2, _header);
        if (key && (!matcher || matchHeaderValue(self2, self2[key], key, matcher))) {
          delete self2[key];
          deleted = true;
        }
      }
    }
    if (utils_default.isArray(header)) {
      header.forEach(deleteHeader);
    } else {
      deleteHeader(header);
    }
    return deleted;
  }
  clear(matcher) {
    const keys = Object.keys(this);
    let i = keys.length;
    let deleted = false;
    while (i--) {
      const key = keys[i];
      if (!matcher || matchHeaderValue(this, this[key], key, matcher, true)) {
        delete this[key];
        deleted = true;
      }
    }
    return deleted;
  }
  normalize(format) {
    const self2 = this;
    const headers = {};
    utils_default.forEach(this, (value, header) => {
      const key = utils_default.findKey(headers, header);
      if (key) {
        self2[key] = normalizeValue(value);
        delete self2[header];
        return;
      }
      const normalized = format ? formatHeader(header) : String(header).trim();
      if (normalized !== header) {
        delete self2[header];
      }
      self2[normalized] = normalizeValue(value);
      headers[normalized] = true;
    });
    return this;
  }
  concat(...targets) {
    return this.constructor.concat(this, ...targets);
  }
  toJSON(asStrings) {
    const obj = /* @__PURE__ */ Object.create(null);
    utils_default.forEach(this, (value, header) => {
      value != null && value !== false && (obj[header] = asStrings && utils_default.isArray(value) ? value.join(", ") : value);
    });
    return obj;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([header, value]) => header + ": " + value).join("\n");
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(thing) {
    return thing instanceof this ? thing : new this(thing);
  }
  static concat(first, ...targets) {
    const computed = new this(first);
    targets.forEach((target) => computed.set(target));
    return computed;
  }
  static accessor(header) {
    const internals = this[$internals] = this[$internals] = {
      accessors: {}
    };
    const accessors = internals.accessors;
    const prototype3 = this.prototype;
    function defineAccessor(_header) {
      const lHeader = normalizeHeader(_header);
      if (!accessors[lHeader]) {
        buildAccessors(prototype3, _header);
        accessors[lHeader] = true;
      }
    }
    utils_default.isArray(header) ? header.forEach(defineAccessor) : defineAccessor(header);
    return this;
  }
};
AxiosHeaders.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
utils_default.reduceDescriptors(AxiosHeaders.prototype, ({ value }, key) => {
  let mapped = key[0].toUpperCase() + key.slice(1);
  return {
    get: () => value,
    set(headerValue) {
      this[mapped] = headerValue;
    }
  };
});
utils_default.freezeMethods(AxiosHeaders);
var AxiosHeaders_default = AxiosHeaders;

// node_modules/axios/lib/core/transformData.js
function transformData(fns, response) {
  const config = this || defaults_default;
  const context = response || config;
  const headers = AxiosHeaders_default.from(context.headers);
  let data = context.data;
  utils_default.forEach(fns, function transform(fn) {
    data = fn.call(config, data, headers.normalize(), response ? response.status : void 0);
  });
  headers.normalize();
  return data;
}

// node_modules/axios/lib/cancel/isCancel.js
function isCancel(value) {
  return !!(value && value.__CANCEL__);
}

// node_modules/axios/lib/cancel/CanceledError.js
function CanceledError(message, config, request) {
  AxiosError_default.call(this, message == null ? "canceled" : message, AxiosError_default.ERR_CANCELED, config, request);
  this.name = "CanceledError";
}
utils_default.inherits(CanceledError, AxiosError_default, {
  __CANCEL__: true
});
var CanceledError_default = CanceledError;

// node_modules/axios/lib/core/settle.js
function settle(resolve, reject, response) {
  const validateStatus2 = response.config.validateStatus;
  if (!response.status || !validateStatus2 || validateStatus2(response.status)) {
    resolve(response);
  } else {
    reject(new AxiosError_default(
      "Request failed with status code " + response.status,
      [AxiosError_default.ERR_BAD_REQUEST, AxiosError_default.ERR_BAD_RESPONSE][Math.floor(response.status / 100) - 4],
      response.config,
      response.request,
      response
    ));
  }
}

// node_modules/axios/lib/helpers/isAbsoluteURL.js
function isAbsoluteURL(url2) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url2);
}

// node_modules/axios/lib/helpers/combineURLs.js
function combineURLs(baseURL, relativeURL) {
  return relativeURL ? baseURL.replace(/\/+$/, "") + "/" + relativeURL.replace(/^\/+/, "") : baseURL;
}

// node_modules/axios/lib/core/buildFullPath.js
function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
}

// node_modules/axios/lib/adapters/http.js
var import_proxy_from_env = __toESM(require_proxy_from_env(), 1);
var import_http = __toESM(require("http"), 1);
var import_https = __toESM(require("https"), 1);
var import_util2 = __toESM(require("util"), 1);
var import_follow_redirects = __toESM(require_follow_redirects(), 1);
var import_zlib = __toESM(require("zlib"), 1);

// node_modules/axios/lib/env/data.js
var VERSION = "1.6.0";

// node_modules/axios/lib/helpers/parseProtocol.js
function parseProtocol(url2) {
  const match = /^([-+\w]{1,25})(:?\/\/|:)/.exec(url2);
  return match && match[1] || "";
}

// node_modules/axios/lib/helpers/fromDataURI.js
var DATA_URL_PATTERN = /^(?:([^;]+);)?(?:[^;]+;)?(base64|),([\s\S]*)$/;
function fromDataURI(uri, asBlob, options) {
  const _Blob = options && options.Blob || node_default.classes.Blob;
  const protocol = parseProtocol(uri);
  if (asBlob === void 0 && _Blob) {
    asBlob = true;
  }
  if (protocol === "data") {
    uri = protocol.length ? uri.slice(protocol.length + 1) : uri;
    const match = DATA_URL_PATTERN.exec(uri);
    if (!match) {
      throw new AxiosError_default("Invalid URL", AxiosError_default.ERR_INVALID_URL);
    }
    const mime = match[1];
    const isBase64 = match[2];
    const body = match[3];
    const buffer = Buffer.from(decodeURIComponent(body), isBase64 ? "base64" : "utf8");
    if (asBlob) {
      if (!_Blob) {
        throw new AxiosError_default("Blob is not supported", AxiosError_default.ERR_NOT_SUPPORT);
      }
      return new _Blob([buffer], { type: mime });
    }
    return buffer;
  }
  throw new AxiosError_default("Unsupported protocol " + protocol, AxiosError_default.ERR_NOT_SUPPORT);
}

// node_modules/axios/lib/adapters/http.js
var import_stream4 = __toESM(require("stream"), 1);

// node_modules/axios/lib/helpers/AxiosTransformStream.js
var import_stream = __toESM(require("stream"), 1);

// node_modules/axios/lib/helpers/throttle.js
function throttle(fn, freq) {
  let timestamp = 0;
  const threshold = 1e3 / freq;
  let timer = null;
  return function throttled(force, args) {
    const now = Date.now();
    if (force || now - timestamp > threshold) {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      timestamp = now;
      return fn.apply(null, args);
    }
    if (!timer) {
      timer = setTimeout(() => {
        timer = null;
        timestamp = Date.now();
        return fn.apply(null, args);
      }, threshold - (now - timestamp));
    }
  };
}
var throttle_default = throttle;

// node_modules/axios/lib/helpers/speedometer.js
function speedometer(samplesCount, min) {
  samplesCount = samplesCount || 10;
  const bytes = new Array(samplesCount);
  const timestamps = new Array(samplesCount);
  let head = 0;
  let tail = 0;
  let firstSampleTS;
  min = min !== void 0 ? min : 1e3;
  return function push(chunkLength) {
    const now = Date.now();
    const startedAt = timestamps[tail];
    if (!firstSampleTS) {
      firstSampleTS = now;
    }
    bytes[head] = chunkLength;
    timestamps[head] = now;
    let i = tail;
    let bytesCount = 0;
    while (i !== head) {
      bytesCount += bytes[i++];
      i = i % samplesCount;
    }
    head = (head + 1) % samplesCount;
    if (head === tail) {
      tail = (tail + 1) % samplesCount;
    }
    if (now - firstSampleTS < min) {
      return;
    }
    const passed = startedAt && now - startedAt;
    return passed ? Math.round(bytesCount * 1e3 / passed) : void 0;
  };
}
var speedometer_default = speedometer;

// node_modules/axios/lib/helpers/AxiosTransformStream.js
var kInternals = Symbol("internals");
var AxiosTransformStream = class extends import_stream.default.Transform {
  constructor(options) {
    options = utils_default.toFlatObject(options, {
      maxRate: 0,
      chunkSize: 64 * 1024,
      minChunkSize: 100,
      timeWindow: 500,
      ticksRate: 2,
      samplesCount: 15
    }, null, (prop, source) => {
      return !utils_default.isUndefined(source[prop]);
    });
    super({
      readableHighWaterMark: options.chunkSize
    });
    const self2 = this;
    const internals = this[kInternals] = {
      length: options.length,
      timeWindow: options.timeWindow,
      ticksRate: options.ticksRate,
      chunkSize: options.chunkSize,
      maxRate: options.maxRate,
      minChunkSize: options.minChunkSize,
      bytesSeen: 0,
      isCaptured: false,
      notifiedBytesLoaded: 0,
      ts: Date.now(),
      bytes: 0,
      onReadCallback: null
    };
    const _speedometer = speedometer_default(internals.ticksRate * options.samplesCount, internals.timeWindow);
    this.on("newListener", (event) => {
      if (event === "progress") {
        if (!internals.isCaptured) {
          internals.isCaptured = true;
        }
      }
    });
    let bytesNotified = 0;
    internals.updateProgress = throttle_default(function throttledHandler() {
      const totalBytes = internals.length;
      const bytesTransferred = internals.bytesSeen;
      const progressBytes = bytesTransferred - bytesNotified;
      if (!progressBytes || self2.destroyed)
        return;
      const rate = _speedometer(progressBytes);
      bytesNotified = bytesTransferred;
      process.nextTick(() => {
        self2.emit("progress", {
          "loaded": bytesTransferred,
          "total": totalBytes,
          "progress": totalBytes ? bytesTransferred / totalBytes : void 0,
          "bytes": progressBytes,
          "rate": rate ? rate : void 0,
          "estimated": rate && totalBytes && bytesTransferred <= totalBytes ? (totalBytes - bytesTransferred) / rate : void 0
        });
      });
    }, internals.ticksRate);
    const onFinish = () => {
      internals.updateProgress(true);
    };
    this.once("end", onFinish);
    this.once("error", onFinish);
  }
  _read(size) {
    const internals = this[kInternals];
    if (internals.onReadCallback) {
      internals.onReadCallback();
    }
    return super._read(size);
  }
  _transform(chunk, encoding, callback) {
    const self2 = this;
    const internals = this[kInternals];
    const maxRate = internals.maxRate;
    const readableHighWaterMark = this.readableHighWaterMark;
    const timeWindow = internals.timeWindow;
    const divider = 1e3 / timeWindow;
    const bytesThreshold = maxRate / divider;
    const minChunkSize = internals.minChunkSize !== false ? Math.max(internals.minChunkSize, bytesThreshold * 0.01) : 0;
    function pushChunk(_chunk, _callback) {
      const bytes = Buffer.byteLength(_chunk);
      internals.bytesSeen += bytes;
      internals.bytes += bytes;
      if (internals.isCaptured) {
        internals.updateProgress();
      }
      if (self2.push(_chunk)) {
        process.nextTick(_callback);
      } else {
        internals.onReadCallback = () => {
          internals.onReadCallback = null;
          process.nextTick(_callback);
        };
      }
    }
    const transformChunk = (_chunk, _callback) => {
      const chunkSize = Buffer.byteLength(_chunk);
      let chunkRemainder = null;
      let maxChunkSize = readableHighWaterMark;
      let bytesLeft;
      let passed = 0;
      if (maxRate) {
        const now = Date.now();
        if (!internals.ts || (passed = now - internals.ts) >= timeWindow) {
          internals.ts = now;
          bytesLeft = bytesThreshold - internals.bytes;
          internals.bytes = bytesLeft < 0 ? -bytesLeft : 0;
          passed = 0;
        }
        bytesLeft = bytesThreshold - internals.bytes;
      }
      if (maxRate) {
        if (bytesLeft <= 0) {
          return setTimeout(() => {
            _callback(null, _chunk);
          }, timeWindow - passed);
        }
        if (bytesLeft < maxChunkSize) {
          maxChunkSize = bytesLeft;
        }
      }
      if (maxChunkSize && chunkSize > maxChunkSize && chunkSize - maxChunkSize > minChunkSize) {
        chunkRemainder = _chunk.subarray(maxChunkSize);
        _chunk = _chunk.subarray(0, maxChunkSize);
      }
      pushChunk(_chunk, chunkRemainder ? () => {
        process.nextTick(_callback, null, chunkRemainder);
      } : _callback);
    };
    transformChunk(chunk, function transformNextChunk(err, _chunk) {
      if (err) {
        return callback(err);
      }
      if (_chunk) {
        transformChunk(_chunk, transformNextChunk);
      } else {
        callback(null);
      }
    });
  }
  setLength(length) {
    this[kInternals].length = +length;
    return this;
  }
};
var AxiosTransformStream_default = AxiosTransformStream;

// node_modules/axios/lib/adapters/http.js
var import_events = __toESM(require("events"), 1);

// node_modules/axios/lib/helpers/formDataToStream.js
var import_util = require("util");
var import_stream2 = require("stream");

// node_modules/axios/lib/helpers/readBlob.js
var { asyncIterator } = Symbol;
var readBlob = async function* (blob) {
  if (blob.stream) {
    yield* blob.stream();
  } else if (blob.arrayBuffer) {
    yield await blob.arrayBuffer();
  } else if (blob[asyncIterator]) {
    yield* blob[asyncIterator]();
  } else {
    yield blob;
  }
};
var readBlob_default = readBlob;

// node_modules/axios/lib/helpers/formDataToStream.js
var BOUNDARY_ALPHABET = utils_default.ALPHABET.ALPHA_DIGIT + "-_";
var textEncoder = new import_util.TextEncoder();
var CRLF = "\r\n";
var CRLF_BYTES = textEncoder.encode(CRLF);
var CRLF_BYTES_COUNT = 2;
var FormDataPart = class {
  constructor(name, value) {
    const { escapeName } = this.constructor;
    const isStringValue = utils_default.isString(value);
    let headers = `Content-Disposition: form-data; name="${escapeName(name)}"${!isStringValue && value.name ? `; filename="${escapeName(value.name)}"` : ""}${CRLF}`;
    if (isStringValue) {
      value = textEncoder.encode(String(value).replace(/\r?\n|\r\n?/g, CRLF));
    } else {
      headers += `Content-Type: ${value.type || "application/octet-stream"}${CRLF}`;
    }
    this.headers = textEncoder.encode(headers + CRLF);
    this.contentLength = isStringValue ? value.byteLength : value.size;
    this.size = this.headers.byteLength + this.contentLength + CRLF_BYTES_COUNT;
    this.name = name;
    this.value = value;
  }
  async *encode() {
    yield this.headers;
    const { value } = this;
    if (utils_default.isTypedArray(value)) {
      yield value;
    } else {
      yield* readBlob_default(value);
    }
    yield CRLF_BYTES;
  }
  static escapeName(name) {
    return String(name).replace(/[\r\n"]/g, (match) => ({
      "\r": "%0D",
      "\n": "%0A",
      '"': "%22"
    })[match]);
  }
};
var formDataToStream = (form, headersHandler, options) => {
  const {
    tag = "form-data-boundary",
    size = 25,
    boundary = tag + "-" + utils_default.generateString(size, BOUNDARY_ALPHABET)
  } = options || {};
  if (!utils_default.isFormData(form)) {
    throw TypeError("FormData instance required");
  }
  if (boundary.length < 1 || boundary.length > 70) {
    throw Error("boundary must be 10-70 characters long");
  }
  const boundaryBytes = textEncoder.encode("--" + boundary + CRLF);
  const footerBytes = textEncoder.encode("--" + boundary + "--" + CRLF + CRLF);
  let contentLength = footerBytes.byteLength;
  const parts = Array.from(form.entries()).map(([name, value]) => {
    const part = new FormDataPart(name, value);
    contentLength += part.size;
    return part;
  });
  contentLength += boundaryBytes.byteLength * parts.length;
  contentLength = utils_default.toFiniteNumber(contentLength);
  const computedHeaders = {
    "Content-Type": `multipart/form-data; boundary=${boundary}`
  };
  if (Number.isFinite(contentLength)) {
    computedHeaders["Content-Length"] = contentLength;
  }
  headersHandler && headersHandler(computedHeaders);
  return import_stream2.Readable.from(async function* () {
    for (const part of parts) {
      yield boundaryBytes;
      yield* part.encode();
    }
    yield footerBytes;
  }());
};
var formDataToStream_default = formDataToStream;

// node_modules/axios/lib/helpers/ZlibHeaderTransformStream.js
var import_stream3 = __toESM(require("stream"), 1);
var ZlibHeaderTransformStream = class extends import_stream3.default.Transform {
  __transform(chunk, encoding, callback) {
    this.push(chunk);
    callback();
  }
  _transform(chunk, encoding, callback) {
    if (chunk.length !== 0) {
      this._transform = this.__transform;
      if (chunk[0] !== 120) {
        const header = Buffer.alloc(2);
        header[0] = 120;
        header[1] = 156;
        this.push(header, encoding);
      }
    }
    this.__transform(chunk, encoding, callback);
  }
};
var ZlibHeaderTransformStream_default = ZlibHeaderTransformStream;

// node_modules/axios/lib/helpers/callbackify.js
var callbackify = (fn, reducer) => {
  return utils_default.isAsyncFn(fn) ? function(...args) {
    const cb = args.pop();
    fn.apply(this, args).then((value) => {
      try {
        reducer ? cb(null, ...reducer(value)) : cb(null, value);
      } catch (err) {
        cb(err);
      }
    }, cb);
  } : fn;
};
var callbackify_default = callbackify;

// node_modules/axios/lib/adapters/http.js
var zlibOptions = {
  flush: import_zlib.default.constants.Z_SYNC_FLUSH,
  finishFlush: import_zlib.default.constants.Z_SYNC_FLUSH
};
var brotliOptions = {
  flush: import_zlib.default.constants.BROTLI_OPERATION_FLUSH,
  finishFlush: import_zlib.default.constants.BROTLI_OPERATION_FLUSH
};
var isBrotliSupported = utils_default.isFunction(import_zlib.default.createBrotliDecompress);
var { http: httpFollow, https: httpsFollow } = import_follow_redirects.default;
var isHttps = /https:?/;
var supportedProtocols = node_default.protocols.map((protocol) => {
  return protocol + ":";
});
function dispatchBeforeRedirect(options) {
  if (options.beforeRedirects.proxy) {
    options.beforeRedirects.proxy(options);
  }
  if (options.beforeRedirects.config) {
    options.beforeRedirects.config(options);
  }
}
function setProxy(options, configProxy, location) {
  let proxy = configProxy;
  if (!proxy && proxy !== false) {
    const proxyUrl = (0, import_proxy_from_env.getProxyForUrl)(location);
    if (proxyUrl) {
      proxy = new URL(proxyUrl);
    }
  }
  if (proxy) {
    if (proxy.username) {
      proxy.auth = (proxy.username || "") + ":" + (proxy.password || "");
    }
    if (proxy.auth) {
      if (proxy.auth.username || proxy.auth.password) {
        proxy.auth = (proxy.auth.username || "") + ":" + (proxy.auth.password || "");
      }
      const base64 = Buffer.from(proxy.auth, "utf8").toString("base64");
      options.headers["Proxy-Authorization"] = "Basic " + base64;
    }
    options.headers.host = options.hostname + (options.port ? ":" + options.port : "");
    const proxyHost = proxy.hostname || proxy.host;
    options.hostname = proxyHost;
    options.host = proxyHost;
    options.port = proxy.port;
    options.path = location;
    if (proxy.protocol) {
      options.protocol = proxy.protocol.includes(":") ? proxy.protocol : `${proxy.protocol}:`;
    }
  }
  options.beforeRedirects.proxy = function beforeRedirect(redirectOptions) {
    setProxy(redirectOptions, configProxy, redirectOptions.href);
  };
}
var isHttpAdapterSupported = typeof process !== "undefined" && utils_default.kindOf(process) === "process";
var wrapAsync = (asyncExecutor) => {
  return new Promise((resolve, reject) => {
    let onDone;
    let isDone;
    const done = (value, isRejected) => {
      if (isDone)
        return;
      isDone = true;
      onDone && onDone(value, isRejected);
    };
    const _resolve = (value) => {
      done(value);
      resolve(value);
    };
    const _reject = (reason) => {
      done(reason, true);
      reject(reason);
    };
    asyncExecutor(_resolve, _reject, (onDoneHandler) => onDone = onDoneHandler).catch(_reject);
  });
};
var resolveFamily = ({ address, family }) => {
  if (!utils_default.isString(address)) {
    throw TypeError("address must be a string");
  }
  return {
    address,
    family: family || (address.indexOf(".") < 0 ? 6 : 4)
  };
};
var buildAddressEntry = (address, family) => resolveFamily(utils_default.isObject(address) ? address : { address, family });
var http_default = isHttpAdapterSupported && function httpAdapter(config) {
  return wrapAsync(async function dispatchHttpRequest(resolve, reject, onDone) {
    let { data, lookup, family } = config;
    const { responseType, responseEncoding } = config;
    const method = config.method.toUpperCase();
    let isDone;
    let rejected = false;
    let req;
    if (lookup) {
      const _lookup = callbackify_default(lookup, (value) => utils_default.isArray(value) ? value : [value]);
      lookup = (hostname, opt, cb) => {
        _lookup(hostname, opt, (err, arg0, arg1) => {
          const addresses = utils_default.isArray(arg0) ? arg0.map((addr) => buildAddressEntry(addr)) : [buildAddressEntry(arg0, arg1)];
          opt.all ? cb(err, addresses) : cb(err, addresses[0].address, addresses[0].family);
        });
      };
    }
    const emitter = new import_events.default();
    const onFinished = () => {
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(abort);
      }
      if (config.signal) {
        config.signal.removeEventListener("abort", abort);
      }
      emitter.removeAllListeners();
    };
    onDone((value, isRejected) => {
      isDone = true;
      if (isRejected) {
        rejected = true;
        onFinished();
      }
    });
    function abort(reason) {
      emitter.emit("abort", !reason || reason.type ? new CanceledError_default(null, config, req) : reason);
    }
    emitter.once("abort", reject);
    if (config.cancelToken || config.signal) {
      config.cancelToken && config.cancelToken.subscribe(abort);
      if (config.signal) {
        config.signal.aborted ? abort() : config.signal.addEventListener("abort", abort);
      }
    }
    const fullPath = buildFullPath(config.baseURL, config.url);
    const parsed = new URL(fullPath, "http://localhost");
    const protocol = parsed.protocol || supportedProtocols[0];
    if (protocol === "data:") {
      let convertedData;
      if (method !== "GET") {
        return settle(resolve, reject, {
          status: 405,
          statusText: "method not allowed",
          headers: {},
          config
        });
      }
      try {
        convertedData = fromDataURI(config.url, responseType === "blob", {
          Blob: config.env && config.env.Blob
        });
      } catch (err) {
        throw AxiosError_default.from(err, AxiosError_default.ERR_BAD_REQUEST, config);
      }
      if (responseType === "text") {
        convertedData = convertedData.toString(responseEncoding);
        if (!responseEncoding || responseEncoding === "utf8") {
          convertedData = utils_default.stripBOM(convertedData);
        }
      } else if (responseType === "stream") {
        convertedData = import_stream4.default.Readable.from(convertedData);
      }
      return settle(resolve, reject, {
        data: convertedData,
        status: 200,
        statusText: "OK",
        headers: new AxiosHeaders_default(),
        config
      });
    }
    if (supportedProtocols.indexOf(protocol) === -1) {
      return reject(new AxiosError_default(
        "Unsupported protocol " + protocol,
        AxiosError_default.ERR_BAD_REQUEST,
        config
      ));
    }
    const headers = AxiosHeaders_default.from(config.headers).normalize();
    headers.set("User-Agent", "axios/" + VERSION, false);
    const onDownloadProgress = config.onDownloadProgress;
    const onUploadProgress = config.onUploadProgress;
    const maxRate = config.maxRate;
    let maxUploadRate = void 0;
    let maxDownloadRate = void 0;
    if (utils_default.isSpecCompliantForm(data)) {
      const userBoundary = headers.getContentType(/boundary=([-_\w\d]{10,70})/i);
      data = formDataToStream_default(data, (formHeaders) => {
        headers.set(formHeaders);
      }, {
        tag: `axios-${VERSION}-boundary`,
        boundary: userBoundary && userBoundary[1] || void 0
      });
    } else if (utils_default.isFormData(data) && utils_default.isFunction(data.getHeaders)) {
      headers.set(data.getHeaders());
      if (!headers.hasContentLength()) {
        try {
          const knownLength = await import_util2.default.promisify(data.getLength).call(data);
          Number.isFinite(knownLength) && knownLength >= 0 && headers.setContentLength(knownLength);
        } catch (e) {
        }
      }
    } else if (utils_default.isBlob(data)) {
      data.size && headers.setContentType(data.type || "application/octet-stream");
      headers.setContentLength(data.size || 0);
      data = import_stream4.default.Readable.from(readBlob_default(data));
    } else if (data && !utils_default.isStream(data)) {
      if (Buffer.isBuffer(data)) {
      } else if (utils_default.isArrayBuffer(data)) {
        data = Buffer.from(new Uint8Array(data));
      } else if (utils_default.isString(data)) {
        data = Buffer.from(data, "utf-8");
      } else {
        return reject(new AxiosError_default(
          "Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream",
          AxiosError_default.ERR_BAD_REQUEST,
          config
        ));
      }
      headers.setContentLength(data.length, false);
      if (config.maxBodyLength > -1 && data.length > config.maxBodyLength) {
        return reject(new AxiosError_default(
          "Request body larger than maxBodyLength limit",
          AxiosError_default.ERR_BAD_REQUEST,
          config
        ));
      }
    }
    const contentLength = utils_default.toFiniteNumber(headers.getContentLength());
    if (utils_default.isArray(maxRate)) {
      maxUploadRate = maxRate[0];
      maxDownloadRate = maxRate[1];
    } else {
      maxUploadRate = maxDownloadRate = maxRate;
    }
    if (data && (onUploadProgress || maxUploadRate)) {
      if (!utils_default.isStream(data)) {
        data = import_stream4.default.Readable.from(data, { objectMode: false });
      }
      data = import_stream4.default.pipeline([data, new AxiosTransformStream_default({
        length: contentLength,
        maxRate: utils_default.toFiniteNumber(maxUploadRate)
      })], utils_default.noop);
      onUploadProgress && data.on("progress", (progress) => {
        onUploadProgress(Object.assign(progress, {
          upload: true
        }));
      });
    }
    let auth = void 0;
    if (config.auth) {
      const username = config.auth.username || "";
      const password = config.auth.password || "";
      auth = username + ":" + password;
    }
    if (!auth && parsed.username) {
      const urlUsername = parsed.username;
      const urlPassword = parsed.password;
      auth = urlUsername + ":" + urlPassword;
    }
    auth && headers.delete("authorization");
    let path;
    try {
      path = buildURL(
        parsed.pathname + parsed.search,
        config.params,
        config.paramsSerializer
      ).replace(/^\?/, "");
    } catch (err) {
      const customErr = new Error(err.message);
      customErr.config = config;
      customErr.url = config.url;
      customErr.exists = true;
      return reject(customErr);
    }
    headers.set(
      "Accept-Encoding",
      "gzip, compress, deflate" + (isBrotliSupported ? ", br" : ""),
      false
    );
    const options = {
      path,
      method,
      headers: headers.toJSON(),
      agents: { http: config.httpAgent, https: config.httpsAgent },
      auth,
      protocol,
      family,
      beforeRedirect: dispatchBeforeRedirect,
      beforeRedirects: {}
    };
    !utils_default.isUndefined(lookup) && (options.lookup = lookup);
    if (config.socketPath) {
      options.socketPath = config.socketPath;
    } else {
      options.hostname = parsed.hostname;
      options.port = parsed.port;
      setProxy(options, config.proxy, protocol + "//" + parsed.hostname + (parsed.port ? ":" + parsed.port : "") + options.path);
    }
    let transport;
    const isHttpsRequest = isHttps.test(options.protocol);
    options.agent = isHttpsRequest ? config.httpsAgent : config.httpAgent;
    if (config.transport) {
      transport = config.transport;
    } else if (config.maxRedirects === 0) {
      transport = isHttpsRequest ? import_https.default : import_http.default;
    } else {
      if (config.maxRedirects) {
        options.maxRedirects = config.maxRedirects;
      }
      if (config.beforeRedirect) {
        options.beforeRedirects.config = config.beforeRedirect;
      }
      transport = isHttpsRequest ? httpsFollow : httpFollow;
    }
    if (config.maxBodyLength > -1) {
      options.maxBodyLength = config.maxBodyLength;
    } else {
      options.maxBodyLength = Infinity;
    }
    if (config.insecureHTTPParser) {
      options.insecureHTTPParser = config.insecureHTTPParser;
    }
    req = transport.request(options, function handleResponse(res) {
      if (req.destroyed)
        return;
      const streams = [res];
      const responseLength = +res.headers["content-length"];
      if (onDownloadProgress) {
        const transformStream = new AxiosTransformStream_default({
          length: utils_default.toFiniteNumber(responseLength),
          maxRate: utils_default.toFiniteNumber(maxDownloadRate)
        });
        onDownloadProgress && transformStream.on("progress", (progress) => {
          onDownloadProgress(Object.assign(progress, {
            download: true
          }));
        });
        streams.push(transformStream);
      }
      let responseStream = res;
      const lastRequest = res.req || req;
      if (config.decompress !== false && res.headers["content-encoding"]) {
        if (method === "HEAD" || res.statusCode === 204) {
          delete res.headers["content-encoding"];
        }
        switch ((res.headers["content-encoding"] || "").toLowerCase()) {
          case "gzip":
          case "x-gzip":
          case "compress":
          case "x-compress":
            streams.push(import_zlib.default.createUnzip(zlibOptions));
            delete res.headers["content-encoding"];
            break;
          case "deflate":
            streams.push(new ZlibHeaderTransformStream_default());
            streams.push(import_zlib.default.createUnzip(zlibOptions));
            delete res.headers["content-encoding"];
            break;
          case "br":
            if (isBrotliSupported) {
              streams.push(import_zlib.default.createBrotliDecompress(brotliOptions));
              delete res.headers["content-encoding"];
            }
        }
      }
      responseStream = streams.length > 1 ? import_stream4.default.pipeline(streams, utils_default.noop) : streams[0];
      const offListeners = import_stream4.default.finished(responseStream, () => {
        offListeners();
        onFinished();
      });
      const response = {
        status: res.statusCode,
        statusText: res.statusMessage,
        headers: new AxiosHeaders_default(res.headers),
        config,
        request: lastRequest
      };
      if (responseType === "stream") {
        response.data = responseStream;
        settle(resolve, reject, response);
      } else {
        const responseBuffer = [];
        let totalResponseBytes = 0;
        responseStream.on("data", function handleStreamData(chunk) {
          responseBuffer.push(chunk);
          totalResponseBytes += chunk.length;
          if (config.maxContentLength > -1 && totalResponseBytes > config.maxContentLength) {
            rejected = true;
            responseStream.destroy();
            reject(new AxiosError_default(
              "maxContentLength size of " + config.maxContentLength + " exceeded",
              AxiosError_default.ERR_BAD_RESPONSE,
              config,
              lastRequest
            ));
          }
        });
        responseStream.on("aborted", function handlerStreamAborted() {
          if (rejected) {
            return;
          }
          const err = new AxiosError_default(
            "maxContentLength size of " + config.maxContentLength + " exceeded",
            AxiosError_default.ERR_BAD_RESPONSE,
            config,
            lastRequest
          );
          responseStream.destroy(err);
          reject(err);
        });
        responseStream.on("error", function handleStreamError(err) {
          if (req.destroyed)
            return;
          reject(AxiosError_default.from(err, null, config, lastRequest));
        });
        responseStream.on("end", function handleStreamEnd() {
          try {
            let responseData = responseBuffer.length === 1 ? responseBuffer[0] : Buffer.concat(responseBuffer);
            if (responseType !== "arraybuffer") {
              responseData = responseData.toString(responseEncoding);
              if (!responseEncoding || responseEncoding === "utf8") {
                responseData = utils_default.stripBOM(responseData);
              }
            }
            response.data = responseData;
          } catch (err) {
            return reject(AxiosError_default.from(err, null, config, response.request, response));
          }
          settle(resolve, reject, response);
        });
      }
      emitter.once("abort", (err) => {
        if (!responseStream.destroyed) {
          responseStream.emit("error", err);
          responseStream.destroy();
        }
      });
    });
    emitter.once("abort", (err) => {
      reject(err);
      req.destroy(err);
    });
    req.on("error", function handleRequestError(err) {
      reject(AxiosError_default.from(err, null, config, req));
    });
    req.on("socket", function handleRequestSocket(socket) {
      socket.setKeepAlive(true, 1e3 * 60);
    });
    if (config.timeout) {
      const timeout = parseInt(config.timeout, 10);
      if (Number.isNaN(timeout)) {
        reject(new AxiosError_default(
          "error trying to parse `config.timeout` to int",
          AxiosError_default.ERR_BAD_OPTION_VALUE,
          config,
          req
        ));
        return;
      }
      req.setTimeout(timeout, function handleRequestTimeout() {
        if (isDone)
          return;
        let timeoutErrorMessage = config.timeout ? "timeout of " + config.timeout + "ms exceeded" : "timeout exceeded";
        const transitional2 = config.transitional || transitional_default;
        if (config.timeoutErrorMessage) {
          timeoutErrorMessage = config.timeoutErrorMessage;
        }
        reject(new AxiosError_default(
          timeoutErrorMessage,
          transitional2.clarifyTimeoutError ? AxiosError_default.ETIMEDOUT : AxiosError_default.ECONNABORTED,
          config,
          req
        ));
        abort();
      });
    }
    if (utils_default.isStream(data)) {
      let ended = false;
      let errored = false;
      data.on("end", () => {
        ended = true;
      });
      data.once("error", (err) => {
        errored = true;
        req.destroy(err);
      });
      data.on("close", () => {
        if (!ended && !errored) {
          abort(new CanceledError_default("Request stream has been aborted", config, req));
        }
      });
      data.pipe(req);
    } else {
      req.end(data);
    }
  });
};

// node_modules/axios/lib/helpers/cookies.js
var cookies_default = node_default.isStandardBrowserEnv ? function standardBrowserEnv() {
  return {
    write: function write(name, value, expires, path, domain, secure) {
      const cookie = [];
      cookie.push(name + "=" + encodeURIComponent(value));
      if (utils_default.isNumber(expires)) {
        cookie.push("expires=" + new Date(expires).toGMTString());
      }
      if (utils_default.isString(path)) {
        cookie.push("path=" + path);
      }
      if (utils_default.isString(domain)) {
        cookie.push("domain=" + domain);
      }
      if (secure === true) {
        cookie.push("secure");
      }
      document.cookie = cookie.join("; ");
    },
    read: function read(name) {
      const match = document.cookie.match(new RegExp("(^|;\\s*)(" + name + ")=([^;]*)"));
      return match ? decodeURIComponent(match[3]) : null;
    },
    remove: function remove(name) {
      this.write(name, "", Date.now() - 864e5);
    }
  };
}() : function nonStandardBrowserEnv() {
  return {
    write: function write() {
    },
    read: function read() {
      return null;
    },
    remove: function remove() {
    }
  };
}();

// node_modules/axios/lib/helpers/isURLSameOrigin.js
var isURLSameOrigin_default = node_default.isStandardBrowserEnv ? function standardBrowserEnv2() {
  const msie = /(msie|trident)/i.test(navigator.userAgent);
  const urlParsingNode = document.createElement("a");
  let originURL;
  function resolveURL(url2) {
    let href = url2;
    if (msie) {
      urlParsingNode.setAttribute("href", href);
      href = urlParsingNode.href;
    }
    urlParsingNode.setAttribute("href", href);
    return {
      href: urlParsingNode.href,
      protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, "") : "",
      host: urlParsingNode.host,
      search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, "") : "",
      hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, "") : "",
      hostname: urlParsingNode.hostname,
      port: urlParsingNode.port,
      pathname: urlParsingNode.pathname.charAt(0) === "/" ? urlParsingNode.pathname : "/" + urlParsingNode.pathname
    };
  }
  originURL = resolveURL(window.location.href);
  return function isURLSameOrigin(requestURL) {
    const parsed = utils_default.isString(requestURL) ? resolveURL(requestURL) : requestURL;
    return parsed.protocol === originURL.protocol && parsed.host === originURL.host;
  };
}() : function nonStandardBrowserEnv2() {
  return function isURLSameOrigin() {
    return true;
  };
}();

// node_modules/axios/lib/adapters/xhr.js
function progressEventReducer(listener, isDownloadStream) {
  let bytesNotified = 0;
  const _speedometer = speedometer_default(50, 250);
  return (e) => {
    const loaded = e.loaded;
    const total = e.lengthComputable ? e.total : void 0;
    const progressBytes = loaded - bytesNotified;
    const rate = _speedometer(progressBytes);
    const inRange = loaded <= total;
    bytesNotified = loaded;
    const data = {
      loaded,
      total,
      progress: total ? loaded / total : void 0,
      bytes: progressBytes,
      rate: rate ? rate : void 0,
      estimated: rate && total && inRange ? (total - loaded) / rate : void 0,
      event: e
    };
    data[isDownloadStream ? "download" : "upload"] = true;
    listener(data);
  };
}
var isXHRAdapterSupported = typeof XMLHttpRequest !== "undefined";
var xhr_default = isXHRAdapterSupported && function(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    let requestData = config.data;
    const requestHeaders = AxiosHeaders_default.from(config.headers).normalize();
    const responseType = config.responseType;
    let onCanceled;
    function done() {
      if (config.cancelToken) {
        config.cancelToken.unsubscribe(onCanceled);
      }
      if (config.signal) {
        config.signal.removeEventListener("abort", onCanceled);
      }
    }
    let contentType;
    if (utils_default.isFormData(requestData)) {
      if (node_default.isStandardBrowserEnv || node_default.isStandardBrowserWebWorkerEnv) {
        requestHeaders.setContentType(false);
      } else if (!requestHeaders.getContentType(/^\s*multipart\/form-data/)) {
        requestHeaders.setContentType("multipart/form-data");
      } else if (utils_default.isString(contentType = requestHeaders.getContentType())) {
        requestHeaders.setContentType(contentType.replace(/^\s*(multipart\/form-data);+/, "$1"));
      }
    }
    let request = new XMLHttpRequest();
    if (config.auth) {
      const username = config.auth.username || "";
      const password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : "";
      requestHeaders.set("Authorization", "Basic " + btoa(username + ":" + password));
    }
    const fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);
    request.timeout = config.timeout;
    function onloadend() {
      if (!request) {
        return;
      }
      const responseHeaders = AxiosHeaders_default.from(
        "getAllResponseHeaders" in request && request.getAllResponseHeaders()
      );
      const responseData = !responseType || responseType === "text" || responseType === "json" ? request.responseText : request.response;
      const response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      };
      settle(function _resolve(value) {
        resolve(value);
        done();
      }, function _reject(err) {
        reject(err);
        done();
      }, response);
      request = null;
    }
    if ("onloadend" in request) {
      request.onloadend = onloadend;
    } else {
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf("file:") === 0)) {
          return;
        }
        setTimeout(onloadend);
      };
    }
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }
      reject(new AxiosError_default("Request aborted", AxiosError_default.ECONNABORTED, config, request));
      request = null;
    };
    request.onerror = function handleError() {
      reject(new AxiosError_default("Network Error", AxiosError_default.ERR_NETWORK, config, request));
      request = null;
    };
    request.ontimeout = function handleTimeout() {
      let timeoutErrorMessage = config.timeout ? "timeout of " + config.timeout + "ms exceeded" : "timeout exceeded";
      const transitional2 = config.transitional || transitional_default;
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(new AxiosError_default(
        timeoutErrorMessage,
        transitional2.clarifyTimeoutError ? AxiosError_default.ETIMEDOUT : AxiosError_default.ECONNABORTED,
        config,
        request
      ));
      request = null;
    };
    if (node_default.isStandardBrowserEnv) {
      const xsrfValue = isURLSameOrigin_default(fullPath) && config.xsrfCookieName && cookies_default.read(config.xsrfCookieName);
      if (xsrfValue) {
        requestHeaders.set(config.xsrfHeaderName, xsrfValue);
      }
    }
    requestData === void 0 && requestHeaders.setContentType(null);
    if ("setRequestHeader" in request) {
      utils_default.forEach(requestHeaders.toJSON(), function setRequestHeader(val, key) {
        request.setRequestHeader(key, val);
      });
    }
    if (!utils_default.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }
    if (responseType && responseType !== "json") {
      request.responseType = config.responseType;
    }
    if (typeof config.onDownloadProgress === "function") {
      request.addEventListener("progress", progressEventReducer(config.onDownloadProgress, true));
    }
    if (typeof config.onUploadProgress === "function" && request.upload) {
      request.upload.addEventListener("progress", progressEventReducer(config.onUploadProgress));
    }
    if (config.cancelToken || config.signal) {
      onCanceled = (cancel) => {
        if (!request) {
          return;
        }
        reject(!cancel || cancel.type ? new CanceledError_default(null, config, request) : cancel);
        request.abort();
        request = null;
      };
      config.cancelToken && config.cancelToken.subscribe(onCanceled);
      if (config.signal) {
        config.signal.aborted ? onCanceled() : config.signal.addEventListener("abort", onCanceled);
      }
    }
    const protocol = parseProtocol(fullPath);
    if (protocol && node_default.protocols.indexOf(protocol) === -1) {
      reject(new AxiosError_default("Unsupported protocol " + protocol + ":", AxiosError_default.ERR_BAD_REQUEST, config));
      return;
    }
    request.send(requestData || null);
  });
};

// node_modules/axios/lib/adapters/adapters.js
var knownAdapters = {
  http: http_default,
  xhr: xhr_default
};
utils_default.forEach(knownAdapters, (fn, value) => {
  if (fn) {
    try {
      Object.defineProperty(fn, "name", { value });
    } catch (e) {
    }
    Object.defineProperty(fn, "adapterName", { value });
  }
});
var renderReason = (reason) => `- ${reason}`;
var isResolvedHandle = (adapter) => utils_default.isFunction(adapter) || adapter === null || adapter === false;
var adapters_default = {
  getAdapter: (adapters) => {
    adapters = utils_default.isArray(adapters) ? adapters : [adapters];
    const { length } = adapters;
    let nameOrAdapter;
    let adapter;
    const rejectedReasons = {};
    for (let i = 0; i < length; i++) {
      nameOrAdapter = adapters[i];
      let id;
      adapter = nameOrAdapter;
      if (!isResolvedHandle(nameOrAdapter)) {
        adapter = knownAdapters[(id = String(nameOrAdapter)).toLowerCase()];
        if (adapter === void 0) {
          throw new AxiosError_default(`Unknown adapter '${id}'`);
        }
      }
      if (adapter) {
        break;
      }
      rejectedReasons[id || "#" + i] = adapter;
    }
    if (!adapter) {
      const reasons = Object.entries(rejectedReasons).map(
        ([id, state]) => `adapter ${id} ` + (state === false ? "is not supported by the environment" : "is not available in the build")
      );
      let s = length ? reasons.length > 1 ? "since :\n" + reasons.map(renderReason).join("\n") : " " + renderReason(reasons[0]) : "as no adapter specified";
      throw new AxiosError_default(
        `There is no suitable adapter to dispatch the request ` + s,
        "ERR_NOT_SUPPORT"
      );
    }
    return adapter;
  },
  adapters: knownAdapters
};

// node_modules/axios/lib/core/dispatchRequest.js
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
  if (config.signal && config.signal.aborted) {
    throw new CanceledError_default(null, config);
  }
}
function dispatchRequest(config) {
  throwIfCancellationRequested(config);
  config.headers = AxiosHeaders_default.from(config.headers);
  config.data = transformData.call(
    config,
    config.transformRequest
  );
  if (["post", "put", "patch"].indexOf(config.method) !== -1) {
    config.headers.setContentType("application/x-www-form-urlencoded", false);
  }
  const adapter = adapters_default.getAdapter(config.adapter || defaults_default.adapter);
  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);
    response.data = transformData.call(
      config,
      config.transformResponse,
      response
    );
    response.headers = AxiosHeaders_default.from(response.headers);
    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config,
          config.transformResponse,
          reason.response
        );
        reason.response.headers = AxiosHeaders_default.from(reason.response.headers);
      }
    }
    return Promise.reject(reason);
  });
}

// node_modules/axios/lib/core/mergeConfig.js
var headersToObject = (thing) => thing instanceof AxiosHeaders_default ? thing.toJSON() : thing;
function mergeConfig(config1, config2) {
  config2 = config2 || {};
  const config = {};
  function getMergedValue(target, source, caseless) {
    if (utils_default.isPlainObject(target) && utils_default.isPlainObject(source)) {
      return utils_default.merge.call({ caseless }, target, source);
    } else if (utils_default.isPlainObject(source)) {
      return utils_default.merge({}, source);
    } else if (utils_default.isArray(source)) {
      return source.slice();
    }
    return source;
  }
  function mergeDeepProperties(a, b, caseless) {
    if (!utils_default.isUndefined(b)) {
      return getMergedValue(a, b, caseless);
    } else if (!utils_default.isUndefined(a)) {
      return getMergedValue(void 0, a, caseless);
    }
  }
  function valueFromConfig2(a, b) {
    if (!utils_default.isUndefined(b)) {
      return getMergedValue(void 0, b);
    }
  }
  function defaultToConfig2(a, b) {
    if (!utils_default.isUndefined(b)) {
      return getMergedValue(void 0, b);
    } else if (!utils_default.isUndefined(a)) {
      return getMergedValue(void 0, a);
    }
  }
  function mergeDirectKeys(a, b, prop) {
    if (prop in config2) {
      return getMergedValue(a, b);
    } else if (prop in config1) {
      return getMergedValue(void 0, a);
    }
  }
  const mergeMap = {
    url: valueFromConfig2,
    method: valueFromConfig2,
    data: valueFromConfig2,
    baseURL: defaultToConfig2,
    transformRequest: defaultToConfig2,
    transformResponse: defaultToConfig2,
    paramsSerializer: defaultToConfig2,
    timeout: defaultToConfig2,
    timeoutMessage: defaultToConfig2,
    withCredentials: defaultToConfig2,
    adapter: defaultToConfig2,
    responseType: defaultToConfig2,
    xsrfCookieName: defaultToConfig2,
    xsrfHeaderName: defaultToConfig2,
    onUploadProgress: defaultToConfig2,
    onDownloadProgress: defaultToConfig2,
    decompress: defaultToConfig2,
    maxContentLength: defaultToConfig2,
    maxBodyLength: defaultToConfig2,
    beforeRedirect: defaultToConfig2,
    transport: defaultToConfig2,
    httpAgent: defaultToConfig2,
    httpsAgent: defaultToConfig2,
    cancelToken: defaultToConfig2,
    socketPath: defaultToConfig2,
    responseEncoding: defaultToConfig2,
    validateStatus: mergeDirectKeys,
    headers: (a, b) => mergeDeepProperties(headersToObject(a), headersToObject(b), true)
  };
  utils_default.forEach(Object.keys(Object.assign({}, config1, config2)), function computeConfigValue(prop) {
    const merge2 = mergeMap[prop] || mergeDeepProperties;
    const configValue = merge2(config1[prop], config2[prop], prop);
    utils_default.isUndefined(configValue) && merge2 !== mergeDirectKeys || (config[prop] = configValue);
  });
  return config;
}

// node_modules/axios/lib/helpers/validator.js
var validators = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((type, i) => {
  validators[type] = function validator(thing) {
    return typeof thing === type || "a" + (i < 1 ? "n " : " ") + type;
  };
});
var deprecatedWarnings = {};
validators.transitional = function transitional(validator, version, message) {
  function formatMessage(opt, desc) {
    return "[Axios v" + VERSION + "] Transitional option '" + opt + "'" + desc + (message ? ". " + message : "");
  }
  return (value, opt, opts) => {
    if (validator === false) {
      throw new AxiosError_default(
        formatMessage(opt, " has been removed" + (version ? " in " + version : "")),
        AxiosError_default.ERR_DEPRECATED
      );
    }
    if (version && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      console.warn(
        formatMessage(
          opt,
          " has been deprecated since v" + version + " and will be removed in the near future"
        )
      );
    }
    return validator ? validator(value, opt, opts) : true;
  };
};
function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== "object") {
    throw new AxiosError_default("options must be an object", AxiosError_default.ERR_BAD_OPTION_VALUE);
  }
  const keys = Object.keys(options);
  let i = keys.length;
  while (i-- > 0) {
    const opt = keys[i];
    const validator = schema[opt];
    if (validator) {
      const value = options[opt];
      const result = value === void 0 || validator(value, opt, options);
      if (result !== true) {
        throw new AxiosError_default("option " + opt + " must be " + result, AxiosError_default.ERR_BAD_OPTION_VALUE);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw new AxiosError_default("Unknown option " + opt, AxiosError_default.ERR_BAD_OPTION);
    }
  }
}
var validator_default = {
  assertOptions,
  validators
};

// node_modules/axios/lib/core/Axios.js
var validators2 = validator_default.validators;
var Axios = class {
  constructor(instanceConfig) {
    this.defaults = instanceConfig;
    this.interceptors = {
      request: new InterceptorManager_default(),
      response: new InterceptorManager_default()
    };
  }
  request(configOrUrl, config) {
    if (typeof configOrUrl === "string") {
      config = config || {};
      config.url = configOrUrl;
    } else {
      config = configOrUrl || {};
    }
    config = mergeConfig(this.defaults, config);
    const { transitional: transitional2, paramsSerializer, headers } = config;
    if (transitional2 !== void 0) {
      validator_default.assertOptions(transitional2, {
        silentJSONParsing: validators2.transitional(validators2.boolean),
        forcedJSONParsing: validators2.transitional(validators2.boolean),
        clarifyTimeoutError: validators2.transitional(validators2.boolean)
      }, false);
    }
    if (paramsSerializer != null) {
      if (utils_default.isFunction(paramsSerializer)) {
        config.paramsSerializer = {
          serialize: paramsSerializer
        };
      } else {
        validator_default.assertOptions(paramsSerializer, {
          encode: validators2.function,
          serialize: validators2.function
        }, true);
      }
    }
    config.method = (config.method || this.defaults.method || "get").toLowerCase();
    let contextHeaders = headers && utils_default.merge(
      headers.common,
      headers[config.method]
    );
    headers && utils_default.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (method) => {
        delete headers[method];
      }
    );
    config.headers = AxiosHeaders_default.concat(contextHeaders, headers);
    const requestInterceptorChain = [];
    let synchronousRequestInterceptors = true;
    this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
      if (typeof interceptor.runWhen === "function" && interceptor.runWhen(config) === false) {
        return;
      }
      synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;
      requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
    });
    const responseInterceptorChain = [];
    this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
      responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
    });
    let promise;
    let i = 0;
    let len;
    if (!synchronousRequestInterceptors) {
      const chain = [dispatchRequest.bind(this), void 0];
      chain.unshift.apply(chain, requestInterceptorChain);
      chain.push.apply(chain, responseInterceptorChain);
      len = chain.length;
      promise = Promise.resolve(config);
      while (i < len) {
        promise = promise.then(chain[i++], chain[i++]);
      }
      return promise;
    }
    len = requestInterceptorChain.length;
    let newConfig = config;
    i = 0;
    while (i < len) {
      const onFulfilled = requestInterceptorChain[i++];
      const onRejected = requestInterceptorChain[i++];
      try {
        newConfig = onFulfilled(newConfig);
      } catch (error) {
        onRejected.call(this, error);
        break;
      }
    }
    try {
      promise = dispatchRequest.call(this, newConfig);
    } catch (error) {
      return Promise.reject(error);
    }
    i = 0;
    len = responseInterceptorChain.length;
    while (i < len) {
      promise = promise.then(responseInterceptorChain[i++], responseInterceptorChain[i++]);
    }
    return promise;
  }
  getUri(config) {
    config = mergeConfig(this.defaults, config);
    const fullPath = buildFullPath(config.baseURL, config.url);
    return buildURL(fullPath, config.params, config.paramsSerializer);
  }
};
utils_default.forEach(["delete", "get", "head", "options"], function forEachMethodNoData(method) {
  Axios.prototype[method] = function(url2, config) {
    return this.request(mergeConfig(config || {}, {
      method,
      url: url2,
      data: (config || {}).data
    }));
  };
});
utils_default.forEach(["post", "put", "patch"], function forEachMethodWithData(method) {
  function generateHTTPMethod(isForm) {
    return function httpMethod(url2, data, config) {
      return this.request(mergeConfig(config || {}, {
        method,
        headers: isForm ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: url2,
        data
      }));
    };
  }
  Axios.prototype[method] = generateHTTPMethod();
  Axios.prototype[method + "Form"] = generateHTTPMethod(true);
});
var Axios_default = Axios;

// node_modules/axios/lib/cancel/CancelToken.js
var CancelToken = class {
  constructor(executor) {
    if (typeof executor !== "function") {
      throw new TypeError("executor must be a function.");
    }
    let resolvePromise;
    this.promise = new Promise(function promiseExecutor(resolve) {
      resolvePromise = resolve;
    });
    const token = this;
    this.promise.then((cancel) => {
      if (!token._listeners)
        return;
      let i = token._listeners.length;
      while (i-- > 0) {
        token._listeners[i](cancel);
      }
      token._listeners = null;
    });
    this.promise.then = (onfulfilled) => {
      let _resolve;
      const promise = new Promise((resolve) => {
        token.subscribe(resolve);
        _resolve = resolve;
      }).then(onfulfilled);
      promise.cancel = function reject() {
        token.unsubscribe(_resolve);
      };
      return promise;
    };
    executor(function cancel(message, config, request) {
      if (token.reason) {
        return;
      }
      token.reason = new CanceledError_default(message, config, request);
      resolvePromise(token.reason);
    });
  }
  throwIfRequested() {
    if (this.reason) {
      throw this.reason;
    }
  }
  subscribe(listener) {
    if (this.reason) {
      listener(this.reason);
      return;
    }
    if (this._listeners) {
      this._listeners.push(listener);
    } else {
      this._listeners = [listener];
    }
  }
  unsubscribe(listener) {
    if (!this._listeners) {
      return;
    }
    const index = this._listeners.indexOf(listener);
    if (index !== -1) {
      this._listeners.splice(index, 1);
    }
  }
  static source() {
    let cancel;
    const token = new CancelToken(function executor(c) {
      cancel = c;
    });
    return {
      token,
      cancel
    };
  }
};
var CancelToken_default = CancelToken;

// node_modules/axios/lib/helpers/spread.js
function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
}

// node_modules/axios/lib/helpers/isAxiosError.js
function isAxiosError(payload) {
  return utils_default.isObject(payload) && payload.isAxiosError === true;
}

// node_modules/axios/lib/helpers/HttpStatusCode.js
var HttpStatusCode = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(HttpStatusCode).forEach(([key, value]) => {
  HttpStatusCode[value] = key;
});
var HttpStatusCode_default = HttpStatusCode;

// node_modules/axios/lib/axios.js
function createInstance(defaultConfig) {
  const context = new Axios_default(defaultConfig);
  const instance = bind(Axios_default.prototype.request, context);
  utils_default.extend(instance, Axios_default.prototype, context, { allOwnKeys: true });
  utils_default.extend(instance, context, null, { allOwnKeys: true });
  instance.create = function create(instanceConfig) {
    return createInstance(mergeConfig(defaultConfig, instanceConfig));
  };
  return instance;
}
var axios = createInstance(defaults_default);
axios.Axios = Axios_default;
axios.CanceledError = CanceledError_default;
axios.CancelToken = CancelToken_default;
axios.isCancel = isCancel;
axios.VERSION = VERSION;
axios.toFormData = toFormData_default;
axios.AxiosError = AxiosError_default;
axios.Cancel = axios.CanceledError;
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = spread;
axios.isAxiosError = isAxiosError;
axios.mergeConfig = mergeConfig;
axios.AxiosHeaders = AxiosHeaders_default;
axios.formToJSON = (thing) => formDataToJSON_default(utils_default.isHTMLForm(thing) ? new FormData(thing) : thing);
axios.getAdapter = adapters_default.getAdapter;
axios.HttpStatusCode = HttpStatusCode_default;
axios.default = axios;
var axios_default = axios;

// node_modules/axios/index.js
var {
  Axios: Axios2,
  AxiosError: AxiosError2,
  CanceledError: CanceledError2,
  isCancel: isCancel2,
  CancelToken: CancelToken2,
  VERSION: VERSION2,
  all: all2,
  Cancel,
  isAxiosError: isAxiosError2,
  spread: spread2,
  toFormData: toFormData2,
  AxiosHeaders: AxiosHeaders2,
  HttpStatusCode: HttpStatusCode2,
  formToJSON,
  getAdapter,
  mergeConfig: mergeConfig2
} = axios_default;

// model/accountCreateRequest.ts
var _AccountCreateRequest = class {
  static getAttributeTypeMap() {
    return _AccountCreateRequest.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "AccountCreateRequest");
  }
};
var AccountCreateRequest = _AccountCreateRequest;
AccountCreateRequest.discriminator = void 0;
AccountCreateRequest.attributeTypeMap = [
  {
    name: "emailAddress",
    baseName: "email_address",
    type: "string"
  },
  {
    name: "clientId",
    baseName: "client_id",
    type: "string"
  },
  {
    name: "clientSecret",
    baseName: "client_secret",
    type: "string"
  },
  {
    name: "locale",
    baseName: "locale",
    type: "string"
  }
];

// model/accountCreateResponse.ts
var _AccountCreateResponse = class {
  static getAttributeTypeMap() {
    return _AccountCreateResponse.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "AccountCreateResponse");
  }
};
var AccountCreateResponse = _AccountCreateResponse;
AccountCreateResponse.discriminator = void 0;
AccountCreateResponse.attributeTypeMap = [
  {
    name: "account",
    baseName: "account",
    type: "AccountResponse"
  },
  {
    name: "oauthData",
    baseName: "oauth_data",
    type: "OAuthTokenResponse"
  },
  {
    name: "warnings",
    baseName: "warnings",
    type: "Array<WarningResponse>"
  }
];

// model/accountGetResponse.ts
var _AccountGetResponse = class {
  static getAttributeTypeMap() {
    return _AccountGetResponse.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "AccountGetResponse");
  }
};
var AccountGetResponse = _AccountGetResponse;
AccountGetResponse.discriminator = void 0;
AccountGetResponse.attributeTypeMap = [
  {
    name: "account",
    baseName: "account",
    type: "AccountResponse"
  },
  {
    name: "warnings",
    baseName: "warnings",
    type: "Array<WarningResponse>"
  }
];

// model/accountResponse.ts
var _AccountResponse = class {
  static getAttributeTypeMap() {
    return _AccountResponse.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "AccountResponse");
  }
};
var AccountResponse = _AccountResponse;
AccountResponse.discriminator = void 0;
AccountResponse.attributeTypeMap = [
  {
    name: "accountId",
    baseName: "account_id",
    type: "string"
  },
  {
    name: "emailAddress",
    baseName: "email_address",
    type: "string"
  },
  {
    name: "isLocked",
    baseName: "is_locked",
    type: "boolean"
  },
  {
    name: "isPaidHs",
    baseName: "is_paid_hs",
    type: "boolean"
  },
  {
    name: "isPaidHf",
    baseName: "is_paid_hf",
    type: "boolean"
  },
  {
    name: "quotas",
    baseName: "quotas",
    type: "AccountResponseQuotas"
  },
  {
    name: "callbackUrl",
    baseName: "callback_url",
    type: "string"
  },
  {
    name: "roleCode",
    baseName: "role_code",
    type: "string"
  },
  {
    name: "teamId",
    baseName: "team_id",
    type: "string"
  },
  {
    name: "locale",
    baseName: "locale",
    type: "string"
  }
];

// model/accountResponseQuotas.ts
var _AccountResponseQuotas = class {
  static getAttributeTypeMap() {
    return _AccountResponseQuotas.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "AccountResponseQuotas");
  }
};
var AccountResponseQuotas = _AccountResponseQuotas;
AccountResponseQuotas.discriminator = void 0;
AccountResponseQuotas.attributeTypeMap = [
  {
    name: "apiSignatureRequestsLeft",
    baseName: "api_signature_requests_left",
    type: "number"
  },
  {
    name: "documentsLeft",
    baseName: "documents_left",
    type: "number"
  },
  {
    name: "templatesTotal",
    baseName: "templates_total",
    type: "number"
  },
  {
    name: "templatesLeft",
    baseName: "templates_left",
    type: "number"
  },
  {
    name: "smsVerificationsLeft",
    baseName: "sms_verifications_left",
    type: "number"
  }
];

// model/accountUpdateRequest.ts
var _AccountUpdateRequest = class {
  static getAttributeTypeMap() {
    return _AccountUpdateRequest.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "AccountUpdateRequest");
  }
};
var AccountUpdateRequest = _AccountUpdateRequest;
AccountUpdateRequest.discriminator = void 0;
AccountUpdateRequest.attributeTypeMap = [
  {
    name: "accountId",
    baseName: "account_id",
    type: "string"
  },
  {
    name: "callbackUrl",
    baseName: "callback_url",
    type: "string"
  },
  {
    name: "locale",
    baseName: "locale",
    type: "string"
  }
];

// model/accountVerifyRequest.ts
var _AccountVerifyRequest = class {
  static getAttributeTypeMap() {
    return _AccountVerifyRequest.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "AccountVerifyRequest");
  }
};
var AccountVerifyRequest = _AccountVerifyRequest;
AccountVerifyRequest.discriminator = void 0;
AccountVerifyRequest.attributeTypeMap = [
  {
    name: "emailAddress",
    baseName: "email_address",
    type: "string"
  }
];

// model/accountVerifyResponse.ts
var _AccountVerifyResponse = class {
  static getAttributeTypeMap() {
    return _AccountVerifyResponse.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "AccountVerifyResponse");
  }
};
var AccountVerifyResponse = _AccountVerifyResponse;
AccountVerifyResponse.discriminator = void 0;
AccountVerifyResponse.attributeTypeMap = [
  {
    name: "account",
    baseName: "account",
    type: "AccountVerifyResponseAccount"
  },
  {
    name: "warnings",
    baseName: "warnings",
    type: "Array<WarningResponse>"
  }
];

// model/accountVerifyResponseAccount.ts
var _AccountVerifyResponseAccount = class {
  static getAttributeTypeMap() {
    return _AccountVerifyResponseAccount.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "AccountVerifyResponseAccount");
  }
};
var AccountVerifyResponseAccount = _AccountVerifyResponseAccount;
AccountVerifyResponseAccount.discriminator = void 0;
AccountVerifyResponseAccount.attributeTypeMap = [
  {
    name: "emailAddress",
    baseName: "email_address",
    type: "string"
  }
];

// model/apiAppCreateRequest.ts
var _ApiAppCreateRequest = class {
  static getAttributeTypeMap() {
    return _ApiAppCreateRequest.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "ApiAppCreateRequest");
  }
};
var ApiAppCreateRequest = _ApiAppCreateRequest;
ApiAppCreateRequest.discriminator = void 0;
ApiAppCreateRequest.attributeTypeMap = [
  {
    name: "domains",
    baseName: "domains",
    type: "Array<string>"
  },
  {
    name: "name",
    baseName: "name",
    type: "string"
  },
  {
    name: "callbackUrl",
    baseName: "callback_url",
    type: "string"
  },
  {
    name: "customLogoFile",
    baseName: "custom_logo_file",
    type: "RequestFile"
  },
  {
    name: "oauth",
    baseName: "oauth",
    type: "SubOAuth"
  },
  {
    name: "options",
    baseName: "options",
    type: "SubOptions"
  },
  {
    name: "whiteLabelingOptions",
    baseName: "white_labeling_options",
    type: "SubWhiteLabelingOptions"
  }
];

// model/apiAppGetResponse.ts
var _ApiAppGetResponse = class {
  static getAttributeTypeMap() {
    return _ApiAppGetResponse.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "ApiAppGetResponse");
  }
};
var ApiAppGetResponse = _ApiAppGetResponse;
ApiAppGetResponse.discriminator = void 0;
ApiAppGetResponse.attributeTypeMap = [
  {
    name: "apiApp",
    baseName: "api_app",
    type: "ApiAppResponse"
  },
  {
    name: "warnings",
    baseName: "warnings",
    type: "Array<WarningResponse>"
  }
];

// model/apiAppListResponse.ts
var _ApiAppListResponse = class {
  static getAttributeTypeMap() {
    return _ApiAppListResponse.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "ApiAppListResponse");
  }
};
var ApiAppListResponse = _ApiAppListResponse;
ApiAppListResponse.discriminator = void 0;
ApiAppListResponse.attributeTypeMap = [
  {
    name: "apiApps",
    baseName: "api_apps",
    type: "Array<ApiAppResponse>"
  },
  {
    name: "listInfo",
    baseName: "list_info",
    type: "ListInfoResponse"
  },
  {
    name: "warnings",
    baseName: "warnings",
    type: "Array<WarningResponse>"
  }
];

// model/apiAppResponse.ts
var _ApiAppResponse = class {
  static getAttributeTypeMap() {
    return _ApiAppResponse.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "ApiAppResponse");
  }
};
var ApiAppResponse = _ApiAppResponse;
ApiAppResponse.discriminator = void 0;
ApiAppResponse.attributeTypeMap = [
  {
    name: "callbackUrl",
    baseName: "callback_url",
    type: "string"
  },
  {
    name: "clientId",
    baseName: "client_id",
    type: "string"
  },
  {
    name: "createdAt",
    baseName: "created_at",
    type: "number"
  },
  {
    name: "domains",
    baseName: "domains",
    type: "Array<string>"
  },
  {
    name: "name",
    baseName: "name",
    type: "string"
  },
  {
    name: "isApproved",
    baseName: "is_approved",
    type: "boolean"
  },
  {
    name: "oauth",
    baseName: "oauth",
    type: "ApiAppResponseOAuth"
  },
  {
    name: "options",
    baseName: "options",
    type: "ApiAppResponseOptions"
  },
  {
    name: "ownerAccount",
    baseName: "owner_account",
    type: "ApiAppResponseOwnerAccount"
  },
  {
    name: "whiteLabelingOptions",
    baseName: "white_labeling_options",
    type: "ApiAppResponseWhiteLabelingOptions"
  }
];

// model/apiAppResponseOAuth.ts
var _ApiAppResponseOAuth = class {
  static getAttributeTypeMap() {
    return _ApiAppResponseOAuth.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "ApiAppResponseOAuth");
  }
};
var ApiAppResponseOAuth = _ApiAppResponseOAuth;
ApiAppResponseOAuth.discriminator = void 0;
ApiAppResponseOAuth.attributeTypeMap = [
  {
    name: "callbackUrl",
    baseName: "callback_url",
    type: "string"
  },
  {
    name: "secret",
    baseName: "secret",
    type: "string"
  },
  {
    name: "scopes",
    baseName: "scopes",
    type: "Array<string>"
  },
  {
    name: "chargesUsers",
    baseName: "charges_users",
    type: "boolean"
  }
];

// model/apiAppResponseOptions.ts
var _ApiAppResponseOptions = class {
  static getAttributeTypeMap() {
    return _ApiAppResponseOptions.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "ApiAppResponseOptions");
  }
};
var ApiAppResponseOptions = _ApiAppResponseOptions;
ApiAppResponseOptions.discriminator = void 0;
ApiAppResponseOptions.attributeTypeMap = [
  {
    name: "canInsertEverywhere",
    baseName: "can_insert_everywhere",
    type: "boolean"
  }
];

// model/apiAppResponseOwnerAccount.ts
var _ApiAppResponseOwnerAccount = class {
  static getAttributeTypeMap() {
    return _ApiAppResponseOwnerAccount.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "ApiAppResponseOwnerAccount");
  }
};
var ApiAppResponseOwnerAccount = _ApiAppResponseOwnerAccount;
ApiAppResponseOwnerAccount.discriminator = void 0;
ApiAppResponseOwnerAccount.attributeTypeMap = [
  {
    name: "accountId",
    baseName: "account_id",
    type: "string"
  },
  {
    name: "emailAddress",
    baseName: "email_address",
    type: "string"
  }
];

// model/apiAppResponseWhiteLabelingOptions.ts
var _ApiAppResponseWhiteLabelingOptions = class {
  static getAttributeTypeMap() {
    return _ApiAppResponseWhiteLabelingOptions.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(
      data,
      "ApiAppResponseWhiteLabelingOptions"
    );
  }
};
var ApiAppResponseWhiteLabelingOptions = _ApiAppResponseWhiteLabelingOptions;
ApiAppResponseWhiteLabelingOptions.discriminator = void 0;
ApiAppResponseWhiteLabelingOptions.attributeTypeMap = [
  {
    name: "headerBackgroundColor",
    baseName: "header_background_color",
    type: "string"
  },
  {
    name: "legalVersion",
    baseName: "legal_version",
    type: "string"
  },
  {
    name: "linkColor",
    baseName: "link_color",
    type: "string"
  },
  {
    name: "pageBackgroundColor",
    baseName: "page_background_color",
    type: "string"
  },
  {
    name: "primaryButtonColor",
    baseName: "primary_button_color",
    type: "string"
  },
  {
    name: "primaryButtonColorHover",
    baseName: "primary_button_color_hover",
    type: "string"
  },
  {
    name: "primaryButtonTextColor",
    baseName: "primary_button_text_color",
    type: "string"
  },
  {
    name: "primaryButtonTextColorHover",
    baseName: "primary_button_text_color_hover",
    type: "string"
  },
  {
    name: "secondaryButtonColor",
    baseName: "secondary_button_color",
    type: "string"
  },
  {
    name: "secondaryButtonColorHover",
    baseName: "secondary_button_color_hover",
    type: "string"
  },
  {
    name: "secondaryButtonTextColor",
    baseName: "secondary_button_text_color",
    type: "string"
  },
  {
    name: "secondaryButtonTextColorHover",
    baseName: "secondary_button_text_color_hover",
    type: "string"
  },
  {
    name: "textColor1",
    baseName: "text_color1",
    type: "string"
  },
  {
    name: "textColor2",
    baseName: "text_color2",
    type: "string"
  }
];

// model/apiAppUpdateRequest.ts
var _ApiAppUpdateRequest = class {
  static getAttributeTypeMap() {
    return _ApiAppUpdateRequest.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "ApiAppUpdateRequest");
  }
};
var ApiAppUpdateRequest = _ApiAppUpdateRequest;
ApiAppUpdateRequest.discriminator = void 0;
ApiAppUpdateRequest.attributeTypeMap = [
  {
    name: "callbackUrl",
    baseName: "callback_url",
    type: "string"
  },
  {
    name: "customLogoFile",
    baseName: "custom_logo_file",
    type: "RequestFile"
  },
  {
    name: "domains",
    baseName: "domains",
    type: "Array<string>"
  },
  {
    name: "name",
    baseName: "name",
    type: "string"
  },
  {
    name: "oauth",
    baseName: "oauth",
    type: "SubOAuth"
  },
  {
    name: "options",
    baseName: "options",
    type: "SubOptions"
  },
  {
    name: "whiteLabelingOptions",
    baseName: "white_labeling_options",
    type: "SubWhiteLabelingOptions"
  }
];

// model/bulkSendJobGetResponse.ts
var _BulkSendJobGetResponse = class {
  static getAttributeTypeMap() {
    return _BulkSendJobGetResponse.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "BulkSendJobGetResponse");
  }
};
var BulkSendJobGetResponse = _BulkSendJobGetResponse;
BulkSendJobGetResponse.discriminator = void 0;
BulkSendJobGetResponse.attributeTypeMap = [
  {
    name: "bulkSendJob",
    baseName: "bulk_send_job",
    type: "BulkSendJobResponse"
  },
  {
    name: "listInfo",
    baseName: "list_info",
    type: "ListInfoResponse"
  },
  {
    name: "signatureRequests",
    baseName: "signature_requests",
    type: "Array<BulkSendJobGetResponseSignatureRequests>"
  },
  {
    name: "warnings",
    baseName: "warnings",
    type: "Array<WarningResponse>"
  }
];

// model/bulkSendJobGetResponseSignatureRequests.ts
var _BulkSendJobGetResponseSignatureRequests = class {
  constructor() {
    this["testMode"] = false;
  }
  static getAttributeTypeMap() {
    return _BulkSendJobGetResponseSignatureRequests.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(
      data,
      "BulkSendJobGetResponseSignatureRequests"
    );
  }
};
var BulkSendJobGetResponseSignatureRequests = _BulkSendJobGetResponseSignatureRequests;
BulkSendJobGetResponseSignatureRequests.discriminator = void 0;
BulkSendJobGetResponseSignatureRequests.attributeTypeMap = [
  {
    name: "testMode",
    baseName: "test_mode",
    type: "boolean"
  },
  {
    name: "signatureRequestId",
    baseName: "signature_request_id",
    type: "string"
  },
  {
    name: "requesterEmailAddress",
    baseName: "requester_email_address",
    type: "string"
  },
  {
    name: "title",
    baseName: "title",
    type: "string"
  },
  {
    name: "originalTitle",
    baseName: "original_title",
    type: "string"
  },
  {
    name: "subject",
    baseName: "subject",
    type: "string"
  },
  {
    name: "message",
    baseName: "message",
    type: "string"
  },
  {
    name: "metadata",
    baseName: "metadata",
    type: "object"
  },
  {
    name: "createdAt",
    baseName: "created_at",
    type: "number"
  },
  {
    name: "expiresAt",
    baseName: "expires_at",
    type: "number"
  },
  {
    name: "isComplete",
    baseName: "is_complete",
    type: "boolean"
  },
  {
    name: "isDeclined",
    baseName: "is_declined",
    type: "boolean"
  },
  {
    name: "hasError",
    baseName: "has_error",
    type: "boolean"
  },
  {
    name: "filesUrl",
    baseName: "files_url",
    type: "string"
  },
  {
    name: "signingUrl",
    baseName: "signing_url",
    type: "string"
  },
  {
    name: "detailsUrl",
    baseName: "details_url",
    type: "string"
  },
  {
    name: "ccEmailAddresses",
    baseName: "cc_email_addresses",
    type: "Array<string>"
  },
  {
    name: "signingRedirectUrl",
    baseName: "signing_redirect_url",
    type: "string"
  },
  {
    name: "finalCopyUri",
    baseName: "final_copy_uri",
    type: "string"
  },
  {
    name: "templateIds",
    baseName: "template_ids",
    type: "Array<string>"
  },
  {
    name: "customFields",
    baseName: "custom_fields",
    type: "Array<SignatureRequestResponseCustomFieldBase>"
  },
  {
    name: "attachments",
    baseName: "attachments",
    type: "Array<SignatureRequestResponseAttachment>"
  },
  {
    name: "responseData",
    baseName: "response_data",
    type: "Array<SignatureRequestResponseDataBase>"
  },
  {
    name: "signatures",
    baseName: "signatures",
    type: "Array<SignatureRequestResponseSignatures>"
  },
  {
    name: "bulkSendJobId",
    baseName: "bulk_send_job_id",
    type: "string"
  }
];

// model/bulkSendJobListResponse.ts
var _BulkSendJobListResponse = class {
  static getAttributeTypeMap() {
    return _BulkSendJobListResponse.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "BulkSendJobListResponse");
  }
};
var BulkSendJobListResponse = _BulkSendJobListResponse;
BulkSendJobListResponse.discriminator = void 0;
BulkSendJobListResponse.attributeTypeMap = [
  {
    name: "bulkSendJobs",
    baseName: "bulk_send_jobs",
    type: "Array<BulkSendJobResponse>"
  },
  {
    name: "listInfo",
    baseName: "list_info",
    type: "ListInfoResponse"
  },
  {
    name: "warnings",
    baseName: "warnings",
    type: "Array<WarningResponse>"
  }
];

// model/bulkSendJobResponse.ts
var _BulkSendJobResponse = class {
  static getAttributeTypeMap() {
    return _BulkSendJobResponse.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "BulkSendJobResponse");
  }
};
var BulkSendJobResponse = _BulkSendJobResponse;
BulkSendJobResponse.discriminator = void 0;
BulkSendJobResponse.attributeTypeMap = [
  {
    name: "bulkSendJobId",
    baseName: "bulk_send_job_id",
    type: "string"
  },
  {
    name: "total",
    baseName: "total",
    type: "number"
  },
  {
    name: "isCreator",
    baseName: "is_creator",
    type: "boolean"
  },
  {
    name: "createdAt",
    baseName: "created_at",
    type: "number"
  }
];

// model/bulkSendJobSendResponse.ts
var _BulkSendJobSendResponse = class {
  static getAttributeTypeMap() {
    return _BulkSendJobSendResponse.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "BulkSendJobSendResponse");
  }
};
var BulkSendJobSendResponse = _BulkSendJobSendResponse;
BulkSendJobSendResponse.discriminator = void 0;
BulkSendJobSendResponse.attributeTypeMap = [
  {
    name: "bulkSendJob",
    baseName: "bulk_send_job",
    type: "BulkSendJobResponse"
  },
  {
    name: "warnings",
    baseName: "warnings",
    type: "Array<WarningResponse>"
  }
];

// model/embeddedEditUrlRequest.ts
var _EmbeddedEditUrlRequest = class {
  constructor() {
    this["allowEditCcs"] = false;
    this["forceSignerRoles"] = false;
    this["forceSubjectMessage"] = false;
    this["previewOnly"] = false;
    this["showPreview"] = false;
    this["showProgressStepper"] = true;
    this["testMode"] = false;
  }
  static getAttributeTypeMap() {
    return _EmbeddedEditUrlRequest.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "EmbeddedEditUrlRequest");
  }
};
var EmbeddedEditUrlRequest = _EmbeddedEditUrlRequest;
EmbeddedEditUrlRequest.discriminator = void 0;
EmbeddedEditUrlRequest.attributeTypeMap = [
  {
    name: "allowEditCcs",
    baseName: "allow_edit_ccs",
    type: "boolean"
  },
  {
    name: "ccRoles",
    baseName: "cc_roles",
    type: "Array<string>"
  },
  {
    name: "editorOptions",
    baseName: "editor_options",
    type: "SubEditorOptions"
  },
  {
    name: "forceSignerRoles",
    baseName: "force_signer_roles",
    type: "boolean"
  },
  {
    name: "forceSubjectMessage",
    baseName: "force_subject_message",
    type: "boolean"
  },
  {
    name: "mergeFields",
    baseName: "merge_fields",
    type: "Array<SubMergeField>"
  },
  {
    name: "previewOnly",
    baseName: "preview_only",
    type: "boolean"
  },
  {
    name: "showPreview",
    baseName: "show_preview",
    type: "boolean"
  },
  {
    name: "showProgressStepper",
    baseName: "show_progress_stepper",
    type: "boolean"
  },
  {
    name: "testMode",
    baseName: "test_mode",
    type: "boolean"
  }
];

// model/embeddedEditUrlResponse.ts
var _EmbeddedEditUrlResponse = class {
  static getAttributeTypeMap() {
    return _EmbeddedEditUrlResponse.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "EmbeddedEditUrlResponse");
  }
};
var EmbeddedEditUrlResponse = _EmbeddedEditUrlResponse;
EmbeddedEditUrlResponse.discriminator = void 0;
EmbeddedEditUrlResponse.attributeTypeMap = [
  {
    name: "embedded",
    baseName: "embedded",
    type: "EmbeddedEditUrlResponseEmbedded"
  },
  {
    name: "warnings",
    baseName: "warnings",
    type: "Array<WarningResponse>"
  }
];

// model/embeddedEditUrlResponseEmbedded.ts
var _EmbeddedEditUrlResponseEmbedded = class {
  static getAttributeTypeMap() {
    return _EmbeddedEditUrlResponseEmbedded.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(
      data,
      "EmbeddedEditUrlResponseEmbedded"
    );
  }
};
var EmbeddedEditUrlResponseEmbedded = _EmbeddedEditUrlResponseEmbedded;
EmbeddedEditUrlResponseEmbedded.discriminator = void 0;
EmbeddedEditUrlResponseEmbedded.attributeTypeMap = [
  {
    name: "editUrl",
    baseName: "edit_url",
    type: "string"
  },
  {
    name: "expiresAt",
    baseName: "expires_at",
    type: "number"
  }
];

// model/embeddedSignUrlResponse.ts
var _EmbeddedSignUrlResponse = class {
  static getAttributeTypeMap() {
    return _EmbeddedSignUrlResponse.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "EmbeddedSignUrlResponse");
  }
};
var EmbeddedSignUrlResponse = _EmbeddedSignUrlResponse;
EmbeddedSignUrlResponse.discriminator = void 0;
EmbeddedSignUrlResponse.attributeTypeMap = [
  {
    name: "embedded",
    baseName: "embedded",
    type: "EmbeddedSignUrlResponseEmbedded"
  },
  {
    name: "warnings",
    baseName: "warnings",
    type: "Array<WarningResponse>"
  }
];

// model/embeddedSignUrlResponseEmbedded.ts
var _EmbeddedSignUrlResponseEmbedded = class {
  static getAttributeTypeMap() {
    return _EmbeddedSignUrlResponseEmbedded.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(
      data,
      "EmbeddedSignUrlResponseEmbedded"
    );
  }
};
var EmbeddedSignUrlResponseEmbedded = _EmbeddedSignUrlResponseEmbedded;
EmbeddedSignUrlResponseEmbedded.discriminator = void 0;
EmbeddedSignUrlResponseEmbedded.attributeTypeMap = [
  {
    name: "signUrl",
    baseName: "sign_url",
    type: "string"
  },
  {
    name: "expiresAt",
    baseName: "expires_at",
    type: "number"
  }
];

// model/errorResponse.ts
var _ErrorResponse = class {
  static getAttributeTypeMap() {
    return _ErrorResponse.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "ErrorResponse");
  }
};
var ErrorResponse = _ErrorResponse;
ErrorResponse.discriminator = void 0;
ErrorResponse.attributeTypeMap = [
  {
    name: "error",
    baseName: "error",
    type: "ErrorResponseError"
  }
];

// model/errorResponseError.ts
var _ErrorResponseError = class {
  static getAttributeTypeMap() {
    return _ErrorResponseError.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "ErrorResponseError");
  }
};
var ErrorResponseError = _ErrorResponseError;
ErrorResponseError.discriminator = void 0;
ErrorResponseError.attributeTypeMap = [
  {
    name: "errorMsg",
    baseName: "error_msg",
    type: "string"
  },
  {
    name: "errorName",
    baseName: "error_name",
    type: "string"
  },
  {
    name: "errorPath",
    baseName: "error_path",
    type: "string"
  }
];

// model/eventCallbackRequest.ts
var _EventCallbackRequest = class {
  static getAttributeTypeMap() {
    return _EventCallbackRequest.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "EventCallbackRequest");
  }
};
var EventCallbackRequest = _EventCallbackRequest;
EventCallbackRequest.discriminator = void 0;
EventCallbackRequest.attributeTypeMap = [
  {
    name: "event",
    baseName: "event",
    type: "EventCallbackRequestEvent"
  },
  {
    name: "account",
    baseName: "account",
    type: "AccountResponse"
  },
  {
    name: "signatureRequest",
    baseName: "signature_request",
    type: "SignatureRequestResponse"
  },
  {
    name: "template",
    baseName: "template",
    type: "TemplateResponse"
  }
];

// model/eventCallbackRequestEvent.ts
var _EventCallbackRequestEvent = class {
  static getAttributeTypeMap() {
    return _EventCallbackRequestEvent.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "EventCallbackRequestEvent");
  }
};
var EventCallbackRequestEvent = _EventCallbackRequestEvent;
EventCallbackRequestEvent.discriminator = void 0;
EventCallbackRequestEvent.attributeTypeMap = [
  {
    name: "eventTime",
    baseName: "event_time",
    type: "string"
  },
  {
    name: "eventType",
    baseName: "event_type",
    type: "EventCallbackRequestEvent.EventTypeEnum"
  },
  {
    name: "eventHash",
    baseName: "event_hash",
    type: "string"
  },
  {
    name: "eventMetadata",
    baseName: "event_metadata",
    type: "EventCallbackRequestEventMetadata"
  }
];
((EventCallbackRequestEvent2) => {
  let EventTypeEnum;
  ((EventTypeEnum2) => {
    EventTypeEnum2["AccountConfirmed"] = "account_confirmed";
    EventTypeEnum2["UnknownError"] = "unknown_error";
    EventTypeEnum2["FileError"] = "file_error";
    EventTypeEnum2["SignUrlInvalid"] = "sign_url_invalid";
    EventTypeEnum2["SignatureRequestViewed"] = "signature_request_viewed";
    EventTypeEnum2["SignatureRequestSigned"] = "signature_request_signed";
    EventTypeEnum2["SignatureRequestSent"] = "signature_request_sent";
    EventTypeEnum2["SignatureRequestAllSigned"] = "signature_request_all_signed";
    EventTypeEnum2["SignatureRequestEmailBounce"] = "signature_request_email_bounce";
    EventTypeEnum2["SignatureRequestRemind"] = "signature_request_remind";
    EventTypeEnum2["SignatureRequestIncompleteQes"] = "signature_request_incomplete_qes";
    EventTypeEnum2["SignatureRequestDestroyed"] = "signature_request_destroyed";
    EventTypeEnum2["SignatureRequestCanceled"] = "signature_request_canceled";
    EventTypeEnum2["SignatureRequestDownloadable"] = "signature_request_downloadable";
    EventTypeEnum2["SignatureRequestDeclined"] = "signature_request_declined";
    EventTypeEnum2["SignatureRequestReassigned"] = "signature_request_reassigned";
    EventTypeEnum2["SignatureRequestInvalid"] = "signature_request_invalid";
    EventTypeEnum2["SignatureRequestPrepared"] = "signature_request_prepared";
    EventTypeEnum2["SignatureRequestExpired"] = "signature_request_expired";
    EventTypeEnum2["TemplateCreated"] = "template_created";
    EventTypeEnum2["TemplateError"] = "template_error";
    EventTypeEnum2["CallbackTest"] = "callback_test";
    EventTypeEnum2["SignatureRequestSignerRemoved"] = "signature_request_signer_removed";
  })(EventTypeEnum = EventCallbackRequestEvent2.EventTypeEnum || (EventCallbackRequestEvent2.EventTypeEnum = {}));
})(EventCallbackRequestEvent || (EventCallbackRequestEvent = {}));

// model/eventCallbackRequestEventMetadata.ts
var _EventCallbackRequestEventMetadata = class {
  static getAttributeTypeMap() {
    return _EventCallbackRequestEventMetadata.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(
      data,
      "EventCallbackRequestEventMetadata"
    );
  }
};
var EventCallbackRequestEventMetadata = _EventCallbackRequestEventMetadata;
EventCallbackRequestEventMetadata.discriminator = void 0;
EventCallbackRequestEventMetadata.attributeTypeMap = [
  {
    name: "relatedSignatureId",
    baseName: "related_signature_id",
    type: "string"
  },
  {
    name: "reportedForAccountId",
    baseName: "reported_for_account_id",
    type: "string"
  },
  {
    name: "reportedForAppId",
    baseName: "reported_for_app_id",
    type: "string"
  },
  {
    name: "eventMessage",
    baseName: "event_message",
    type: "string"
  }
];

// model/fileResponse.ts
var _FileResponse = class {
  static getAttributeTypeMap() {
    return _FileResponse.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "FileResponse");
  }
};
var FileResponse = _FileResponse;
FileResponse.discriminator = void 0;
FileResponse.attributeTypeMap = [
  {
    name: "fileUrl",
    baseName: "file_url",
    type: "string"
  },
  {
    name: "expiresAt",
    baseName: "expires_at",
    type: "number"
  }
];

// model/fileResponseDataUri.ts
var _FileResponseDataUri = class {
  static getAttributeTypeMap() {
    return _FileResponseDataUri.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "FileResponseDataUri");
  }
};
var FileResponseDataUri = _FileResponseDataUri;
FileResponseDataUri.discriminator = void 0;
FileResponseDataUri.attributeTypeMap = [
  {
    name: "dataUri",
    baseName: "data_uri",
    type: "string"
  }
];

// model/listInfoResponse.ts
var _ListInfoResponse = class {
  static getAttributeTypeMap() {
    return _ListInfoResponse.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "ListInfoResponse");
  }
};
var ListInfoResponse = _ListInfoResponse;
ListInfoResponse.discriminator = void 0;
ListInfoResponse.attributeTypeMap = [
  {
    name: "numPages",
    baseName: "num_pages",
    type: "number"
  },
  {
    name: "numResults",
    baseName: "num_results",
    type: "number"
  },
  {
    name: "page",
    baseName: "page",
    type: "number"
  },
  {
    name: "pageSize",
    baseName: "page_size",
    type: "number"
  }
];

// model/oAuthTokenGenerateRequest.ts
var _OAuthTokenGenerateRequest = class {
  constructor() {
    this["grantType"] = "authorization_code";
  }
  static getAttributeTypeMap() {
    return _OAuthTokenGenerateRequest.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "OAuthTokenGenerateRequest");
  }
};
var OAuthTokenGenerateRequest = _OAuthTokenGenerateRequest;
OAuthTokenGenerateRequest.discriminator = void 0;
OAuthTokenGenerateRequest.attributeTypeMap = [
  {
    name: "clientId",
    baseName: "client_id",
    type: "string"
  },
  {
    name: "clientSecret",
    baseName: "client_secret",
    type: "string"
  },
  {
    name: "code",
    baseName: "code",
    type: "string"
  },
  {
    name: "grantType",
    baseName: "grant_type",
    type: "string"
  },
  {
    name: "state",
    baseName: "state",
    type: "string"
  }
];

// model/oAuthTokenRefreshRequest.ts
var _OAuthTokenRefreshRequest = class {
  constructor() {
    this["grantType"] = "refresh_token";
  }
  static getAttributeTypeMap() {
    return _OAuthTokenRefreshRequest.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "OAuthTokenRefreshRequest");
  }
};
var OAuthTokenRefreshRequest = _OAuthTokenRefreshRequest;
OAuthTokenRefreshRequest.discriminator = void 0;
OAuthTokenRefreshRequest.attributeTypeMap = [
  {
    name: "grantType",
    baseName: "grant_type",
    type: "string"
  },
  {
    name: "refreshToken",
    baseName: "refresh_token",
    type: "string"
  }
];

// model/oAuthTokenResponse.ts
var _OAuthTokenResponse = class {
  static getAttributeTypeMap() {
    return _OAuthTokenResponse.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "OAuthTokenResponse");
  }
};
var OAuthTokenResponse = _OAuthTokenResponse;
OAuthTokenResponse.discriminator = void 0;
OAuthTokenResponse.attributeTypeMap = [
  {
    name: "accessToken",
    baseName: "access_token",
    type: "string"
  },
  {
    name: "tokenType",
    baseName: "token_type",
    type: "string"
  },
  {
    name: "refreshToken",
    baseName: "refresh_token",
    type: "string"
  },
  {
    name: "expiresIn",
    baseName: "expires_in",
    type: "number"
  },
  {
    name: "state",
    baseName: "state",
    type: "string"
  }
];

// model/reportCreateRequest.ts
var _ReportCreateRequest = class {
  static getAttributeTypeMap() {
    return _ReportCreateRequest.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "ReportCreateRequest");
  }
};
var ReportCreateRequest = _ReportCreateRequest;
ReportCreateRequest.discriminator = void 0;
ReportCreateRequest.attributeTypeMap = [
  {
    name: "endDate",
    baseName: "end_date",
    type: "string"
  },
  {
    name: "reportType",
    baseName: "report_type",
    type: "Array<ReportCreateRequest.ReportTypeEnum>"
  },
  {
    name: "startDate",
    baseName: "start_date",
    type: "string"
  }
];
((ReportCreateRequest2) => {
  let ReportTypeEnum;
  ((ReportTypeEnum2) => {
    ReportTypeEnum2["UserActivity"] = "user_activity";
    ReportTypeEnum2["DocumentStatus"] = "document_status";
  })(ReportTypeEnum = ReportCreateRequest2.ReportTypeEnum || (ReportCreateRequest2.ReportTypeEnum = {}));
})(ReportCreateRequest || (ReportCreateRequest = {}));

// model/reportCreateResponse.ts
var _ReportCreateResponse = class {
  static getAttributeTypeMap() {
    return _ReportCreateResponse.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "ReportCreateResponse");
  }
};
var ReportCreateResponse = _ReportCreateResponse;
ReportCreateResponse.discriminator = void 0;
ReportCreateResponse.attributeTypeMap = [
  {
    name: "report",
    baseName: "report",
    type: "ReportResponse"
  },
  {
    name: "warnings",
    baseName: "warnings",
    type: "Array<WarningResponse>"
  }
];

// model/reportResponse.ts
var _ReportResponse = class {
  static getAttributeTypeMap() {
    return _ReportResponse.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "ReportResponse");
  }
};
var ReportResponse = _ReportResponse;
ReportResponse.discriminator = void 0;
ReportResponse.attributeTypeMap = [
  {
    name: "success",
    baseName: "success",
    type: "string"
  },
  {
    name: "startDate",
    baseName: "start_date",
    type: "string"
  },
  {
    name: "endDate",
    baseName: "end_date",
    type: "string"
  },
  {
    name: "reportType",
    baseName: "report_type",
    type: "Array<ReportResponse.ReportTypeEnum>"
  }
];
((ReportResponse2) => {
  let ReportTypeEnum;
  ((ReportTypeEnum2) => {
    ReportTypeEnum2["UserActivity"] = "user_activity";
    ReportTypeEnum2["DocumentStatus"] = "document_status";
  })(ReportTypeEnum = ReportResponse2.ReportTypeEnum || (ReportResponse2.ReportTypeEnum = {}));
})(ReportResponse || (ReportResponse = {}));

// model/signatureRequestBulkCreateEmbeddedWithTemplateRequest.ts
var _SignatureRequestBulkCreateEmbeddedWithTemplateRequest = class {
  constructor() {
    this["allowDecline"] = false;
    this["testMode"] = false;
  }
  static getAttributeTypeMap() {
    return _SignatureRequestBulkCreateEmbeddedWithTemplateRequest.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(
      data,
      "SignatureRequestBulkCreateEmbeddedWithTemplateRequest"
    );
  }
};
var SignatureRequestBulkCreateEmbeddedWithTemplateRequest = _SignatureRequestBulkCreateEmbeddedWithTemplateRequest;
SignatureRequestBulkCreateEmbeddedWithTemplateRequest.discriminator = void 0;
SignatureRequestBulkCreateEmbeddedWithTemplateRequest.attributeTypeMap = [
  {
    name: "templateIds",
    baseName: "template_ids",
    type: "Array<string>"
  },
  {
    name: "clientId",
    baseName: "client_id",
    type: "string"
  },
  {
    name: "signerFile",
    baseName: "signer_file",
    type: "RequestFile"
  },
  {
    name: "signerList",
    baseName: "signer_list",
    type: "Array<SubBulkSignerList>"
  },
  {
    name: "allowDecline",
    baseName: "allow_decline",
    type: "boolean"
  },
  {
    name: "ccs",
    baseName: "ccs",
    type: "Array<SubCC>"
  },
  {
    name: "customFields",
    baseName: "custom_fields",
    type: "Array<SubCustomField>"
  },
  {
    name: "message",
    baseName: "message",
    type: "string"
  },
  {
    name: "metadata",
    baseName: "metadata",
    type: "{ [key: string]: any; }"
  },
  {
    name: "signingRedirectUrl",
    baseName: "signing_redirect_url",
    type: "string"
  },
  {
    name: "subject",
    baseName: "subject",
    type: "string"
  },
  {
    name: "testMode",
    baseName: "test_mode",
    type: "boolean"
  },
  {
    name: "title",
    baseName: "title",
    type: "string"
  }
];

// model/signatureRequestBulkSendWithTemplateRequest.ts
var _SignatureRequestBulkSendWithTemplateRequest = class {
  constructor() {
    this["allowDecline"] = false;
    this["testMode"] = false;
  }
  static getAttributeTypeMap() {
    return _SignatureRequestBulkSendWithTemplateRequest.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(
      data,
      "SignatureRequestBulkSendWithTemplateRequest"
    );
  }
};
var SignatureRequestBulkSendWithTemplateRequest = _SignatureRequestBulkSendWithTemplateRequest;
SignatureRequestBulkSendWithTemplateRequest.discriminator = void 0;
SignatureRequestBulkSendWithTemplateRequest.attributeTypeMap = [
  {
    name: "templateIds",
    baseName: "template_ids",
    type: "Array<string>"
  },
  {
    name: "signerFile",
    baseName: "signer_file",
    type: "RequestFile"
  },
  {
    name: "signerList",
    baseName: "signer_list",
    type: "Array<SubBulkSignerList>"
  },
  {
    name: "allowDecline",
    baseName: "allow_decline",
    type: "boolean"
  },
  {
    name: "ccs",
    baseName: "ccs",
    type: "Array<SubCC>"
  },
  {
    name: "clientId",
    baseName: "client_id",
    type: "string"
  },
  {
    name: "customFields",
    baseName: "custom_fields",
    type: "Array<SubCustomField>"
  },
  {
    name: "message",
    baseName: "message",
    type: "string"
  },
  {
    name: "metadata",
    baseName: "metadata",
    type: "{ [key: string]: any; }"
  },
  {
    name: "signingRedirectUrl",
    baseName: "signing_redirect_url",
    type: "string"
  },
  {
    name: "subject",
    baseName: "subject",
    type: "string"
  },
  {
    name: "testMode",
    baseName: "test_mode",
    type: "boolean"
  },
  {
    name: "title",
    baseName: "title",
    type: "string"
  }
];

// model/signatureRequestCreateEmbeddedRequest.ts
var _SignatureRequestCreateEmbeddedRequest = class {
  constructor() {
    this["allowDecline"] = false;
    this["allowReassign"] = false;
    this["hideTextTags"] = false;
    this["testMode"] = false;
    this["useTextTags"] = false;
    this["populateAutoFillFields"] = false;
  }
  static getAttributeTypeMap() {
    return _SignatureRequestCreateEmbeddedRequest.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(
      data,
      "SignatureRequestCreateEmbeddedRequest"
    );
  }
};
var SignatureRequestCreateEmbeddedRequest = _SignatureRequestCreateEmbeddedRequest;
SignatureRequestCreateEmbeddedRequest.discriminator = void 0;
SignatureRequestCreateEmbeddedRequest.attributeTypeMap = [
  {
    name: "clientId",
    baseName: "client_id",
    type: "string"
  },
  {
    name: "files",
    baseName: "files",
    type: "Array<RequestFile>"
  },
  {
    name: "fileUrls",
    baseName: "file_urls",
    type: "Array<string>"
  },
  {
    name: "signers",
    baseName: "signers",
    type: "Array<SubSignatureRequestSigner>"
  },
  {
    name: "groupedSigners",
    baseName: "grouped_signers",
    type: "Array<SubSignatureRequestGroupedSigners>"
  },
  {
    name: "allowDecline",
    baseName: "allow_decline",
    type: "boolean"
  },
  {
    name: "allowReassign",
    baseName: "allow_reassign",
    type: "boolean"
  },
  {
    name: "attachments",
    baseName: "attachments",
    type: "Array<SubAttachment>"
  },
  {
    name: "ccEmailAddresses",
    baseName: "cc_email_addresses",
    type: "Array<string>"
  },
  {
    name: "customFields",
    baseName: "custom_fields",
    type: "Array<SubCustomField>"
  },
  {
    name: "fieldOptions",
    baseName: "field_options",
    type: "SubFieldOptions"
  },
  {
    name: "formFieldGroups",
    baseName: "form_field_groups",
    type: "Array<SubFormFieldGroup>"
  },
  {
    name: "formFieldRules",
    baseName: "form_field_rules",
    type: "Array<SubFormFieldRule>"
  },
  {
    name: "formFieldsPerDocument",
    baseName: "form_fields_per_document",
    type: "Array<SubFormFieldsPerDocumentBase>"
  },
  {
    name: "hideTextTags",
    baseName: "hide_text_tags",
    type: "boolean"
  },
  {
    name: "message",
    baseName: "message",
    type: "string"
  },
  {
    name: "metadata",
    baseName: "metadata",
    type: "{ [key: string]: any; }"
  },
  {
    name: "signingOptions",
    baseName: "signing_options",
    type: "SubSigningOptions"
  },
  {
    name: "subject",
    baseName: "subject",
    type: "string"
  },
  {
    name: "testMode",
    baseName: "test_mode",
    type: "boolean"
  },
  {
    name: "title",
    baseName: "title",
    type: "string"
  },
  {
    name: "useTextTags",
    baseName: "use_text_tags",
    type: "boolean"
  },
  {
    name: "populateAutoFillFields",
    baseName: "populate_auto_fill_fields",
    type: "boolean"
  },
  {
    name: "expiresAt",
    baseName: "expires_at",
    type: "number"
  }
];

// model/signatureRequestCreateEmbeddedWithTemplateRequest.ts
var _SignatureRequestCreateEmbeddedWithTemplateRequest = class {
  constructor() {
    this["allowDecline"] = false;
    this["testMode"] = false;
    this["populateAutoFillFields"] = false;
  }
  static getAttributeTypeMap() {
    return _SignatureRequestCreateEmbeddedWithTemplateRequest.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(
      data,
      "SignatureRequestCreateEmbeddedWithTemplateRequest"
    );
  }
};
var SignatureRequestCreateEmbeddedWithTemplateRequest = _SignatureRequestCreateEmbeddedWithTemplateRequest;
SignatureRequestCreateEmbeddedWithTemplateRequest.discriminator = void 0;
SignatureRequestCreateEmbeddedWithTemplateRequest.attributeTypeMap = [
  {
    name: "templateIds",
    baseName: "template_ids",
    type: "Array<string>"
  },
  {
    name: "clientId",
    baseName: "client_id",
    type: "string"
  },
  {
    name: "signers",
    baseName: "signers",
    type: "Array<SubSignatureRequestTemplateSigner>"
  },
  {
    name: "allowDecline",
    baseName: "allow_decline",
    type: "boolean"
  },
  {
    name: "ccs",
    baseName: "ccs",
    type: "Array<SubCC>"
  },
  {
    name: "customFields",
    baseName: "custom_fields",
    type: "Array<SubCustomField>"
  },
  {
    name: "files",
    baseName: "files",
    type: "Array<RequestFile>"
  },
  {
    name: "fileUrls",
    baseName: "file_urls",
    type: "Array<string>"
  },
  {
    name: "message",
    baseName: "message",
    type: "string"
  },
  {
    name: "metadata",
    baseName: "metadata",
    type: "{ [key: string]: any; }"
  },
  {
    name: "signingOptions",
    baseName: "signing_options",
    type: "SubSigningOptions"
  },
  {
    name: "subject",
    baseName: "subject",
    type: "string"
  },
  {
    name: "testMode",
    baseName: "test_mode",
    type: "boolean"
  },
  {
    name: "title",
    baseName: "title",
    type: "string"
  },
  {
    name: "populateAutoFillFields",
    baseName: "populate_auto_fill_fields",
    type: "boolean"
  }
];

// model/signatureRequestEditEmbeddedRequest.ts
var _SignatureRequestEditEmbeddedRequest = class {
  constructor() {
    this["allowDecline"] = false;
    this["allowReassign"] = false;
    this["hideTextTags"] = false;
    this["testMode"] = false;
    this["useTextTags"] = false;
    this["populateAutoFillFields"] = false;
  }
  static getAttributeTypeMap() {
    return _SignatureRequestEditEmbeddedRequest.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(
      data,
      "SignatureRequestEditEmbeddedRequest"
    );
  }
};
var SignatureRequestEditEmbeddedRequest = _SignatureRequestEditEmbeddedRequest;
SignatureRequestEditEmbeddedRequest.discriminator = void 0;
SignatureRequestEditEmbeddedRequest.attributeTypeMap = [
  {
    name: "clientId",
    baseName: "client_id",
    type: "string"
  },
  {
    name: "files",
    baseName: "files",
    type: "Array<RequestFile>"
  },
  {
    name: "fileUrls",
    baseName: "file_urls",
    type: "Array<string>"
  },
  {
    name: "signers",
    baseName: "signers",
    type: "Array<SubSignatureRequestSigner>"
  },
  {
    name: "groupedSigners",
    baseName: "grouped_signers",
    type: "Array<SubSignatureRequestGroupedSigners>"
  },
  {
    name: "allowDecline",
    baseName: "allow_decline",
    type: "boolean"
  },
  {
    name: "allowReassign",
    baseName: "allow_reassign",
    type: "boolean"
  },
  {
    name: "attachments",
    baseName: "attachments",
    type: "Array<SubAttachment>"
  },
  {
    name: "ccEmailAddresses",
    baseName: "cc_email_addresses",
    type: "Array<string>"
  },
  {
    name: "customFields",
    baseName: "custom_fields",
    type: "Array<SubCustomField>"
  },
  {
    name: "fieldOptions",
    baseName: "field_options",
    type: "SubFieldOptions"
  },
  {
    name: "formFieldGroups",
    baseName: "form_field_groups",
    type: "Array<SubFormFieldGroup>"
  },
  {
    name: "formFieldRules",
    baseName: "form_field_rules",
    type: "Array<SubFormFieldRule>"
  },
  {
    name: "formFieldsPerDocument",
    baseName: "form_fields_per_document",
    type: "Array<SubFormFieldsPerDocumentBase>"
  },
  {
    name: "hideTextTags",
    baseName: "hide_text_tags",
    type: "boolean"
  },
  {
    name: "message",
    baseName: "message",
    type: "string"
  },
  {
    name: "metadata",
    baseName: "metadata",
    type: "{ [key: string]: any; }"
  },
  {
    name: "signingOptions",
    baseName: "signing_options",
    type: "SubSigningOptions"
  },
  {
    name: "subject",
    baseName: "subject",
    type: "string"
  },
  {
    name: "testMode",
    baseName: "test_mode",
    type: "boolean"
  },
  {
    name: "title",
    baseName: "title",
    type: "string"
  },
  {
    name: "useTextTags",
    baseName: "use_text_tags",
    type: "boolean"
  },
  {
    name: "populateAutoFillFields",
    baseName: "populate_auto_fill_fields",
    type: "boolean"
  },
  {
    name: "expiresAt",
    baseName: "expires_at",
    type: "number"
  }
];

// model/signatureRequestEditEmbeddedWithTemplateRequest.ts
var _SignatureRequestEditEmbeddedWithTemplateRequest = class {
  constructor() {
    this["allowDecline"] = false;
    this["testMode"] = false;
    this["populateAutoFillFields"] = false;
  }
  static getAttributeTypeMap() {
    return _SignatureRequestEditEmbeddedWithTemplateRequest.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(
      data,
      "SignatureRequestEditEmbeddedWithTemplateRequest"
    );
  }
};
var SignatureRequestEditEmbeddedWithTemplateRequest = _SignatureRequestEditEmbeddedWithTemplateRequest;
SignatureRequestEditEmbeddedWithTemplateRequest.discriminator = void 0;
SignatureRequestEditEmbeddedWithTemplateRequest.attributeTypeMap = [
  {
    name: "templateIds",
    baseName: "template_ids",
    type: "Array<string>"
  },
  {
    name: "clientId",
    baseName: "client_id",
    type: "string"
  },
  {
    name: "signers",
    baseName: "signers",
    type: "Array<SubSignatureRequestTemplateSigner>"
  },
  {
    name: "allowDecline",
    baseName: "allow_decline",
    type: "boolean"
  },
  {
    name: "ccs",
    baseName: "ccs",
    type: "Array<SubCC>"
  },
  {
    name: "customFields",
    baseName: "custom_fields",
    type: "Array<SubCustomField>"
  },
  {
    name: "files",
    baseName: "files",
    type: "Array<RequestFile>"
  },
  {
    name: "fileUrls",
    baseName: "file_urls",
    type: "Array<string>"
  },
  {
    name: "message",
    baseName: "message",
    type: "string"
  },
  {
    name: "metadata",
    baseName: "metadata",
    type: "{ [key: string]: any; }"
  },
  {
    name: "signingOptions",
    baseName: "signing_options",
    type: "SubSigningOptions"
  },
  {
    name: "subject",
    baseName: "subject",
    type: "string"
  },
  {
    name: "testMode",
    baseName: "test_mode",
    type: "boolean"
  },
  {
    name: "title",
    baseName: "title",
    type: "string"
  },
  {
    name: "populateAutoFillFields",
    baseName: "populate_auto_fill_fields",
    type: "boolean"
  }
];

// model/signatureRequestEditRequest.ts
var _SignatureRequestEditRequest = class {
  constructor() {
    this["allowDecline"] = false;
    this["allowReassign"] = false;
    this["hideTextTags"] = false;
    this["isQualifiedSignature"] = false;
    this["isEid"] = false;
    this["testMode"] = false;
    this["useTextTags"] = false;
  }
  static getAttributeTypeMap() {
    return _SignatureRequestEditRequest.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "SignatureRequestEditRequest");
  }
};
var SignatureRequestEditRequest = _SignatureRequestEditRequest;
SignatureRequestEditRequest.discriminator = void 0;
SignatureRequestEditRequest.attributeTypeMap = [
  {
    name: "files",
    baseName: "files",
    type: "Array<RequestFile>"
  },
  {
    name: "fileUrls",
    baseName: "file_urls",
    type: "Array<string>"
  },
  {
    name: "signers",
    baseName: "signers",
    type: "Array<SubSignatureRequestSigner>"
  },
  {
    name: "groupedSigners",
    baseName: "grouped_signers",
    type: "Array<SubSignatureRequestGroupedSigners>"
  },
  {
    name: "allowDecline",
    baseName: "allow_decline",
    type: "boolean"
  },
  {
    name: "allowReassign",
    baseName: "allow_reassign",
    type: "boolean"
  },
  {
    name: "attachments",
    baseName: "attachments",
    type: "Array<SubAttachment>"
  },
  {
    name: "ccEmailAddresses",
    baseName: "cc_email_addresses",
    type: "Array<string>"
  },
  {
    name: "clientId",
    baseName: "client_id",
    type: "string"
  },
  {
    name: "customFields",
    baseName: "custom_fields",
    type: "Array<SubCustomField>"
  },
  {
    name: "fieldOptions",
    baseName: "field_options",
    type: "SubFieldOptions"
  },
  {
    name: "formFieldGroups",
    baseName: "form_field_groups",
    type: "Array<SubFormFieldGroup>"
  },
  {
    name: "formFieldRules",
    baseName: "form_field_rules",
    type: "Array<SubFormFieldRule>"
  },
  {
    name: "formFieldsPerDocument",
    baseName: "form_fields_per_document",
    type: "Array<SubFormFieldsPerDocumentBase>"
  },
  {
    name: "hideTextTags",
    baseName: "hide_text_tags",
    type: "boolean"
  },
  {
    name: "isQualifiedSignature",
    baseName: "is_qualified_signature",
    type: "boolean"
  },
  {
    name: "isEid",
    baseName: "is_eid",
    type: "boolean"
  },
  {
    name: "message",
    baseName: "message",
    type: "string"
  },
  {
    name: "metadata",
    baseName: "metadata",
    type: "{ [key: string]: any; }"
  },
  {
    name: "signingOptions",
    baseName: "signing_options",
    type: "SubSigningOptions"
  },
  {
    name: "signingRedirectUrl",
    baseName: "signing_redirect_url",
    type: "string"
  },
  {
    name: "subject",
    baseName: "subject",
    type: "string"
  },
  {
    name: "testMode",
    baseName: "test_mode",
    type: "boolean"
  },
  {
    name: "title",
    baseName: "title",
    type: "string"
  },
  {
    name: "useTextTags",
    baseName: "use_text_tags",
    type: "boolean"
  },
  {
    name: "expiresAt",
    baseName: "expires_at",
    type: "number"
  }
];

// model/signatureRequestEditWithTemplateRequest.ts
var _SignatureRequestEditWithTemplateRequest = class {
  constructor() {
    this["allowDecline"] = false;
    this["isQualifiedSignature"] = false;
    this["isEid"] = false;
    this["testMode"] = false;
  }
  static getAttributeTypeMap() {
    return _SignatureRequestEditWithTemplateRequest.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(
      data,
      "SignatureRequestEditWithTemplateRequest"
    );
  }
};
var SignatureRequestEditWithTemplateRequest = _SignatureRequestEditWithTemplateRequest;
SignatureRequestEditWithTemplateRequest.discriminator = void 0;
SignatureRequestEditWithTemplateRequest.attributeTypeMap = [
  {
    name: "templateIds",
    baseName: "template_ids",
    type: "Array<string>"
  },
  {
    name: "signers",
    baseName: "signers",
    type: "Array<SubSignatureRequestTemplateSigner>"
  },
  {
    name: "allowDecline",
    baseName: "allow_decline",
    type: "boolean"
  },
  {
    name: "ccs",
    baseName: "ccs",
    type: "Array<SubCC>"
  },
  {
    name: "clientId",
    baseName: "client_id",
    type: "string"
  },
  {
    name: "customFields",
    baseName: "custom_fields",
    type: "Array<SubCustomField>"
  },
  {
    name: "files",
    baseName: "files",
    type: "Array<RequestFile>"
  },
  {
    name: "fileUrls",
    baseName: "file_urls",
    type: "Array<string>"
  },
  {
    name: "isQualifiedSignature",
    baseName: "is_qualified_signature",
    type: "boolean"
  },
  {
    name: "isEid",
    baseName: "is_eid",
    type: "boolean"
  },
  {
    name: "message",
    baseName: "message",
    type: "string"
  },
  {
    name: "metadata",
    baseName: "metadata",
    type: "{ [key: string]: any; }"
  },
  {
    name: "signingOptions",
    baseName: "signing_options",
    type: "SubSigningOptions"
  },
  {
    name: "signingRedirectUrl",
    baseName: "signing_redirect_url",
    type: "string"
  },
  {
    name: "subject",
    baseName: "subject",
    type: "string"
  },
  {
    name: "testMode",
    baseName: "test_mode",
    type: "boolean"
  },
  {
    name: "title",
    baseName: "title",
    type: "string"
  }
];

// model/signatureRequestGetResponse.ts
var _SignatureRequestGetResponse = class {
  static getAttributeTypeMap() {
    return _SignatureRequestGetResponse.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "SignatureRequestGetResponse");
  }
};
var SignatureRequestGetResponse = _SignatureRequestGetResponse;
SignatureRequestGetResponse.discriminator = void 0;
SignatureRequestGetResponse.attributeTypeMap = [
  {
    name: "signatureRequest",
    baseName: "signature_request",
    type: "SignatureRequestResponse"
  },
  {
    name: "warnings",
    baseName: "warnings",
    type: "Array<WarningResponse>"
  }
];

// model/signatureRequestListResponse.ts
var _SignatureRequestListResponse = class {
  static getAttributeTypeMap() {
    return _SignatureRequestListResponse.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "SignatureRequestListResponse");
  }
};
var SignatureRequestListResponse = _SignatureRequestListResponse;
SignatureRequestListResponse.discriminator = void 0;
SignatureRequestListResponse.attributeTypeMap = [
  {
    name: "signatureRequests",
    baseName: "signature_requests",
    type: "Array<SignatureRequestResponse>"
  },
  {
    name: "listInfo",
    baseName: "list_info",
    type: "ListInfoResponse"
  },
  {
    name: "warnings",
    baseName: "warnings",
    type: "Array<WarningResponse>"
  }
];

// model/signatureRequestRemindRequest.ts
var _SignatureRequestRemindRequest = class {
  static getAttributeTypeMap() {
    return _SignatureRequestRemindRequest.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "SignatureRequestRemindRequest");
  }
};
var SignatureRequestRemindRequest = _SignatureRequestRemindRequest;
SignatureRequestRemindRequest.discriminator = void 0;
SignatureRequestRemindRequest.attributeTypeMap = [
  {
    name: "emailAddress",
    baseName: "email_address",
    type: "string"
  },
  {
    name: "name",
    baseName: "name",
    type: "string"
  }
];

// model/signatureRequestResponse.ts
var _SignatureRequestResponse = class {
  constructor() {
    this["testMode"] = false;
  }
  static getAttributeTypeMap() {
    return _SignatureRequestResponse.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "SignatureRequestResponse");
  }
};
var SignatureRequestResponse = _SignatureRequestResponse;
SignatureRequestResponse.discriminator = void 0;
SignatureRequestResponse.attributeTypeMap = [
  {
    name: "testMode",
    baseName: "test_mode",
    type: "boolean"
  },
  {
    name: "signatureRequestId",
    baseName: "signature_request_id",
    type: "string"
  },
  {
    name: "requesterEmailAddress",
    baseName: "requester_email_address",
    type: "string"
  },
  {
    name: "title",
    baseName: "title",
    type: "string"
  },
  {
    name: "originalTitle",
    baseName: "original_title",
    type: "string"
  },
  {
    name: "subject",
    baseName: "subject",
    type: "string"
  },
  {
    name: "message",
    baseName: "message",
    type: "string"
  },
  {
    name: "metadata",
    baseName: "metadata",
    type: "object"
  },
  {
    name: "createdAt",
    baseName: "created_at",
    type: "number"
  },
  {
    name: "expiresAt",
    baseName: "expires_at",
    type: "number"
  },
  {
    name: "isComplete",
    baseName: "is_complete",
    type: "boolean"
  },
  {
    name: "isDeclined",
    baseName: "is_declined",
    type: "boolean"
  },
  {
    name: "hasError",
    baseName: "has_error",
    type: "boolean"
  },
  {
    name: "filesUrl",
    baseName: "files_url",
    type: "string"
  },
  {
    name: "signingUrl",
    baseName: "signing_url",
    type: "string"
  },
  {
    name: "detailsUrl",
    baseName: "details_url",
    type: "string"
  },
  {
    name: "ccEmailAddresses",
    baseName: "cc_email_addresses",
    type: "Array<string>"
  },
  {
    name: "signingRedirectUrl",
    baseName: "signing_redirect_url",
    type: "string"
  },
  {
    name: "finalCopyUri",
    baseName: "final_copy_uri",
    type: "string"
  },
  {
    name: "templateIds",
    baseName: "template_ids",
    type: "Array<string>"
  },
  {
    name: "customFields",
    baseName: "custom_fields",
    type: "Array<SignatureRequestResponseCustomFieldBase>"
  },
  {
    name: "attachments",
    baseName: "attachments",
    type: "Array<SignatureRequestResponseAttachment>"
  },
  {
    name: "responseData",
    baseName: "response_data",
    type: "Array<SignatureRequestResponseDataBase>"
  },
  {
    name: "signatures",
    baseName: "signatures",
    type: "Array<SignatureRequestResponseSignatures>"
  },
  {
    name: "bulkSendJobId",
    baseName: "bulk_send_job_id",
    type: "string"
  }
];

// model/signatureRequestResponseAttachment.ts
var _SignatureRequestResponseAttachment = class {
  static getAttributeTypeMap() {
    return _SignatureRequestResponseAttachment.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(
      data,
      "SignatureRequestResponseAttachment"
    );
  }
};
var SignatureRequestResponseAttachment = _SignatureRequestResponseAttachment;
SignatureRequestResponseAttachment.discriminator = void 0;
SignatureRequestResponseAttachment.attributeTypeMap = [
  {
    name: "id",
    baseName: "id",
    type: "string"
  },
  {
    name: "signer",
    baseName: "signer",
    type: "string"
  },
  {
    name: "name",
    baseName: "name",
    type: "string"
  },
  {
    name: "required",
    baseName: "required",
    type: "boolean"
  },
  {
    name: "instructions",
    baseName: "instructions",
    type: "string"
  },
  {
    name: "uploadedAt",
    baseName: "uploaded_at",
    type: "number"
  }
];

// model/signatureRequestResponseCustomFieldBase.ts
var _SignatureRequestResponseCustomFieldBase = class {
  static getAttributeTypeMap() {
    return _SignatureRequestResponseCustomFieldBase.attributeTypeMap;
  }
  static discriminatorClassName(value) {
    if (value === void 0 || value === null) {
      return null;
    }
    if (value === "checkbox") {
      return "SignatureRequestResponseCustomFieldCheckbox";
    }
    if (value === "text") {
      return "SignatureRequestResponseCustomFieldText";
    }
    return null;
  }
};
var SignatureRequestResponseCustomFieldBase = _SignatureRequestResponseCustomFieldBase;
SignatureRequestResponseCustomFieldBase.discriminator = "type";
SignatureRequestResponseCustomFieldBase.attributeTypeMap = [
  {
    name: "type",
    baseName: "type",
    type: "string"
  },
  {
    name: "name",
    baseName: "name",
    type: "string"
  },
  {
    name: "required",
    baseName: "required",
    type: "boolean"
  },
  {
    name: "apiId",
    baseName: "api_id",
    type: "string"
  },
  {
    name: "editor",
    baseName: "editor",
    type: "string"
  }
];

// model/signatureRequestResponseCustomFieldCheckbox.ts
var _SignatureRequestResponseCustomFieldCheckbox = class extends SignatureRequestResponseCustomFieldBase {
  constructor() {
    super(...arguments);
    this["type"] = "checkbox";
  }
  static getAttributeTypeMap() {
    return super.getAttributeTypeMap().concat(_SignatureRequestResponseCustomFieldCheckbox.attributeTypeMap);
  }
  static init(data) {
    return ObjectSerializer.deserialize(
      data,
      "SignatureRequestResponseCustomFieldCheckbox"
    );
  }
};
var SignatureRequestResponseCustomFieldCheckbox = _SignatureRequestResponseCustomFieldCheckbox;
SignatureRequestResponseCustomFieldCheckbox.discriminator = void 0;
SignatureRequestResponseCustomFieldCheckbox.attributeTypeMap = [
  {
    name: "type",
    baseName: "type",
    type: "string"
  },
  {
    name: "value",
    baseName: "value",
    type: "boolean"
  }
];

// model/signatureRequestResponseCustomFieldText.ts
var _SignatureRequestResponseCustomFieldText = class extends SignatureRequestResponseCustomFieldBase {
  constructor() {
    super(...arguments);
    this["type"] = "text";
  }
  static getAttributeTypeMap() {
    return super.getAttributeTypeMap().concat(_SignatureRequestResponseCustomFieldText.attributeTypeMap);
  }
  static init(data) {
    return ObjectSerializer.deserialize(
      data,
      "SignatureRequestResponseCustomFieldText"
    );
  }
};
var SignatureRequestResponseCustomFieldText = _SignatureRequestResponseCustomFieldText;
SignatureRequestResponseCustomFieldText.discriminator = void 0;
SignatureRequestResponseCustomFieldText.attributeTypeMap = [
  {
    name: "type",
    baseName: "type",
    type: "string"
  },
  {
    name: "value",
    baseName: "value",
    type: "string"
  }
];

// model/signatureRequestResponseCustomFieldTypeEnum.ts
var SignatureRequestResponseCustomFieldTypeEnum = /* @__PURE__ */ ((SignatureRequestResponseCustomFieldTypeEnum2) => {
  SignatureRequestResponseCustomFieldTypeEnum2["Text"] = "text";
  SignatureRequestResponseCustomFieldTypeEnum2["Checkbox"] = "checkbox";
  return SignatureRequestResponseCustomFieldTypeEnum2;
})(SignatureRequestResponseCustomFieldTypeEnum || {});

// model/signatureRequestResponseDataBase.ts
var _SignatureRequestResponseDataBase = class {
  static getAttributeTypeMap() {
    return _SignatureRequestResponseDataBase.attributeTypeMap;
  }
  static discriminatorClassName(value) {
    if (value === void 0 || value === null) {
      return null;
    }
    if (value === "checkbox") {
      return "SignatureRequestResponseDataValueCheckbox";
    }
    if (value === "checkbox-merge") {
      return "SignatureRequestResponseDataValueCheckboxMerge";
    }
    if (value === "date_signed") {
      return "SignatureRequestResponseDataValueDateSigned";
    }
    if (value === "dropdown") {
      return "SignatureRequestResponseDataValueDropdown";
    }
    if (value === "initials") {
      return "SignatureRequestResponseDataValueInitials";
    }
    if (value === "radio") {
      return "SignatureRequestResponseDataValueRadio";
    }
    if (value === "signature") {
      return "SignatureRequestResponseDataValueSignature";
    }
    if (value === "text") {
      return "SignatureRequestResponseDataValueText";
    }
    if (value === "text-merge") {
      return "SignatureRequestResponseDataValueTextMerge";
    }
    return null;
  }
};
var SignatureRequestResponseDataBase = _SignatureRequestResponseDataBase;
SignatureRequestResponseDataBase.discriminator = "type";
SignatureRequestResponseDataBase.attributeTypeMap = [
  {
    name: "apiId",
    baseName: "api_id",
    type: "string"
  },
  {
    name: "signatureId",
    baseName: "signature_id",
    type: "string"
  },
  {
    name: "name",
    baseName: "name",
    type: "string"
  },
  {
    name: "required",
    baseName: "required",
    type: "boolean"
  },
  {
    name: "type",
    baseName: "type",
    type: "string"
  }
];

// model/signatureRequestResponseDataTypeEnum.ts
var SignatureRequestResponseDataTypeEnum = /* @__PURE__ */ ((SignatureRequestResponseDataTypeEnum2) => {
  SignatureRequestResponseDataTypeEnum2["Text"] = "text";
  SignatureRequestResponseDataTypeEnum2["Checkbox"] = "checkbox";
  SignatureRequestResponseDataTypeEnum2["DateSigned"] = "date_signed";
  SignatureRequestResponseDataTypeEnum2["Dropdown"] = "dropdown";
  SignatureRequestResponseDataTypeEnum2["Initials"] = "initials";
  SignatureRequestResponseDataTypeEnum2["Radio"] = "radio";
  SignatureRequestResponseDataTypeEnum2["Signature"] = "signature";
  SignatureRequestResponseDataTypeEnum2["TextMerge"] = "text-merge";
  SignatureRequestResponseDataTypeEnum2["CheckboxMerge"] = "checkbox-merge";
  return SignatureRequestResponseDataTypeEnum2;
})(SignatureRequestResponseDataTypeEnum || {});

// model/signatureRequestResponseDataValueCheckbox.ts
var _SignatureRequestResponseDataValueCheckbox = class extends SignatureRequestResponseDataBase {
  constructor() {
    super(...arguments);
    this["type"] = "checkbox";
  }
  static getAttributeTypeMap() {
    return super.getAttributeTypeMap().concat(_SignatureRequestResponseDataValueCheckbox.attributeTypeMap);
  }
  static init(data) {
    return ObjectSerializer.deserialize(
      data,
      "SignatureRequestResponseDataValueCheckbox"
    );
  }
};
var SignatureRequestResponseDataValueCheckbox = _SignatureRequestResponseDataValueCheckbox;
SignatureRequestResponseDataValueCheckbox.discriminator = void 0;
SignatureRequestResponseDataValueCheckbox.attributeTypeMap = [
  {
    name: "type",
    baseName: "type",
    type: "string"
  },
  {
    name: "value",
    baseName: "value",
    type: "boolean"
  }
];

// model/signatureRequestResponseDataValueCheckboxMerge.ts
var _SignatureRequestResponseDataValueCheckboxMerge = class extends SignatureRequestResponseDataBase {
  constructor() {
    super(...arguments);
    this["type"] = "checkbox-merge";
  }
  static getAttributeTypeMap() {
    return super.getAttributeTypeMap().concat(_SignatureRequestResponseDataValueCheckboxMerge.attributeTypeMap);
  }
  static init(data) {
    return ObjectSerializer.deserialize(
      data,
      "SignatureRequestResponseDataValueCheckboxMerge"
    );
  }
};
var SignatureRequestResponseDataValueCheckboxMerge = _SignatureRequestResponseDataValueCheckboxMerge;
SignatureRequestResponseDataValueCheckboxMerge.discriminator = void 0;
SignatureRequestResponseDataValueCheckboxMerge.attributeTypeMap = [
  {
    name: "type",
    baseName: "type",
    type: "string"
  },
  {
    name: "value",
    baseName: "value",
    type: "string"
  }
];

// model/signatureRequestResponseDataValueDateSigned.ts
var _SignatureRequestResponseDataValueDateSigned = class extends SignatureRequestResponseDataBase {
  constructor() {
    super(...arguments);
    this["type"] = "date_signed";
  }
  static getAttributeTypeMap() {
    return super.getAttributeTypeMap().concat(_SignatureRequestResponseDataValueDateSigned.attributeTypeMap);
  }
  static init(data) {
    return ObjectSerializer.deserialize(
      data,
      "SignatureRequestResponseDataValueDateSigned"
    );
  }
};
var SignatureRequestResponseDataValueDateSigned = _SignatureRequestResponseDataValueDateSigned;
SignatureRequestResponseDataValueDateSigned.discriminator = void 0;
SignatureRequestResponseDataValueDateSigned.attributeTypeMap = [
  {
    name: "type",
    baseName: "type",
    type: "string"
  },
  {
    name: "value",
    baseName: "value",
    type: "string"
  }
];

// model/signatureRequestResponseDataValueDropdown.ts
var _SignatureRequestResponseDataValueDropdown = class extends SignatureRequestResponseDataBase {
  constructor() {
    super(...arguments);
    this["type"] = "dropdown";
  }
  static getAttributeTypeMap() {
    return super.getAttributeTypeMap().concat(_SignatureRequestResponseDataValueDropdown.attributeTypeMap);
  }
  static init(data) {
    return ObjectSerializer.deserialize(
      data,
      "SignatureRequestResponseDataValueDropdown"
    );
  }
};
var SignatureRequestResponseDataValueDropdown = _SignatureRequestResponseDataValueDropdown;
SignatureRequestResponseDataValueDropdown.discriminator = void 0;
SignatureRequestResponseDataValueDropdown.attributeTypeMap = [
  {
    name: "type",
    baseName: "type",
    type: "string"
  },
  {
    name: "value",
    baseName: "value",
    type: "string"
  }
];

// model/signatureRequestResponseDataValueInitials.ts
var _SignatureRequestResponseDataValueInitials = class extends SignatureRequestResponseDataBase {
  constructor() {
    super(...arguments);
    this["type"] = "initials";
  }
  static getAttributeTypeMap() {
    return super.getAttributeTypeMap().concat(_SignatureRequestResponseDataValueInitials.attributeTypeMap);
  }
  static init(data) {
    return ObjectSerializer.deserialize(
      data,
      "SignatureRequestResponseDataValueInitials"
    );
  }
};
var SignatureRequestResponseDataValueInitials = _SignatureRequestResponseDataValueInitials;
SignatureRequestResponseDataValueInitials.discriminator = void 0;
SignatureRequestResponseDataValueInitials.attributeTypeMap = [
  {
    name: "type",
    baseName: "type",
    type: "string"
  },
  {
    name: "value",
    baseName: "value",
    type: "string"
  }
];

// model/signatureRequestResponseDataValueRadio.ts
var _SignatureRequestResponseDataValueRadio = class extends SignatureRequestResponseDataBase {
  constructor() {
    super(...arguments);
    this["type"] = "radio";
  }
  static getAttributeTypeMap() {
    return super.getAttributeTypeMap().concat(_SignatureRequestResponseDataValueRadio.attributeTypeMap);
  }
  static init(data) {
    return ObjectSerializer.deserialize(
      data,
      "SignatureRequestResponseDataValueRadio"
    );
  }
};
var SignatureRequestResponseDataValueRadio = _SignatureRequestResponseDataValueRadio;
SignatureRequestResponseDataValueRadio.discriminator = void 0;
SignatureRequestResponseDataValueRadio.attributeTypeMap = [
  {
    name: "type",
    baseName: "type",
    type: "string"
  },
  {
    name: "value",
    baseName: "value",
    type: "boolean"
  }
];

// model/signatureRequestResponseDataValueSignature.ts
var _SignatureRequestResponseDataValueSignature = class extends SignatureRequestResponseDataBase {
  constructor() {
    super(...arguments);
    this["type"] = "signature";
  }
  static getAttributeTypeMap() {
    return super.getAttributeTypeMap().concat(_SignatureRequestResponseDataValueSignature.attributeTypeMap);
  }
  static init(data) {
    return ObjectSerializer.deserialize(
      data,
      "SignatureRequestResponseDataValueSignature"
    );
  }
};
var SignatureRequestResponseDataValueSignature = _SignatureRequestResponseDataValueSignature;
SignatureRequestResponseDataValueSignature.discriminator = void 0;
SignatureRequestResponseDataValueSignature.attributeTypeMap = [
  {
    name: "type",
    baseName: "type",
    type: "string"
  },
  {
    name: "value",
    baseName: "value",
    type: "string"
  }
];

// model/signatureRequestResponseDataValueText.ts
var _SignatureRequestResponseDataValueText = class extends SignatureRequestResponseDataBase {
  constructor() {
    super(...arguments);
    this["type"] = "text";
  }
  static getAttributeTypeMap() {
    return super.getAttributeTypeMap().concat(_SignatureRequestResponseDataValueText.attributeTypeMap);
  }
  static init(data) {
    return ObjectSerializer.deserialize(
      data,
      "SignatureRequestResponseDataValueText"
    );
  }
};
var SignatureRequestResponseDataValueText = _SignatureRequestResponseDataValueText;
SignatureRequestResponseDataValueText.discriminator = void 0;
SignatureRequestResponseDataValueText.attributeTypeMap = [
  {
    name: "type",
    baseName: "type",
    type: "string"
  },
  {
    name: "value",
    baseName: "value",
    type: "string"
  }
];

// model/signatureRequestResponseDataValueTextMerge.ts
var _SignatureRequestResponseDataValueTextMerge = class extends SignatureRequestResponseDataBase {
  constructor() {
    super(...arguments);
    this["type"] = "text-merge";
  }
  static getAttributeTypeMap() {
    return super.getAttributeTypeMap().concat(_SignatureRequestResponseDataValueTextMerge.attributeTypeMap);
  }
  static init(data) {
    return ObjectSerializer.deserialize(
      data,
      "SignatureRequestResponseDataValueTextMerge"
    );
  }
};
var SignatureRequestResponseDataValueTextMerge = _SignatureRequestResponseDataValueTextMerge;
SignatureRequestResponseDataValueTextMerge.discriminator = void 0;
SignatureRequestResponseDataValueTextMerge.attributeTypeMap = [
  {
    name: "type",
    baseName: "type",
    type: "string"
  },
  {
    name: "value",
    baseName: "value",
    type: "string"
  }
];

// model/signatureRequestResponseSignatures.ts
var _SignatureRequestResponseSignatures = class {
  static getAttributeTypeMap() {
    return _SignatureRequestResponseSignatures.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(
      data,
      "SignatureRequestResponseSignatures"
    );
  }
};
var SignatureRequestResponseSignatures = _SignatureRequestResponseSignatures;
SignatureRequestResponseSignatures.discriminator = void 0;
SignatureRequestResponseSignatures.attributeTypeMap = [
  {
    name: "signatureId",
    baseName: "signature_id",
    type: "string"
  },
  {
    name: "signerGroupGuid",
    baseName: "signer_group_guid",
    type: "string"
  },
  {
    name: "signerEmailAddress",
    baseName: "signer_email_address",
    type: "string"
  },
  {
    name: "signerName",
    baseName: "signer_name",
    type: "string"
  },
  {
    name: "signerRole",
    baseName: "signer_role",
    type: "string"
  },
  {
    name: "order",
    baseName: "order",
    type: "number"
  },
  {
    name: "statusCode",
    baseName: "status_code",
    type: "string"
  },
  {
    name: "declineReason",
    baseName: "decline_reason",
    type: "string"
  },
  {
    name: "signedAt",
    baseName: "signed_at",
    type: "number"
  },
  {
    name: "lastViewedAt",
    baseName: "last_viewed_at",
    type: "number"
  },
  {
    name: "lastRemindedAt",
    baseName: "last_reminded_at",
    type: "number"
  },
  {
    name: "hasPin",
    baseName: "has_pin",
    type: "boolean"
  },
  {
    name: "hasSmsAuth",
    baseName: "has_sms_auth",
    type: "boolean"
  },
  {
    name: "hasSmsDelivery",
    baseName: "has_sms_delivery",
    type: "boolean"
  },
  {
    name: "smsPhoneNumber",
    baseName: "sms_phone_number",
    type: "string"
  },
  {
    name: "reassignedBy",
    baseName: "reassigned_by",
    type: "string"
  },
  {
    name: "reassignmentReason",
    baseName: "reassignment_reason",
    type: "string"
  },
  {
    name: "reassignedFrom",
    baseName: "reassigned_from",
    type: "string"
  },
  {
    name: "error",
    baseName: "error",
    type: "string"
  }
];

// model/signatureRequestSendRequest.ts
var _SignatureRequestSendRequest = class {
  constructor() {
    this["allowDecline"] = false;
    this["allowReassign"] = false;
    this["hideTextTags"] = false;
    this["isQualifiedSignature"] = false;
    this["isEid"] = false;
    this["testMode"] = false;
    this["useTextTags"] = false;
  }
  static getAttributeTypeMap() {
    return _SignatureRequestSendRequest.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "SignatureRequestSendRequest");
  }
};
var SignatureRequestSendRequest = _SignatureRequestSendRequest;
SignatureRequestSendRequest.discriminator = void 0;
SignatureRequestSendRequest.attributeTypeMap = [
  {
    name: "files",
    baseName: "files",
    type: "Array<RequestFile>"
  },
  {
    name: "fileUrls",
    baseName: "file_urls",
    type: "Array<string>"
  },
  {
    name: "signers",
    baseName: "signers",
    type: "Array<SubSignatureRequestSigner>"
  },
  {
    name: "groupedSigners",
    baseName: "grouped_signers",
    type: "Array<SubSignatureRequestGroupedSigners>"
  },
  {
    name: "allowDecline",
    baseName: "allow_decline",
    type: "boolean"
  },
  {
    name: "allowReassign",
    baseName: "allow_reassign",
    type: "boolean"
  },
  {
    name: "attachments",
    baseName: "attachments",
    type: "Array<SubAttachment>"
  },
  {
    name: "ccEmailAddresses",
    baseName: "cc_email_addresses",
    type: "Array<string>"
  },
  {
    name: "clientId",
    baseName: "client_id",
    type: "string"
  },
  {
    name: "customFields",
    baseName: "custom_fields",
    type: "Array<SubCustomField>"
  },
  {
    name: "fieldOptions",
    baseName: "field_options",
    type: "SubFieldOptions"
  },
  {
    name: "formFieldGroups",
    baseName: "form_field_groups",
    type: "Array<SubFormFieldGroup>"
  },
  {
    name: "formFieldRules",
    baseName: "form_field_rules",
    type: "Array<SubFormFieldRule>"
  },
  {
    name: "formFieldsPerDocument",
    baseName: "form_fields_per_document",
    type: "Array<SubFormFieldsPerDocumentBase>"
  },
  {
    name: "hideTextTags",
    baseName: "hide_text_tags",
    type: "boolean"
  },
  {
    name: "isQualifiedSignature",
    baseName: "is_qualified_signature",
    type: "boolean"
  },
  {
    name: "isEid",
    baseName: "is_eid",
    type: "boolean"
  },
  {
    name: "message",
    baseName: "message",
    type: "string"
  },
  {
    name: "metadata",
    baseName: "metadata",
    type: "{ [key: string]: any; }"
  },
  {
    name: "signingOptions",
    baseName: "signing_options",
    type: "SubSigningOptions"
  },
  {
    name: "signingRedirectUrl",
    baseName: "signing_redirect_url",
    type: "string"
  },
  {
    name: "subject",
    baseName: "subject",
    type: "string"
  },
  {
    name: "testMode",
    baseName: "test_mode",
    type: "boolean"
  },
  {
    name: "title",
    baseName: "title",
    type: "string"
  },
  {
    name: "useTextTags",
    baseName: "use_text_tags",
    type: "boolean"
  },
  {
    name: "expiresAt",
    baseName: "expires_at",
    type: "number"
  }
];

// model/signatureRequestSendWithTemplateRequest.ts
var _SignatureRequestSendWithTemplateRequest = class {
  constructor() {
    this["allowDecline"] = false;
    this["isQualifiedSignature"] = false;
    this["isEid"] = false;
    this["testMode"] = false;
  }
  static getAttributeTypeMap() {
    return _SignatureRequestSendWithTemplateRequest.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(
      data,
      "SignatureRequestSendWithTemplateRequest"
    );
  }
};
var SignatureRequestSendWithTemplateRequest = _SignatureRequestSendWithTemplateRequest;
SignatureRequestSendWithTemplateRequest.discriminator = void 0;
SignatureRequestSendWithTemplateRequest.attributeTypeMap = [
  {
    name: "templateIds",
    baseName: "template_ids",
    type: "Array<string>"
  },
  {
    name: "signers",
    baseName: "signers",
    type: "Array<SubSignatureRequestTemplateSigner>"
  },
  {
    name: "allowDecline",
    baseName: "allow_decline",
    type: "boolean"
  },
  {
    name: "ccs",
    baseName: "ccs",
    type: "Array<SubCC>"
  },
  {
    name: "clientId",
    baseName: "client_id",
    type: "string"
  },
  {
    name: "customFields",
    baseName: "custom_fields",
    type: "Array<SubCustomField>"
  },
  {
    name: "files",
    baseName: "files",
    type: "Array<RequestFile>"
  },
  {
    name: "fileUrls",
    baseName: "file_urls",
    type: "Array<string>"
  },
  {
    name: "isQualifiedSignature",
    baseName: "is_qualified_signature",
    type: "boolean"
  },
  {
    name: "isEid",
    baseName: "is_eid",
    type: "boolean"
  },
  {
    name: "message",
    baseName: "message",
    type: "string"
  },
  {
    name: "metadata",
    baseName: "metadata",
    type: "{ [key: string]: any; }"
  },
  {
    name: "signingOptions",
    baseName: "signing_options",
    type: "SubSigningOptions"
  },
  {
    name: "signingRedirectUrl",
    baseName: "signing_redirect_url",
    type: "string"
  },
  {
    name: "subject",
    baseName: "subject",
    type: "string"
  },
  {
    name: "testMode",
    baseName: "test_mode",
    type: "boolean"
  },
  {
    name: "title",
    baseName: "title",
    type: "string"
  }
];

// model/signatureRequestUpdateRequest.ts
var _SignatureRequestUpdateRequest = class {
  static getAttributeTypeMap() {
    return _SignatureRequestUpdateRequest.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "SignatureRequestUpdateRequest");
  }
};
var SignatureRequestUpdateRequest = _SignatureRequestUpdateRequest;
SignatureRequestUpdateRequest.discriminator = void 0;
SignatureRequestUpdateRequest.attributeTypeMap = [
  {
    name: "signatureId",
    baseName: "signature_id",
    type: "string"
  },
  {
    name: "emailAddress",
    baseName: "email_address",
    type: "string"
  },
  {
    name: "name",
    baseName: "name",
    type: "string"
  },
  {
    name: "expiresAt",
    baseName: "expires_at",
    type: "number"
  }
];

// model/subAttachment.ts
var _SubAttachment = class {
  constructor() {
    this["required"] = false;
  }
  static getAttributeTypeMap() {
    return _SubAttachment.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "SubAttachment");
  }
};
var SubAttachment = _SubAttachment;
SubAttachment.discriminator = void 0;
SubAttachment.attributeTypeMap = [
  {
    name: "name",
    baseName: "name",
    type: "string"
  },
  {
    name: "signerIndex",
    baseName: "signer_index",
    type: "number"
  },
  {
    name: "instructions",
    baseName: "instructions",
    type: "string"
  },
  {
    name: "required",
    baseName: "required",
    type: "boolean"
  }
];

// model/subBulkSignerList.ts
var _SubBulkSignerList = class {
  static getAttributeTypeMap() {
    return _SubBulkSignerList.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "SubBulkSignerList");
  }
};
var SubBulkSignerList = _SubBulkSignerList;
SubBulkSignerList.discriminator = void 0;
SubBulkSignerList.attributeTypeMap = [
  {
    name: "customFields",
    baseName: "custom_fields",
    type: "Array<SubBulkSignerListCustomField>"
  },
  {
    name: "signers",
    baseName: "signers",
    type: "Array<SubSignatureRequestTemplateSigner>"
  }
];

// model/subBulkSignerListCustomField.ts
var _SubBulkSignerListCustomField = class {
  static getAttributeTypeMap() {
    return _SubBulkSignerListCustomField.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "SubBulkSignerListCustomField");
  }
};
var SubBulkSignerListCustomField = _SubBulkSignerListCustomField;
SubBulkSignerListCustomField.discriminator = void 0;
SubBulkSignerListCustomField.attributeTypeMap = [
  {
    name: "name",
    baseName: "name",
    type: "string"
  },
  {
    name: "value",
    baseName: "value",
    type: "string"
  }
];

// model/subCC.ts
var _SubCC = class {
  static getAttributeTypeMap() {
    return _SubCC.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "SubCC");
  }
};
var SubCC = _SubCC;
SubCC.discriminator = void 0;
SubCC.attributeTypeMap = [
  {
    name: "role",
    baseName: "role",
    type: "string"
  },
  {
    name: "emailAddress",
    baseName: "email_address",
    type: "string"
  }
];

// model/subCustomField.ts
var _SubCustomField = class {
  constructor() {
    this["required"] = false;
  }
  static getAttributeTypeMap() {
    return _SubCustomField.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "SubCustomField");
  }
};
var SubCustomField = _SubCustomField;
SubCustomField.discriminator = void 0;
SubCustomField.attributeTypeMap = [
  {
    name: "name",
    baseName: "name",
    type: "string"
  },
  {
    name: "editor",
    baseName: "editor",
    type: "string"
  },
  {
    name: "required",
    baseName: "required",
    type: "boolean"
  },
  {
    name: "value",
    baseName: "value",
    type: "string"
  }
];

// model/subEditorOptions.ts
var _SubEditorOptions = class {
  constructor() {
    this["allowEditSigners"] = false;
    this["allowEditDocuments"] = false;
  }
  static getAttributeTypeMap() {
    return _SubEditorOptions.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "SubEditorOptions");
  }
};
var SubEditorOptions = _SubEditorOptions;
SubEditorOptions.discriminator = void 0;
SubEditorOptions.attributeTypeMap = [
  {
    name: "allowEditSigners",
    baseName: "allow_edit_signers",
    type: "boolean"
  },
  {
    name: "allowEditDocuments",
    baseName: "allow_edit_documents",
    type: "boolean"
  }
];

// model/subFieldOptions.ts
var _SubFieldOptions = class {
  static getAttributeTypeMap() {
    return _SubFieldOptions.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "SubFieldOptions");
  }
};
var SubFieldOptions = _SubFieldOptions;
SubFieldOptions.discriminator = void 0;
SubFieldOptions.attributeTypeMap = [
  {
    name: "dateFormat",
    baseName: "date_format",
    type: "SubFieldOptions.DateFormatEnum"
  }
];
((SubFieldOptions2) => {
  let DateFormatEnum;
  ((DateFormatEnum2) => {
    DateFormatEnum2["MMDDYYYY"] = "MM / DD / YYYY";
    DateFormatEnum2["MM_DD_YYYY"] = "MM - DD - YYYY";
    DateFormatEnum2["DDMMYYYY"] = "DD / MM / YYYY";
    DateFormatEnum2["DD_MM_YYYY"] = "DD - MM - YYYY";
    DateFormatEnum2["YYYYMMDD"] = "YYYY / MM / DD";
    DateFormatEnum2["YYYY_MM_DD"] = "YYYY - MM - DD";
  })(DateFormatEnum = SubFieldOptions2.DateFormatEnum || (SubFieldOptions2.DateFormatEnum = {}));
})(SubFieldOptions || (SubFieldOptions = {}));

// model/subFormFieldGroup.ts
var _SubFormFieldGroup = class {
  static getAttributeTypeMap() {
    return _SubFormFieldGroup.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "SubFormFieldGroup");
  }
};
var SubFormFieldGroup = _SubFormFieldGroup;
SubFormFieldGroup.discriminator = void 0;
SubFormFieldGroup.attributeTypeMap = [
  {
    name: "groupId",
    baseName: "group_id",
    type: "string"
  },
  {
    name: "groupLabel",
    baseName: "group_label",
    type: "string"
  },
  {
    name: "requirement",
    baseName: "requirement",
    type: "string"
  }
];

// model/subFormFieldRule.ts
var _SubFormFieldRule = class {
  constructor() {
    this["triggerOperator"] = "AND";
  }
  static getAttributeTypeMap() {
    return _SubFormFieldRule.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "SubFormFieldRule");
  }
};
var SubFormFieldRule = _SubFormFieldRule;
SubFormFieldRule.discriminator = void 0;
SubFormFieldRule.attributeTypeMap = [
  {
    name: "id",
    baseName: "id",
    type: "string"
  },
  {
    name: "triggerOperator",
    baseName: "trigger_operator",
    type: "string"
  },
  {
    name: "triggers",
    baseName: "triggers",
    type: "Array<SubFormFieldRuleTrigger>"
  },
  {
    name: "actions",
    baseName: "actions",
    type: "Array<SubFormFieldRuleAction>"
  }
];

// model/subFormFieldRuleAction.ts
var _SubFormFieldRuleAction = class {
  static getAttributeTypeMap() {
    return _SubFormFieldRuleAction.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "SubFormFieldRuleAction");
  }
};
var SubFormFieldRuleAction = _SubFormFieldRuleAction;
SubFormFieldRuleAction.discriminator = void 0;
SubFormFieldRuleAction.attributeTypeMap = [
  {
    name: "hidden",
    baseName: "hidden",
    type: "boolean"
  },
  {
    name: "type",
    baseName: "type",
    type: "SubFormFieldRuleAction.TypeEnum"
  },
  {
    name: "fieldId",
    baseName: "field_id",
    type: "string"
  },
  {
    name: "groupId",
    baseName: "group_id",
    type: "string"
  }
];
((SubFormFieldRuleAction2) => {
  let TypeEnum;
  ((TypeEnum2) => {
    TypeEnum2["FieldVisibility"] = "change-field-visibility";
    TypeEnum2["GroupVisibility"] = "change-group-visibility";
  })(TypeEnum = SubFormFieldRuleAction2.TypeEnum || (SubFormFieldRuleAction2.TypeEnum = {}));
})(SubFormFieldRuleAction || (SubFormFieldRuleAction = {}));

// model/subFormFieldRuleTrigger.ts
var _SubFormFieldRuleTrigger = class {
  static getAttributeTypeMap() {
    return _SubFormFieldRuleTrigger.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "SubFormFieldRuleTrigger");
  }
};
var SubFormFieldRuleTrigger = _SubFormFieldRuleTrigger;
SubFormFieldRuleTrigger.discriminator = void 0;
SubFormFieldRuleTrigger.attributeTypeMap = [
  {
    name: "id",
    baseName: "id",
    type: "string"
  },
  {
    name: "operator",
    baseName: "operator",
    type: "SubFormFieldRuleTrigger.OperatorEnum"
  },
  {
    name: "value",
    baseName: "value",
    type: "string"
  },
  {
    name: "values",
    baseName: "values",
    type: "Array<string>"
  }
];
((SubFormFieldRuleTrigger2) => {
  let OperatorEnum;
  ((OperatorEnum2) => {
    OperatorEnum2["Any"] = "any";
    OperatorEnum2["Is"] = "is";
    OperatorEnum2["Match"] = "match";
    OperatorEnum2["None"] = "none";
    OperatorEnum2["Not"] = "not";
  })(OperatorEnum = SubFormFieldRuleTrigger2.OperatorEnum || (SubFormFieldRuleTrigger2.OperatorEnum = {}));
})(SubFormFieldRuleTrigger || (SubFormFieldRuleTrigger = {}));

// model/subFormFieldsPerDocumentBase.ts
var _SubFormFieldsPerDocumentBase = class {
  static getAttributeTypeMap() {
    return _SubFormFieldsPerDocumentBase.attributeTypeMap;
  }
  static discriminatorClassName(value) {
    if (value === void 0 || value === null) {
      return null;
    }
    if (value === "checkbox") {
      return "SubFormFieldsPerDocumentCheckbox";
    }
    if (value === "checkbox-merge") {
      return "SubFormFieldsPerDocumentCheckboxMerge";
    }
    if (value === "date_signed") {
      return "SubFormFieldsPerDocumentDateSigned";
    }
    if (value === "dropdown") {
      return "SubFormFieldsPerDocumentDropdown";
    }
    if (value === "hyperlink") {
      return "SubFormFieldsPerDocumentHyperlink";
    }
    if (value === "initials") {
      return "SubFormFieldsPerDocumentInitials";
    }
    if (value === "radio") {
      return "SubFormFieldsPerDocumentRadio";
    }
    if (value === "signature") {
      return "SubFormFieldsPerDocumentSignature";
    }
    if (value === "text") {
      return "SubFormFieldsPerDocumentText";
    }
    if (value === "text-merge") {
      return "SubFormFieldsPerDocumentTextMerge";
    }
    return null;
  }
};
var SubFormFieldsPerDocumentBase = _SubFormFieldsPerDocumentBase;
SubFormFieldsPerDocumentBase.discriminator = "type";
SubFormFieldsPerDocumentBase.attributeTypeMap = [
  {
    name: "documentIndex",
    baseName: "document_index",
    type: "number"
  },
  {
    name: "apiId",
    baseName: "api_id",
    type: "string"
  },
  {
    name: "height",
    baseName: "height",
    type: "number"
  },
  {
    name: "required",
    baseName: "required",
    type: "boolean"
  },
  {
    name: "signer",
    baseName: "signer",
    type: "string"
  },
  {
    name: "type",
    baseName: "type",
    type: "string"
  },
  {
    name: "width",
    baseName: "width",
    type: "number"
  },
  {
    name: "x",
    baseName: "x",
    type: "number"
  },
  {
    name: "y",
    baseName: "y",
    type: "number"
  },
  {
    name: "name",
    baseName: "name",
    type: "string"
  },
  {
    name: "page",
    baseName: "page",
    type: "number"
  }
];

// model/subFormFieldsPerDocumentCheckbox.ts
var _SubFormFieldsPerDocumentCheckbox = class extends SubFormFieldsPerDocumentBase {
  constructor() {
    super(...arguments);
    this["type"] = "checkbox";
  }
  static getAttributeTypeMap() {
    return super.getAttributeTypeMap().concat(_SubFormFieldsPerDocumentCheckbox.attributeTypeMap);
  }
  static init(data) {
    return ObjectSerializer.deserialize(
      data,
      "SubFormFieldsPerDocumentCheckbox"
    );
  }
};
var SubFormFieldsPerDocumentCheckbox = _SubFormFieldsPerDocumentCheckbox;
SubFormFieldsPerDocumentCheckbox.discriminator = void 0;
SubFormFieldsPerDocumentCheckbox.attributeTypeMap = [
  {
    name: "type",
    baseName: "type",
    type: "string"
  },
  {
    name: "isChecked",
    baseName: "is_checked",
    type: "boolean"
  },
  {
    name: "group",
    baseName: "group",
    type: "string"
  }
];

// model/subFormFieldsPerDocumentCheckboxMerge.ts
var _SubFormFieldsPerDocumentCheckboxMerge = class extends SubFormFieldsPerDocumentBase {
  constructor() {
    super(...arguments);
    this["type"] = "checkbox-merge";
  }
  static getAttributeTypeMap() {
    return super.getAttributeTypeMap().concat(_SubFormFieldsPerDocumentCheckboxMerge.attributeTypeMap);
  }
  static init(data) {
    return ObjectSerializer.deserialize(
      data,
      "SubFormFieldsPerDocumentCheckboxMerge"
    );
  }
};
var SubFormFieldsPerDocumentCheckboxMerge = _SubFormFieldsPerDocumentCheckboxMerge;
SubFormFieldsPerDocumentCheckboxMerge.discriminator = void 0;
SubFormFieldsPerDocumentCheckboxMerge.attributeTypeMap = [
  {
    name: "type",
    baseName: "type",
    type: "string"
  }
];

// model/subFormFieldsPerDocumentDateSigned.ts
var _SubFormFieldsPerDocumentDateSigned = class extends SubFormFieldsPerDocumentBase {
  constructor() {
    super(...arguments);
    this["type"] = "date_signed";
    this["fontSize"] = 12;
  }
  static getAttributeTypeMap() {
    return super.getAttributeTypeMap().concat(_SubFormFieldsPerDocumentDateSigned.attributeTypeMap);
  }
  static init(data) {
    return ObjectSerializer.deserialize(
      data,
      "SubFormFieldsPerDocumentDateSigned"
    );
  }
};
var SubFormFieldsPerDocumentDateSigned = _SubFormFieldsPerDocumentDateSigned;
SubFormFieldsPerDocumentDateSigned.discriminator = void 0;
SubFormFieldsPerDocumentDateSigned.attributeTypeMap = [
  {
    name: "type",
    baseName: "type",
    type: "string"
  },
  {
    name: "fontFamily",
    baseName: "font_family",
    type: "SubFormFieldsPerDocumentDateSigned.FontFamilyEnum"
  },
  {
    name: "fontSize",
    baseName: "font_size",
    type: "number"
  }
];
((SubFormFieldsPerDocumentDateSigned2) => {
  let FontFamilyEnum;
  ((FontFamilyEnum2) => {
    FontFamilyEnum2["Helvetica"] = "helvetica";
    FontFamilyEnum2["Arial"] = "arial";
    FontFamilyEnum2["Courier"] = "courier";
    FontFamilyEnum2["Calibri"] = "calibri";
    FontFamilyEnum2["Cambria"] = "cambria";
    FontFamilyEnum2["Georgia"] = "georgia";
    FontFamilyEnum2["Times"] = "times";
    FontFamilyEnum2["Trebuchet"] = "trebuchet";
    FontFamilyEnum2["Verdana"] = "verdana";
    FontFamilyEnum2["Roboto"] = "roboto";
    FontFamilyEnum2["RobotoMono"] = "robotoMono";
    FontFamilyEnum2["NotoSans"] = "notoSans";
    FontFamilyEnum2["NotoSerif"] = "notoSerif";
    FontFamilyEnum2["NotoCjkJpRegular"] = "notoCJK-JP-Regular";
    FontFamilyEnum2["NotoHebrewRegular"] = "notoHebrew-Regular";
    FontFamilyEnum2["NotoSanThaiMerged"] = "notoSanThaiMerged";
  })(FontFamilyEnum = SubFormFieldsPerDocumentDateSigned2.FontFamilyEnum || (SubFormFieldsPerDocumentDateSigned2.FontFamilyEnum = {}));
})(SubFormFieldsPerDocumentDateSigned || (SubFormFieldsPerDocumentDateSigned = {}));

// model/subFormFieldsPerDocumentDropdown.ts
var _SubFormFieldsPerDocumentDropdown = class extends SubFormFieldsPerDocumentBase {
  constructor() {
    super(...arguments);
    this["type"] = "dropdown";
    this["fontSize"] = 12;
  }
  static getAttributeTypeMap() {
    return super.getAttributeTypeMap().concat(_SubFormFieldsPerDocumentDropdown.attributeTypeMap);
  }
  static init(data) {
    return ObjectSerializer.deserialize(
      data,
      "SubFormFieldsPerDocumentDropdown"
    );
  }
};
var SubFormFieldsPerDocumentDropdown = _SubFormFieldsPerDocumentDropdown;
SubFormFieldsPerDocumentDropdown.discriminator = void 0;
SubFormFieldsPerDocumentDropdown.attributeTypeMap = [
  {
    name: "type",
    baseName: "type",
    type: "string"
  },
  {
    name: "options",
    baseName: "options",
    type: "Array<string>"
  },
  {
    name: "content",
    baseName: "content",
    type: "string"
  },
  {
    name: "fontFamily",
    baseName: "font_family",
    type: "SubFormFieldsPerDocumentDropdown.FontFamilyEnum"
  },
  {
    name: "fontSize",
    baseName: "font_size",
    type: "number"
  }
];
((SubFormFieldsPerDocumentDropdown2) => {
  let FontFamilyEnum;
  ((FontFamilyEnum2) => {
    FontFamilyEnum2["Helvetica"] = "helvetica";
    FontFamilyEnum2["Arial"] = "arial";
    FontFamilyEnum2["Courier"] = "courier";
    FontFamilyEnum2["Calibri"] = "calibri";
    FontFamilyEnum2["Cambria"] = "cambria";
    FontFamilyEnum2["Georgia"] = "georgia";
    FontFamilyEnum2["Times"] = "times";
    FontFamilyEnum2["Trebuchet"] = "trebuchet";
    FontFamilyEnum2["Verdana"] = "verdana";
    FontFamilyEnum2["Roboto"] = "roboto";
    FontFamilyEnum2["RobotoMono"] = "robotoMono";
    FontFamilyEnum2["NotoSans"] = "notoSans";
    FontFamilyEnum2["NotoSerif"] = "notoSerif";
    FontFamilyEnum2["NotoCjkJpRegular"] = "notoCJK-JP-Regular";
    FontFamilyEnum2["NotoHebrewRegular"] = "notoHebrew-Regular";
    FontFamilyEnum2["NotoSanThaiMerged"] = "notoSanThaiMerged";
  })(FontFamilyEnum = SubFormFieldsPerDocumentDropdown2.FontFamilyEnum || (SubFormFieldsPerDocumentDropdown2.FontFamilyEnum = {}));
})(SubFormFieldsPerDocumentDropdown || (SubFormFieldsPerDocumentDropdown = {}));

// model/subFormFieldsPerDocumentFontEnum.ts
var SubFormFieldsPerDocumentFontEnum = /* @__PURE__ */ ((SubFormFieldsPerDocumentFontEnum2) => {
  SubFormFieldsPerDocumentFontEnum2["Helvetica"] = "helvetica";
  SubFormFieldsPerDocumentFontEnum2["Arial"] = "arial";
  SubFormFieldsPerDocumentFontEnum2["Courier"] = "courier";
  SubFormFieldsPerDocumentFontEnum2["Calibri"] = "calibri";
  SubFormFieldsPerDocumentFontEnum2["Cambria"] = "cambria";
  SubFormFieldsPerDocumentFontEnum2["Georgia"] = "georgia";
  SubFormFieldsPerDocumentFontEnum2["Times"] = "times";
  SubFormFieldsPerDocumentFontEnum2["Trebuchet"] = "trebuchet";
  SubFormFieldsPerDocumentFontEnum2["Verdana"] = "verdana";
  SubFormFieldsPerDocumentFontEnum2["Roboto"] = "roboto";
  SubFormFieldsPerDocumentFontEnum2["RobotoMono"] = "robotoMono";
  SubFormFieldsPerDocumentFontEnum2["NotoSans"] = "notoSans";
  SubFormFieldsPerDocumentFontEnum2["NotoSerif"] = "notoSerif";
  SubFormFieldsPerDocumentFontEnum2["NotoCjkJpRegular"] = "notoCJK-JP-Regular";
  SubFormFieldsPerDocumentFontEnum2["NotoHebrewRegular"] = "notoHebrew-Regular";
  SubFormFieldsPerDocumentFontEnum2["NotoSanThaiMerged"] = "notoSanThaiMerged";
  return SubFormFieldsPerDocumentFontEnum2;
})(SubFormFieldsPerDocumentFontEnum || {});

// model/subFormFieldsPerDocumentHyperlink.ts
var _SubFormFieldsPerDocumentHyperlink = class extends SubFormFieldsPerDocumentBase {
  constructor() {
    super(...arguments);
    this["type"] = "hyperlink";
    this["fontSize"] = 12;
  }
  static getAttributeTypeMap() {
    return super.getAttributeTypeMap().concat(_SubFormFieldsPerDocumentHyperlink.attributeTypeMap);
  }
  static init(data) {
    return ObjectSerializer.deserialize(
      data,
      "SubFormFieldsPerDocumentHyperlink"
    );
  }
};
var SubFormFieldsPerDocumentHyperlink = _SubFormFieldsPerDocumentHyperlink;
SubFormFieldsPerDocumentHyperlink.discriminator = void 0;
SubFormFieldsPerDocumentHyperlink.attributeTypeMap = [
  {
    name: "type",
    baseName: "type",
    type: "string"
  },
  {
    name: "content",
    baseName: "content",
    type: "string"
  },
  {
    name: "contentUrl",
    baseName: "content_url",
    type: "string"
  },
  {
    name: "fontFamily",
    baseName: "font_family",
    type: "SubFormFieldsPerDocumentHyperlink.FontFamilyEnum"
  },
  {
    name: "fontSize",
    baseName: "font_size",
    type: "number"
  }
];
((SubFormFieldsPerDocumentHyperlink2) => {
  let FontFamilyEnum;
  ((FontFamilyEnum2) => {
    FontFamilyEnum2["Helvetica"] = "helvetica";
    FontFamilyEnum2["Arial"] = "arial";
    FontFamilyEnum2["Courier"] = "courier";
    FontFamilyEnum2["Calibri"] = "calibri";
    FontFamilyEnum2["Cambria"] = "cambria";
    FontFamilyEnum2["Georgia"] = "georgia";
    FontFamilyEnum2["Times"] = "times";
    FontFamilyEnum2["Trebuchet"] = "trebuchet";
    FontFamilyEnum2["Verdana"] = "verdana";
    FontFamilyEnum2["Roboto"] = "roboto";
    FontFamilyEnum2["RobotoMono"] = "robotoMono";
    FontFamilyEnum2["NotoSans"] = "notoSans";
    FontFamilyEnum2["NotoSerif"] = "notoSerif";
    FontFamilyEnum2["NotoCjkJpRegular"] = "notoCJK-JP-Regular";
    FontFamilyEnum2["NotoHebrewRegular"] = "notoHebrew-Regular";
    FontFamilyEnum2["NotoSanThaiMerged"] = "notoSanThaiMerged";
  })(FontFamilyEnum = SubFormFieldsPerDocumentHyperlink2.FontFamilyEnum || (SubFormFieldsPerDocumentHyperlink2.FontFamilyEnum = {}));
})(SubFormFieldsPerDocumentHyperlink || (SubFormFieldsPerDocumentHyperlink = {}));

// model/subFormFieldsPerDocumentInitials.ts
var _SubFormFieldsPerDocumentInitials = class extends SubFormFieldsPerDocumentBase {
  constructor() {
    super(...arguments);
    this["type"] = "initials";
  }
  static getAttributeTypeMap() {
    return super.getAttributeTypeMap().concat(_SubFormFieldsPerDocumentInitials.attributeTypeMap);
  }
  static init(data) {
    return ObjectSerializer.deserialize(
      data,
      "SubFormFieldsPerDocumentInitials"
    );
  }
};
var SubFormFieldsPerDocumentInitials = _SubFormFieldsPerDocumentInitials;
SubFormFieldsPerDocumentInitials.discriminator = void 0;
SubFormFieldsPerDocumentInitials.attributeTypeMap = [
  {
    name: "type",
    baseName: "type",
    type: "string"
  }
];

// model/subFormFieldsPerDocumentRadio.ts
var _SubFormFieldsPerDocumentRadio = class extends SubFormFieldsPerDocumentBase {
  constructor() {
    super(...arguments);
    this["type"] = "radio";
  }
  static getAttributeTypeMap() {
    return super.getAttributeTypeMap().concat(_SubFormFieldsPerDocumentRadio.attributeTypeMap);
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "SubFormFieldsPerDocumentRadio");
  }
};
var SubFormFieldsPerDocumentRadio = _SubFormFieldsPerDocumentRadio;
SubFormFieldsPerDocumentRadio.discriminator = void 0;
SubFormFieldsPerDocumentRadio.attributeTypeMap = [
  {
    name: "type",
    baseName: "type",
    type: "string"
  },
  {
    name: "group",
    baseName: "group",
    type: "string"
  },
  {
    name: "isChecked",
    baseName: "is_checked",
    type: "boolean"
  }
];

// model/subFormFieldsPerDocumentSignature.ts
var _SubFormFieldsPerDocumentSignature = class extends SubFormFieldsPerDocumentBase {
  constructor() {
    super(...arguments);
    this["type"] = "signature";
  }
  static getAttributeTypeMap() {
    return super.getAttributeTypeMap().concat(_SubFormFieldsPerDocumentSignature.attributeTypeMap);
  }
  static init(data) {
    return ObjectSerializer.deserialize(
      data,
      "SubFormFieldsPerDocumentSignature"
    );
  }
};
var SubFormFieldsPerDocumentSignature = _SubFormFieldsPerDocumentSignature;
SubFormFieldsPerDocumentSignature.discriminator = void 0;
SubFormFieldsPerDocumentSignature.attributeTypeMap = [
  {
    name: "type",
    baseName: "type",
    type: "string"
  }
];

// model/subFormFieldsPerDocumentText.ts
var _SubFormFieldsPerDocumentText = class extends SubFormFieldsPerDocumentBase {
  constructor() {
    super(...arguments);
    this["type"] = "text";
    this["fontSize"] = 12;
  }
  static getAttributeTypeMap() {
    return super.getAttributeTypeMap().concat(_SubFormFieldsPerDocumentText.attributeTypeMap);
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "SubFormFieldsPerDocumentText");
  }
};
var SubFormFieldsPerDocumentText = _SubFormFieldsPerDocumentText;
SubFormFieldsPerDocumentText.discriminator = void 0;
SubFormFieldsPerDocumentText.attributeTypeMap = [
  {
    name: "type",
    baseName: "type",
    type: "string"
  },
  {
    name: "placeholder",
    baseName: "placeholder",
    type: "string"
  },
  {
    name: "autoFillType",
    baseName: "auto_fill_type",
    type: "string"
  },
  {
    name: "linkId",
    baseName: "link_id",
    type: "string"
  },
  {
    name: "masked",
    baseName: "masked",
    type: "boolean"
  },
  {
    name: "validationType",
    baseName: "validation_type",
    type: "SubFormFieldsPerDocumentText.ValidationTypeEnum"
  },
  {
    name: "validationCustomRegex",
    baseName: "validation_custom_regex",
    type: "string"
  },
  {
    name: "validationCustomRegexFormatLabel",
    baseName: "validation_custom_regex_format_label",
    type: "string"
  },
  {
    name: "content",
    baseName: "content",
    type: "string"
  },
  {
    name: "fontFamily",
    baseName: "font_family",
    type: "SubFormFieldsPerDocumentText.FontFamilyEnum"
  },
  {
    name: "fontSize",
    baseName: "font_size",
    type: "number"
  }
];
((SubFormFieldsPerDocumentText2) => {
  let ValidationTypeEnum;
  ((ValidationTypeEnum2) => {
    ValidationTypeEnum2["NumbersOnly"] = "numbers_only";
    ValidationTypeEnum2["LettersOnly"] = "letters_only";
    ValidationTypeEnum2["PhoneNumber"] = "phone_number";
    ValidationTypeEnum2["BankRoutingNumber"] = "bank_routing_number";
    ValidationTypeEnum2["BankAccountNumber"] = "bank_account_number";
    ValidationTypeEnum2["EmailAddress"] = "email_address";
    ValidationTypeEnum2["ZipCode"] = "zip_code";
    ValidationTypeEnum2["SocialSecurityNumber"] = "social_security_number";
    ValidationTypeEnum2["EmployerIdentificationNumber"] = "employer_identification_number";
    ValidationTypeEnum2["CustomRegex"] = "custom_regex";
  })(ValidationTypeEnum = SubFormFieldsPerDocumentText2.ValidationTypeEnum || (SubFormFieldsPerDocumentText2.ValidationTypeEnum = {}));
  let FontFamilyEnum;
  ((FontFamilyEnum2) => {
    FontFamilyEnum2["Helvetica"] = "helvetica";
    FontFamilyEnum2["Arial"] = "arial";
    FontFamilyEnum2["Courier"] = "courier";
    FontFamilyEnum2["Calibri"] = "calibri";
    FontFamilyEnum2["Cambria"] = "cambria";
    FontFamilyEnum2["Georgia"] = "georgia";
    FontFamilyEnum2["Times"] = "times";
    FontFamilyEnum2["Trebuchet"] = "trebuchet";
    FontFamilyEnum2["Verdana"] = "verdana";
    FontFamilyEnum2["Roboto"] = "roboto";
    FontFamilyEnum2["RobotoMono"] = "robotoMono";
    FontFamilyEnum2["NotoSans"] = "notoSans";
    FontFamilyEnum2["NotoSerif"] = "notoSerif";
    FontFamilyEnum2["NotoCjkJpRegular"] = "notoCJK-JP-Regular";
    FontFamilyEnum2["NotoHebrewRegular"] = "notoHebrew-Regular";
    FontFamilyEnum2["NotoSanThaiMerged"] = "notoSanThaiMerged";
  })(FontFamilyEnum = SubFormFieldsPerDocumentText2.FontFamilyEnum || (SubFormFieldsPerDocumentText2.FontFamilyEnum = {}));
})(SubFormFieldsPerDocumentText || (SubFormFieldsPerDocumentText = {}));

// model/subFormFieldsPerDocumentTextMerge.ts
var _SubFormFieldsPerDocumentTextMerge = class extends SubFormFieldsPerDocumentBase {
  constructor() {
    super(...arguments);
    this["type"] = "text-merge";
    this["fontSize"] = 12;
  }
  static getAttributeTypeMap() {
    return super.getAttributeTypeMap().concat(_SubFormFieldsPerDocumentTextMerge.attributeTypeMap);
  }
  static init(data) {
    return ObjectSerializer.deserialize(
      data,
      "SubFormFieldsPerDocumentTextMerge"
    );
  }
};
var SubFormFieldsPerDocumentTextMerge = _SubFormFieldsPerDocumentTextMerge;
SubFormFieldsPerDocumentTextMerge.discriminator = void 0;
SubFormFieldsPerDocumentTextMerge.attributeTypeMap = [
  {
    name: "type",
    baseName: "type",
    type: "string"
  },
  {
    name: "fontFamily",
    baseName: "font_family",
    type: "SubFormFieldsPerDocumentTextMerge.FontFamilyEnum"
  },
  {
    name: "fontSize",
    baseName: "font_size",
    type: "number"
  }
];
((SubFormFieldsPerDocumentTextMerge2) => {
  let FontFamilyEnum;
  ((FontFamilyEnum2) => {
    FontFamilyEnum2["Helvetica"] = "helvetica";
    FontFamilyEnum2["Arial"] = "arial";
    FontFamilyEnum2["Courier"] = "courier";
    FontFamilyEnum2["Calibri"] = "calibri";
    FontFamilyEnum2["Cambria"] = "cambria";
    FontFamilyEnum2["Georgia"] = "georgia";
    FontFamilyEnum2["Times"] = "times";
    FontFamilyEnum2["Trebuchet"] = "trebuchet";
    FontFamilyEnum2["Verdana"] = "verdana";
    FontFamilyEnum2["Roboto"] = "roboto";
    FontFamilyEnum2["RobotoMono"] = "robotoMono";
    FontFamilyEnum2["NotoSans"] = "notoSans";
    FontFamilyEnum2["NotoSerif"] = "notoSerif";
    FontFamilyEnum2["NotoCjkJpRegular"] = "notoCJK-JP-Regular";
    FontFamilyEnum2["NotoHebrewRegular"] = "notoHebrew-Regular";
    FontFamilyEnum2["NotoSanThaiMerged"] = "notoSanThaiMerged";
  })(FontFamilyEnum = SubFormFieldsPerDocumentTextMerge2.FontFamilyEnum || (SubFormFieldsPerDocumentTextMerge2.FontFamilyEnum = {}));
})(SubFormFieldsPerDocumentTextMerge || (SubFormFieldsPerDocumentTextMerge = {}));

// model/subFormFieldsPerDocumentTypeEnum.ts
var SubFormFieldsPerDocumentTypeEnum = /* @__PURE__ */ ((SubFormFieldsPerDocumentTypeEnum2) => {
  SubFormFieldsPerDocumentTypeEnum2["Checkbox"] = "checkbox";
  SubFormFieldsPerDocumentTypeEnum2["CheckboxMerge"] = "checkbox-merge";
  SubFormFieldsPerDocumentTypeEnum2["DateSigned"] = "date_signed";
  SubFormFieldsPerDocumentTypeEnum2["Dropdown"] = "dropdown";
  SubFormFieldsPerDocumentTypeEnum2["Hyperlink"] = "hyperlink";
  SubFormFieldsPerDocumentTypeEnum2["Initials"] = "initials";
  SubFormFieldsPerDocumentTypeEnum2["Signature"] = "signature";
  SubFormFieldsPerDocumentTypeEnum2["Radio"] = "radio";
  SubFormFieldsPerDocumentTypeEnum2["Text"] = "text";
  SubFormFieldsPerDocumentTypeEnum2["TextMerge"] = "text-merge";
  return SubFormFieldsPerDocumentTypeEnum2;
})(SubFormFieldsPerDocumentTypeEnum || {});

// model/subMergeField.ts
var _SubMergeField = class {
  static getAttributeTypeMap() {
    return _SubMergeField.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "SubMergeField");
  }
};
var SubMergeField = _SubMergeField;
SubMergeField.discriminator = void 0;
SubMergeField.attributeTypeMap = [
  {
    name: "name",
    baseName: "name",
    type: "string"
  },
  {
    name: "type",
    baseName: "type",
    type: "SubMergeField.TypeEnum"
  }
];
((SubMergeField2) => {
  let TypeEnum;
  ((TypeEnum2) => {
    TypeEnum2["Text"] = "text";
    TypeEnum2["Checkbox"] = "checkbox";
  })(TypeEnum = SubMergeField2.TypeEnum || (SubMergeField2.TypeEnum = {}));
})(SubMergeField || (SubMergeField = {}));

// model/subOAuth.ts
var _SubOAuth = class {
  static getAttributeTypeMap() {
    return _SubOAuth.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "SubOAuth");
  }
};
var SubOAuth = _SubOAuth;
SubOAuth.discriminator = void 0;
SubOAuth.attributeTypeMap = [
  {
    name: "callbackUrl",
    baseName: "callback_url",
    type: "string"
  },
  {
    name: "scopes",
    baseName: "scopes",
    type: "Array<SubOAuth.ScopesEnum>"
  }
];
((SubOAuth2) => {
  let ScopesEnum;
  ((ScopesEnum2) => {
    ScopesEnum2["RequestSignature"] = "request_signature";
    ScopesEnum2["BasicAccountInfo"] = "basic_account_info";
    ScopesEnum2["AccountAccess"] = "account_access";
    ScopesEnum2["SignatureRequestAccess"] = "signature_request_access";
    ScopesEnum2["TemplateAccess"] = "template_access";
    ScopesEnum2["TeamAccess"] = "team_access";
    ScopesEnum2["ApiAppAccess"] = "api_app_access";
    ScopesEnum2["Empty"] = "";
  })(ScopesEnum = SubOAuth2.ScopesEnum || (SubOAuth2.ScopesEnum = {}));
})(SubOAuth || (SubOAuth = {}));

// model/subOptions.ts
var _SubOptions = class {
  constructor() {
    this["canInsertEverywhere"] = false;
  }
  static getAttributeTypeMap() {
    return _SubOptions.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "SubOptions");
  }
};
var SubOptions = _SubOptions;
SubOptions.discriminator = void 0;
SubOptions.attributeTypeMap = [
  {
    name: "canInsertEverywhere",
    baseName: "can_insert_everywhere",
    type: "boolean"
  }
];

// model/subSignatureRequestGroupedSigners.ts
var _SubSignatureRequestGroupedSigners = class {
  static getAttributeTypeMap() {
    return _SubSignatureRequestGroupedSigners.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(
      data,
      "SubSignatureRequestGroupedSigners"
    );
  }
};
var SubSignatureRequestGroupedSigners = _SubSignatureRequestGroupedSigners;
SubSignatureRequestGroupedSigners.discriminator = void 0;
SubSignatureRequestGroupedSigners.attributeTypeMap = [
  {
    name: "group",
    baseName: "group",
    type: "string"
  },
  {
    name: "signers",
    baseName: "signers",
    type: "Array<SubSignatureRequestSigner>"
  },
  {
    name: "order",
    baseName: "order",
    type: "number"
  }
];

// model/subSignatureRequestSigner.ts
var _SubSignatureRequestSigner = class {
  static getAttributeTypeMap() {
    return _SubSignatureRequestSigner.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "SubSignatureRequestSigner");
  }
};
var SubSignatureRequestSigner = _SubSignatureRequestSigner;
SubSignatureRequestSigner.discriminator = void 0;
SubSignatureRequestSigner.attributeTypeMap = [
  {
    name: "name",
    baseName: "name",
    type: "string"
  },
  {
    name: "emailAddress",
    baseName: "email_address",
    type: "string"
  },
  {
    name: "order",
    baseName: "order",
    type: "number"
  },
  {
    name: "pin",
    baseName: "pin",
    type: "string"
  },
  {
    name: "smsPhoneNumber",
    baseName: "sms_phone_number",
    type: "string"
  },
  {
    name: "smsPhoneNumberType",
    baseName: "sms_phone_number_type",
    type: "SubSignatureRequestSigner.SmsPhoneNumberTypeEnum"
  }
];
((SubSignatureRequestSigner2) => {
  let SmsPhoneNumberTypeEnum;
  ((SmsPhoneNumberTypeEnum2) => {
    SmsPhoneNumberTypeEnum2["Authentication"] = "authentication";
    SmsPhoneNumberTypeEnum2["Delivery"] = "delivery";
  })(SmsPhoneNumberTypeEnum = SubSignatureRequestSigner2.SmsPhoneNumberTypeEnum || (SubSignatureRequestSigner2.SmsPhoneNumberTypeEnum = {}));
})(SubSignatureRequestSigner || (SubSignatureRequestSigner = {}));

// model/subSignatureRequestTemplateSigner.ts
var _SubSignatureRequestTemplateSigner = class {
  static getAttributeTypeMap() {
    return _SubSignatureRequestTemplateSigner.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(
      data,
      "SubSignatureRequestTemplateSigner"
    );
  }
};
var SubSignatureRequestTemplateSigner = _SubSignatureRequestTemplateSigner;
SubSignatureRequestTemplateSigner.discriminator = void 0;
SubSignatureRequestTemplateSigner.attributeTypeMap = [
  {
    name: "role",
    baseName: "role",
    type: "string"
  },
  {
    name: "name",
    baseName: "name",
    type: "string"
  },
  {
    name: "emailAddress",
    baseName: "email_address",
    type: "string"
  },
  {
    name: "pin",
    baseName: "pin",
    type: "string"
  },
  {
    name: "smsPhoneNumber",
    baseName: "sms_phone_number",
    type: "string"
  },
  {
    name: "smsPhoneNumberType",
    baseName: "sms_phone_number_type",
    type: "SubSignatureRequestTemplateSigner.SmsPhoneNumberTypeEnum"
  }
];
((SubSignatureRequestTemplateSigner2) => {
  let SmsPhoneNumberTypeEnum;
  ((SmsPhoneNumberTypeEnum2) => {
    SmsPhoneNumberTypeEnum2["Authentication"] = "authentication";
    SmsPhoneNumberTypeEnum2["Delivery"] = "delivery";
  })(SmsPhoneNumberTypeEnum = SubSignatureRequestTemplateSigner2.SmsPhoneNumberTypeEnum || (SubSignatureRequestTemplateSigner2.SmsPhoneNumberTypeEnum = {}));
})(SubSignatureRequestTemplateSigner || (SubSignatureRequestTemplateSigner = {}));

// model/subSigningOptions.ts
var _SubSigningOptions = class {
  constructor() {
    this["draw"] = false;
    this["phone"] = false;
    this["type"] = false;
    this["upload"] = false;
  }
  static getAttributeTypeMap() {
    return _SubSigningOptions.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "SubSigningOptions");
  }
};
var SubSigningOptions = _SubSigningOptions;
SubSigningOptions.discriminator = void 0;
SubSigningOptions.attributeTypeMap = [
  {
    name: "defaultType",
    baseName: "default_type",
    type: "SubSigningOptions.DefaultTypeEnum"
  },
  {
    name: "draw",
    baseName: "draw",
    type: "boolean"
  },
  {
    name: "phone",
    baseName: "phone",
    type: "boolean"
  },
  {
    name: "type",
    baseName: "type",
    type: "boolean"
  },
  {
    name: "upload",
    baseName: "upload",
    type: "boolean"
  }
];
((SubSigningOptions2) => {
  let DefaultTypeEnum;
  ((DefaultTypeEnum2) => {
    DefaultTypeEnum2["Draw"] = "draw";
    DefaultTypeEnum2["Phone"] = "phone";
    DefaultTypeEnum2["Type"] = "type";
    DefaultTypeEnum2["Upload"] = "upload";
  })(DefaultTypeEnum = SubSigningOptions2.DefaultTypeEnum || (SubSigningOptions2.DefaultTypeEnum = {}));
})(SubSigningOptions || (SubSigningOptions = {}));

// model/subTeamResponse.ts
var _SubTeamResponse = class {
  static getAttributeTypeMap() {
    return _SubTeamResponse.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "SubTeamResponse");
  }
};
var SubTeamResponse = _SubTeamResponse;
SubTeamResponse.discriminator = void 0;
SubTeamResponse.attributeTypeMap = [
  {
    name: "teamId",
    baseName: "team_id",
    type: "string"
  },
  {
    name: "name",
    baseName: "name",
    type: "string"
  }
];

// model/subTemplateRole.ts
var _SubTemplateRole = class {
  static getAttributeTypeMap() {
    return _SubTemplateRole.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "SubTemplateRole");
  }
};
var SubTemplateRole = _SubTemplateRole;
SubTemplateRole.discriminator = void 0;
SubTemplateRole.attributeTypeMap = [
  {
    name: "name",
    baseName: "name",
    type: "string"
  },
  {
    name: "order",
    baseName: "order",
    type: "number"
  }
];

// model/subUnclaimedDraftSigner.ts
var _SubUnclaimedDraftSigner = class {
  static getAttributeTypeMap() {
    return _SubUnclaimedDraftSigner.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "SubUnclaimedDraftSigner");
  }
};
var SubUnclaimedDraftSigner = _SubUnclaimedDraftSigner;
SubUnclaimedDraftSigner.discriminator = void 0;
SubUnclaimedDraftSigner.attributeTypeMap = [
  {
    name: "emailAddress",
    baseName: "email_address",
    type: "string"
  },
  {
    name: "name",
    baseName: "name",
    type: "string"
  },
  {
    name: "order",
    baseName: "order",
    type: "number"
  }
];

// model/subUnclaimedDraftTemplateSigner.ts
var _SubUnclaimedDraftTemplateSigner = class {
  static getAttributeTypeMap() {
    return _SubUnclaimedDraftTemplateSigner.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(
      data,
      "SubUnclaimedDraftTemplateSigner"
    );
  }
};
var SubUnclaimedDraftTemplateSigner = _SubUnclaimedDraftTemplateSigner;
SubUnclaimedDraftTemplateSigner.discriminator = void 0;
SubUnclaimedDraftTemplateSigner.attributeTypeMap = [
  {
    name: "role",
    baseName: "role",
    type: "string"
  },
  {
    name: "name",
    baseName: "name",
    type: "string"
  },
  {
    name: "emailAddress",
    baseName: "email_address",
    type: "string"
  }
];

// model/subWhiteLabelingOptions.ts
var _SubWhiteLabelingOptions = class {
  constructor() {
    this["headerBackgroundColor"] = "#1A1A1A";
    this["legalVersion"] = _SubWhiteLabelingOptions.LegalVersionEnum.Terms1;
    this["linkColor"] = "#00B3E6";
    this["pageBackgroundColor"] = "#F7F8F9";
    this["primaryButtonColor"] = "#00B3E6";
    this["primaryButtonColorHover"] = "#00B3E6";
    this["primaryButtonTextColor"] = "#FFFFFF";
    this["primaryButtonTextColorHover"] = "#FFFFFF";
    this["secondaryButtonColor"] = "#FFFFFF";
    this["secondaryButtonColorHover"] = "#FFFFFF";
    this["secondaryButtonTextColor"] = "#00B3E6";
    this["secondaryButtonTextColorHover"] = "#00B3E6";
    this["textColor1"] = "#808080";
    this["textColor2"] = "#FFFFFF";
  }
  static getAttributeTypeMap() {
    return _SubWhiteLabelingOptions.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "SubWhiteLabelingOptions");
  }
};
var SubWhiteLabelingOptions = _SubWhiteLabelingOptions;
SubWhiteLabelingOptions.discriminator = void 0;
SubWhiteLabelingOptions.attributeTypeMap = [
  {
    name: "headerBackgroundColor",
    baseName: "header_background_color",
    type: "string"
  },
  {
    name: "legalVersion",
    baseName: "legal_version",
    type: "SubWhiteLabelingOptions.LegalVersionEnum"
  },
  {
    name: "linkColor",
    baseName: "link_color",
    type: "string"
  },
  {
    name: "pageBackgroundColor",
    baseName: "page_background_color",
    type: "string"
  },
  {
    name: "primaryButtonColor",
    baseName: "primary_button_color",
    type: "string"
  },
  {
    name: "primaryButtonColorHover",
    baseName: "primary_button_color_hover",
    type: "string"
  },
  {
    name: "primaryButtonTextColor",
    baseName: "primary_button_text_color",
    type: "string"
  },
  {
    name: "primaryButtonTextColorHover",
    baseName: "primary_button_text_color_hover",
    type: "string"
  },
  {
    name: "secondaryButtonColor",
    baseName: "secondary_button_color",
    type: "string"
  },
  {
    name: "secondaryButtonColorHover",
    baseName: "secondary_button_color_hover",
    type: "string"
  },
  {
    name: "secondaryButtonTextColor",
    baseName: "secondary_button_text_color",
    type: "string"
  },
  {
    name: "secondaryButtonTextColorHover",
    baseName: "secondary_button_text_color_hover",
    type: "string"
  },
  {
    name: "textColor1",
    baseName: "text_color1",
    type: "string"
  },
  {
    name: "textColor2",
    baseName: "text_color2",
    type: "string"
  },
  {
    name: "resetToDefault",
    baseName: "reset_to_default",
    type: "boolean"
  }
];
((SubWhiteLabelingOptions2) => {
  let LegalVersionEnum;
  ((LegalVersionEnum2) => {
    LegalVersionEnum2["Terms1"] = "terms1";
    LegalVersionEnum2["Terms2"] = "terms2";
  })(LegalVersionEnum = SubWhiteLabelingOptions2.LegalVersionEnum || (SubWhiteLabelingOptions2.LegalVersionEnum = {}));
})(SubWhiteLabelingOptions || (SubWhiteLabelingOptions = {}));

// model/teamAddMemberRequest.ts
var _TeamAddMemberRequest = class {
  static getAttributeTypeMap() {
    return _TeamAddMemberRequest.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "TeamAddMemberRequest");
  }
};
var TeamAddMemberRequest = _TeamAddMemberRequest;
TeamAddMemberRequest.discriminator = void 0;
TeamAddMemberRequest.attributeTypeMap = [
  {
    name: "accountId",
    baseName: "account_id",
    type: "string"
  },
  {
    name: "emailAddress",
    baseName: "email_address",
    type: "string"
  },
  {
    name: "role",
    baseName: "role",
    type: "TeamAddMemberRequest.RoleEnum"
  }
];
((TeamAddMemberRequest2) => {
  let RoleEnum;
  ((RoleEnum2) => {
    RoleEnum2["Member"] = "Member";
    RoleEnum2["Developer"] = "Developer";
    RoleEnum2["TeamManager"] = "Team Manager";
    RoleEnum2["Admin"] = "Admin";
  })(RoleEnum = TeamAddMemberRequest2.RoleEnum || (TeamAddMemberRequest2.RoleEnum = {}));
})(TeamAddMemberRequest || (TeamAddMemberRequest = {}));

// model/teamCreateRequest.ts
var _TeamCreateRequest = class {
  constructor() {
    this["name"] = "Untitled Team";
  }
  static getAttributeTypeMap() {
    return _TeamCreateRequest.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "TeamCreateRequest");
  }
};
var TeamCreateRequest = _TeamCreateRequest;
TeamCreateRequest.discriminator = void 0;
TeamCreateRequest.attributeTypeMap = [
  {
    name: "name",
    baseName: "name",
    type: "string"
  }
];

// model/teamGetInfoResponse.ts
var _TeamGetInfoResponse = class {
  static getAttributeTypeMap() {
    return _TeamGetInfoResponse.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "TeamGetInfoResponse");
  }
};
var TeamGetInfoResponse = _TeamGetInfoResponse;
TeamGetInfoResponse.discriminator = void 0;
TeamGetInfoResponse.attributeTypeMap = [
  {
    name: "team",
    baseName: "team",
    type: "TeamInfoResponse"
  },
  {
    name: "warnings",
    baseName: "warnings",
    type: "Array<WarningResponse>"
  }
];

// model/teamGetResponse.ts
var _TeamGetResponse = class {
  static getAttributeTypeMap() {
    return _TeamGetResponse.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "TeamGetResponse");
  }
};
var TeamGetResponse = _TeamGetResponse;
TeamGetResponse.discriminator = void 0;
TeamGetResponse.attributeTypeMap = [
  {
    name: "team",
    baseName: "team",
    type: "TeamResponse"
  },
  {
    name: "warnings",
    baseName: "warnings",
    type: "Array<WarningResponse>"
  }
];

// model/teamInfoResponse.ts
var _TeamInfoResponse = class {
  static getAttributeTypeMap() {
    return _TeamInfoResponse.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "TeamInfoResponse");
  }
};
var TeamInfoResponse = _TeamInfoResponse;
TeamInfoResponse.discriminator = void 0;
TeamInfoResponse.attributeTypeMap = [
  {
    name: "teamId",
    baseName: "team_id",
    type: "string"
  },
  {
    name: "teamParent",
    baseName: "team_parent",
    type: "TeamParentResponse"
  },
  {
    name: "name",
    baseName: "name",
    type: "string"
  },
  {
    name: "numMembers",
    baseName: "num_members",
    type: "number"
  },
  {
    name: "numSubTeams",
    baseName: "num_sub_teams",
    type: "number"
  }
];

// model/teamInviteResponse.ts
var _TeamInviteResponse = class {
  static getAttributeTypeMap() {
    return _TeamInviteResponse.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "TeamInviteResponse");
  }
};
var TeamInviteResponse = _TeamInviteResponse;
TeamInviteResponse.discriminator = void 0;
TeamInviteResponse.attributeTypeMap = [
  {
    name: "emailAddress",
    baseName: "email_address",
    type: "string"
  },
  {
    name: "teamId",
    baseName: "team_id",
    type: "string"
  },
  {
    name: "role",
    baseName: "role",
    type: "string"
  },
  {
    name: "sentAt",
    baseName: "sent_at",
    type: "number"
  },
  {
    name: "redeemedAt",
    baseName: "redeemed_at",
    type: "number"
  },
  {
    name: "expiresAt",
    baseName: "expires_at",
    type: "number"
  }
];

// model/teamInvitesResponse.ts
var _TeamInvitesResponse = class {
  static getAttributeTypeMap() {
    return _TeamInvitesResponse.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "TeamInvitesResponse");
  }
};
var TeamInvitesResponse = _TeamInvitesResponse;
TeamInvitesResponse.discriminator = void 0;
TeamInvitesResponse.attributeTypeMap = [
  {
    name: "teamInvites",
    baseName: "team_invites",
    type: "Array<TeamInviteResponse>"
  },
  {
    name: "warnings",
    baseName: "warnings",
    type: "Array<WarningResponse>"
  }
];

// model/teamMemberResponse.ts
var _TeamMemberResponse = class {
  static getAttributeTypeMap() {
    return _TeamMemberResponse.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "TeamMemberResponse");
  }
};
var TeamMemberResponse = _TeamMemberResponse;
TeamMemberResponse.discriminator = void 0;
TeamMemberResponse.attributeTypeMap = [
  {
    name: "accountId",
    baseName: "account_id",
    type: "string"
  },
  {
    name: "emailAddress",
    baseName: "email_address",
    type: "string"
  },
  {
    name: "role",
    baseName: "role",
    type: "string"
  }
];

// model/teamMembersResponse.ts
var _TeamMembersResponse = class {
  static getAttributeTypeMap() {
    return _TeamMembersResponse.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "TeamMembersResponse");
  }
};
var TeamMembersResponse = _TeamMembersResponse;
TeamMembersResponse.discriminator = void 0;
TeamMembersResponse.attributeTypeMap = [
  {
    name: "teamMembers",
    baseName: "team_members",
    type: "Array<TeamMemberResponse>"
  },
  {
    name: "listInfo",
    baseName: "list_info",
    type: "ListInfoResponse"
  },
  {
    name: "warnings",
    baseName: "warnings",
    type: "Array<WarningResponse>"
  }
];

// model/teamParentResponse.ts
var _TeamParentResponse = class {
  static getAttributeTypeMap() {
    return _TeamParentResponse.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "TeamParentResponse");
  }
};
var TeamParentResponse = _TeamParentResponse;
TeamParentResponse.discriminator = void 0;
TeamParentResponse.attributeTypeMap = [
  {
    name: "teamId",
    baseName: "team_id",
    type: "string"
  },
  {
    name: "name",
    baseName: "name",
    type: "string"
  }
];

// model/teamRemoveMemberRequest.ts
var _TeamRemoveMemberRequest = class {
  static getAttributeTypeMap() {
    return _TeamRemoveMemberRequest.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "TeamRemoveMemberRequest");
  }
};
var TeamRemoveMemberRequest = _TeamRemoveMemberRequest;
TeamRemoveMemberRequest.discriminator = void 0;
TeamRemoveMemberRequest.attributeTypeMap = [
  {
    name: "accountId",
    baseName: "account_id",
    type: "string"
  },
  {
    name: "emailAddress",
    baseName: "email_address",
    type: "string"
  },
  {
    name: "newOwnerEmailAddress",
    baseName: "new_owner_email_address",
    type: "string"
  },
  {
    name: "newTeamId",
    baseName: "new_team_id",
    type: "string"
  },
  {
    name: "newRole",
    baseName: "new_role",
    type: "TeamRemoveMemberRequest.NewRoleEnum"
  }
];
((TeamRemoveMemberRequest2) => {
  let NewRoleEnum;
  ((NewRoleEnum2) => {
    NewRoleEnum2["Member"] = "Member";
    NewRoleEnum2["Developer"] = "Developer";
    NewRoleEnum2["TeamManager"] = "Team Manager";
    NewRoleEnum2["Admin"] = "Admin";
  })(NewRoleEnum = TeamRemoveMemberRequest2.NewRoleEnum || (TeamRemoveMemberRequest2.NewRoleEnum = {}));
})(TeamRemoveMemberRequest || (TeamRemoveMemberRequest = {}));

// model/teamResponse.ts
var _TeamResponse = class {
  static getAttributeTypeMap() {
    return _TeamResponse.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "TeamResponse");
  }
};
var TeamResponse = _TeamResponse;
TeamResponse.discriminator = void 0;
TeamResponse.attributeTypeMap = [
  {
    name: "name",
    baseName: "name",
    type: "string"
  },
  {
    name: "accounts",
    baseName: "accounts",
    type: "Array<AccountResponse>"
  },
  {
    name: "invitedAccounts",
    baseName: "invited_accounts",
    type: "Array<AccountResponse>"
  },
  {
    name: "invitedEmails",
    baseName: "invited_emails",
    type: "Array<string>"
  }
];

// model/teamSubTeamsResponse.ts
var _TeamSubTeamsResponse = class {
  static getAttributeTypeMap() {
    return _TeamSubTeamsResponse.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "TeamSubTeamsResponse");
  }
};
var TeamSubTeamsResponse = _TeamSubTeamsResponse;
TeamSubTeamsResponse.discriminator = void 0;
TeamSubTeamsResponse.attributeTypeMap = [
  {
    name: "subTeams",
    baseName: "sub_teams",
    type: "Array<SubTeamResponse>"
  },
  {
    name: "listInfo",
    baseName: "list_info",
    type: "ListInfoResponse"
  },
  {
    name: "warnings",
    baseName: "warnings",
    type: "Array<WarningResponse>"
  }
];

// model/teamUpdateRequest.ts
var _TeamUpdateRequest = class {
  static getAttributeTypeMap() {
    return _TeamUpdateRequest.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "TeamUpdateRequest");
  }
};
var TeamUpdateRequest = _TeamUpdateRequest;
TeamUpdateRequest.discriminator = void 0;
TeamUpdateRequest.attributeTypeMap = [
  {
    name: "name",
    baseName: "name",
    type: "string"
  }
];

// model/templateAddUserRequest.ts
var _TemplateAddUserRequest = class {
  constructor() {
    this["skipNotification"] = false;
  }
  static getAttributeTypeMap() {
    return _TemplateAddUserRequest.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "TemplateAddUserRequest");
  }
};
var TemplateAddUserRequest = _TemplateAddUserRequest;
TemplateAddUserRequest.discriminator = void 0;
TemplateAddUserRequest.attributeTypeMap = [
  {
    name: "accountId",
    baseName: "account_id",
    type: "string"
  },
  {
    name: "emailAddress",
    baseName: "email_address",
    type: "string"
  },
  {
    name: "skipNotification",
    baseName: "skip_notification",
    type: "boolean"
  }
];

// model/templateCreateEmbeddedDraftRequest.ts
var _TemplateCreateEmbeddedDraftRequest = class {
  constructor() {
    this["allowCcs"] = true;
    this["allowReassign"] = false;
    this["forceSignerRoles"] = false;
    this["forceSubjectMessage"] = false;
    this["showPreview"] = false;
    this["showProgressStepper"] = true;
    this["skipMeNow"] = false;
    this["testMode"] = false;
    this["usePreexistingFields"] = false;
  }
  static getAttributeTypeMap() {
    return _TemplateCreateEmbeddedDraftRequest.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(
      data,
      "TemplateCreateEmbeddedDraftRequest"
    );
  }
};
var TemplateCreateEmbeddedDraftRequest = _TemplateCreateEmbeddedDraftRequest;
TemplateCreateEmbeddedDraftRequest.discriminator = void 0;
TemplateCreateEmbeddedDraftRequest.attributeTypeMap = [
  {
    name: "clientId",
    baseName: "client_id",
    type: "string"
  },
  {
    name: "files",
    baseName: "files",
    type: "Array<RequestFile>"
  },
  {
    name: "fileUrls",
    baseName: "file_urls",
    type: "Array<string>"
  },
  {
    name: "allowCcs",
    baseName: "allow_ccs",
    type: "boolean"
  },
  {
    name: "allowReassign",
    baseName: "allow_reassign",
    type: "boolean"
  },
  {
    name: "attachments",
    baseName: "attachments",
    type: "Array<SubAttachment>"
  },
  {
    name: "ccRoles",
    baseName: "cc_roles",
    type: "Array<string>"
  },
  {
    name: "editorOptions",
    baseName: "editor_options",
    type: "SubEditorOptions"
  },
  {
    name: "fieldOptions",
    baseName: "field_options",
    type: "SubFieldOptions"
  },
  {
    name: "forceSignerRoles",
    baseName: "force_signer_roles",
    type: "boolean"
  },
  {
    name: "forceSubjectMessage",
    baseName: "force_subject_message",
    type: "boolean"
  },
  {
    name: "formFieldGroups",
    baseName: "form_field_groups",
    type: "Array<SubFormFieldGroup>"
  },
  {
    name: "formFieldRules",
    baseName: "form_field_rules",
    type: "Array<SubFormFieldRule>"
  },
  {
    name: "formFieldsPerDocument",
    baseName: "form_fields_per_document",
    type: "Array<SubFormFieldsPerDocumentBase>"
  },
  {
    name: "mergeFields",
    baseName: "merge_fields",
    type: "Array<SubMergeField>"
  },
  {
    name: "message",
    baseName: "message",
    type: "string"
  },
  {
    name: "metadata",
    baseName: "metadata",
    type: "{ [key: string]: any; }"
  },
  {
    name: "showPreview",
    baseName: "show_preview",
    type: "boolean"
  },
  {
    name: "showProgressStepper",
    baseName: "show_progress_stepper",
    type: "boolean"
  },
  {
    name: "signerRoles",
    baseName: "signer_roles",
    type: "Array<SubTemplateRole>"
  },
  {
    name: "skipMeNow",
    baseName: "skip_me_now",
    type: "boolean"
  },
  {
    name: "subject",
    baseName: "subject",
    type: "string"
  },
  {
    name: "testMode",
    baseName: "test_mode",
    type: "boolean"
  },
  {
    name: "title",
    baseName: "title",
    type: "string"
  },
  {
    name: "usePreexistingFields",
    baseName: "use_preexisting_fields",
    type: "boolean"
  }
];

// model/templateCreateEmbeddedDraftResponse.ts
var _TemplateCreateEmbeddedDraftResponse = class {
  static getAttributeTypeMap() {
    return _TemplateCreateEmbeddedDraftResponse.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(
      data,
      "TemplateCreateEmbeddedDraftResponse"
    );
  }
};
var TemplateCreateEmbeddedDraftResponse = _TemplateCreateEmbeddedDraftResponse;
TemplateCreateEmbeddedDraftResponse.discriminator = void 0;
TemplateCreateEmbeddedDraftResponse.attributeTypeMap = [
  {
    name: "template",
    baseName: "template",
    type: "TemplateCreateEmbeddedDraftResponseTemplate"
  },
  {
    name: "warnings",
    baseName: "warnings",
    type: "Array<WarningResponse>"
  }
];

// model/templateCreateEmbeddedDraftResponseTemplate.ts
var _TemplateCreateEmbeddedDraftResponseTemplate = class {
  static getAttributeTypeMap() {
    return _TemplateCreateEmbeddedDraftResponseTemplate.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(
      data,
      "TemplateCreateEmbeddedDraftResponseTemplate"
    );
  }
};
var TemplateCreateEmbeddedDraftResponseTemplate = _TemplateCreateEmbeddedDraftResponseTemplate;
TemplateCreateEmbeddedDraftResponseTemplate.discriminator = void 0;
TemplateCreateEmbeddedDraftResponseTemplate.attributeTypeMap = [
  {
    name: "templateId",
    baseName: "template_id",
    type: "string"
  },
  {
    name: "editUrl",
    baseName: "edit_url",
    type: "string"
  },
  {
    name: "expiresAt",
    baseName: "expires_at",
    type: "number"
  },
  {
    name: "warnings",
    baseName: "warnings",
    type: "Array<WarningResponse>"
  }
];

// model/templateCreateRequest.ts
var _TemplateCreateRequest = class {
  constructor() {
    this["allowReassign"] = false;
    this["testMode"] = false;
    this["usePreexistingFields"] = false;
  }
  static getAttributeTypeMap() {
    return _TemplateCreateRequest.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "TemplateCreateRequest");
  }
};
var TemplateCreateRequest = _TemplateCreateRequest;
TemplateCreateRequest.discriminator = void 0;
TemplateCreateRequest.attributeTypeMap = [
  {
    name: "formFieldsPerDocument",
    baseName: "form_fields_per_document",
    type: "Array<SubFormFieldsPerDocumentBase>"
  },
  {
    name: "signerRoles",
    baseName: "signer_roles",
    type: "Array<SubTemplateRole>"
  },
  {
    name: "files",
    baseName: "files",
    type: "Array<RequestFile>"
  },
  {
    name: "fileUrls",
    baseName: "file_urls",
    type: "Array<string>"
  },
  {
    name: "allowReassign",
    baseName: "allow_reassign",
    type: "boolean"
  },
  {
    name: "attachments",
    baseName: "attachments",
    type: "Array<SubAttachment>"
  },
  {
    name: "ccRoles",
    baseName: "cc_roles",
    type: "Array<string>"
  },
  {
    name: "clientId",
    baseName: "client_id",
    type: "string"
  },
  {
    name: "fieldOptions",
    baseName: "field_options",
    type: "SubFieldOptions"
  },
  {
    name: "formFieldGroups",
    baseName: "form_field_groups",
    type: "Array<SubFormFieldGroup>"
  },
  {
    name: "formFieldRules",
    baseName: "form_field_rules",
    type: "Array<SubFormFieldRule>"
  },
  {
    name: "mergeFields",
    baseName: "merge_fields",
    type: "Array<SubMergeField>"
  },
  {
    name: "message",
    baseName: "message",
    type: "string"
  },
  {
    name: "metadata",
    baseName: "metadata",
    type: "{ [key: string]: any; }"
  },
  {
    name: "subject",
    baseName: "subject",
    type: "string"
  },
  {
    name: "testMode",
    baseName: "test_mode",
    type: "boolean"
  },
  {
    name: "title",
    baseName: "title",
    type: "string"
  },
  {
    name: "usePreexistingFields",
    baseName: "use_preexisting_fields",
    type: "boolean"
  }
];

// model/templateCreateResponse.ts
var _TemplateCreateResponse = class {
  static getAttributeTypeMap() {
    return _TemplateCreateResponse.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "TemplateCreateResponse");
  }
};
var TemplateCreateResponse = _TemplateCreateResponse;
TemplateCreateResponse.discriminator = void 0;
TemplateCreateResponse.attributeTypeMap = [
  {
    name: "template",
    baseName: "template",
    type: "TemplateCreateResponseTemplate"
  },
  {
    name: "warnings",
    baseName: "warnings",
    type: "Array<WarningResponse>"
  }
];

// model/templateCreateResponseTemplate.ts
var _TemplateCreateResponseTemplate = class {
  static getAttributeTypeMap() {
    return _TemplateCreateResponseTemplate.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "TemplateCreateResponseTemplate");
  }
};
var TemplateCreateResponseTemplate = _TemplateCreateResponseTemplate;
TemplateCreateResponseTemplate.discriminator = void 0;
TemplateCreateResponseTemplate.attributeTypeMap = [
  {
    name: "templateId",
    baseName: "template_id",
    type: "string"
  }
];

// model/templateEditResponse.ts
var _TemplateEditResponse = class {
  static getAttributeTypeMap() {
    return _TemplateEditResponse.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "TemplateEditResponse");
  }
};
var TemplateEditResponse = _TemplateEditResponse;
TemplateEditResponse.discriminator = void 0;
TemplateEditResponse.attributeTypeMap = [
  {
    name: "templateId",
    baseName: "template_id",
    type: "string"
  }
];

// model/templateGetResponse.ts
var _TemplateGetResponse = class {
  static getAttributeTypeMap() {
    return _TemplateGetResponse.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "TemplateGetResponse");
  }
};
var TemplateGetResponse = _TemplateGetResponse;
TemplateGetResponse.discriminator = void 0;
TemplateGetResponse.attributeTypeMap = [
  {
    name: "template",
    baseName: "template",
    type: "TemplateResponse"
  },
  {
    name: "warnings",
    baseName: "warnings",
    type: "Array<WarningResponse>"
  }
];

// model/templateListResponse.ts
var _TemplateListResponse = class {
  static getAttributeTypeMap() {
    return _TemplateListResponse.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "TemplateListResponse");
  }
};
var TemplateListResponse = _TemplateListResponse;
TemplateListResponse.discriminator = void 0;
TemplateListResponse.attributeTypeMap = [
  {
    name: "templates",
    baseName: "templates",
    type: "Array<TemplateResponse>"
  },
  {
    name: "listInfo",
    baseName: "list_info",
    type: "ListInfoResponse"
  },
  {
    name: "warnings",
    baseName: "warnings",
    type: "Array<WarningResponse>"
  }
];

// model/templateRemoveUserRequest.ts
var _TemplateRemoveUserRequest = class {
  static getAttributeTypeMap() {
    return _TemplateRemoveUserRequest.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "TemplateRemoveUserRequest");
  }
};
var TemplateRemoveUserRequest = _TemplateRemoveUserRequest;
TemplateRemoveUserRequest.discriminator = void 0;
TemplateRemoveUserRequest.attributeTypeMap = [
  {
    name: "accountId",
    baseName: "account_id",
    type: "string"
  },
  {
    name: "emailAddress",
    baseName: "email_address",
    type: "string"
  }
];

// model/templateResponse.ts
var _TemplateResponse = class {
  static getAttributeTypeMap() {
    return _TemplateResponse.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "TemplateResponse");
  }
};
var TemplateResponse = _TemplateResponse;
TemplateResponse.discriminator = void 0;
TemplateResponse.attributeTypeMap = [
  {
    name: "templateId",
    baseName: "template_id",
    type: "string"
  },
  {
    name: "title",
    baseName: "title",
    type: "string"
  },
  {
    name: "message",
    baseName: "message",
    type: "string"
  },
  {
    name: "updatedAt",
    baseName: "updated_at",
    type: "number"
  },
  {
    name: "isEmbedded",
    baseName: "is_embedded",
    type: "boolean"
  },
  {
    name: "isCreator",
    baseName: "is_creator",
    type: "boolean"
  },
  {
    name: "canEdit",
    baseName: "can_edit",
    type: "boolean"
  },
  {
    name: "isLocked",
    baseName: "is_locked",
    type: "boolean"
  },
  {
    name: "metadata",
    baseName: "metadata",
    type: "object"
  },
  {
    name: "signerRoles",
    baseName: "signer_roles",
    type: "Array<TemplateResponseSignerRole>"
  },
  {
    name: "ccRoles",
    baseName: "cc_roles",
    type: "Array<TemplateResponseCCRole>"
  },
  {
    name: "documents",
    baseName: "documents",
    type: "Array<TemplateResponseDocument>"
  },
  {
    name: "customFields",
    baseName: "custom_fields",
    type: "Array<TemplateResponseDocumentCustomFieldBase>"
  },
  {
    name: "namedFormFields",
    baseName: "named_form_fields",
    type: "Array<TemplateResponseDocumentFormFieldBase>"
  },
  {
    name: "accounts",
    baseName: "accounts",
    type: "Array<TemplateResponseAccount>"
  }
];

// model/templateResponseAccount.ts
var _TemplateResponseAccount = class {
  static getAttributeTypeMap() {
    return _TemplateResponseAccount.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "TemplateResponseAccount");
  }
};
var TemplateResponseAccount = _TemplateResponseAccount;
TemplateResponseAccount.discriminator = void 0;
TemplateResponseAccount.attributeTypeMap = [
  {
    name: "accountId",
    baseName: "account_id",
    type: "string"
  },
  {
    name: "emailAddress",
    baseName: "email_address",
    type: "string"
  },
  {
    name: "isLocked",
    baseName: "is_locked",
    type: "boolean"
  },
  {
    name: "isPaidHs",
    baseName: "is_paid_hs",
    type: "boolean"
  },
  {
    name: "isPaidHf",
    baseName: "is_paid_hf",
    type: "boolean"
  },
  {
    name: "quotas",
    baseName: "quotas",
    type: "TemplateResponseAccountQuota"
  }
];

// model/templateResponseAccountQuota.ts
var _TemplateResponseAccountQuota = class {
  static getAttributeTypeMap() {
    return _TemplateResponseAccountQuota.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "TemplateResponseAccountQuota");
  }
};
var TemplateResponseAccountQuota = _TemplateResponseAccountQuota;
TemplateResponseAccountQuota.discriminator = void 0;
TemplateResponseAccountQuota.attributeTypeMap = [
  {
    name: "templatesLeft",
    baseName: "templates_left",
    type: "number"
  },
  {
    name: "apiSignatureRequestsLeft",
    baseName: "api_signature_requests_left",
    type: "number"
  },
  {
    name: "documentsLeft",
    baseName: "documents_left",
    type: "number"
  },
  {
    name: "smsVerificationsLeft",
    baseName: "sms_verifications_left",
    type: "number"
  }
];

// model/templateResponseCCRole.ts
var _TemplateResponseCCRole = class {
  static getAttributeTypeMap() {
    return _TemplateResponseCCRole.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "TemplateResponseCCRole");
  }
};
var TemplateResponseCCRole = _TemplateResponseCCRole;
TemplateResponseCCRole.discriminator = void 0;
TemplateResponseCCRole.attributeTypeMap = [
  {
    name: "name",
    baseName: "name",
    type: "string"
  }
];

// model/templateResponseDocument.ts
var _TemplateResponseDocument = class {
  static getAttributeTypeMap() {
    return _TemplateResponseDocument.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "TemplateResponseDocument");
  }
};
var TemplateResponseDocument = _TemplateResponseDocument;
TemplateResponseDocument.discriminator = void 0;
TemplateResponseDocument.attributeTypeMap = [
  {
    name: "name",
    baseName: "name",
    type: "string"
  },
  {
    name: "index",
    baseName: "index",
    type: "number"
  },
  {
    name: "fieldGroups",
    baseName: "field_groups",
    type: "Array<TemplateResponseDocumentFieldGroup>"
  },
  {
    name: "formFields",
    baseName: "form_fields",
    type: "Array<TemplateResponseDocumentFormFieldBase>"
  },
  {
    name: "customFields",
    baseName: "custom_fields",
    type: "Array<TemplateResponseDocumentCustomFieldBase>"
  },
  {
    name: "staticFields",
    baseName: "static_fields",
    type: "Array<TemplateResponseDocumentStaticFieldBase>"
  }
];

// model/templateResponseDocumentCustomFieldBase.ts
var _TemplateResponseDocumentCustomFieldBase = class {
  static getAttributeTypeMap() {
    return _TemplateResponseDocumentCustomFieldBase.attributeTypeMap;
  }
  static discriminatorClassName(value) {
    if (value === void 0 || value === null) {
      return null;
    }
    if (value === "checkbox") {
      return "TemplateResponseDocumentCustomFieldCheckbox";
    }
    if (value === "text") {
      return "TemplateResponseDocumentCustomFieldText";
    }
    return null;
  }
};
var TemplateResponseDocumentCustomFieldBase = _TemplateResponseDocumentCustomFieldBase;
TemplateResponseDocumentCustomFieldBase.discriminator = "type";
TemplateResponseDocumentCustomFieldBase.attributeTypeMap = [
  {
    name: "type",
    baseName: "type",
    type: "string"
  },
  {
    name: "apiId",
    baseName: "api_id",
    type: "string"
  },
  {
    name: "name",
    baseName: "name",
    type: "string"
  },
  {
    name: "signer",
    baseName: "signer",
    type: "string"
  },
  {
    name: "x",
    baseName: "x",
    type: "number"
  },
  {
    name: "y",
    baseName: "y",
    type: "number"
  },
  {
    name: "width",
    baseName: "width",
    type: "number"
  },
  {
    name: "height",
    baseName: "height",
    type: "number"
  },
  {
    name: "required",
    baseName: "required",
    type: "boolean"
  },
  {
    name: "group",
    baseName: "group",
    type: "string"
  }
];

// model/templateResponseDocumentCustomFieldCheckbox.ts
var _TemplateResponseDocumentCustomFieldCheckbox = class extends TemplateResponseDocumentCustomFieldBase {
  constructor() {
    super(...arguments);
    this["type"] = "checkbox";
  }
  static getAttributeTypeMap() {
    return super.getAttributeTypeMap().concat(_TemplateResponseDocumentCustomFieldCheckbox.attributeTypeMap);
  }
  static init(data) {
    return ObjectSerializer.deserialize(
      data,
      "TemplateResponseDocumentCustomFieldCheckbox"
    );
  }
};
var TemplateResponseDocumentCustomFieldCheckbox = _TemplateResponseDocumentCustomFieldCheckbox;
TemplateResponseDocumentCustomFieldCheckbox.discriminator = void 0;
TemplateResponseDocumentCustomFieldCheckbox.attributeTypeMap = [
  {
    name: "type",
    baseName: "type",
    type: "string"
  }
];

// model/templateResponseDocumentCustomFieldText.ts
var _TemplateResponseDocumentCustomFieldText = class extends TemplateResponseDocumentCustomFieldBase {
  constructor() {
    super(...arguments);
    this["type"] = "text";
  }
  static getAttributeTypeMap() {
    return super.getAttributeTypeMap().concat(_TemplateResponseDocumentCustomFieldText.attributeTypeMap);
  }
  static init(data) {
    return ObjectSerializer.deserialize(
      data,
      "TemplateResponseDocumentCustomFieldText"
    );
  }
};
var TemplateResponseDocumentCustomFieldText = _TemplateResponseDocumentCustomFieldText;
TemplateResponseDocumentCustomFieldText.discriminator = void 0;
TemplateResponseDocumentCustomFieldText.attributeTypeMap = [
  {
    name: "type",
    baseName: "type",
    type: "string"
  },
  {
    name: "avgTextLength",
    baseName: "avg_text_length",
    type: "TemplateResponseFieldAvgTextLength"
  },
  {
    name: "isMultiline",
    baseName: "isMultiline",
    type: "boolean"
  },
  {
    name: "originalFontSize",
    baseName: "originalFontSize",
    type: "number"
  },
  {
    name: "fontFamily",
    baseName: "fontFamily",
    type: "string"
  }
];

// model/templateResponseDocumentFieldGroup.ts
var _TemplateResponseDocumentFieldGroup = class {
  static getAttributeTypeMap() {
    return _TemplateResponseDocumentFieldGroup.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(
      data,
      "TemplateResponseDocumentFieldGroup"
    );
  }
};
var TemplateResponseDocumentFieldGroup = _TemplateResponseDocumentFieldGroup;
TemplateResponseDocumentFieldGroup.discriminator = void 0;
TemplateResponseDocumentFieldGroup.attributeTypeMap = [
  {
    name: "name",
    baseName: "name",
    type: "string"
  },
  {
    name: "rule",
    baseName: "rule",
    type: "TemplateResponseDocumentFieldGroupRule"
  }
];

// model/templateResponseDocumentFieldGroupRule.ts
var _TemplateResponseDocumentFieldGroupRule = class {
  static getAttributeTypeMap() {
    return _TemplateResponseDocumentFieldGroupRule.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(
      data,
      "TemplateResponseDocumentFieldGroupRule"
    );
  }
};
var TemplateResponseDocumentFieldGroupRule = _TemplateResponseDocumentFieldGroupRule;
TemplateResponseDocumentFieldGroupRule.discriminator = void 0;
TemplateResponseDocumentFieldGroupRule.attributeTypeMap = [
  {
    name: "requirement",
    baseName: "requirement",
    type: "string"
  },
  {
    name: "groupLabel",
    baseName: "groupLabel",
    type: "string"
  }
];

// model/templateResponseDocumentFormFieldBase.ts
var _TemplateResponseDocumentFormFieldBase = class {
  static getAttributeTypeMap() {
    return _TemplateResponseDocumentFormFieldBase.attributeTypeMap;
  }
  static discriminatorClassName(value) {
    if (value === void 0 || value === null) {
      return null;
    }
    if (value === "checkbox") {
      return "TemplateResponseDocumentFormFieldCheckbox";
    }
    if (value === "date_signed") {
      return "TemplateResponseDocumentFormFieldDateSigned";
    }
    if (value === "dropdown") {
      return "TemplateResponseDocumentFormFieldDropdown";
    }
    if (value === "hyperlink") {
      return "TemplateResponseDocumentFormFieldHyperlink";
    }
    if (value === "initials") {
      return "TemplateResponseDocumentFormFieldInitials";
    }
    if (value === "radio") {
      return "TemplateResponseDocumentFormFieldRadio";
    }
    if (value === "signature") {
      return "TemplateResponseDocumentFormFieldSignature";
    }
    if (value === "text") {
      return "TemplateResponseDocumentFormFieldText";
    }
    return null;
  }
};
var TemplateResponseDocumentFormFieldBase = _TemplateResponseDocumentFormFieldBase;
TemplateResponseDocumentFormFieldBase.discriminator = "type";
TemplateResponseDocumentFormFieldBase.attributeTypeMap = [
  {
    name: "type",
    baseName: "type",
    type: "string"
  },
  {
    name: "apiId",
    baseName: "api_id",
    type: "string"
  },
  {
    name: "name",
    baseName: "name",
    type: "string"
  },
  {
    name: "signer",
    baseName: "signer",
    type: "string"
  },
  {
    name: "x",
    baseName: "x",
    type: "number"
  },
  {
    name: "y",
    baseName: "y",
    type: "number"
  },
  {
    name: "width",
    baseName: "width",
    type: "number"
  },
  {
    name: "height",
    baseName: "height",
    type: "number"
  },
  {
    name: "required",
    baseName: "required",
    type: "boolean"
  },
  {
    name: "group",
    baseName: "group",
    type: "string"
  }
];

// model/templateResponseDocumentFormFieldCheckbox.ts
var _TemplateResponseDocumentFormFieldCheckbox = class extends TemplateResponseDocumentFormFieldBase {
  constructor() {
    super(...arguments);
    this["type"] = "checkbox";
  }
  static getAttributeTypeMap() {
    return super.getAttributeTypeMap().concat(_TemplateResponseDocumentFormFieldCheckbox.attributeTypeMap);
  }
  static init(data) {
    return ObjectSerializer.deserialize(
      data,
      "TemplateResponseDocumentFormFieldCheckbox"
    );
  }
};
var TemplateResponseDocumentFormFieldCheckbox = _TemplateResponseDocumentFormFieldCheckbox;
TemplateResponseDocumentFormFieldCheckbox.discriminator = void 0;
TemplateResponseDocumentFormFieldCheckbox.attributeTypeMap = [
  {
    name: "type",
    baseName: "type",
    type: "string"
  }
];

// model/templateResponseDocumentFormFieldDateSigned.ts
var _TemplateResponseDocumentFormFieldDateSigned = class extends TemplateResponseDocumentFormFieldBase {
  constructor() {
    super(...arguments);
    this["type"] = "date_signed";
  }
  static getAttributeTypeMap() {
    return super.getAttributeTypeMap().concat(_TemplateResponseDocumentFormFieldDateSigned.attributeTypeMap);
  }
  static init(data) {
    return ObjectSerializer.deserialize(
      data,
      "TemplateResponseDocumentFormFieldDateSigned"
    );
  }
};
var TemplateResponseDocumentFormFieldDateSigned = _TemplateResponseDocumentFormFieldDateSigned;
TemplateResponseDocumentFormFieldDateSigned.discriminator = void 0;
TemplateResponseDocumentFormFieldDateSigned.attributeTypeMap = [
  {
    name: "type",
    baseName: "type",
    type: "string"
  }
];

// model/templateResponseDocumentFormFieldDropdown.ts
var _TemplateResponseDocumentFormFieldDropdown = class extends TemplateResponseDocumentFormFieldBase {
  constructor() {
    super(...arguments);
    this["type"] = "dropdown";
  }
  static getAttributeTypeMap() {
    return super.getAttributeTypeMap().concat(_TemplateResponseDocumentFormFieldDropdown.attributeTypeMap);
  }
  static init(data) {
    return ObjectSerializer.deserialize(
      data,
      "TemplateResponseDocumentFormFieldDropdown"
    );
  }
};
var TemplateResponseDocumentFormFieldDropdown = _TemplateResponseDocumentFormFieldDropdown;
TemplateResponseDocumentFormFieldDropdown.discriminator = void 0;
TemplateResponseDocumentFormFieldDropdown.attributeTypeMap = [
  {
    name: "type",
    baseName: "type",
    type: "string"
  }
];

// model/templateResponseDocumentFormFieldHyperlink.ts
var _TemplateResponseDocumentFormFieldHyperlink = class extends TemplateResponseDocumentFormFieldBase {
  constructor() {
    super(...arguments);
    this["type"] = "hyperlink";
  }
  static getAttributeTypeMap() {
    return super.getAttributeTypeMap().concat(_TemplateResponseDocumentFormFieldHyperlink.attributeTypeMap);
  }
  static init(data) {
    return ObjectSerializer.deserialize(
      data,
      "TemplateResponseDocumentFormFieldHyperlink"
    );
  }
};
var TemplateResponseDocumentFormFieldHyperlink = _TemplateResponseDocumentFormFieldHyperlink;
TemplateResponseDocumentFormFieldHyperlink.discriminator = void 0;
TemplateResponseDocumentFormFieldHyperlink.attributeTypeMap = [
  {
    name: "type",
    baseName: "type",
    type: "string"
  },
  {
    name: "avgTextLength",
    baseName: "avg_text_length",
    type: "TemplateResponseFieldAvgTextLength"
  },
  {
    name: "isMultiline",
    baseName: "isMultiline",
    type: "boolean"
  },
  {
    name: "originalFontSize",
    baseName: "originalFontSize",
    type: "number"
  },
  {
    name: "fontFamily",
    baseName: "fontFamily",
    type: "string"
  }
];

// model/templateResponseDocumentFormFieldInitials.ts
var _TemplateResponseDocumentFormFieldInitials = class extends TemplateResponseDocumentFormFieldBase {
  constructor() {
    super(...arguments);
    this["type"] = "initials";
  }
  static getAttributeTypeMap() {
    return super.getAttributeTypeMap().concat(_TemplateResponseDocumentFormFieldInitials.attributeTypeMap);
  }
  static init(data) {
    return ObjectSerializer.deserialize(
      data,
      "TemplateResponseDocumentFormFieldInitials"
    );
  }
};
var TemplateResponseDocumentFormFieldInitials = _TemplateResponseDocumentFormFieldInitials;
TemplateResponseDocumentFormFieldInitials.discriminator = void 0;
TemplateResponseDocumentFormFieldInitials.attributeTypeMap = [
  {
    name: "type",
    baseName: "type",
    type: "string"
  }
];

// model/templateResponseDocumentFormFieldRadio.ts
var _TemplateResponseDocumentFormFieldRadio = class extends TemplateResponseDocumentFormFieldBase {
  constructor() {
    super(...arguments);
    this["type"] = "radio";
  }
  static getAttributeTypeMap() {
    return super.getAttributeTypeMap().concat(_TemplateResponseDocumentFormFieldRadio.attributeTypeMap);
  }
  static init(data) {
    return ObjectSerializer.deserialize(
      data,
      "TemplateResponseDocumentFormFieldRadio"
    );
  }
};
var TemplateResponseDocumentFormFieldRadio = _TemplateResponseDocumentFormFieldRadio;
TemplateResponseDocumentFormFieldRadio.discriminator = void 0;
TemplateResponseDocumentFormFieldRadio.attributeTypeMap = [
  {
    name: "type",
    baseName: "type",
    type: "string"
  }
];

// model/templateResponseDocumentFormFieldSignature.ts
var _TemplateResponseDocumentFormFieldSignature = class extends TemplateResponseDocumentFormFieldBase {
  constructor() {
    super(...arguments);
    this["type"] = "signature";
  }
  static getAttributeTypeMap() {
    return super.getAttributeTypeMap().concat(_TemplateResponseDocumentFormFieldSignature.attributeTypeMap);
  }
  static init(data) {
    return ObjectSerializer.deserialize(
      data,
      "TemplateResponseDocumentFormFieldSignature"
    );
  }
};
var TemplateResponseDocumentFormFieldSignature = _TemplateResponseDocumentFormFieldSignature;
TemplateResponseDocumentFormFieldSignature.discriminator = void 0;
TemplateResponseDocumentFormFieldSignature.attributeTypeMap = [
  {
    name: "type",
    baseName: "type",
    type: "string"
  }
];

// model/templateResponseDocumentFormFieldText.ts
var _TemplateResponseDocumentFormFieldText = class extends TemplateResponseDocumentFormFieldBase {
  constructor() {
    super(...arguments);
    this["type"] = "text";
  }
  static getAttributeTypeMap() {
    return super.getAttributeTypeMap().concat(_TemplateResponseDocumentFormFieldText.attributeTypeMap);
  }
  static init(data) {
    return ObjectSerializer.deserialize(
      data,
      "TemplateResponseDocumentFormFieldText"
    );
  }
};
var TemplateResponseDocumentFormFieldText = _TemplateResponseDocumentFormFieldText;
TemplateResponseDocumentFormFieldText.discriminator = void 0;
TemplateResponseDocumentFormFieldText.attributeTypeMap = [
  {
    name: "type",
    baseName: "type",
    type: "string"
  },
  {
    name: "avgTextLength",
    baseName: "avg_text_length",
    type: "TemplateResponseFieldAvgTextLength"
  },
  {
    name: "isMultiline",
    baseName: "isMultiline",
    type: "boolean"
  },
  {
    name: "originalFontSize",
    baseName: "originalFontSize",
    type: "number"
  },
  {
    name: "fontFamily",
    baseName: "fontFamily",
    type: "string"
  },
  {
    name: "validationType",
    baseName: "validation_type",
    type: "TemplateResponseDocumentFormFieldText.ValidationTypeEnum"
  }
];
((TemplateResponseDocumentFormFieldText2) => {
  let ValidationTypeEnum;
  ((ValidationTypeEnum2) => {
    ValidationTypeEnum2["NumbersOnly"] = "numbers_only";
    ValidationTypeEnum2["LettersOnly"] = "letters_only";
    ValidationTypeEnum2["PhoneNumber"] = "phone_number";
    ValidationTypeEnum2["BankRoutingNumber"] = "bank_routing_number";
    ValidationTypeEnum2["BankAccountNumber"] = "bank_account_number";
    ValidationTypeEnum2["EmailAddress"] = "email_address";
    ValidationTypeEnum2["ZipCode"] = "zip_code";
    ValidationTypeEnum2["SocialSecurityNumber"] = "social_security_number";
    ValidationTypeEnum2["EmployerIdentificationNumber"] = "employer_identification_number";
    ValidationTypeEnum2["CustomRegex"] = "custom_regex";
  })(ValidationTypeEnum = TemplateResponseDocumentFormFieldText2.ValidationTypeEnum || (TemplateResponseDocumentFormFieldText2.ValidationTypeEnum = {}));
})(TemplateResponseDocumentFormFieldText || (TemplateResponseDocumentFormFieldText = {}));

// model/templateResponseDocumentStaticFieldBase.ts
var _TemplateResponseDocumentStaticFieldBase = class {
  constructor() {
    this["signer"] = "me_now";
  }
  static getAttributeTypeMap() {
    return _TemplateResponseDocumentStaticFieldBase.attributeTypeMap;
  }
  static discriminatorClassName(value) {
    if (value === void 0 || value === null) {
      return null;
    }
    if (value === "checkbox") {
      return "TemplateResponseDocumentStaticFieldCheckbox";
    }
    if (value === "date_signed") {
      return "TemplateResponseDocumentStaticFieldDateSigned";
    }
    if (value === "dropdown") {
      return "TemplateResponseDocumentStaticFieldDropdown";
    }
    if (value === "hyperlink") {
      return "TemplateResponseDocumentStaticFieldHyperlink";
    }
    if (value === "initials") {
      return "TemplateResponseDocumentStaticFieldInitials";
    }
    if (value === "radio") {
      return "TemplateResponseDocumentStaticFieldRadio";
    }
    if (value === "signature") {
      return "TemplateResponseDocumentStaticFieldSignature";
    }
    if (value === "text") {
      return "TemplateResponseDocumentStaticFieldText";
    }
    return null;
  }
};
var TemplateResponseDocumentStaticFieldBase = _TemplateResponseDocumentStaticFieldBase;
TemplateResponseDocumentStaticFieldBase.discriminator = "type";
TemplateResponseDocumentStaticFieldBase.attributeTypeMap = [
  {
    name: "type",
    baseName: "type",
    type: "string"
  },
  {
    name: "apiId",
    baseName: "api_id",
    type: "string"
  },
  {
    name: "name",
    baseName: "name",
    type: "string"
  },
  {
    name: "signer",
    baseName: "signer",
    type: "string"
  },
  {
    name: "x",
    baseName: "x",
    type: "number"
  },
  {
    name: "y",
    baseName: "y",
    type: "number"
  },
  {
    name: "width",
    baseName: "width",
    type: "number"
  },
  {
    name: "height",
    baseName: "height",
    type: "number"
  },
  {
    name: "required",
    baseName: "required",
    type: "boolean"
  },
  {
    name: "group",
    baseName: "group",
    type: "string"
  }
];

// model/templateResponseDocumentStaticFieldCheckbox.ts
var _TemplateResponseDocumentStaticFieldCheckbox = class extends TemplateResponseDocumentStaticFieldBase {
  constructor() {
    super(...arguments);
    this["type"] = "checkbox";
  }
  static getAttributeTypeMap() {
    return super.getAttributeTypeMap().concat(_TemplateResponseDocumentStaticFieldCheckbox.attributeTypeMap);
  }
  static init(data) {
    return ObjectSerializer.deserialize(
      data,
      "TemplateResponseDocumentStaticFieldCheckbox"
    );
  }
};
var TemplateResponseDocumentStaticFieldCheckbox = _TemplateResponseDocumentStaticFieldCheckbox;
TemplateResponseDocumentStaticFieldCheckbox.discriminator = void 0;
TemplateResponseDocumentStaticFieldCheckbox.attributeTypeMap = [
  {
    name: "type",
    baseName: "type",
    type: "string"
  }
];

// model/templateResponseDocumentStaticFieldDateSigned.ts
var _TemplateResponseDocumentStaticFieldDateSigned = class extends TemplateResponseDocumentStaticFieldBase {
  constructor() {
    super(...arguments);
    this["type"] = "date_signed";
  }
  static getAttributeTypeMap() {
    return super.getAttributeTypeMap().concat(_TemplateResponseDocumentStaticFieldDateSigned.attributeTypeMap);
  }
  static init(data) {
    return ObjectSerializer.deserialize(
      data,
      "TemplateResponseDocumentStaticFieldDateSigned"
    );
  }
};
var TemplateResponseDocumentStaticFieldDateSigned = _TemplateResponseDocumentStaticFieldDateSigned;
TemplateResponseDocumentStaticFieldDateSigned.discriminator = void 0;
TemplateResponseDocumentStaticFieldDateSigned.attributeTypeMap = [
  {
    name: "type",
    baseName: "type",
    type: "string"
  }
];

// model/templateResponseDocumentStaticFieldDropdown.ts
var _TemplateResponseDocumentStaticFieldDropdown = class extends TemplateResponseDocumentStaticFieldBase {
  constructor() {
    super(...arguments);
    this["type"] = "dropdown";
  }
  static getAttributeTypeMap() {
    return super.getAttributeTypeMap().concat(_TemplateResponseDocumentStaticFieldDropdown.attributeTypeMap);
  }
  static init(data) {
    return ObjectSerializer.deserialize(
      data,
      "TemplateResponseDocumentStaticFieldDropdown"
    );
  }
};
var TemplateResponseDocumentStaticFieldDropdown = _TemplateResponseDocumentStaticFieldDropdown;
TemplateResponseDocumentStaticFieldDropdown.discriminator = void 0;
TemplateResponseDocumentStaticFieldDropdown.attributeTypeMap = [
  {
    name: "type",
    baseName: "type",
    type: "string"
  }
];

// model/templateResponseDocumentStaticFieldHyperlink.ts
var _TemplateResponseDocumentStaticFieldHyperlink = class extends TemplateResponseDocumentStaticFieldBase {
  constructor() {
    super(...arguments);
    this["type"] = "hyperlink";
  }
  static getAttributeTypeMap() {
    return super.getAttributeTypeMap().concat(_TemplateResponseDocumentStaticFieldHyperlink.attributeTypeMap);
  }
  static init(data) {
    return ObjectSerializer.deserialize(
      data,
      "TemplateResponseDocumentStaticFieldHyperlink"
    );
  }
};
var TemplateResponseDocumentStaticFieldHyperlink = _TemplateResponseDocumentStaticFieldHyperlink;
TemplateResponseDocumentStaticFieldHyperlink.discriminator = void 0;
TemplateResponseDocumentStaticFieldHyperlink.attributeTypeMap = [
  {
    name: "type",
    baseName: "type",
    type: "string"
  }
];

// model/templateResponseDocumentStaticFieldInitials.ts
var _TemplateResponseDocumentStaticFieldInitials = class extends TemplateResponseDocumentStaticFieldBase {
  constructor() {
    super(...arguments);
    this["type"] = "initials";
  }
  static getAttributeTypeMap() {
    return super.getAttributeTypeMap().concat(_TemplateResponseDocumentStaticFieldInitials.attributeTypeMap);
  }
  static init(data) {
    return ObjectSerializer.deserialize(
      data,
      "TemplateResponseDocumentStaticFieldInitials"
    );
  }
};
var TemplateResponseDocumentStaticFieldInitials = _TemplateResponseDocumentStaticFieldInitials;
TemplateResponseDocumentStaticFieldInitials.discriminator = void 0;
TemplateResponseDocumentStaticFieldInitials.attributeTypeMap = [
  {
    name: "type",
    baseName: "type",
    type: "string"
  }
];

// model/templateResponseDocumentStaticFieldRadio.ts
var _TemplateResponseDocumentStaticFieldRadio = class extends TemplateResponseDocumentStaticFieldBase {
  constructor() {
    super(...arguments);
    this["type"] = "radio";
  }
  static getAttributeTypeMap() {
    return super.getAttributeTypeMap().concat(_TemplateResponseDocumentStaticFieldRadio.attributeTypeMap);
  }
  static init(data) {
    return ObjectSerializer.deserialize(
      data,
      "TemplateResponseDocumentStaticFieldRadio"
    );
  }
};
var TemplateResponseDocumentStaticFieldRadio = _TemplateResponseDocumentStaticFieldRadio;
TemplateResponseDocumentStaticFieldRadio.discriminator = void 0;
TemplateResponseDocumentStaticFieldRadio.attributeTypeMap = [
  {
    name: "type",
    baseName: "type",
    type: "string"
  }
];

// model/templateResponseDocumentStaticFieldSignature.ts
var _TemplateResponseDocumentStaticFieldSignature = class extends TemplateResponseDocumentStaticFieldBase {
  constructor() {
    super(...arguments);
    this["type"] = "signature";
  }
  static getAttributeTypeMap() {
    return super.getAttributeTypeMap().concat(_TemplateResponseDocumentStaticFieldSignature.attributeTypeMap);
  }
  static init(data) {
    return ObjectSerializer.deserialize(
      data,
      "TemplateResponseDocumentStaticFieldSignature"
    );
  }
};
var TemplateResponseDocumentStaticFieldSignature = _TemplateResponseDocumentStaticFieldSignature;
TemplateResponseDocumentStaticFieldSignature.discriminator = void 0;
TemplateResponseDocumentStaticFieldSignature.attributeTypeMap = [
  {
    name: "type",
    baseName: "type",
    type: "string"
  }
];

// model/templateResponseDocumentStaticFieldText.ts
var _TemplateResponseDocumentStaticFieldText = class extends TemplateResponseDocumentStaticFieldBase {
  constructor() {
    super(...arguments);
    this["type"] = "text";
  }
  static getAttributeTypeMap() {
    return super.getAttributeTypeMap().concat(_TemplateResponseDocumentStaticFieldText.attributeTypeMap);
  }
  static init(data) {
    return ObjectSerializer.deserialize(
      data,
      "TemplateResponseDocumentStaticFieldText"
    );
  }
};
var TemplateResponseDocumentStaticFieldText = _TemplateResponseDocumentStaticFieldText;
TemplateResponseDocumentStaticFieldText.discriminator = void 0;
TemplateResponseDocumentStaticFieldText.attributeTypeMap = [
  {
    name: "type",
    baseName: "type",
    type: "string"
  }
];

// model/templateResponseFieldAvgTextLength.ts
var _TemplateResponseFieldAvgTextLength = class {
  static getAttributeTypeMap() {
    return _TemplateResponseFieldAvgTextLength.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(
      data,
      "TemplateResponseFieldAvgTextLength"
    );
  }
};
var TemplateResponseFieldAvgTextLength = _TemplateResponseFieldAvgTextLength;
TemplateResponseFieldAvgTextLength.discriminator = void 0;
TemplateResponseFieldAvgTextLength.attributeTypeMap = [
  {
    name: "numLines",
    baseName: "num_lines",
    type: "number"
  },
  {
    name: "numCharsPerLine",
    baseName: "num_chars_per_line",
    type: "number"
  }
];

// model/templateResponseSignerRole.ts
var _TemplateResponseSignerRole = class {
  static getAttributeTypeMap() {
    return _TemplateResponseSignerRole.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "TemplateResponseSignerRole");
  }
};
var TemplateResponseSignerRole = _TemplateResponseSignerRole;
TemplateResponseSignerRole.discriminator = void 0;
TemplateResponseSignerRole.attributeTypeMap = [
  {
    name: "name",
    baseName: "name",
    type: "string"
  },
  {
    name: "order",
    baseName: "order",
    type: "number"
  }
];

// model/templateUpdateFilesRequest.ts
var _TemplateUpdateFilesRequest = class {
  constructor() {
    this["testMode"] = false;
  }
  static getAttributeTypeMap() {
    return _TemplateUpdateFilesRequest.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "TemplateUpdateFilesRequest");
  }
};
var TemplateUpdateFilesRequest = _TemplateUpdateFilesRequest;
TemplateUpdateFilesRequest.discriminator = void 0;
TemplateUpdateFilesRequest.attributeTypeMap = [
  {
    name: "clientId",
    baseName: "client_id",
    type: "string"
  },
  {
    name: "files",
    baseName: "files",
    type: "Array<RequestFile>"
  },
  {
    name: "fileUrls",
    baseName: "file_urls",
    type: "Array<string>"
  },
  {
    name: "message",
    baseName: "message",
    type: "string"
  },
  {
    name: "subject",
    baseName: "subject",
    type: "string"
  },
  {
    name: "testMode",
    baseName: "test_mode",
    type: "boolean"
  }
];

// model/templateUpdateFilesResponse.ts
var _TemplateUpdateFilesResponse = class {
  static getAttributeTypeMap() {
    return _TemplateUpdateFilesResponse.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "TemplateUpdateFilesResponse");
  }
};
var TemplateUpdateFilesResponse = _TemplateUpdateFilesResponse;
TemplateUpdateFilesResponse.discriminator = void 0;
TemplateUpdateFilesResponse.attributeTypeMap = [
  {
    name: "template",
    baseName: "template",
    type: "TemplateUpdateFilesResponseTemplate"
  }
];

// model/templateUpdateFilesResponseTemplate.ts
var _TemplateUpdateFilesResponseTemplate = class {
  static getAttributeTypeMap() {
    return _TemplateUpdateFilesResponseTemplate.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(
      data,
      "TemplateUpdateFilesResponseTemplate"
    );
  }
};
var TemplateUpdateFilesResponseTemplate = _TemplateUpdateFilesResponseTemplate;
TemplateUpdateFilesResponseTemplate.discriminator = void 0;
TemplateUpdateFilesResponseTemplate.attributeTypeMap = [
  {
    name: "templateId",
    baseName: "template_id",
    type: "string"
  },
  {
    name: "warnings",
    baseName: "warnings",
    type: "Array<WarningResponse>"
  }
];

// model/unclaimedDraftCreateEmbeddedRequest.ts
var _UnclaimedDraftCreateEmbeddedRequest = class {
  constructor() {
    this["allowCcs"] = true;
    this["allowDecline"] = false;
    this["allowReassign"] = false;
    this["forceSignerPage"] = false;
    this["forceSubjectMessage"] = false;
    this["hideTextTags"] = false;
    this["holdRequest"] = false;
    this["isForEmbeddedSigning"] = false;
    this["showProgressStepper"] = true;
    this["skipMeNow"] = false;
    this["testMode"] = false;
    this["type"] = _UnclaimedDraftCreateEmbeddedRequest.TypeEnum.RequestSignature;
    this["usePreexistingFields"] = false;
    this["useTextTags"] = false;
    this["populateAutoFillFields"] = false;
  }
  static getAttributeTypeMap() {
    return _UnclaimedDraftCreateEmbeddedRequest.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(
      data,
      "UnclaimedDraftCreateEmbeddedRequest"
    );
  }
};
var UnclaimedDraftCreateEmbeddedRequest = _UnclaimedDraftCreateEmbeddedRequest;
UnclaimedDraftCreateEmbeddedRequest.discriminator = void 0;
UnclaimedDraftCreateEmbeddedRequest.attributeTypeMap = [
  {
    name: "clientId",
    baseName: "client_id",
    type: "string"
  },
  {
    name: "requesterEmailAddress",
    baseName: "requester_email_address",
    type: "string"
  },
  {
    name: "files",
    baseName: "files",
    type: "Array<RequestFile>"
  },
  {
    name: "fileUrls",
    baseName: "file_urls",
    type: "Array<string>"
  },
  {
    name: "allowCcs",
    baseName: "allow_ccs",
    type: "boolean"
  },
  {
    name: "allowDecline",
    baseName: "allow_decline",
    type: "boolean"
  },
  {
    name: "allowReassign",
    baseName: "allow_reassign",
    type: "boolean"
  },
  {
    name: "attachments",
    baseName: "attachments",
    type: "Array<SubAttachment>"
  },
  {
    name: "ccEmailAddresses",
    baseName: "cc_email_addresses",
    type: "Array<string>"
  },
  {
    name: "customFields",
    baseName: "custom_fields",
    type: "Array<SubCustomField>"
  },
  {
    name: "editorOptions",
    baseName: "editor_options",
    type: "SubEditorOptions"
  },
  {
    name: "fieldOptions",
    baseName: "field_options",
    type: "SubFieldOptions"
  },
  {
    name: "forceSignerPage",
    baseName: "force_signer_page",
    type: "boolean"
  },
  {
    name: "forceSubjectMessage",
    baseName: "force_subject_message",
    type: "boolean"
  },
  {
    name: "formFieldGroups",
    baseName: "form_field_groups",
    type: "Array<SubFormFieldGroup>"
  },
  {
    name: "formFieldRules",
    baseName: "form_field_rules",
    type: "Array<SubFormFieldRule>"
  },
  {
    name: "formFieldsPerDocument",
    baseName: "form_fields_per_document",
    type: "Array<SubFormFieldsPerDocumentBase>"
  },
  {
    name: "hideTextTags",
    baseName: "hide_text_tags",
    type: "boolean"
  },
  {
    name: "holdRequest",
    baseName: "hold_request",
    type: "boolean"
  },
  {
    name: "isForEmbeddedSigning",
    baseName: "is_for_embedded_signing",
    type: "boolean"
  },
  {
    name: "message",
    baseName: "message",
    type: "string"
  },
  {
    name: "metadata",
    baseName: "metadata",
    type: "{ [key: string]: any; }"
  },
  {
    name: "requestingRedirectUrl",
    baseName: "requesting_redirect_url",
    type: "string"
  },
  {
    name: "showPreview",
    baseName: "show_preview",
    type: "boolean"
  },
  {
    name: "showProgressStepper",
    baseName: "show_progress_stepper",
    type: "boolean"
  },
  {
    name: "signers",
    baseName: "signers",
    type: "Array<SubUnclaimedDraftSigner>"
  },
  {
    name: "signingOptions",
    baseName: "signing_options",
    type: "SubSigningOptions"
  },
  {
    name: "signingRedirectUrl",
    baseName: "signing_redirect_url",
    type: "string"
  },
  {
    name: "skipMeNow",
    baseName: "skip_me_now",
    type: "boolean"
  },
  {
    name: "subject",
    baseName: "subject",
    type: "string"
  },
  {
    name: "testMode",
    baseName: "test_mode",
    type: "boolean"
  },
  {
    name: "type",
    baseName: "type",
    type: "UnclaimedDraftCreateEmbeddedRequest.TypeEnum"
  },
  {
    name: "usePreexistingFields",
    baseName: "use_preexisting_fields",
    type: "boolean"
  },
  {
    name: "useTextTags",
    baseName: "use_text_tags",
    type: "boolean"
  },
  {
    name: "populateAutoFillFields",
    baseName: "populate_auto_fill_fields",
    type: "boolean"
  },
  {
    name: "expiresAt",
    baseName: "expires_at",
    type: "number"
  }
];
((UnclaimedDraftCreateEmbeddedRequest2) => {
  let TypeEnum;
  ((TypeEnum2) => {
    TypeEnum2["SendDocument"] = "send_document";
    TypeEnum2["RequestSignature"] = "request_signature";
  })(TypeEnum = UnclaimedDraftCreateEmbeddedRequest2.TypeEnum || (UnclaimedDraftCreateEmbeddedRequest2.TypeEnum = {}));
})(UnclaimedDraftCreateEmbeddedRequest || (UnclaimedDraftCreateEmbeddedRequest = {}));

// model/unclaimedDraftCreateEmbeddedWithTemplateRequest.ts
var _UnclaimedDraftCreateEmbeddedWithTemplateRequest = class {
  constructor() {
    this["allowDecline"] = false;
    this["allowReassign"] = false;
    this["forceSignerRoles"] = false;
    this["forceSubjectMessage"] = false;
    this["holdRequest"] = false;
    this["isForEmbeddedSigning"] = false;
    this["previewOnly"] = false;
    this["showPreview"] = false;
    this["showProgressStepper"] = true;
    this["skipMeNow"] = false;
    this["testMode"] = false;
    this["populateAutoFillFields"] = false;
    this["allowCcs"] = false;
  }
  static getAttributeTypeMap() {
    return _UnclaimedDraftCreateEmbeddedWithTemplateRequest.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(
      data,
      "UnclaimedDraftCreateEmbeddedWithTemplateRequest"
    );
  }
};
var UnclaimedDraftCreateEmbeddedWithTemplateRequest = _UnclaimedDraftCreateEmbeddedWithTemplateRequest;
UnclaimedDraftCreateEmbeddedWithTemplateRequest.discriminator = void 0;
UnclaimedDraftCreateEmbeddedWithTemplateRequest.attributeTypeMap = [
  {
    name: "clientId",
    baseName: "client_id",
    type: "string"
  },
  {
    name: "requesterEmailAddress",
    baseName: "requester_email_address",
    type: "string"
  },
  {
    name: "templateIds",
    baseName: "template_ids",
    type: "Array<string>"
  },
  {
    name: "allowDecline",
    baseName: "allow_decline",
    type: "boolean"
  },
  {
    name: "allowReassign",
    baseName: "allow_reassign",
    type: "boolean"
  },
  {
    name: "ccs",
    baseName: "ccs",
    type: "Array<SubCC>"
  },
  {
    name: "customFields",
    baseName: "custom_fields",
    type: "Array<SubCustomField>"
  },
  {
    name: "editorOptions",
    baseName: "editor_options",
    type: "SubEditorOptions"
  },
  {
    name: "fieldOptions",
    baseName: "field_options",
    type: "SubFieldOptions"
  },
  {
    name: "files",
    baseName: "files",
    type: "Array<RequestFile>"
  },
  {
    name: "fileUrls",
    baseName: "file_urls",
    type: "Array<string>"
  },
  {
    name: "forceSignerRoles",
    baseName: "force_signer_roles",
    type: "boolean"
  },
  {
    name: "forceSubjectMessage",
    baseName: "force_subject_message",
    type: "boolean"
  },
  {
    name: "holdRequest",
    baseName: "hold_request",
    type: "boolean"
  },
  {
    name: "isForEmbeddedSigning",
    baseName: "is_for_embedded_signing",
    type: "boolean"
  },
  {
    name: "message",
    baseName: "message",
    type: "string"
  },
  {
    name: "metadata",
    baseName: "metadata",
    type: "{ [key: string]: any; }"
  },
  {
    name: "previewOnly",
    baseName: "preview_only",
    type: "boolean"
  },
  {
    name: "requestingRedirectUrl",
    baseName: "requesting_redirect_url",
    type: "string"
  },
  {
    name: "showPreview",
    baseName: "show_preview",
    type: "boolean"
  },
  {
    name: "showProgressStepper",
    baseName: "show_progress_stepper",
    type: "boolean"
  },
  {
    name: "signers",
    baseName: "signers",
    type: "Array<SubUnclaimedDraftTemplateSigner>"
  },
  {
    name: "signingOptions",
    baseName: "signing_options",
    type: "SubSigningOptions"
  },
  {
    name: "signingRedirectUrl",
    baseName: "signing_redirect_url",
    type: "string"
  },
  {
    name: "skipMeNow",
    baseName: "skip_me_now",
    type: "boolean"
  },
  {
    name: "subject",
    baseName: "subject",
    type: "string"
  },
  {
    name: "testMode",
    baseName: "test_mode",
    type: "boolean"
  },
  {
    name: "title",
    baseName: "title",
    type: "string"
  },
  {
    name: "populateAutoFillFields",
    baseName: "populate_auto_fill_fields",
    type: "boolean"
  },
  {
    name: "allowCcs",
    baseName: "allow_ccs",
    type: "boolean"
  }
];

// model/unclaimedDraftCreateRequest.ts
var _UnclaimedDraftCreateRequest = class {
  constructor() {
    this["allowDecline"] = false;
    this["hideTextTags"] = false;
    this["showProgressStepper"] = true;
    this["testMode"] = false;
    this["usePreexistingFields"] = false;
    this["useTextTags"] = false;
  }
  static getAttributeTypeMap() {
    return _UnclaimedDraftCreateRequest.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "UnclaimedDraftCreateRequest");
  }
};
var UnclaimedDraftCreateRequest = _UnclaimedDraftCreateRequest;
UnclaimedDraftCreateRequest.discriminator = void 0;
UnclaimedDraftCreateRequest.attributeTypeMap = [
  {
    name: "type",
    baseName: "type",
    type: "UnclaimedDraftCreateRequest.TypeEnum"
  },
  {
    name: "files",
    baseName: "files",
    type: "Array<RequestFile>"
  },
  {
    name: "fileUrls",
    baseName: "file_urls",
    type: "Array<string>"
  },
  {
    name: "allowDecline",
    baseName: "allow_decline",
    type: "boolean"
  },
  {
    name: "attachments",
    baseName: "attachments",
    type: "Array<SubAttachment>"
  },
  {
    name: "ccEmailAddresses",
    baseName: "cc_email_addresses",
    type: "Array<string>"
  },
  {
    name: "clientId",
    baseName: "client_id",
    type: "string"
  },
  {
    name: "customFields",
    baseName: "custom_fields",
    type: "Array<SubCustomField>"
  },
  {
    name: "fieldOptions",
    baseName: "field_options",
    type: "SubFieldOptions"
  },
  {
    name: "formFieldGroups",
    baseName: "form_field_groups",
    type: "Array<SubFormFieldGroup>"
  },
  {
    name: "formFieldRules",
    baseName: "form_field_rules",
    type: "Array<SubFormFieldRule>"
  },
  {
    name: "formFieldsPerDocument",
    baseName: "form_fields_per_document",
    type: "Array<SubFormFieldsPerDocumentBase>"
  },
  {
    name: "hideTextTags",
    baseName: "hide_text_tags",
    type: "boolean"
  },
  {
    name: "message",
    baseName: "message",
    type: "string"
  },
  {
    name: "metadata",
    baseName: "metadata",
    type: "{ [key: string]: any; }"
  },
  {
    name: "showProgressStepper",
    baseName: "show_progress_stepper",
    type: "boolean"
  },
  {
    name: "signers",
    baseName: "signers",
    type: "Array<SubUnclaimedDraftSigner>"
  },
  {
    name: "signingOptions",
    baseName: "signing_options",
    type: "SubSigningOptions"
  },
  {
    name: "signingRedirectUrl",
    baseName: "signing_redirect_url",
    type: "string"
  },
  {
    name: "subject",
    baseName: "subject",
    type: "string"
  },
  {
    name: "testMode",
    baseName: "test_mode",
    type: "boolean"
  },
  {
    name: "usePreexistingFields",
    baseName: "use_preexisting_fields",
    type: "boolean"
  },
  {
    name: "useTextTags",
    baseName: "use_text_tags",
    type: "boolean"
  },
  {
    name: "expiresAt",
    baseName: "expires_at",
    type: "number"
  }
];
((UnclaimedDraftCreateRequest2) => {
  let TypeEnum;
  ((TypeEnum2) => {
    TypeEnum2["SendDocument"] = "send_document";
    TypeEnum2["RequestSignature"] = "request_signature";
  })(TypeEnum = UnclaimedDraftCreateRequest2.TypeEnum || (UnclaimedDraftCreateRequest2.TypeEnum = {}));
})(UnclaimedDraftCreateRequest || (UnclaimedDraftCreateRequest = {}));

// model/unclaimedDraftCreateResponse.ts
var _UnclaimedDraftCreateResponse = class {
  static getAttributeTypeMap() {
    return _UnclaimedDraftCreateResponse.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "UnclaimedDraftCreateResponse");
  }
};
var UnclaimedDraftCreateResponse = _UnclaimedDraftCreateResponse;
UnclaimedDraftCreateResponse.discriminator = void 0;
UnclaimedDraftCreateResponse.attributeTypeMap = [
  {
    name: "unclaimedDraft",
    baseName: "unclaimed_draft",
    type: "UnclaimedDraftResponse"
  },
  {
    name: "warnings",
    baseName: "warnings",
    type: "Array<WarningResponse>"
  }
];

// model/unclaimedDraftEditAndResendRequest.ts
var _UnclaimedDraftEditAndResendRequest = class {
  constructor() {
    this["showProgressStepper"] = true;
    this["testMode"] = false;
  }
  static getAttributeTypeMap() {
    return _UnclaimedDraftEditAndResendRequest.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(
      data,
      "UnclaimedDraftEditAndResendRequest"
    );
  }
};
var UnclaimedDraftEditAndResendRequest = _UnclaimedDraftEditAndResendRequest;
UnclaimedDraftEditAndResendRequest.discriminator = void 0;
UnclaimedDraftEditAndResendRequest.attributeTypeMap = [
  {
    name: "clientId",
    baseName: "client_id",
    type: "string"
  },
  {
    name: "editorOptions",
    baseName: "editor_options",
    type: "SubEditorOptions"
  },
  {
    name: "isForEmbeddedSigning",
    baseName: "is_for_embedded_signing",
    type: "boolean"
  },
  {
    name: "requesterEmailAddress",
    baseName: "requester_email_address",
    type: "string"
  },
  {
    name: "requestingRedirectUrl",
    baseName: "requesting_redirect_url",
    type: "string"
  },
  {
    name: "showProgressStepper",
    baseName: "show_progress_stepper",
    type: "boolean"
  },
  {
    name: "signingRedirectUrl",
    baseName: "signing_redirect_url",
    type: "string"
  },
  {
    name: "testMode",
    baseName: "test_mode",
    type: "boolean"
  }
];

// model/unclaimedDraftResponse.ts
var _UnclaimedDraftResponse = class {
  static getAttributeTypeMap() {
    return _UnclaimedDraftResponse.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "UnclaimedDraftResponse");
  }
};
var UnclaimedDraftResponse = _UnclaimedDraftResponse;
UnclaimedDraftResponse.discriminator = void 0;
UnclaimedDraftResponse.attributeTypeMap = [
  {
    name: "signatureRequestId",
    baseName: "signature_request_id",
    type: "string"
  },
  {
    name: "claimUrl",
    baseName: "claim_url",
    type: "string"
  },
  {
    name: "signingRedirectUrl",
    baseName: "signing_redirect_url",
    type: "string"
  },
  {
    name: "requestingRedirectUrl",
    baseName: "requesting_redirect_url",
    type: "string"
  },
  {
    name: "expiresAt",
    baseName: "expires_at",
    type: "number"
  },
  {
    name: "testMode",
    baseName: "test_mode",
    type: "boolean"
  }
];

// model/warningResponse.ts
var _WarningResponse = class {
  static getAttributeTypeMap() {
    return _WarningResponse.attributeTypeMap;
  }
  static init(data) {
    return ObjectSerializer.deserialize(data, "WarningResponse");
  }
};
var WarningResponse = _WarningResponse;
WarningResponse.discriminator = void 0;
WarningResponse.attributeTypeMap = [
  {
    name: "warningMsg",
    baseName: "warning_msg",
    type: "string"
  },
  {
    name: "warningName",
    baseName: "warning_name",
    type: "string"
  }
];

// model/eventCallbackHelper.ts
var crypto = __toESM(require("crypto"));
var _EventCallbackHelper = class {
};
var EventCallbackHelper = _EventCallbackHelper;
EventCallbackHelper.EVENT_TYPE_ACCOUNT_CALLBACK = "account_callback";
EventCallbackHelper.EVENT_TYPE_APP_CALLBACK = "app_callback";
EventCallbackHelper.isValid = (apiKey, eventCallback) => {
  const hmac = crypto.createHmac("sha256", apiKey);
  hmac.update(
    `${eventCallback.event.eventTime}${eventCallback.event.eventType}`
  );
  return eventCallback.event.eventHash === hmac.digest("hex").toString();
};
EventCallbackHelper.getCallbackType = (eventCallback) => {
  if (!eventCallback.event.eventMetadata || !eventCallback.event.eventMetadata.reportedForAppId) {
    return _EventCallbackHelper.EVENT_TYPE_ACCOUNT_CALLBACK;
  }
  return _EventCallbackHelper.EVENT_TYPE_APP_CALLBACK;
};

// model/models.ts
var primitives = [
  "string",
  "boolean",
  "double",
  "integer",
  "long",
  "float",
  "number",
  "any"
];
var ObjectSerializer = class {
  static findCorrectType(data, expectedType) {
    if (data == void 0) {
      return expectedType;
    } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
      return expectedType;
    } else if (expectedType === "Date") {
      return expectedType;
    } else {
      if (enumsMap[expectedType]) {
        return expectedType;
      }
      if (!typeMap[expectedType]) {
        return expectedType;
      }
      let discriminatorProperty = typeMap[expectedType].discriminator;
      let discriminatorValue = data[discriminatorProperty];
      if (typeMap[expectedType].hasOwnProperty("discriminatorClassName")) {
        let discriminatorClass = typeMap[expectedType].discriminatorClassName(discriminatorValue);
        if (discriminatorClass) {
          return discriminatorClass;
        }
      }
      if (discriminatorProperty == null) {
        return expectedType;
      } else {
        if (data[discriminatorProperty]) {
          var discriminatorType = data[discriminatorProperty];
          if (typeMap[discriminatorType]) {
            return discriminatorType;
          } else {
            return expectedType;
          }
        } else {
          return expectedType;
        }
      }
    }
  }
  static serialize(data, type) {
    if (data == void 0) {
      return data;
    } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
      return data;
    } else if (type.lastIndexOf("Array<", 0) === 0) {
      let subType = type.replace("Array<", "");
      subType = subType.substring(0, subType.length - 1);
      let transformedData = [];
      for (let index = 0; index < data.length; index++) {
        let datum = data[index];
        transformedData.push(ObjectSerializer.serialize(datum, subType));
      }
      return transformedData;
    } else if (type === "Date") {
      return data.toISOString();
    } else {
      if (enumsMap[type]) {
        return data;
      }
      if (!typeMap[type]) {
        return data;
      }
      type = this.findCorrectType(data, type);
      let attributeTypes = typeMap[type].getAttributeTypeMap();
      let instance = {};
      for (let index = 0; index < attributeTypes.length; index++) {
        let attributeType = attributeTypes[index];
        let value = ObjectSerializer.serialize(
          data[attributeType.name],
          attributeType.type
        );
        if (value !== void 0) {
          instance[attributeType.baseName] = value;
        }
      }
      return instance;
    }
  }
  static deserialize(data, type) {
    type = ObjectSerializer.findCorrectType(data, type);
    if (data == void 0) {
      return data;
    } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
      return data;
    } else if (type.lastIndexOf("Array<", 0) === 0) {
      let subType = type.replace("Array<", "");
      subType = subType.substring(0, subType.length - 1);
      let transformedData = [];
      for (let index = 0; index < data.length; index++) {
        let datum = data[index];
        transformedData.push(ObjectSerializer.deserialize(datum, subType));
      }
      return transformedData;
    } else if (type === "Date") {
      return new Date(data);
    } else {
      if (enumsMap[type]) {
        return data;
      }
      if (!typeMap[type]) {
        return data;
      }
      let instance = new typeMap[type]();
      let attributeTypes = typeMap[type].getAttributeTypeMap();
      for (let index = 0; index < attributeTypes.length; index++) {
        let attributeType = attributeTypes[index];
        const propertyKey = data[attributeType.baseName] !== void 0 ? attributeType.baseName : attributeType.name;
        instance[attributeType.name] = ObjectSerializer.deserialize(
          data[propertyKey],
          attributeType.type
        );
      }
      return instance;
    }
  }
};
var HttpBasicAuth = class {
  constructor() {
    this.username = "";
    this.password = "";
  }
  applyToRequest(requestOptions) {
    requestOptions.auth = {
      username: this.username,
      password: this.password
    };
  }
};
var HttpBearerAuth = class {
  constructor() {
    this.accessToken = "";
  }
  applyToRequest(requestOptions) {
    if (requestOptions && requestOptions.headers) {
      const accessToken = typeof this.accessToken === "function" ? this.accessToken() : this.accessToken;
      requestOptions.headers["Authorization"] = "Bearer " + accessToken;
    }
  }
};
var ApiKeyAuth = class {
  constructor(location, paramName) {
    this.location = location;
    this.paramName = paramName;
    this.apiKey = "";
  }
  applyToRequest(requestOptions) {
    if (this.location == "query") {
      requestOptions.params[this.paramName] = this.apiKey;
    } else if (this.location == "header" && requestOptions && requestOptions.headers) {
      requestOptions.headers[this.paramName] = this.apiKey;
    } else if (this.location == "cookie" && requestOptions && requestOptions.headers) {
      if (requestOptions.headers["Cookie"]) {
        requestOptions.headers["Cookie"] += "; " + this.paramName + "=" + encodeURIComponent(this.apiKey);
      } else {
        requestOptions.headers["Cookie"] = this.paramName + "=" + encodeURIComponent(this.apiKey);
      }
    }
  }
};
var OAuth = class {
  constructor() {
    this.accessToken = "";
  }
  applyToRequest(requestOptions) {
    if (requestOptions && requestOptions.headers) {
      requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
    }
  }
};
var VoidAuth = class {
  constructor() {
    this.username = "";
    this.password = "";
  }
  applyToRequest(_) {
  }
};

// model/index.ts
var enumsMap = {
  "EventCallbackRequestEvent.EventTypeEnum": EventCallbackRequestEvent.EventTypeEnum,
  "ReportCreateRequest.ReportTypeEnum": ReportCreateRequest.ReportTypeEnum,
  "ReportResponse.ReportTypeEnum": ReportResponse.ReportTypeEnum,
  SignatureRequestResponseCustomFieldTypeEnum,
  SignatureRequestResponseDataTypeEnum,
  "SubFieldOptions.DateFormatEnum": SubFieldOptions.DateFormatEnum,
  "SubFormFieldRuleAction.TypeEnum": SubFormFieldRuleAction.TypeEnum,
  "SubFormFieldRuleTrigger.OperatorEnum": SubFormFieldRuleTrigger.OperatorEnum,
  "SubFormFieldsPerDocumentDateSigned.FontFamilyEnum": SubFormFieldsPerDocumentDateSigned.FontFamilyEnum,
  "SubFormFieldsPerDocumentDropdown.FontFamilyEnum": SubFormFieldsPerDocumentDropdown.FontFamilyEnum,
  SubFormFieldsPerDocumentFontEnum,
  "SubFormFieldsPerDocumentHyperlink.FontFamilyEnum": SubFormFieldsPerDocumentHyperlink.FontFamilyEnum,
  "SubFormFieldsPerDocumentText.ValidationTypeEnum": SubFormFieldsPerDocumentText.ValidationTypeEnum,
  "SubFormFieldsPerDocumentText.FontFamilyEnum": SubFormFieldsPerDocumentText.FontFamilyEnum,
  "SubFormFieldsPerDocumentTextMerge.FontFamilyEnum": SubFormFieldsPerDocumentTextMerge.FontFamilyEnum,
  SubFormFieldsPerDocumentTypeEnum,
  "SubMergeField.TypeEnum": SubMergeField.TypeEnum,
  "SubOAuth.ScopesEnum": SubOAuth.ScopesEnum,
  "SubSignatureRequestSigner.SmsPhoneNumberTypeEnum": SubSignatureRequestSigner.SmsPhoneNumberTypeEnum,
  "SubSignatureRequestTemplateSigner.SmsPhoneNumberTypeEnum": SubSignatureRequestTemplateSigner.SmsPhoneNumberTypeEnum,
  "SubSigningOptions.DefaultTypeEnum": SubSigningOptions.DefaultTypeEnum,
  "SubWhiteLabelingOptions.LegalVersionEnum": SubWhiteLabelingOptions.LegalVersionEnum,
  "TeamAddMemberRequest.RoleEnum": TeamAddMemberRequest.RoleEnum,
  "TeamRemoveMemberRequest.NewRoleEnum": TeamRemoveMemberRequest.NewRoleEnum,
  "TemplateResponseDocumentFormFieldText.ValidationTypeEnum": TemplateResponseDocumentFormFieldText.ValidationTypeEnum,
  "UnclaimedDraftCreateEmbeddedRequest.TypeEnum": UnclaimedDraftCreateEmbeddedRequest.TypeEnum,
  "UnclaimedDraftCreateRequest.TypeEnum": UnclaimedDraftCreateRequest.TypeEnum
};
var typeMap = {
  AccountCreateRequest,
  AccountCreateResponse,
  AccountGetResponse,
  AccountResponse,
  AccountResponseQuotas,
  AccountUpdateRequest,
  AccountVerifyRequest,
  AccountVerifyResponse,
  AccountVerifyResponseAccount,
  ApiAppCreateRequest,
  ApiAppGetResponse,
  ApiAppListResponse,
  ApiAppResponse,
  ApiAppResponseOAuth,
  ApiAppResponseOptions,
  ApiAppResponseOwnerAccount,
  ApiAppResponseWhiteLabelingOptions,
  ApiAppUpdateRequest,
  BulkSendJobGetResponse,
  BulkSendJobGetResponseSignatureRequests,
  BulkSendJobListResponse,
  BulkSendJobResponse,
  BulkSendJobSendResponse,
  EmbeddedEditUrlRequest,
  EmbeddedEditUrlResponse,
  EmbeddedEditUrlResponseEmbedded,
  EmbeddedSignUrlResponse,
  EmbeddedSignUrlResponseEmbedded,
  ErrorResponse,
  ErrorResponseError,
  EventCallbackRequest,
  EventCallbackRequestEvent,
  EventCallbackRequestEventMetadata,
  FileResponse,
  FileResponseDataUri,
  ListInfoResponse,
  OAuthTokenGenerateRequest,
  OAuthTokenRefreshRequest,
  OAuthTokenResponse,
  ReportCreateRequest,
  ReportCreateResponse,
  ReportResponse,
  SignatureRequestBulkCreateEmbeddedWithTemplateRequest,
  SignatureRequestBulkSendWithTemplateRequest,
  SignatureRequestCreateEmbeddedRequest,
  SignatureRequestCreateEmbeddedWithTemplateRequest,
  SignatureRequestEditEmbeddedRequest,
  SignatureRequestEditEmbeddedWithTemplateRequest,
  SignatureRequestEditRequest,
  SignatureRequestEditWithTemplateRequest,
  SignatureRequestGetResponse,
  SignatureRequestListResponse,
  SignatureRequestRemindRequest,
  SignatureRequestResponse,
  SignatureRequestResponseAttachment,
  SignatureRequestResponseCustomFieldBase,
  SignatureRequestResponseCustomFieldCheckbox,
  SignatureRequestResponseCustomFieldText,
  SignatureRequestResponseDataBase,
  SignatureRequestResponseDataValueCheckbox,
  SignatureRequestResponseDataValueCheckboxMerge,
  SignatureRequestResponseDataValueDateSigned,
  SignatureRequestResponseDataValueDropdown,
  SignatureRequestResponseDataValueInitials,
  SignatureRequestResponseDataValueRadio,
  SignatureRequestResponseDataValueSignature,
  SignatureRequestResponseDataValueText,
  SignatureRequestResponseDataValueTextMerge,
  SignatureRequestResponseSignatures,
  SignatureRequestSendRequest,
  SignatureRequestSendWithTemplateRequest,
  SignatureRequestUpdateRequest,
  SubAttachment,
  SubBulkSignerList,
  SubBulkSignerListCustomField,
  SubCC,
  SubCustomField,
  SubEditorOptions,
  SubFieldOptions,
  SubFormFieldGroup,
  SubFormFieldRule,
  SubFormFieldRuleAction,
  SubFormFieldRuleTrigger,
  SubFormFieldsPerDocumentBase,
  SubFormFieldsPerDocumentCheckbox,
  SubFormFieldsPerDocumentCheckboxMerge,
  SubFormFieldsPerDocumentDateSigned,
  SubFormFieldsPerDocumentDropdown,
  SubFormFieldsPerDocumentHyperlink,
  SubFormFieldsPerDocumentInitials,
  SubFormFieldsPerDocumentRadio,
  SubFormFieldsPerDocumentSignature,
  SubFormFieldsPerDocumentText,
  SubFormFieldsPerDocumentTextMerge,
  SubMergeField,
  SubOAuth,
  SubOptions,
  SubSignatureRequestGroupedSigners,
  SubSignatureRequestSigner,
  SubSignatureRequestTemplateSigner,
  SubSigningOptions,
  SubTeamResponse,
  SubTemplateRole,
  SubUnclaimedDraftSigner,
  SubUnclaimedDraftTemplateSigner,
  SubWhiteLabelingOptions,
  TeamAddMemberRequest,
  TeamCreateRequest,
  TeamGetInfoResponse,
  TeamGetResponse,
  TeamInfoResponse,
  TeamInviteResponse,
  TeamInvitesResponse,
  TeamMemberResponse,
  TeamMembersResponse,
  TeamParentResponse,
  TeamRemoveMemberRequest,
  TeamResponse,
  TeamSubTeamsResponse,
  TeamUpdateRequest,
  TemplateAddUserRequest,
  TemplateCreateEmbeddedDraftRequest,
  TemplateCreateEmbeddedDraftResponse,
  TemplateCreateEmbeddedDraftResponseTemplate,
  TemplateCreateRequest,
  TemplateCreateResponse,
  TemplateCreateResponseTemplate,
  TemplateEditResponse,
  TemplateGetResponse,
  TemplateListResponse,
  TemplateRemoveUserRequest,
  TemplateResponse,
  TemplateResponseAccount,
  TemplateResponseAccountQuota,
  TemplateResponseCCRole,
  TemplateResponseDocument,
  TemplateResponseDocumentCustomFieldBase,
  TemplateResponseDocumentCustomFieldCheckbox,
  TemplateResponseDocumentCustomFieldText,
  TemplateResponseDocumentFieldGroup,
  TemplateResponseDocumentFieldGroupRule,
  TemplateResponseDocumentFormFieldBase,
  TemplateResponseDocumentFormFieldCheckbox,
  TemplateResponseDocumentFormFieldDateSigned,
  TemplateResponseDocumentFormFieldDropdown,
  TemplateResponseDocumentFormFieldHyperlink,
  TemplateResponseDocumentFormFieldInitials,
  TemplateResponseDocumentFormFieldRadio,
  TemplateResponseDocumentFormFieldSignature,
  TemplateResponseDocumentFormFieldText,
  TemplateResponseDocumentStaticFieldBase,
  TemplateResponseDocumentStaticFieldCheckbox,
  TemplateResponseDocumentStaticFieldDateSigned,
  TemplateResponseDocumentStaticFieldDropdown,
  TemplateResponseDocumentStaticFieldHyperlink,
  TemplateResponseDocumentStaticFieldInitials,
  TemplateResponseDocumentStaticFieldRadio,
  TemplateResponseDocumentStaticFieldSignature,
  TemplateResponseDocumentStaticFieldText,
  TemplateResponseFieldAvgTextLength,
  TemplateResponseSignerRole,
  TemplateUpdateFilesRequest,
  TemplateUpdateFilesResponse,
  TemplateUpdateFilesResponseTemplate,
  UnclaimedDraftCreateEmbeddedRequest,
  UnclaimedDraftCreateEmbeddedWithTemplateRequest,
  UnclaimedDraftCreateRequest,
  UnclaimedDraftCreateResponse,
  UnclaimedDraftEditAndResendRequest,
  UnclaimedDraftResponse,
  WarningResponse
};

// api/accountApi.ts
var defaultBasePath = "https://api.hellosign.com/v3";
var AccountApi = class {
  constructor(basePath) {
    this._basePath = defaultBasePath;
    this._defaultHeaders = {
      "User-Agent": USER_AGENT
    };
    this._useQuerystring = false;
    this.authentications = {
      default: new VoidAuth(),
      api_key: new HttpBasicAuth(),
      oauth2: new HttpBearerAuth()
    };
    this.interceptors = [];
    if (basePath) {
      this.basePath = basePath;
    }
  }
  set useQuerystring(value) {
    this._useQuerystring = value;
  }
  set basePath(basePath) {
    this._basePath = basePath;
  }
  set defaultHeaders(defaultHeaders) {
    this._defaultHeaders = defaultHeaders;
  }
  get defaultHeaders() {
    return this._defaultHeaders;
  }
  get basePath() {
    return this._basePath;
  }
  setDefaultAuthentication(auth) {
    this.authentications.default = auth;
  }
  setApiKey(key) {
    this.authentications.api_key.username = key;
  }
  set username(username) {
    this.authentications.api_key.username = username;
  }
  set password(password) {
    this.authentications.api_key.password = password;
  }
  set accessToken(accessToken) {
    this.authentications.oauth2.accessToken = accessToken;
  }
  addInterceptor(interceptor) {
    this.interceptors.push(interceptor);
  }
  accountCreate(_0) {
    return __async(this, arguments, function* (accountCreateRequest, options = { headers: {} }) {
      if (accountCreateRequest !== null && accountCreateRequest !== void 0 && accountCreateRequest.constructor.name !== "AccountCreateRequest") {
        accountCreateRequest = ObjectSerializer.deserialize(
          accountCreateRequest,
          "AccountCreateRequest"
        );
      }
      const localVarPath = this.basePath + "/account/create";
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (accountCreateRequest === null || accountCreateRequest === void 0) {
        throw new Error(
          "Required parameter accountCreateRequest was null or undefined when calling accountCreate."
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      const result = generateFormData(
        accountCreateRequest,
        AccountCreateRequest.attributeTypeMap
      );
      localVarUseFormData = result.localVarUseFormData;
      let data = {};
      if (localVarUseFormData) {
        const formData2 = toFormData3(result.data);
        data = formData2;
        localVarHeaderParams = __spreadValues(__spreadValues({}, localVarHeaderParams), formData2.getHeaders());
      } else {
        data = ObjectSerializer.serialize(
          accountCreateRequest,
          "AccountCreateRequest"
        );
      }
      let localVarRequestOptions = {
        method: "POST",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
        responseType: "json",
        data
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise(
          (resolve, reject) => {
            axios_default.request(localVarRequestOptions).then(
              (response) => {
                let body = response.data;
                if (response.status && response.status >= 200 && response.status <= 299) {
                  body = ObjectSerializer.deserialize(
                    body,
                    "AccountCreateResponse"
                  );
                  resolve({ response, body });
                } else {
                  reject(new HttpError(response, body, response.status));
                }
              },
              (error) => {
                if (error.response == null) {
                  reject(error);
                  return;
                }
                const response = error.response;
                let body;
                if (response.status === 200) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "AccountCreateResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                let rangeCodeLeft = Number("4XX"[0] + "00");
                let rangeCodeRight = Number("4XX"[0] + "99");
                if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "ErrorResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                reject(error);
              }
            );
          }
        );
      });
    });
  }
  accountGet(_0, _1) {
    return __async(this, arguments, function* (accountId, emailAddress, options = { headers: {} }) {
      const localVarPath = this.basePath + "/account";
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (accountId !== void 0) {
        localVarQueryParameters["account_id"] = ObjectSerializer.serialize(
          accountId,
          "string"
        );
      }
      if (emailAddress !== void 0) {
        localVarQueryParameters["email_address"] = ObjectSerializer.serialize(
          emailAddress,
          "string"
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      let localVarRequestOptions = {
        method: "GET",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
        responseType: "json"
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise((resolve, reject) => {
          axios_default.request(localVarRequestOptions).then(
            (response) => {
              let body = response.data;
              if (response.status && response.status >= 200 && response.status <= 299) {
                body = ObjectSerializer.deserialize(body, "AccountGetResponse");
                resolve({ response, body });
              } else {
                reject(new HttpError(response, body, response.status));
              }
            },
            (error) => {
              if (error.response == null) {
                reject(error);
                return;
              }
              const response = error.response;
              let body;
              if (response.status === 200) {
                body = ObjectSerializer.deserialize(
                  response.data,
                  "AccountGetResponse"
                );
                reject(new HttpError(response, body, response.status));
                return;
              }
              let rangeCodeLeft = Number("4XX"[0] + "00");
              let rangeCodeRight = Number("4XX"[0] + "99");
              if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                body = ObjectSerializer.deserialize(
                  response.data,
                  "ErrorResponse"
                );
                reject(new HttpError(response, body, response.status));
                return;
              }
              reject(error);
            }
          );
        });
      });
    });
  }
  accountUpdate(_0) {
    return __async(this, arguments, function* (accountUpdateRequest, options = { headers: {} }) {
      if (accountUpdateRequest !== null && accountUpdateRequest !== void 0 && accountUpdateRequest.constructor.name !== "AccountUpdateRequest") {
        accountUpdateRequest = ObjectSerializer.deserialize(
          accountUpdateRequest,
          "AccountUpdateRequest"
        );
      }
      const localVarPath = this.basePath + "/account";
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (accountUpdateRequest === null || accountUpdateRequest === void 0) {
        throw new Error(
          "Required parameter accountUpdateRequest was null or undefined when calling accountUpdate."
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      const result = generateFormData(
        accountUpdateRequest,
        AccountUpdateRequest.attributeTypeMap
      );
      localVarUseFormData = result.localVarUseFormData;
      let data = {};
      if (localVarUseFormData) {
        const formData2 = toFormData3(result.data);
        data = formData2;
        localVarHeaderParams = __spreadValues(__spreadValues({}, localVarHeaderParams), formData2.getHeaders());
      } else {
        data = ObjectSerializer.serialize(
          accountUpdateRequest,
          "AccountUpdateRequest"
        );
      }
      let localVarRequestOptions = {
        method: "PUT",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
        responseType: "json",
        data
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise((resolve, reject) => {
          axios_default.request(localVarRequestOptions).then(
            (response) => {
              let body = response.data;
              if (response.status && response.status >= 200 && response.status <= 299) {
                body = ObjectSerializer.deserialize(body, "AccountGetResponse");
                resolve({ response, body });
              } else {
                reject(new HttpError(response, body, response.status));
              }
            },
            (error) => {
              if (error.response == null) {
                reject(error);
                return;
              }
              const response = error.response;
              let body;
              if (response.status === 200) {
                body = ObjectSerializer.deserialize(
                  response.data,
                  "AccountGetResponse"
                );
                reject(new HttpError(response, body, response.status));
                return;
              }
              let rangeCodeLeft = Number("4XX"[0] + "00");
              let rangeCodeRight = Number("4XX"[0] + "99");
              if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                body = ObjectSerializer.deserialize(
                  response.data,
                  "ErrorResponse"
                );
                reject(new HttpError(response, body, response.status));
                return;
              }
              reject(error);
            }
          );
        });
      });
    });
  }
  accountVerify(_0) {
    return __async(this, arguments, function* (accountVerifyRequest, options = { headers: {} }) {
      if (accountVerifyRequest !== null && accountVerifyRequest !== void 0 && accountVerifyRequest.constructor.name !== "AccountVerifyRequest") {
        accountVerifyRequest = ObjectSerializer.deserialize(
          accountVerifyRequest,
          "AccountVerifyRequest"
        );
      }
      const localVarPath = this.basePath + "/account/verify";
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (accountVerifyRequest === null || accountVerifyRequest === void 0) {
        throw new Error(
          "Required parameter accountVerifyRequest was null or undefined when calling accountVerify."
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      const result = generateFormData(
        accountVerifyRequest,
        AccountVerifyRequest.attributeTypeMap
      );
      localVarUseFormData = result.localVarUseFormData;
      let data = {};
      if (localVarUseFormData) {
        const formData2 = toFormData3(result.data);
        data = formData2;
        localVarHeaderParams = __spreadValues(__spreadValues({}, localVarHeaderParams), formData2.getHeaders());
      } else {
        data = ObjectSerializer.serialize(
          accountVerifyRequest,
          "AccountVerifyRequest"
        );
      }
      let localVarRequestOptions = {
        method: "POST",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
        responseType: "json",
        data
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise(
          (resolve, reject) => {
            axios_default.request(localVarRequestOptions).then(
              (response) => {
                let body = response.data;
                if (response.status && response.status >= 200 && response.status <= 299) {
                  body = ObjectSerializer.deserialize(
                    body,
                    "AccountVerifyResponse"
                  );
                  resolve({ response, body });
                } else {
                  reject(new HttpError(response, body, response.status));
                }
              },
              (error) => {
                if (error.response == null) {
                  reject(error);
                  return;
                }
                const response = error.response;
                let body;
                if (response.status === 200) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "AccountVerifyResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                let rangeCodeLeft = Number("4XX"[0] + "00");
                let rangeCodeRight = Number("4XX"[0] + "99");
                if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "ErrorResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                reject(error);
              }
            );
          }
        );
      });
    });
  }
};

// api/apiAppApi.ts
var defaultBasePath2 = "https://api.hellosign.com/v3";
var ApiAppApi = class {
  constructor(basePath) {
    this._basePath = defaultBasePath2;
    this._defaultHeaders = {
      "User-Agent": USER_AGENT
    };
    this._useQuerystring = false;
    this.authentications = {
      default: new VoidAuth(),
      api_key: new HttpBasicAuth(),
      oauth2: new HttpBearerAuth()
    };
    this.interceptors = [];
    if (basePath) {
      this.basePath = basePath;
    }
  }
  set useQuerystring(value) {
    this._useQuerystring = value;
  }
  set basePath(basePath) {
    this._basePath = basePath;
  }
  set defaultHeaders(defaultHeaders) {
    this._defaultHeaders = defaultHeaders;
  }
  get defaultHeaders() {
    return this._defaultHeaders;
  }
  get basePath() {
    return this._basePath;
  }
  setDefaultAuthentication(auth) {
    this.authentications.default = auth;
  }
  setApiKey(key) {
    this.authentications.api_key.username = key;
  }
  set username(username) {
    this.authentications.api_key.username = username;
  }
  set password(password) {
    this.authentications.api_key.password = password;
  }
  set accessToken(accessToken) {
    this.authentications.oauth2.accessToken = accessToken;
  }
  addInterceptor(interceptor) {
    this.interceptors.push(interceptor);
  }
  apiAppCreate(_0) {
    return __async(this, arguments, function* (apiAppCreateRequest, options = { headers: {} }) {
      if (apiAppCreateRequest !== null && apiAppCreateRequest !== void 0 && apiAppCreateRequest.constructor.name !== "ApiAppCreateRequest") {
        apiAppCreateRequest = ObjectSerializer.deserialize(
          apiAppCreateRequest,
          "ApiAppCreateRequest"
        );
      }
      const localVarPath = this.basePath + "/api_app";
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (apiAppCreateRequest === null || apiAppCreateRequest === void 0) {
        throw new Error(
          "Required parameter apiAppCreateRequest was null or undefined when calling apiAppCreate."
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      const result = generateFormData(
        apiAppCreateRequest,
        ApiAppCreateRequest.attributeTypeMap
      );
      localVarUseFormData = result.localVarUseFormData;
      let data = {};
      if (localVarUseFormData) {
        const formData2 = toFormData3(result.data);
        data = formData2;
        localVarHeaderParams = __spreadValues(__spreadValues({}, localVarHeaderParams), formData2.getHeaders());
      } else {
        data = ObjectSerializer.serialize(
          apiAppCreateRequest,
          "ApiAppCreateRequest"
        );
      }
      let localVarRequestOptions = {
        method: "POST",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
        responseType: "json",
        data
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise((resolve, reject) => {
          axios_default.request(localVarRequestOptions).then(
            (response) => {
              let body = response.data;
              if (response.status && response.status >= 200 && response.status <= 299) {
                body = ObjectSerializer.deserialize(body, "ApiAppGetResponse");
                resolve({ response, body });
              } else {
                reject(new HttpError(response, body, response.status));
              }
            },
            (error) => {
              if (error.response == null) {
                reject(error);
                return;
              }
              const response = error.response;
              let body;
              if (response.status === 201) {
                body = ObjectSerializer.deserialize(
                  response.data,
                  "ApiAppGetResponse"
                );
                reject(new HttpError(response, body, response.status));
                return;
              }
              let rangeCodeLeft = Number("4XX"[0] + "00");
              let rangeCodeRight = Number("4XX"[0] + "99");
              if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                body = ObjectSerializer.deserialize(
                  response.data,
                  "ErrorResponse"
                );
                reject(new HttpError(response, body, response.status));
                return;
              }
              reject(error);
            }
          );
        });
      });
    });
  }
  apiAppDelete(_0) {
    return __async(this, arguments, function* (clientId, options = { headers: {} }) {
      const localVarPath = this.basePath + "/api_app/{client_id}".replace(
        "{client_id}",
        encodeURIComponent(String(clientId))
      );
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (clientId === null || clientId === void 0) {
        throw new Error(
          "Required parameter clientId was null or undefined when calling apiAppDelete."
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      let localVarRequestOptions = {
        method: "DELETE",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
        responseType: "json"
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise((resolve, reject) => {
          axios_default.request(localVarRequestOptions).then(
            (response) => {
              let body = response.data;
              if (response.status && response.status >= 200 && response.status <= 299) {
                resolve({ response, body });
              } else {
                reject(new HttpError(response, body, response.status));
              }
            },
            (error) => {
              if (error.response == null) {
                reject(error);
                return;
              }
              const response = error.response;
              let body;
              let rangeCodeLeft = Number("4XX"[0] + "00");
              let rangeCodeRight = Number("4XX"[0] + "99");
              if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                body = ObjectSerializer.deserialize(
                  response.data,
                  "ErrorResponse"
                );
                reject(new HttpError(response, body, response.status));
                return;
              }
              reject(error);
            }
          );
        });
      });
    });
  }
  apiAppGet(_0) {
    return __async(this, arguments, function* (clientId, options = { headers: {} }) {
      const localVarPath = this.basePath + "/api_app/{client_id}".replace(
        "{client_id}",
        encodeURIComponent(String(clientId))
      );
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (clientId === null || clientId === void 0) {
        throw new Error(
          "Required parameter clientId was null or undefined when calling apiAppGet."
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      let localVarRequestOptions = {
        method: "GET",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
        responseType: "json"
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise((resolve, reject) => {
          axios_default.request(localVarRequestOptions).then(
            (response) => {
              let body = response.data;
              if (response.status && response.status >= 200 && response.status <= 299) {
                body = ObjectSerializer.deserialize(body, "ApiAppGetResponse");
                resolve({ response, body });
              } else {
                reject(new HttpError(response, body, response.status));
              }
            },
            (error) => {
              if (error.response == null) {
                reject(error);
                return;
              }
              const response = error.response;
              let body;
              if (response.status === 200) {
                body = ObjectSerializer.deserialize(
                  response.data,
                  "ApiAppGetResponse"
                );
                reject(new HttpError(response, body, response.status));
                return;
              }
              let rangeCodeLeft = Number("4XX"[0] + "00");
              let rangeCodeRight = Number("4XX"[0] + "99");
              if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                body = ObjectSerializer.deserialize(
                  response.data,
                  "ErrorResponse"
                );
                reject(new HttpError(response, body, response.status));
                return;
              }
              reject(error);
            }
          );
        });
      });
    });
  }
  apiAppList(_0, _1) {
    return __async(this, arguments, function* (page, pageSize, options = { headers: {} }) {
      const localVarPath = this.basePath + "/api_app/list";
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (page !== void 0) {
        localVarQueryParameters["page"] = ObjectSerializer.serialize(
          page,
          "number"
        );
      }
      if (pageSize !== void 0) {
        localVarQueryParameters["page_size"] = ObjectSerializer.serialize(
          pageSize,
          "number"
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      let localVarRequestOptions = {
        method: "GET",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
        responseType: "json"
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise((resolve, reject) => {
          axios_default.request(localVarRequestOptions).then(
            (response) => {
              let body = response.data;
              if (response.status && response.status >= 200 && response.status <= 299) {
                body = ObjectSerializer.deserialize(body, "ApiAppListResponse");
                resolve({ response, body });
              } else {
                reject(new HttpError(response, body, response.status));
              }
            },
            (error) => {
              if (error.response == null) {
                reject(error);
                return;
              }
              const response = error.response;
              let body;
              if (response.status === 200) {
                body = ObjectSerializer.deserialize(
                  response.data,
                  "ApiAppListResponse"
                );
                reject(new HttpError(response, body, response.status));
                return;
              }
              let rangeCodeLeft = Number("4XX"[0] + "00");
              let rangeCodeRight = Number("4XX"[0] + "99");
              if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                body = ObjectSerializer.deserialize(
                  response.data,
                  "ErrorResponse"
                );
                reject(new HttpError(response, body, response.status));
                return;
              }
              reject(error);
            }
          );
        });
      });
    });
  }
  apiAppUpdate(_0, _1) {
    return __async(this, arguments, function* (clientId, apiAppUpdateRequest, options = { headers: {} }) {
      if (apiAppUpdateRequest !== null && apiAppUpdateRequest !== void 0 && apiAppUpdateRequest.constructor.name !== "ApiAppUpdateRequest") {
        apiAppUpdateRequest = ObjectSerializer.deserialize(
          apiAppUpdateRequest,
          "ApiAppUpdateRequest"
        );
      }
      const localVarPath = this.basePath + "/api_app/{client_id}".replace(
        "{client_id}",
        encodeURIComponent(String(clientId))
      );
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (clientId === null || clientId === void 0) {
        throw new Error(
          "Required parameter clientId was null or undefined when calling apiAppUpdate."
        );
      }
      if (apiAppUpdateRequest === null || apiAppUpdateRequest === void 0) {
        throw new Error(
          "Required parameter apiAppUpdateRequest was null or undefined when calling apiAppUpdate."
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      const result = generateFormData(
        apiAppUpdateRequest,
        ApiAppUpdateRequest.attributeTypeMap
      );
      localVarUseFormData = result.localVarUseFormData;
      let data = {};
      if (localVarUseFormData) {
        const formData2 = toFormData3(result.data);
        data = formData2;
        localVarHeaderParams = __spreadValues(__spreadValues({}, localVarHeaderParams), formData2.getHeaders());
      } else {
        data = ObjectSerializer.serialize(
          apiAppUpdateRequest,
          "ApiAppUpdateRequest"
        );
      }
      let localVarRequestOptions = {
        method: "PUT",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
        responseType: "json",
        data
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise((resolve, reject) => {
          axios_default.request(localVarRequestOptions).then(
            (response) => {
              let body = response.data;
              if (response.status && response.status >= 200 && response.status <= 299) {
                body = ObjectSerializer.deserialize(body, "ApiAppGetResponse");
                resolve({ response, body });
              } else {
                reject(new HttpError(response, body, response.status));
              }
            },
            (error) => {
              if (error.response == null) {
                reject(error);
                return;
              }
              const response = error.response;
              let body;
              if (response.status === 200) {
                body = ObjectSerializer.deserialize(
                  response.data,
                  "ApiAppGetResponse"
                );
                reject(new HttpError(response, body, response.status));
                return;
              }
              let rangeCodeLeft = Number("4XX"[0] + "00");
              let rangeCodeRight = Number("4XX"[0] + "99");
              if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                body = ObjectSerializer.deserialize(
                  response.data,
                  "ErrorResponse"
                );
                reject(new HttpError(response, body, response.status));
                return;
              }
              reject(error);
            }
          );
        });
      });
    });
  }
};

// api/bulkSendJobApi.ts
var defaultBasePath3 = "https://api.hellosign.com/v3";
var BulkSendJobApi = class {
  constructor(basePath) {
    this._basePath = defaultBasePath3;
    this._defaultHeaders = {
      "User-Agent": USER_AGENT
    };
    this._useQuerystring = false;
    this.authentications = {
      default: new VoidAuth(),
      api_key: new HttpBasicAuth(),
      oauth2: new HttpBearerAuth()
    };
    this.interceptors = [];
    if (basePath) {
      this.basePath = basePath;
    }
  }
  set useQuerystring(value) {
    this._useQuerystring = value;
  }
  set basePath(basePath) {
    this._basePath = basePath;
  }
  set defaultHeaders(defaultHeaders) {
    this._defaultHeaders = defaultHeaders;
  }
  get defaultHeaders() {
    return this._defaultHeaders;
  }
  get basePath() {
    return this._basePath;
  }
  setDefaultAuthentication(auth) {
    this.authentications.default = auth;
  }
  setApiKey(key) {
    this.authentications.api_key.username = key;
  }
  set username(username) {
    this.authentications.api_key.username = username;
  }
  set password(password) {
    this.authentications.api_key.password = password;
  }
  set accessToken(accessToken) {
    this.authentications.oauth2.accessToken = accessToken;
  }
  addInterceptor(interceptor) {
    this.interceptors.push(interceptor);
  }
  bulkSendJobGet(_0, _1, _2) {
    return __async(this, arguments, function* (bulkSendJobId, page, pageSize, options = { headers: {} }) {
      const localVarPath = this.basePath + "/bulk_send_job/{bulk_send_job_id}".replace(
        "{bulk_send_job_id}",
        encodeURIComponent(String(bulkSendJobId))
      );
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (bulkSendJobId === null || bulkSendJobId === void 0) {
        throw new Error(
          "Required parameter bulkSendJobId was null or undefined when calling bulkSendJobGet."
        );
      }
      if (page !== void 0) {
        localVarQueryParameters["page"] = ObjectSerializer.serialize(
          page,
          "number"
        );
      }
      if (pageSize !== void 0) {
        localVarQueryParameters["page_size"] = ObjectSerializer.serialize(
          pageSize,
          "number"
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      let localVarRequestOptions = {
        method: "GET",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
        responseType: "json"
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise(
          (resolve, reject) => {
            axios_default.request(localVarRequestOptions).then(
              (response) => {
                let body = response.data;
                if (response.status && response.status >= 200 && response.status <= 299) {
                  body = ObjectSerializer.deserialize(
                    body,
                    "BulkSendJobGetResponse"
                  );
                  resolve({ response, body });
                } else {
                  reject(new HttpError(response, body, response.status));
                }
              },
              (error) => {
                if (error.response == null) {
                  reject(error);
                  return;
                }
                const response = error.response;
                let body;
                if (response.status === 200) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "BulkSendJobGetResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                let rangeCodeLeft = Number("4XX"[0] + "00");
                let rangeCodeRight = Number("4XX"[0] + "99");
                if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "ErrorResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                reject(error);
              }
            );
          }
        );
      });
    });
  }
  bulkSendJobList(_0, _1) {
    return __async(this, arguments, function* (page, pageSize, options = { headers: {} }) {
      const localVarPath = this.basePath + "/bulk_send_job/list";
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (page !== void 0) {
        localVarQueryParameters["page"] = ObjectSerializer.serialize(
          page,
          "number"
        );
      }
      if (pageSize !== void 0) {
        localVarQueryParameters["page_size"] = ObjectSerializer.serialize(
          pageSize,
          "number"
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      let localVarRequestOptions = {
        method: "GET",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
        responseType: "json"
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise(
          (resolve, reject) => {
            axios_default.request(localVarRequestOptions).then(
              (response) => {
                let body = response.data;
                if (response.status && response.status >= 200 && response.status <= 299) {
                  body = ObjectSerializer.deserialize(
                    body,
                    "BulkSendJobListResponse"
                  );
                  resolve({ response, body });
                } else {
                  reject(new HttpError(response, body, response.status));
                }
              },
              (error) => {
                if (error.response == null) {
                  reject(error);
                  return;
                }
                const response = error.response;
                let body;
                if (response.status === 200) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "BulkSendJobListResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                let rangeCodeLeft = Number("4XX"[0] + "00");
                let rangeCodeRight = Number("4XX"[0] + "99");
                if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "ErrorResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                reject(error);
              }
            );
          }
        );
      });
    });
  }
};

// api/embeddedApi.ts
var defaultBasePath4 = "https://api.hellosign.com/v3";
var EmbeddedApi = class {
  constructor(basePath) {
    this._basePath = defaultBasePath4;
    this._defaultHeaders = {
      "User-Agent": USER_AGENT
    };
    this._useQuerystring = false;
    this.authentications = {
      default: new VoidAuth(),
      api_key: new HttpBasicAuth(),
      oauth2: new HttpBearerAuth()
    };
    this.interceptors = [];
    if (basePath) {
      this.basePath = basePath;
    }
  }
  set useQuerystring(value) {
    this._useQuerystring = value;
  }
  set basePath(basePath) {
    this._basePath = basePath;
  }
  set defaultHeaders(defaultHeaders) {
    this._defaultHeaders = defaultHeaders;
  }
  get defaultHeaders() {
    return this._defaultHeaders;
  }
  get basePath() {
    return this._basePath;
  }
  setDefaultAuthentication(auth) {
    this.authentications.default = auth;
  }
  setApiKey(key) {
    this.authentications.api_key.username = key;
  }
  set username(username) {
    this.authentications.api_key.username = username;
  }
  set password(password) {
    this.authentications.api_key.password = password;
  }
  set accessToken(accessToken) {
    this.authentications.oauth2.accessToken = accessToken;
  }
  addInterceptor(interceptor) {
    this.interceptors.push(interceptor);
  }
  embeddedEditUrl(_0, _1) {
    return __async(this, arguments, function* (templateId, embeddedEditUrlRequest, options = { headers: {} }) {
      if (embeddedEditUrlRequest !== null && embeddedEditUrlRequest !== void 0 && embeddedEditUrlRequest.constructor.name !== "EmbeddedEditUrlRequest") {
        embeddedEditUrlRequest = ObjectSerializer.deserialize(
          embeddedEditUrlRequest,
          "EmbeddedEditUrlRequest"
        );
      }
      const localVarPath = this.basePath + "/embedded/edit_url/{template_id}".replace(
        "{template_id}",
        encodeURIComponent(String(templateId))
      );
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (templateId === null || templateId === void 0) {
        throw new Error(
          "Required parameter templateId was null or undefined when calling embeddedEditUrl."
        );
      }
      if (embeddedEditUrlRequest === null || embeddedEditUrlRequest === void 0) {
        throw new Error(
          "Required parameter embeddedEditUrlRequest was null or undefined when calling embeddedEditUrl."
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      const result = generateFormData(
        embeddedEditUrlRequest,
        EmbeddedEditUrlRequest.attributeTypeMap
      );
      localVarUseFormData = result.localVarUseFormData;
      let data = {};
      if (localVarUseFormData) {
        const formData2 = toFormData3(result.data);
        data = formData2;
        localVarHeaderParams = __spreadValues(__spreadValues({}, localVarHeaderParams), formData2.getHeaders());
      } else {
        data = ObjectSerializer.serialize(
          embeddedEditUrlRequest,
          "EmbeddedEditUrlRequest"
        );
      }
      let localVarRequestOptions = {
        method: "POST",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
        responseType: "json",
        data
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise(
          (resolve, reject) => {
            axios_default.request(localVarRequestOptions).then(
              (response) => {
                let body = response.data;
                if (response.status && response.status >= 200 && response.status <= 299) {
                  body = ObjectSerializer.deserialize(
                    body,
                    "EmbeddedEditUrlResponse"
                  );
                  resolve({ response, body });
                } else {
                  reject(new HttpError(response, body, response.status));
                }
              },
              (error) => {
                if (error.response == null) {
                  reject(error);
                  return;
                }
                const response = error.response;
                let body;
                if (response.status === 200) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "EmbeddedEditUrlResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                let rangeCodeLeft = Number("4XX"[0] + "00");
                let rangeCodeRight = Number("4XX"[0] + "99");
                if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "ErrorResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                reject(error);
              }
            );
          }
        );
      });
    });
  }
  embeddedSignUrl(_0) {
    return __async(this, arguments, function* (signatureId, options = { headers: {} }) {
      const localVarPath = this.basePath + "/embedded/sign_url/{signature_id}".replace(
        "{signature_id}",
        encodeURIComponent(String(signatureId))
      );
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (signatureId === null || signatureId === void 0) {
        throw new Error(
          "Required parameter signatureId was null or undefined when calling embeddedSignUrl."
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      let localVarRequestOptions = {
        method: "GET",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
        responseType: "json"
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise(
          (resolve, reject) => {
            axios_default.request(localVarRequestOptions).then(
              (response) => {
                let body = response.data;
                if (response.status && response.status >= 200 && response.status <= 299) {
                  body = ObjectSerializer.deserialize(
                    body,
                    "EmbeddedSignUrlResponse"
                  );
                  resolve({ response, body });
                } else {
                  reject(new HttpError(response, body, response.status));
                }
              },
              (error) => {
                if (error.response == null) {
                  reject(error);
                  return;
                }
                const response = error.response;
                let body;
                if (response.status === 200) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "EmbeddedSignUrlResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                let rangeCodeLeft = Number("4XX"[0] + "00");
                let rangeCodeRight = Number("4XX"[0] + "99");
                if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "ErrorResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                reject(error);
              }
            );
          }
        );
      });
    });
  }
};

// api/oAuthApi.ts
var defaultBasePath5 = "https://app.hellosign.com";
var OAuthApi = class {
  constructor(basePath) {
    this._basePath = defaultBasePath5;
    this._defaultHeaders = {
      "User-Agent": USER_AGENT
    };
    this._useQuerystring = false;
    this.authentications = {
      default: new VoidAuth(),
      api_key: new HttpBasicAuth(),
      oauth2: new HttpBearerAuth()
    };
    this.interceptors = [];
    if (basePath) {
      this.basePath = basePath;
    }
  }
  set useQuerystring(value) {
    this._useQuerystring = value;
  }
  set basePath(basePath) {
    this._basePath = basePath;
  }
  set defaultHeaders(defaultHeaders) {
    this._defaultHeaders = defaultHeaders;
  }
  get defaultHeaders() {
    return this._defaultHeaders;
  }
  get basePath() {
    return this._basePath;
  }
  setDefaultAuthentication(auth) {
    this.authentications.default = auth;
  }
  setApiKey(key) {
    this.authentications.api_key.username = key;
  }
  set username(username) {
    this.authentications.api_key.username = username;
  }
  set password(password) {
    this.authentications.api_key.password = password;
  }
  set accessToken(accessToken) {
    this.authentications.oauth2.accessToken = accessToken;
  }
  addInterceptor(interceptor) {
    this.interceptors.push(interceptor);
  }
  oauthTokenGenerate(_0) {
    return __async(this, arguments, function* (oAuthTokenGenerateRequest, options = { headers: {} }) {
      if (oAuthTokenGenerateRequest !== null && oAuthTokenGenerateRequest !== void 0 && oAuthTokenGenerateRequest.constructor.name !== "OAuthTokenGenerateRequest") {
        oAuthTokenGenerateRequest = ObjectSerializer.deserialize(
          oAuthTokenGenerateRequest,
          "OAuthTokenGenerateRequest"
        );
      }
      const localVarPath = this.basePath + "/oauth/token";
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (oAuthTokenGenerateRequest === null || oAuthTokenGenerateRequest === void 0) {
        throw new Error(
          "Required parameter oAuthTokenGenerateRequest was null or undefined when calling oauthTokenGenerate."
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      const result = generateFormData(
        oAuthTokenGenerateRequest,
        OAuthTokenGenerateRequest.attributeTypeMap
      );
      localVarUseFormData = result.localVarUseFormData;
      let data = {};
      if (localVarUseFormData) {
        const formData2 = toFormData3(result.data);
        data = formData2;
        localVarHeaderParams = __spreadValues(__spreadValues({}, localVarHeaderParams), formData2.getHeaders());
      } else {
        data = ObjectSerializer.serialize(
          oAuthTokenGenerateRequest,
          "OAuthTokenGenerateRequest"
        );
      }
      let localVarRequestOptions = {
        method: "POST",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
        responseType: "json",
        data
      };
      let authenticationPromise = Promise.resolve();
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise((resolve, reject) => {
          axios_default.request(localVarRequestOptions).then(
            (response) => {
              let body = response.data;
              if (response.status && response.status >= 200 && response.status <= 299) {
                body = ObjectSerializer.deserialize(body, "OAuthTokenResponse");
                resolve({ response, body });
              } else {
                reject(new HttpError(response, body, response.status));
              }
            },
            (error) => {
              if (error.response == null) {
                reject(error);
                return;
              }
              const response = error.response;
              let body;
              if (response.status === 200) {
                body = ObjectSerializer.deserialize(
                  response.data,
                  "OAuthTokenResponse"
                );
                reject(new HttpError(response, body, response.status));
                return;
              }
              reject(error);
            }
          );
        });
      });
    });
  }
  oauthTokenRefresh(_0) {
    return __async(this, arguments, function* (oAuthTokenRefreshRequest, options = { headers: {} }) {
      if (oAuthTokenRefreshRequest !== null && oAuthTokenRefreshRequest !== void 0 && oAuthTokenRefreshRequest.constructor.name !== "OAuthTokenRefreshRequest") {
        oAuthTokenRefreshRequest = ObjectSerializer.deserialize(
          oAuthTokenRefreshRequest,
          "OAuthTokenRefreshRequest"
        );
      }
      const localVarPath = this.basePath + "/oauth/token?refresh";
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (oAuthTokenRefreshRequest === null || oAuthTokenRefreshRequest === void 0) {
        throw new Error(
          "Required parameter oAuthTokenRefreshRequest was null or undefined when calling oauthTokenRefresh."
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      const result = generateFormData(
        oAuthTokenRefreshRequest,
        OAuthTokenRefreshRequest.attributeTypeMap
      );
      localVarUseFormData = result.localVarUseFormData;
      let data = {};
      if (localVarUseFormData) {
        const formData2 = toFormData3(result.data);
        data = formData2;
        localVarHeaderParams = __spreadValues(__spreadValues({}, localVarHeaderParams), formData2.getHeaders());
      } else {
        data = ObjectSerializer.serialize(
          oAuthTokenRefreshRequest,
          "OAuthTokenRefreshRequest"
        );
      }
      let localVarRequestOptions = {
        method: "POST",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
        responseType: "json",
        data
      };
      let authenticationPromise = Promise.resolve();
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise((resolve, reject) => {
          axios_default.request(localVarRequestOptions).then(
            (response) => {
              let body = response.data;
              if (response.status && response.status >= 200 && response.status <= 299) {
                body = ObjectSerializer.deserialize(body, "OAuthTokenResponse");
                resolve({ response, body });
              } else {
                reject(new HttpError(response, body, response.status));
              }
            },
            (error) => {
              if (error.response == null) {
                reject(error);
                return;
              }
              const response = error.response;
              let body;
              if (response.status === 200) {
                body = ObjectSerializer.deserialize(
                  response.data,
                  "OAuthTokenResponse"
                );
                reject(new HttpError(response, body, response.status));
                return;
              }
              reject(error);
            }
          );
        });
      });
    });
  }
};

// api/reportApi.ts
var defaultBasePath6 = "https://api.hellosign.com/v3";
var ReportApi = class {
  constructor(basePath) {
    this._basePath = defaultBasePath6;
    this._defaultHeaders = {
      "User-Agent": USER_AGENT
    };
    this._useQuerystring = false;
    this.authentications = {
      default: new VoidAuth(),
      api_key: new HttpBasicAuth(),
      oauth2: new HttpBearerAuth()
    };
    this.interceptors = [];
    if (basePath) {
      this.basePath = basePath;
    }
  }
  set useQuerystring(value) {
    this._useQuerystring = value;
  }
  set basePath(basePath) {
    this._basePath = basePath;
  }
  set defaultHeaders(defaultHeaders) {
    this._defaultHeaders = defaultHeaders;
  }
  get defaultHeaders() {
    return this._defaultHeaders;
  }
  get basePath() {
    return this._basePath;
  }
  setDefaultAuthentication(auth) {
    this.authentications.default = auth;
  }
  setApiKey(key) {
    this.authentications.api_key.username = key;
  }
  set username(username) {
    this.authentications.api_key.username = username;
  }
  set password(password) {
    this.authentications.api_key.password = password;
  }
  set accessToken(accessToken) {
    this.authentications.oauth2.accessToken = accessToken;
  }
  addInterceptor(interceptor) {
    this.interceptors.push(interceptor);
  }
  reportCreate(_0) {
    return __async(this, arguments, function* (reportCreateRequest, options = { headers: {} }) {
      if (reportCreateRequest !== null && reportCreateRequest !== void 0 && reportCreateRequest.constructor.name !== "ReportCreateRequest") {
        reportCreateRequest = ObjectSerializer.deserialize(
          reportCreateRequest,
          "ReportCreateRequest"
        );
      }
      const localVarPath = this.basePath + "/report/create";
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (reportCreateRequest === null || reportCreateRequest === void 0) {
        throw new Error(
          "Required parameter reportCreateRequest was null or undefined when calling reportCreate."
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      const result = generateFormData(
        reportCreateRequest,
        ReportCreateRequest.attributeTypeMap
      );
      localVarUseFormData = result.localVarUseFormData;
      let data = {};
      if (localVarUseFormData) {
        const formData2 = toFormData3(result.data);
        data = formData2;
        localVarHeaderParams = __spreadValues(__spreadValues({}, localVarHeaderParams), formData2.getHeaders());
      } else {
        data = ObjectSerializer.serialize(
          reportCreateRequest,
          "ReportCreateRequest"
        );
      }
      let localVarRequestOptions = {
        method: "POST",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
        responseType: "json",
        data
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise(
          (resolve, reject) => {
            axios_default.request(localVarRequestOptions).then(
              (response) => {
                let body = response.data;
                if (response.status && response.status >= 200 && response.status <= 299) {
                  body = ObjectSerializer.deserialize(
                    body,
                    "ReportCreateResponse"
                  );
                  resolve({ response, body });
                } else {
                  reject(new HttpError(response, body, response.status));
                }
              },
              (error) => {
                if (error.response == null) {
                  reject(error);
                  return;
                }
                const response = error.response;
                let body;
                if (response.status === 200) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "ReportCreateResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                let rangeCodeLeft = Number("4XX"[0] + "00");
                let rangeCodeRight = Number("4XX"[0] + "99");
                if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "ErrorResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                reject(error);
              }
            );
          }
        );
      });
    });
  }
};

// api/signatureRequestApi.ts
var defaultBasePath7 = "https://api.hellosign.com/v3";
var SignatureRequestApi = class {
  constructor(basePath) {
    this._basePath = defaultBasePath7;
    this._defaultHeaders = {
      "User-Agent": USER_AGENT
    };
    this._useQuerystring = false;
    this.authentications = {
      default: new VoidAuth(),
      api_key: new HttpBasicAuth(),
      oauth2: new HttpBearerAuth()
    };
    this.interceptors = [];
    if (basePath) {
      this.basePath = basePath;
    }
  }
  set useQuerystring(value) {
    this._useQuerystring = value;
  }
  set basePath(basePath) {
    this._basePath = basePath;
  }
  set defaultHeaders(defaultHeaders) {
    this._defaultHeaders = defaultHeaders;
  }
  get defaultHeaders() {
    return this._defaultHeaders;
  }
  get basePath() {
    return this._basePath;
  }
  setDefaultAuthentication(auth) {
    this.authentications.default = auth;
  }
  setApiKey(key) {
    this.authentications.api_key.username = key;
  }
  set username(username) {
    this.authentications.api_key.username = username;
  }
  set password(password) {
    this.authentications.api_key.password = password;
  }
  set accessToken(accessToken) {
    this.authentications.oauth2.accessToken = accessToken;
  }
  addInterceptor(interceptor) {
    this.interceptors.push(interceptor);
  }
  signatureRequestBulkCreateEmbeddedWithTemplate(_0) {
    return __async(this, arguments, function* (signatureRequestBulkCreateEmbeddedWithTemplateRequest, options = { headers: {} }) {
      if (signatureRequestBulkCreateEmbeddedWithTemplateRequest !== null && signatureRequestBulkCreateEmbeddedWithTemplateRequest !== void 0 && signatureRequestBulkCreateEmbeddedWithTemplateRequest.constructor.name !== "SignatureRequestBulkCreateEmbeddedWithTemplateRequest") {
        signatureRequestBulkCreateEmbeddedWithTemplateRequest = ObjectSerializer.deserialize(
          signatureRequestBulkCreateEmbeddedWithTemplateRequest,
          "SignatureRequestBulkCreateEmbeddedWithTemplateRequest"
        );
      }
      const localVarPath = this.basePath + "/signature_request/bulk_create_embedded_with_template";
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (signatureRequestBulkCreateEmbeddedWithTemplateRequest === null || signatureRequestBulkCreateEmbeddedWithTemplateRequest === void 0) {
        throw new Error(
          "Required parameter signatureRequestBulkCreateEmbeddedWithTemplateRequest was null or undefined when calling signatureRequestBulkCreateEmbeddedWithTemplate."
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      const result = generateFormData(
        signatureRequestBulkCreateEmbeddedWithTemplateRequest,
        SignatureRequestBulkCreateEmbeddedWithTemplateRequest.attributeTypeMap
      );
      localVarUseFormData = result.localVarUseFormData;
      let data = {};
      if (localVarUseFormData) {
        const formData2 = toFormData3(result.data);
        data = formData2;
        localVarHeaderParams = __spreadValues(__spreadValues({}, localVarHeaderParams), formData2.getHeaders());
      } else {
        data = ObjectSerializer.serialize(
          signatureRequestBulkCreateEmbeddedWithTemplateRequest,
          "SignatureRequestBulkCreateEmbeddedWithTemplateRequest"
        );
      }
      let localVarRequestOptions = {
        method: "POST",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
        responseType: "json",
        data
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise(
          (resolve, reject) => {
            axios_default.request(localVarRequestOptions).then(
              (response) => {
                let body = response.data;
                if (response.status && response.status >= 200 && response.status <= 299) {
                  body = ObjectSerializer.deserialize(
                    body,
                    "BulkSendJobSendResponse"
                  );
                  resolve({ response, body });
                } else {
                  reject(new HttpError(response, body, response.status));
                }
              },
              (error) => {
                if (error.response == null) {
                  reject(error);
                  return;
                }
                const response = error.response;
                let body;
                if (response.status === 200) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "BulkSendJobSendResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                let rangeCodeLeft = Number("4XX"[0] + "00");
                let rangeCodeRight = Number("4XX"[0] + "99");
                if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "ErrorResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                reject(error);
              }
            );
          }
        );
      });
    });
  }
  signatureRequestBulkSendWithTemplate(_0) {
    return __async(this, arguments, function* (signatureRequestBulkSendWithTemplateRequest, options = { headers: {} }) {
      if (signatureRequestBulkSendWithTemplateRequest !== null && signatureRequestBulkSendWithTemplateRequest !== void 0 && signatureRequestBulkSendWithTemplateRequest.constructor.name !== "SignatureRequestBulkSendWithTemplateRequest") {
        signatureRequestBulkSendWithTemplateRequest = ObjectSerializer.deserialize(
          signatureRequestBulkSendWithTemplateRequest,
          "SignatureRequestBulkSendWithTemplateRequest"
        );
      }
      const localVarPath = this.basePath + "/signature_request/bulk_send_with_template";
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (signatureRequestBulkSendWithTemplateRequest === null || signatureRequestBulkSendWithTemplateRequest === void 0) {
        throw new Error(
          "Required parameter signatureRequestBulkSendWithTemplateRequest was null or undefined when calling signatureRequestBulkSendWithTemplate."
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      const result = generateFormData(
        signatureRequestBulkSendWithTemplateRequest,
        SignatureRequestBulkSendWithTemplateRequest.attributeTypeMap
      );
      localVarUseFormData = result.localVarUseFormData;
      let data = {};
      if (localVarUseFormData) {
        const formData2 = toFormData3(result.data);
        data = formData2;
        localVarHeaderParams = __spreadValues(__spreadValues({}, localVarHeaderParams), formData2.getHeaders());
      } else {
        data = ObjectSerializer.serialize(
          signatureRequestBulkSendWithTemplateRequest,
          "SignatureRequestBulkSendWithTemplateRequest"
        );
      }
      let localVarRequestOptions = {
        method: "POST",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
        responseType: "json",
        data
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise(
          (resolve, reject) => {
            axios_default.request(localVarRequestOptions).then(
              (response) => {
                let body = response.data;
                if (response.status && response.status >= 200 && response.status <= 299) {
                  body = ObjectSerializer.deserialize(
                    body,
                    "BulkSendJobSendResponse"
                  );
                  resolve({ response, body });
                } else {
                  reject(new HttpError(response, body, response.status));
                }
              },
              (error) => {
                if (error.response == null) {
                  reject(error);
                  return;
                }
                const response = error.response;
                let body;
                if (response.status === 200) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "BulkSendJobSendResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                let rangeCodeLeft = Number("4XX"[0] + "00");
                let rangeCodeRight = Number("4XX"[0] + "99");
                if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "ErrorResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                reject(error);
              }
            );
          }
        );
      });
    });
  }
  signatureRequestCancel(_0) {
    return __async(this, arguments, function* (signatureRequestId, options = { headers: {} }) {
      const localVarPath = this.basePath + "/signature_request/cancel/{signature_request_id}".replace(
        "{signature_request_id}",
        encodeURIComponent(String(signatureRequestId))
      );
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (signatureRequestId === null || signatureRequestId === void 0) {
        throw new Error(
          "Required parameter signatureRequestId was null or undefined when calling signatureRequestCancel."
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      let localVarRequestOptions = {
        method: "POST",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
        responseType: "json"
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise((resolve, reject) => {
          axios_default.request(localVarRequestOptions).then(
            (response) => {
              let body = response.data;
              if (response.status && response.status >= 200 && response.status <= 299) {
                resolve({ response, body });
              } else {
                reject(new HttpError(response, body, response.status));
              }
            },
            (error) => {
              if (error.response == null) {
                reject(error);
                return;
              }
              const response = error.response;
              let body;
              let rangeCodeLeft = Number("4XX"[0] + "00");
              let rangeCodeRight = Number("4XX"[0] + "99");
              if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                body = ObjectSerializer.deserialize(
                  response.data,
                  "ErrorResponse"
                );
                reject(new HttpError(response, body, response.status));
                return;
              }
              reject(error);
            }
          );
        });
      });
    });
  }
  signatureRequestCreateEmbedded(_0) {
    return __async(this, arguments, function* (signatureRequestCreateEmbeddedRequest, options = { headers: {} }) {
      if (signatureRequestCreateEmbeddedRequest !== null && signatureRequestCreateEmbeddedRequest !== void 0 && signatureRequestCreateEmbeddedRequest.constructor.name !== "SignatureRequestCreateEmbeddedRequest") {
        signatureRequestCreateEmbeddedRequest = ObjectSerializer.deserialize(
          signatureRequestCreateEmbeddedRequest,
          "SignatureRequestCreateEmbeddedRequest"
        );
      }
      const localVarPath = this.basePath + "/signature_request/create_embedded";
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (signatureRequestCreateEmbeddedRequest === null || signatureRequestCreateEmbeddedRequest === void 0) {
        throw new Error(
          "Required parameter signatureRequestCreateEmbeddedRequest was null or undefined when calling signatureRequestCreateEmbedded."
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      const result = generateFormData(
        signatureRequestCreateEmbeddedRequest,
        SignatureRequestCreateEmbeddedRequest.attributeTypeMap
      );
      localVarUseFormData = result.localVarUseFormData;
      let data = {};
      if (localVarUseFormData) {
        const formData2 = toFormData3(result.data);
        data = formData2;
        localVarHeaderParams = __spreadValues(__spreadValues({}, localVarHeaderParams), formData2.getHeaders());
      } else {
        data = ObjectSerializer.serialize(
          signatureRequestCreateEmbeddedRequest,
          "SignatureRequestCreateEmbeddedRequest"
        );
      }
      let localVarRequestOptions = {
        method: "POST",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
        responseType: "json",
        data
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise(
          (resolve, reject) => {
            axios_default.request(localVarRequestOptions).then(
              (response) => {
                let body = response.data;
                if (response.status && response.status >= 200 && response.status <= 299) {
                  body = ObjectSerializer.deserialize(
                    body,
                    "SignatureRequestGetResponse"
                  );
                  resolve({ response, body });
                } else {
                  reject(new HttpError(response, body, response.status));
                }
              },
              (error) => {
                if (error.response == null) {
                  reject(error);
                  return;
                }
                const response = error.response;
                let body;
                if (response.status === 200) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "SignatureRequestGetResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                let rangeCodeLeft = Number("4XX"[0] + "00");
                let rangeCodeRight = Number("4XX"[0] + "99");
                if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "ErrorResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                reject(error);
              }
            );
          }
        );
      });
    });
  }
  signatureRequestCreateEmbeddedWithTemplate(_0) {
    return __async(this, arguments, function* (signatureRequestCreateEmbeddedWithTemplateRequest, options = { headers: {} }) {
      if (signatureRequestCreateEmbeddedWithTemplateRequest !== null && signatureRequestCreateEmbeddedWithTemplateRequest !== void 0 && signatureRequestCreateEmbeddedWithTemplateRequest.constructor.name !== "SignatureRequestCreateEmbeddedWithTemplateRequest") {
        signatureRequestCreateEmbeddedWithTemplateRequest = ObjectSerializer.deserialize(
          signatureRequestCreateEmbeddedWithTemplateRequest,
          "SignatureRequestCreateEmbeddedWithTemplateRequest"
        );
      }
      const localVarPath = this.basePath + "/signature_request/create_embedded_with_template";
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (signatureRequestCreateEmbeddedWithTemplateRequest === null || signatureRequestCreateEmbeddedWithTemplateRequest === void 0) {
        throw new Error(
          "Required parameter signatureRequestCreateEmbeddedWithTemplateRequest was null or undefined when calling signatureRequestCreateEmbeddedWithTemplate."
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      const result = generateFormData(
        signatureRequestCreateEmbeddedWithTemplateRequest,
        SignatureRequestCreateEmbeddedWithTemplateRequest.attributeTypeMap
      );
      localVarUseFormData = result.localVarUseFormData;
      let data = {};
      if (localVarUseFormData) {
        const formData2 = toFormData3(result.data);
        data = formData2;
        localVarHeaderParams = __spreadValues(__spreadValues({}, localVarHeaderParams), formData2.getHeaders());
      } else {
        data = ObjectSerializer.serialize(
          signatureRequestCreateEmbeddedWithTemplateRequest,
          "SignatureRequestCreateEmbeddedWithTemplateRequest"
        );
      }
      let localVarRequestOptions = {
        method: "POST",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
        responseType: "json",
        data
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise(
          (resolve, reject) => {
            axios_default.request(localVarRequestOptions).then(
              (response) => {
                let body = response.data;
                if (response.status && response.status >= 200 && response.status <= 299) {
                  body = ObjectSerializer.deserialize(
                    body,
                    "SignatureRequestGetResponse"
                  );
                  resolve({ response, body });
                } else {
                  reject(new HttpError(response, body, response.status));
                }
              },
              (error) => {
                if (error.response == null) {
                  reject(error);
                  return;
                }
                const response = error.response;
                let body;
                if (response.status === 200) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "SignatureRequestGetResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                let rangeCodeLeft = Number("4XX"[0] + "00");
                let rangeCodeRight = Number("4XX"[0] + "99");
                if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "ErrorResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                reject(error);
              }
            );
          }
        );
      });
    });
  }
  signatureRequestEdit(_0, _1) {
    return __async(this, arguments, function* (signatureRequestId, signatureRequestEditRequest, options = { headers: {} }) {
      if (signatureRequestEditRequest !== null && signatureRequestEditRequest !== void 0 && signatureRequestEditRequest.constructor.name !== "SignatureRequestEditRequest") {
        signatureRequestEditRequest = ObjectSerializer.deserialize(
          signatureRequestEditRequest,
          "SignatureRequestEditRequest"
        );
      }
      const localVarPath = this.basePath + "/signature_request/edit/{signature_request_id}".replace(
        "{signature_request_id}",
        encodeURIComponent(String(signatureRequestId))
      );
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (signatureRequestId === null || signatureRequestId === void 0) {
        throw new Error(
          "Required parameter signatureRequestId was null or undefined when calling signatureRequestEdit."
        );
      }
      if (signatureRequestEditRequest === null || signatureRequestEditRequest === void 0) {
        throw new Error(
          "Required parameter signatureRequestEditRequest was null or undefined when calling signatureRequestEdit."
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      const result = generateFormData(
        signatureRequestEditRequest,
        SignatureRequestEditRequest.attributeTypeMap
      );
      localVarUseFormData = result.localVarUseFormData;
      let data = {};
      if (localVarUseFormData) {
        const formData2 = toFormData3(result.data);
        data = formData2;
        localVarHeaderParams = __spreadValues(__spreadValues({}, localVarHeaderParams), formData2.getHeaders());
      } else {
        data = ObjectSerializer.serialize(
          signatureRequestEditRequest,
          "SignatureRequestEditRequest"
        );
      }
      let localVarRequestOptions = {
        method: "PUT",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
        responseType: "json",
        data
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise(
          (resolve, reject) => {
            axios_default.request(localVarRequestOptions).then(
              (response) => {
                let body = response.data;
                if (response.status && response.status >= 200 && response.status <= 299) {
                  body = ObjectSerializer.deserialize(
                    body,
                    "SignatureRequestGetResponse"
                  );
                  resolve({ response, body });
                } else {
                  reject(new HttpError(response, body, response.status));
                }
              },
              (error) => {
                if (error.response == null) {
                  reject(error);
                  return;
                }
                const response = error.response;
                let body;
                if (response.status === 200) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "SignatureRequestGetResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                let rangeCodeLeft = Number("4XX"[0] + "00");
                let rangeCodeRight = Number("4XX"[0] + "99");
                if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "ErrorResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                reject(error);
              }
            );
          }
        );
      });
    });
  }
  signatureRequestEditEmbedded(_0, _1) {
    return __async(this, arguments, function* (signatureRequestId, signatureRequestEditEmbeddedRequest, options = { headers: {} }) {
      if (signatureRequestEditEmbeddedRequest !== null && signatureRequestEditEmbeddedRequest !== void 0 && signatureRequestEditEmbeddedRequest.constructor.name !== "SignatureRequestEditEmbeddedRequest") {
        signatureRequestEditEmbeddedRequest = ObjectSerializer.deserialize(
          signatureRequestEditEmbeddedRequest,
          "SignatureRequestEditEmbeddedRequest"
        );
      }
      const localVarPath = this.basePath + "/signature_request/edit_embedded/{signature_request_id}".replace(
        "{signature_request_id}",
        encodeURIComponent(String(signatureRequestId))
      );
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (signatureRequestId === null || signatureRequestId === void 0) {
        throw new Error(
          "Required parameter signatureRequestId was null or undefined when calling signatureRequestEditEmbedded."
        );
      }
      if (signatureRequestEditEmbeddedRequest === null || signatureRequestEditEmbeddedRequest === void 0) {
        throw new Error(
          "Required parameter signatureRequestEditEmbeddedRequest was null or undefined when calling signatureRequestEditEmbedded."
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      const result = generateFormData(
        signatureRequestEditEmbeddedRequest,
        SignatureRequestEditEmbeddedRequest.attributeTypeMap
      );
      localVarUseFormData = result.localVarUseFormData;
      let data = {};
      if (localVarUseFormData) {
        const formData2 = toFormData3(result.data);
        data = formData2;
        localVarHeaderParams = __spreadValues(__spreadValues({}, localVarHeaderParams), formData2.getHeaders());
      } else {
        data = ObjectSerializer.serialize(
          signatureRequestEditEmbeddedRequest,
          "SignatureRequestEditEmbeddedRequest"
        );
      }
      let localVarRequestOptions = {
        method: "PUT",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
        responseType: "json",
        data
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise(
          (resolve, reject) => {
            axios_default.request(localVarRequestOptions).then(
              (response) => {
                let body = response.data;
                if (response.status && response.status >= 200 && response.status <= 299) {
                  body = ObjectSerializer.deserialize(
                    body,
                    "SignatureRequestGetResponse"
                  );
                  resolve({ response, body });
                } else {
                  reject(new HttpError(response, body, response.status));
                }
              },
              (error) => {
                if (error.response == null) {
                  reject(error);
                  return;
                }
                const response = error.response;
                let body;
                if (response.status === 200) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "SignatureRequestGetResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                let rangeCodeLeft = Number("4XX"[0] + "00");
                let rangeCodeRight = Number("4XX"[0] + "99");
                if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "ErrorResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                reject(error);
              }
            );
          }
        );
      });
    });
  }
  signatureRequestEditEmbeddedWithTemplate(_0, _1) {
    return __async(this, arguments, function* (signatureRequestId, signatureRequestEditEmbeddedWithTemplateRequest, options = { headers: {} }) {
      if (signatureRequestEditEmbeddedWithTemplateRequest !== null && signatureRequestEditEmbeddedWithTemplateRequest !== void 0 && signatureRequestEditEmbeddedWithTemplateRequest.constructor.name !== "SignatureRequestEditEmbeddedWithTemplateRequest") {
        signatureRequestEditEmbeddedWithTemplateRequest = ObjectSerializer.deserialize(
          signatureRequestEditEmbeddedWithTemplateRequest,
          "SignatureRequestEditEmbeddedWithTemplateRequest"
        );
      }
      const localVarPath = this.basePath + "/signature_request/edit_embedded_with_template/{signature_request_id}".replace(
        "{signature_request_id}",
        encodeURIComponent(String(signatureRequestId))
      );
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (signatureRequestId === null || signatureRequestId === void 0) {
        throw new Error(
          "Required parameter signatureRequestId was null or undefined when calling signatureRequestEditEmbeddedWithTemplate."
        );
      }
      if (signatureRequestEditEmbeddedWithTemplateRequest === null || signatureRequestEditEmbeddedWithTemplateRequest === void 0) {
        throw new Error(
          "Required parameter signatureRequestEditEmbeddedWithTemplateRequest was null or undefined when calling signatureRequestEditEmbeddedWithTemplate."
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      const result = generateFormData(
        signatureRequestEditEmbeddedWithTemplateRequest,
        SignatureRequestEditEmbeddedWithTemplateRequest.attributeTypeMap
      );
      localVarUseFormData = result.localVarUseFormData;
      let data = {};
      if (localVarUseFormData) {
        const formData2 = toFormData3(result.data);
        data = formData2;
        localVarHeaderParams = __spreadValues(__spreadValues({}, localVarHeaderParams), formData2.getHeaders());
      } else {
        data = ObjectSerializer.serialize(
          signatureRequestEditEmbeddedWithTemplateRequest,
          "SignatureRequestEditEmbeddedWithTemplateRequest"
        );
      }
      let localVarRequestOptions = {
        method: "PUT",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
        responseType: "json",
        data
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise(
          (resolve, reject) => {
            axios_default.request(localVarRequestOptions).then(
              (response) => {
                let body = response.data;
                if (response.status && response.status >= 200 && response.status <= 299) {
                  body = ObjectSerializer.deserialize(
                    body,
                    "SignatureRequestGetResponse"
                  );
                  resolve({ response, body });
                } else {
                  reject(new HttpError(response, body, response.status));
                }
              },
              (error) => {
                if (error.response == null) {
                  reject(error);
                  return;
                }
                const response = error.response;
                let body;
                if (response.status === 200) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "SignatureRequestGetResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                let rangeCodeLeft = Number("4XX"[0] + "00");
                let rangeCodeRight = Number("4XX"[0] + "99");
                if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "ErrorResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                reject(error);
              }
            );
          }
        );
      });
    });
  }
  signatureRequestEditWithTemplate(_0, _1) {
    return __async(this, arguments, function* (signatureRequestId, signatureRequestEditWithTemplateRequest, options = { headers: {} }) {
      if (signatureRequestEditWithTemplateRequest !== null && signatureRequestEditWithTemplateRequest !== void 0 && signatureRequestEditWithTemplateRequest.constructor.name !== "SignatureRequestEditWithTemplateRequest") {
        signatureRequestEditWithTemplateRequest = ObjectSerializer.deserialize(
          signatureRequestEditWithTemplateRequest,
          "SignatureRequestEditWithTemplateRequest"
        );
      }
      const localVarPath = this.basePath + "/signature_request/edit_with_template/{signature_request_id}".replace(
        "{signature_request_id}",
        encodeURIComponent(String(signatureRequestId))
      );
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (signatureRequestId === null || signatureRequestId === void 0) {
        throw new Error(
          "Required parameter signatureRequestId was null or undefined when calling signatureRequestEditWithTemplate."
        );
      }
      if (signatureRequestEditWithTemplateRequest === null || signatureRequestEditWithTemplateRequest === void 0) {
        throw new Error(
          "Required parameter signatureRequestEditWithTemplateRequest was null or undefined when calling signatureRequestEditWithTemplate."
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      const result = generateFormData(
        signatureRequestEditWithTemplateRequest,
        SignatureRequestEditWithTemplateRequest.attributeTypeMap
      );
      localVarUseFormData = result.localVarUseFormData;
      let data = {};
      if (localVarUseFormData) {
        const formData2 = toFormData3(result.data);
        data = formData2;
        localVarHeaderParams = __spreadValues(__spreadValues({}, localVarHeaderParams), formData2.getHeaders());
      } else {
        data = ObjectSerializer.serialize(
          signatureRequestEditWithTemplateRequest,
          "SignatureRequestEditWithTemplateRequest"
        );
      }
      let localVarRequestOptions = {
        method: "PUT",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
        responseType: "json",
        data
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise(
          (resolve, reject) => {
            axios_default.request(localVarRequestOptions).then(
              (response) => {
                let body = response.data;
                if (response.status && response.status >= 200 && response.status <= 299) {
                  body = ObjectSerializer.deserialize(
                    body,
                    "SignatureRequestGetResponse"
                  );
                  resolve({ response, body });
                } else {
                  reject(new HttpError(response, body, response.status));
                }
              },
              (error) => {
                if (error.response == null) {
                  reject(error);
                  return;
                }
                const response = error.response;
                let body;
                if (response.status === 200) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "SignatureRequestGetResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                let rangeCodeLeft = Number("4XX"[0] + "00");
                let rangeCodeRight = Number("4XX"[0] + "99");
                if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "ErrorResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                reject(error);
              }
            );
          }
        );
      });
    });
  }
  signatureRequestFiles(_0, _1) {
    return __async(this, arguments, function* (signatureRequestId, fileType, options = { headers: {} }) {
      const localVarPath = this.basePath + "/signature_request/files/{signature_request_id}".replace(
        "{signature_request_id}",
        encodeURIComponent(String(signatureRequestId))
      );
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/pdf", "application/zip", "application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (signatureRequestId === null || signatureRequestId === void 0) {
        throw new Error(
          "Required parameter signatureRequestId was null or undefined when calling signatureRequestFiles."
        );
      }
      if (fileType !== void 0) {
        localVarQueryParameters["file_type"] = ObjectSerializer.serialize(
          fileType,
          "'pdf' | 'zip'"
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      let localVarRequestOptions = {
        method: "GET",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
        responseType: "arraybuffer"
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise((resolve, reject) => {
          axios_default.request(localVarRequestOptions).then(
            (response) => {
              let body = response.data;
              if (response.status && response.status >= 200 && response.status <= 299) {
                body = ObjectSerializer.deserialize(body, "Buffer");
                resolve({ response, body });
              } else {
                reject(new HttpError(response, body, response.status));
              }
            },
            (error) => {
              if (error.response == null) {
                reject(error);
                return;
              }
              const response = error.response;
              let body;
              if (response.status === 200) {
                body = ObjectSerializer.deserialize(response.data, "RequestFile");
                reject(new HttpError(response, body, response.status));
                return;
              }
              let rangeCodeLeft = Number("4XX"[0] + "00");
              let rangeCodeRight = Number("4XX"[0] + "99");
              if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                body = ObjectSerializer.deserialize(
                  response.data,
                  "ErrorResponse"
                );
                reject(new HttpError(response, body, response.status));
                return;
              }
              reject(error);
            }
          );
        });
      });
    });
  }
  signatureRequestFilesAsDataUri(_0) {
    return __async(this, arguments, function* (signatureRequestId, options = { headers: {} }) {
      const localVarPath = this.basePath + "/signature_request/files_as_data_uri/{signature_request_id}".replace(
        "{signature_request_id}",
        encodeURIComponent(String(signatureRequestId))
      );
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (signatureRequestId === null || signatureRequestId === void 0) {
        throw new Error(
          "Required parameter signatureRequestId was null or undefined when calling signatureRequestFilesAsDataUri."
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      let localVarRequestOptions = {
        method: "GET",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
        responseType: "json"
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise(
          (resolve, reject) => {
            axios_default.request(localVarRequestOptions).then(
              (response) => {
                let body = response.data;
                if (response.status && response.status >= 200 && response.status <= 299) {
                  body = ObjectSerializer.deserialize(
                    body,
                    "FileResponseDataUri"
                  );
                  resolve({ response, body });
                } else {
                  reject(new HttpError(response, body, response.status));
                }
              },
              (error) => {
                if (error.response == null) {
                  reject(error);
                  return;
                }
                const response = error.response;
                let body;
                if (response.status === 200) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "FileResponseDataUri"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                let rangeCodeLeft = Number("4XX"[0] + "00");
                let rangeCodeRight = Number("4XX"[0] + "99");
                if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "ErrorResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                reject(error);
              }
            );
          }
        );
      });
    });
  }
  signatureRequestFilesAsFileUrl(_0, _1) {
    return __async(this, arguments, function* (signatureRequestId, forceDownload, options = { headers: {} }) {
      const localVarPath = this.basePath + "/signature_request/files_as_file_url/{signature_request_id}".replace(
        "{signature_request_id}",
        encodeURIComponent(String(signatureRequestId))
      );
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (signatureRequestId === null || signatureRequestId === void 0) {
        throw new Error(
          "Required parameter signatureRequestId was null or undefined when calling signatureRequestFilesAsFileUrl."
        );
      }
      if (forceDownload !== void 0) {
        localVarQueryParameters["force_download"] = ObjectSerializer.serialize(
          forceDownload,
          "number"
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      let localVarRequestOptions = {
        method: "GET",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
        responseType: "json"
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise((resolve, reject) => {
          axios_default.request(localVarRequestOptions).then(
            (response) => {
              let body = response.data;
              if (response.status && response.status >= 200 && response.status <= 299) {
                body = ObjectSerializer.deserialize(body, "FileResponse");
                resolve({ response, body });
              } else {
                reject(new HttpError(response, body, response.status));
              }
            },
            (error) => {
              if (error.response == null) {
                reject(error);
                return;
              }
              const response = error.response;
              let body;
              if (response.status === 200) {
                body = ObjectSerializer.deserialize(
                  response.data,
                  "FileResponse"
                );
                reject(new HttpError(response, body, response.status));
                return;
              }
              let rangeCodeLeft = Number("4XX"[0] + "00");
              let rangeCodeRight = Number("4XX"[0] + "99");
              if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                body = ObjectSerializer.deserialize(
                  response.data,
                  "ErrorResponse"
                );
                reject(new HttpError(response, body, response.status));
                return;
              }
              reject(error);
            }
          );
        });
      });
    });
  }
  signatureRequestGet(_0) {
    return __async(this, arguments, function* (signatureRequestId, options = { headers: {} }) {
      const localVarPath = this.basePath + "/signature_request/{signature_request_id}".replace(
        "{signature_request_id}",
        encodeURIComponent(String(signatureRequestId))
      );
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (signatureRequestId === null || signatureRequestId === void 0) {
        throw new Error(
          "Required parameter signatureRequestId was null or undefined when calling signatureRequestGet."
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      let localVarRequestOptions = {
        method: "GET",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
        responseType: "json"
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise(
          (resolve, reject) => {
            axios_default.request(localVarRequestOptions).then(
              (response) => {
                let body = response.data;
                if (response.status && response.status >= 200 && response.status <= 299) {
                  body = ObjectSerializer.deserialize(
                    body,
                    "SignatureRequestGetResponse"
                  );
                  resolve({ response, body });
                } else {
                  reject(new HttpError(response, body, response.status));
                }
              },
              (error) => {
                if (error.response == null) {
                  reject(error);
                  return;
                }
                const response = error.response;
                let body;
                if (response.status === 200) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "SignatureRequestGetResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                let rangeCodeLeft = Number("4XX"[0] + "00");
                let rangeCodeRight = Number("4XX"[0] + "99");
                if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "ErrorResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                reject(error);
              }
            );
          }
        );
      });
    });
  }
  signatureRequestList(_0, _1, _2, _3) {
    return __async(this, arguments, function* (accountId, page, pageSize, query, options = { headers: {} }) {
      const localVarPath = this.basePath + "/signature_request/list";
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (accountId !== void 0) {
        localVarQueryParameters["account_id"] = ObjectSerializer.serialize(
          accountId,
          "string"
        );
      }
      if (page !== void 0) {
        localVarQueryParameters["page"] = ObjectSerializer.serialize(
          page,
          "number"
        );
      }
      if (pageSize !== void 0) {
        localVarQueryParameters["page_size"] = ObjectSerializer.serialize(
          pageSize,
          "number"
        );
      }
      if (query !== void 0) {
        localVarQueryParameters["query"] = ObjectSerializer.serialize(
          query,
          "string"
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      let localVarRequestOptions = {
        method: "GET",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
        responseType: "json"
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise(
          (resolve, reject) => {
            axios_default.request(localVarRequestOptions).then(
              (response) => {
                let body = response.data;
                if (response.status && response.status >= 200 && response.status <= 299) {
                  body = ObjectSerializer.deserialize(
                    body,
                    "SignatureRequestListResponse"
                  );
                  resolve({ response, body });
                } else {
                  reject(new HttpError(response, body, response.status));
                }
              },
              (error) => {
                if (error.response == null) {
                  reject(error);
                  return;
                }
                const response = error.response;
                let body;
                if (response.status === 200) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "SignatureRequestListResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                let rangeCodeLeft = Number("4XX"[0] + "00");
                let rangeCodeRight = Number("4XX"[0] + "99");
                if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "ErrorResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                reject(error);
              }
            );
          }
        );
      });
    });
  }
  signatureRequestReleaseHold(_0) {
    return __async(this, arguments, function* (signatureRequestId, options = { headers: {} }) {
      const localVarPath = this.basePath + "/signature_request/release_hold/{signature_request_id}".replace(
        "{signature_request_id}",
        encodeURIComponent(String(signatureRequestId))
      );
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (signatureRequestId === null || signatureRequestId === void 0) {
        throw new Error(
          "Required parameter signatureRequestId was null or undefined when calling signatureRequestReleaseHold."
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      let localVarRequestOptions = {
        method: "POST",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
        responseType: "json"
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise(
          (resolve, reject) => {
            axios_default.request(localVarRequestOptions).then(
              (response) => {
                let body = response.data;
                if (response.status && response.status >= 200 && response.status <= 299) {
                  body = ObjectSerializer.deserialize(
                    body,
                    "SignatureRequestGetResponse"
                  );
                  resolve({ response, body });
                } else {
                  reject(new HttpError(response, body, response.status));
                }
              },
              (error) => {
                if (error.response == null) {
                  reject(error);
                  return;
                }
                const response = error.response;
                let body;
                if (response.status === 200) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "SignatureRequestGetResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                let rangeCodeLeft = Number("4XX"[0] + "00");
                let rangeCodeRight = Number("4XX"[0] + "99");
                if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "ErrorResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                reject(error);
              }
            );
          }
        );
      });
    });
  }
  signatureRequestRemind(_0, _1) {
    return __async(this, arguments, function* (signatureRequestId, signatureRequestRemindRequest, options = { headers: {} }) {
      if (signatureRequestRemindRequest !== null && signatureRequestRemindRequest !== void 0 && signatureRequestRemindRequest.constructor.name !== "SignatureRequestRemindRequest") {
        signatureRequestRemindRequest = ObjectSerializer.deserialize(
          signatureRequestRemindRequest,
          "SignatureRequestRemindRequest"
        );
      }
      const localVarPath = this.basePath + "/signature_request/remind/{signature_request_id}".replace(
        "{signature_request_id}",
        encodeURIComponent(String(signatureRequestId))
      );
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (signatureRequestId === null || signatureRequestId === void 0) {
        throw new Error(
          "Required parameter signatureRequestId was null or undefined when calling signatureRequestRemind."
        );
      }
      if (signatureRequestRemindRequest === null || signatureRequestRemindRequest === void 0) {
        throw new Error(
          "Required parameter signatureRequestRemindRequest was null or undefined when calling signatureRequestRemind."
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      const result = generateFormData(
        signatureRequestRemindRequest,
        SignatureRequestRemindRequest.attributeTypeMap
      );
      localVarUseFormData = result.localVarUseFormData;
      let data = {};
      if (localVarUseFormData) {
        const formData2 = toFormData3(result.data);
        data = formData2;
        localVarHeaderParams = __spreadValues(__spreadValues({}, localVarHeaderParams), formData2.getHeaders());
      } else {
        data = ObjectSerializer.serialize(
          signatureRequestRemindRequest,
          "SignatureRequestRemindRequest"
        );
      }
      let localVarRequestOptions = {
        method: "POST",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
        responseType: "json",
        data
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise(
          (resolve, reject) => {
            axios_default.request(localVarRequestOptions).then(
              (response) => {
                let body = response.data;
                if (response.status && response.status >= 200 && response.status <= 299) {
                  body = ObjectSerializer.deserialize(
                    body,
                    "SignatureRequestGetResponse"
                  );
                  resolve({ response, body });
                } else {
                  reject(new HttpError(response, body, response.status));
                }
              },
              (error) => {
                if (error.response == null) {
                  reject(error);
                  return;
                }
                const response = error.response;
                let body;
                if (response.status === 200) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "SignatureRequestGetResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                let rangeCodeLeft = Number("4XX"[0] + "00");
                let rangeCodeRight = Number("4XX"[0] + "99");
                if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "ErrorResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                reject(error);
              }
            );
          }
        );
      });
    });
  }
  signatureRequestRemove(_0) {
    return __async(this, arguments, function* (signatureRequestId, options = { headers: {} }) {
      const localVarPath = this.basePath + "/signature_request/remove/{signature_request_id}".replace(
        "{signature_request_id}",
        encodeURIComponent(String(signatureRequestId))
      );
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (signatureRequestId === null || signatureRequestId === void 0) {
        throw new Error(
          "Required parameter signatureRequestId was null or undefined when calling signatureRequestRemove."
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      let localVarRequestOptions = {
        method: "POST",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
        responseType: "json"
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise((resolve, reject) => {
          axios_default.request(localVarRequestOptions).then(
            (response) => {
              let body = response.data;
              if (response.status && response.status >= 200 && response.status <= 299) {
                resolve({ response, body });
              } else {
                reject(new HttpError(response, body, response.status));
              }
            },
            (error) => {
              if (error.response == null) {
                reject(error);
                return;
              }
              const response = error.response;
              let body;
              let rangeCodeLeft = Number("4XX"[0] + "00");
              let rangeCodeRight = Number("4XX"[0] + "99");
              if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                body = ObjectSerializer.deserialize(
                  response.data,
                  "ErrorResponse"
                );
                reject(new HttpError(response, body, response.status));
                return;
              }
              reject(error);
            }
          );
        });
      });
    });
  }
  signatureRequestSend(_0) {
    return __async(this, arguments, function* (signatureRequestSendRequest, options = { headers: {} }) {
      if (signatureRequestSendRequest !== null && signatureRequestSendRequest !== void 0 && signatureRequestSendRequest.constructor.name !== "SignatureRequestSendRequest") {
        signatureRequestSendRequest = ObjectSerializer.deserialize(
          signatureRequestSendRequest,
          "SignatureRequestSendRequest"
        );
      }
      const localVarPath = this.basePath + "/signature_request/send";
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (signatureRequestSendRequest === null || signatureRequestSendRequest === void 0) {
        throw new Error(
          "Required parameter signatureRequestSendRequest was null or undefined when calling signatureRequestSend."
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      const result = generateFormData(
        signatureRequestSendRequest,
        SignatureRequestSendRequest.attributeTypeMap
      );
      localVarUseFormData = result.localVarUseFormData;
      let data = {};
      if (localVarUseFormData) {
        const formData2 = toFormData3(result.data);
        data = formData2;
        localVarHeaderParams = __spreadValues(__spreadValues({}, localVarHeaderParams), formData2.getHeaders());
      } else {
        data = ObjectSerializer.serialize(
          signatureRequestSendRequest,
          "SignatureRequestSendRequest"
        );
      }
      let localVarRequestOptions = {
        method: "POST",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
        responseType: "json",
        data
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise(
          (resolve, reject) => {
            axios_default.request(localVarRequestOptions).then(
              (response) => {
                let body = response.data;
                if (response.status && response.status >= 200 && response.status <= 299) {
                  body = ObjectSerializer.deserialize(
                    body,
                    "SignatureRequestGetResponse"
                  );
                  resolve({ response, body });
                } else {
                  reject(new HttpError(response, body, response.status));
                }
              },
              (error) => {
                if (error.response == null) {
                  reject(error);
                  return;
                }
                const response = error.response;
                let body;
                if (response.status === 200) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "SignatureRequestGetResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                let rangeCodeLeft = Number("4XX"[0] + "00");
                let rangeCodeRight = Number("4XX"[0] + "99");
                if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "ErrorResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                reject(error);
              }
            );
          }
        );
      });
    });
  }
  signatureRequestSendWithTemplate(_0) {
    return __async(this, arguments, function* (signatureRequestSendWithTemplateRequest, options = { headers: {} }) {
      if (signatureRequestSendWithTemplateRequest !== null && signatureRequestSendWithTemplateRequest !== void 0 && signatureRequestSendWithTemplateRequest.constructor.name !== "SignatureRequestSendWithTemplateRequest") {
        signatureRequestSendWithTemplateRequest = ObjectSerializer.deserialize(
          signatureRequestSendWithTemplateRequest,
          "SignatureRequestSendWithTemplateRequest"
        );
      }
      const localVarPath = this.basePath + "/signature_request/send_with_template";
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (signatureRequestSendWithTemplateRequest === null || signatureRequestSendWithTemplateRequest === void 0) {
        throw new Error(
          "Required parameter signatureRequestSendWithTemplateRequest was null or undefined when calling signatureRequestSendWithTemplate."
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      const result = generateFormData(
        signatureRequestSendWithTemplateRequest,
        SignatureRequestSendWithTemplateRequest.attributeTypeMap
      );
      localVarUseFormData = result.localVarUseFormData;
      let data = {};
      if (localVarUseFormData) {
        const formData2 = toFormData3(result.data);
        data = formData2;
        localVarHeaderParams = __spreadValues(__spreadValues({}, localVarHeaderParams), formData2.getHeaders());
      } else {
        data = ObjectSerializer.serialize(
          signatureRequestSendWithTemplateRequest,
          "SignatureRequestSendWithTemplateRequest"
        );
      }
      let localVarRequestOptions = {
        method: "POST",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
        responseType: "json",
        data
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise(
          (resolve, reject) => {
            axios_default.request(localVarRequestOptions).then(
              (response) => {
                let body = response.data;
                if (response.status && response.status >= 200 && response.status <= 299) {
                  body = ObjectSerializer.deserialize(
                    body,
                    "SignatureRequestGetResponse"
                  );
                  resolve({ response, body });
                } else {
                  reject(new HttpError(response, body, response.status));
                }
              },
              (error) => {
                if (error.response == null) {
                  reject(error);
                  return;
                }
                const response = error.response;
                let body;
                if (response.status === 200) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "SignatureRequestGetResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                let rangeCodeLeft = Number("4XX"[0] + "00");
                let rangeCodeRight = Number("4XX"[0] + "99");
                if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "ErrorResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                reject(error);
              }
            );
          }
        );
      });
    });
  }
  signatureRequestUpdate(_0, _1) {
    return __async(this, arguments, function* (signatureRequestId, signatureRequestUpdateRequest, options = { headers: {} }) {
      if (signatureRequestUpdateRequest !== null && signatureRequestUpdateRequest !== void 0 && signatureRequestUpdateRequest.constructor.name !== "SignatureRequestUpdateRequest") {
        signatureRequestUpdateRequest = ObjectSerializer.deserialize(
          signatureRequestUpdateRequest,
          "SignatureRequestUpdateRequest"
        );
      }
      const localVarPath = this.basePath + "/signature_request/update/{signature_request_id}".replace(
        "{signature_request_id}",
        encodeURIComponent(String(signatureRequestId))
      );
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (signatureRequestId === null || signatureRequestId === void 0) {
        throw new Error(
          "Required parameter signatureRequestId was null or undefined when calling signatureRequestUpdate."
        );
      }
      if (signatureRequestUpdateRequest === null || signatureRequestUpdateRequest === void 0) {
        throw new Error(
          "Required parameter signatureRequestUpdateRequest was null or undefined when calling signatureRequestUpdate."
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      const result = generateFormData(
        signatureRequestUpdateRequest,
        SignatureRequestUpdateRequest.attributeTypeMap
      );
      localVarUseFormData = result.localVarUseFormData;
      let data = {};
      if (localVarUseFormData) {
        const formData2 = toFormData3(result.data);
        data = formData2;
        localVarHeaderParams = __spreadValues(__spreadValues({}, localVarHeaderParams), formData2.getHeaders());
      } else {
        data = ObjectSerializer.serialize(
          signatureRequestUpdateRequest,
          "SignatureRequestUpdateRequest"
        );
      }
      let localVarRequestOptions = {
        method: "POST",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
        responseType: "json",
        data
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise(
          (resolve, reject) => {
            axios_default.request(localVarRequestOptions).then(
              (response) => {
                let body = response.data;
                if (response.status && response.status >= 200 && response.status <= 299) {
                  body = ObjectSerializer.deserialize(
                    body,
                    "SignatureRequestGetResponse"
                  );
                  resolve({ response, body });
                } else {
                  reject(new HttpError(response, body, response.status));
                }
              },
              (error) => {
                if (error.response == null) {
                  reject(error);
                  return;
                }
                const response = error.response;
                let body;
                if (response.status === 200) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "SignatureRequestGetResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                let rangeCodeLeft = Number("4XX"[0] + "00");
                let rangeCodeRight = Number("4XX"[0] + "99");
                if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "ErrorResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                reject(error);
              }
            );
          }
        );
      });
    });
  }
};

// api/teamApi.ts
var defaultBasePath8 = "https://api.hellosign.com/v3";
var TeamApi = class {
  constructor(basePath) {
    this._basePath = defaultBasePath8;
    this._defaultHeaders = {
      "User-Agent": USER_AGENT
    };
    this._useQuerystring = false;
    this.authentications = {
      default: new VoidAuth(),
      api_key: new HttpBasicAuth(),
      oauth2: new HttpBearerAuth()
    };
    this.interceptors = [];
    if (basePath) {
      this.basePath = basePath;
    }
  }
  set useQuerystring(value) {
    this._useQuerystring = value;
  }
  set basePath(basePath) {
    this._basePath = basePath;
  }
  set defaultHeaders(defaultHeaders) {
    this._defaultHeaders = defaultHeaders;
  }
  get defaultHeaders() {
    return this._defaultHeaders;
  }
  get basePath() {
    return this._basePath;
  }
  setDefaultAuthentication(auth) {
    this.authentications.default = auth;
  }
  setApiKey(key) {
    this.authentications.api_key.username = key;
  }
  set username(username) {
    this.authentications.api_key.username = username;
  }
  set password(password) {
    this.authentications.api_key.password = password;
  }
  set accessToken(accessToken) {
    this.authentications.oauth2.accessToken = accessToken;
  }
  addInterceptor(interceptor) {
    this.interceptors.push(interceptor);
  }
  teamAddMember(_0, _1) {
    return __async(this, arguments, function* (teamAddMemberRequest, teamId, options = { headers: {} }) {
      if (teamAddMemberRequest !== null && teamAddMemberRequest !== void 0 && teamAddMemberRequest.constructor.name !== "TeamAddMemberRequest") {
        teamAddMemberRequest = ObjectSerializer.deserialize(
          teamAddMemberRequest,
          "TeamAddMemberRequest"
        );
      }
      const localVarPath = this.basePath + "/team/add_member";
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (teamAddMemberRequest === null || teamAddMemberRequest === void 0) {
        throw new Error(
          "Required parameter teamAddMemberRequest was null or undefined when calling teamAddMember."
        );
      }
      if (teamId !== void 0) {
        localVarQueryParameters["team_id"] = ObjectSerializer.serialize(
          teamId,
          "string"
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      const result = generateFormData(
        teamAddMemberRequest,
        TeamAddMemberRequest.attributeTypeMap
      );
      localVarUseFormData = result.localVarUseFormData;
      let data = {};
      if (localVarUseFormData) {
        const formData2 = toFormData3(result.data);
        data = formData2;
        localVarHeaderParams = __spreadValues(__spreadValues({}, localVarHeaderParams), formData2.getHeaders());
      } else {
        data = ObjectSerializer.serialize(
          teamAddMemberRequest,
          "TeamAddMemberRequest"
        );
      }
      let localVarRequestOptions = {
        method: "PUT",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
        responseType: "json",
        data
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise((resolve, reject) => {
          axios_default.request(localVarRequestOptions).then(
            (response) => {
              let body = response.data;
              if (response.status && response.status >= 200 && response.status <= 299) {
                body = ObjectSerializer.deserialize(body, "TeamGetResponse");
                resolve({ response, body });
              } else {
                reject(new HttpError(response, body, response.status));
              }
            },
            (error) => {
              if (error.response == null) {
                reject(error);
                return;
              }
              const response = error.response;
              let body;
              if (response.status === 200) {
                body = ObjectSerializer.deserialize(
                  response.data,
                  "TeamGetResponse"
                );
                reject(new HttpError(response, body, response.status));
                return;
              }
              let rangeCodeLeft = Number("4XX"[0] + "00");
              let rangeCodeRight = Number("4XX"[0] + "99");
              if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                body = ObjectSerializer.deserialize(
                  response.data,
                  "ErrorResponse"
                );
                reject(new HttpError(response, body, response.status));
                return;
              }
              reject(error);
            }
          );
        });
      });
    });
  }
  teamCreate(_0) {
    return __async(this, arguments, function* (teamCreateRequest, options = { headers: {} }) {
      if (teamCreateRequest !== null && teamCreateRequest !== void 0 && teamCreateRequest.constructor.name !== "TeamCreateRequest") {
        teamCreateRequest = ObjectSerializer.deserialize(
          teamCreateRequest,
          "TeamCreateRequest"
        );
      }
      const localVarPath = this.basePath + "/team/create";
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (teamCreateRequest === null || teamCreateRequest === void 0) {
        throw new Error(
          "Required parameter teamCreateRequest was null or undefined when calling teamCreate."
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      const result = generateFormData(
        teamCreateRequest,
        TeamCreateRequest.attributeTypeMap
      );
      localVarUseFormData = result.localVarUseFormData;
      let data = {};
      if (localVarUseFormData) {
        const formData2 = toFormData3(result.data);
        data = formData2;
        localVarHeaderParams = __spreadValues(__spreadValues({}, localVarHeaderParams), formData2.getHeaders());
      } else {
        data = ObjectSerializer.serialize(teamCreateRequest, "TeamCreateRequest");
      }
      let localVarRequestOptions = {
        method: "POST",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
        responseType: "json",
        data
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise((resolve, reject) => {
          axios_default.request(localVarRequestOptions).then(
            (response) => {
              let body = response.data;
              if (response.status && response.status >= 200 && response.status <= 299) {
                body = ObjectSerializer.deserialize(body, "TeamGetResponse");
                resolve({ response, body });
              } else {
                reject(new HttpError(response, body, response.status));
              }
            },
            (error) => {
              if (error.response == null) {
                reject(error);
                return;
              }
              const response = error.response;
              let body;
              if (response.status === 200) {
                body = ObjectSerializer.deserialize(
                  response.data,
                  "TeamGetResponse"
                );
                reject(new HttpError(response, body, response.status));
                return;
              }
              let rangeCodeLeft = Number("4XX"[0] + "00");
              let rangeCodeRight = Number("4XX"[0] + "99");
              if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                body = ObjectSerializer.deserialize(
                  response.data,
                  "ErrorResponse"
                );
                reject(new HttpError(response, body, response.status));
                return;
              }
              reject(error);
            }
          );
        });
      });
    });
  }
  teamDelete() {
    return __async(this, arguments, function* (options = { headers: {} }) {
      const localVarPath = this.basePath + "/team/destroy";
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      let localVarRequestOptions = {
        method: "DELETE",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
        responseType: "json"
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise((resolve, reject) => {
          axios_default.request(localVarRequestOptions).then(
            (response) => {
              let body = response.data;
              if (response.status && response.status >= 200 && response.status <= 299) {
                resolve({ response, body });
              } else {
                reject(new HttpError(response, body, response.status));
              }
            },
            (error) => {
              if (error.response == null) {
                reject(error);
                return;
              }
              const response = error.response;
              let body;
              let rangeCodeLeft = Number("4XX"[0] + "00");
              let rangeCodeRight = Number("4XX"[0] + "99");
              if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                body = ObjectSerializer.deserialize(
                  response.data,
                  "ErrorResponse"
                );
                reject(new HttpError(response, body, response.status));
                return;
              }
              reject(error);
            }
          );
        });
      });
    });
  }
  teamGet() {
    return __async(this, arguments, function* (options = { headers: {} }) {
      const localVarPath = this.basePath + "/team";
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      let localVarRequestOptions = {
        method: "GET",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
        responseType: "json"
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise((resolve, reject) => {
          axios_default.request(localVarRequestOptions).then(
            (response) => {
              let body = response.data;
              if (response.status && response.status >= 200 && response.status <= 299) {
                body = ObjectSerializer.deserialize(body, "TeamGetResponse");
                resolve({ response, body });
              } else {
                reject(new HttpError(response, body, response.status));
              }
            },
            (error) => {
              if (error.response == null) {
                reject(error);
                return;
              }
              const response = error.response;
              let body;
              if (response.status === 200) {
                body = ObjectSerializer.deserialize(
                  response.data,
                  "TeamGetResponse"
                );
                reject(new HttpError(response, body, response.status));
                return;
              }
              let rangeCodeLeft = Number("4XX"[0] + "00");
              let rangeCodeRight = Number("4XX"[0] + "99");
              if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                body = ObjectSerializer.deserialize(
                  response.data,
                  "ErrorResponse"
                );
                reject(new HttpError(response, body, response.status));
                return;
              }
              reject(error);
            }
          );
        });
      });
    });
  }
  teamInfo(_0) {
    return __async(this, arguments, function* (teamId, options = { headers: {} }) {
      const localVarPath = this.basePath + "/team/info";
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (teamId !== void 0) {
        localVarQueryParameters["team_id"] = ObjectSerializer.serialize(
          teamId,
          "string"
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      let localVarRequestOptions = {
        method: "GET",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
        responseType: "json"
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise(
          (resolve, reject) => {
            axios_default.request(localVarRequestOptions).then(
              (response) => {
                let body = response.data;
                if (response.status && response.status >= 200 && response.status <= 299) {
                  body = ObjectSerializer.deserialize(
                    body,
                    "TeamGetInfoResponse"
                  );
                  resolve({ response, body });
                } else {
                  reject(new HttpError(response, body, response.status));
                }
              },
              (error) => {
                if (error.response == null) {
                  reject(error);
                  return;
                }
                const response = error.response;
                let body;
                if (response.status === 200) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "TeamGetInfoResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                let rangeCodeLeft = Number("4XX"[0] + "00");
                let rangeCodeRight = Number("4XX"[0] + "99");
                if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "ErrorResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                reject(error);
              }
            );
          }
        );
      });
    });
  }
  teamInvites(_0) {
    return __async(this, arguments, function* (emailAddress, options = { headers: {} }) {
      const localVarPath = this.basePath + "/team/invites";
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (emailAddress !== void 0) {
        localVarQueryParameters["email_address"] = ObjectSerializer.serialize(
          emailAddress,
          "string"
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      let localVarRequestOptions = {
        method: "GET",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
        responseType: "json"
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise(
          (resolve, reject) => {
            axios_default.request(localVarRequestOptions).then(
              (response) => {
                let body = response.data;
                if (response.status && response.status >= 200 && response.status <= 299) {
                  body = ObjectSerializer.deserialize(
                    body,
                    "TeamInvitesResponse"
                  );
                  resolve({ response, body });
                } else {
                  reject(new HttpError(response, body, response.status));
                }
              },
              (error) => {
                if (error.response == null) {
                  reject(error);
                  return;
                }
                const response = error.response;
                let body;
                if (response.status === 200) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "TeamInvitesResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                let rangeCodeLeft = Number("4XX"[0] + "00");
                let rangeCodeRight = Number("4XX"[0] + "99");
                if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "ErrorResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                reject(error);
              }
            );
          }
        );
      });
    });
  }
  teamMembers(_0, _1, _2) {
    return __async(this, arguments, function* (teamId, page, pageSize, options = { headers: {} }) {
      const localVarPath = this.basePath + "/team/members/{team_id}".replace(
        "{team_id}",
        encodeURIComponent(String(teamId))
      );
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (teamId === null || teamId === void 0) {
        throw new Error(
          "Required parameter teamId was null or undefined when calling teamMembers."
        );
      }
      if (page !== void 0) {
        localVarQueryParameters["page"] = ObjectSerializer.serialize(
          page,
          "number"
        );
      }
      if (pageSize !== void 0) {
        localVarQueryParameters["page_size"] = ObjectSerializer.serialize(
          pageSize,
          "number"
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      let localVarRequestOptions = {
        method: "GET",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
        responseType: "json"
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise(
          (resolve, reject) => {
            axios_default.request(localVarRequestOptions).then(
              (response) => {
                let body = response.data;
                if (response.status && response.status >= 200 && response.status <= 299) {
                  body = ObjectSerializer.deserialize(
                    body,
                    "TeamMembersResponse"
                  );
                  resolve({ response, body });
                } else {
                  reject(new HttpError(response, body, response.status));
                }
              },
              (error) => {
                if (error.response == null) {
                  reject(error);
                  return;
                }
                const response = error.response;
                let body;
                if (response.status === 200) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "TeamMembersResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                let rangeCodeLeft = Number("4XX"[0] + "00");
                let rangeCodeRight = Number("4XX"[0] + "99");
                if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "ErrorResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                reject(error);
              }
            );
          }
        );
      });
    });
  }
  teamRemoveMember(_0) {
    return __async(this, arguments, function* (teamRemoveMemberRequest, options = { headers: {} }) {
      if (teamRemoveMemberRequest !== null && teamRemoveMemberRequest !== void 0 && teamRemoveMemberRequest.constructor.name !== "TeamRemoveMemberRequest") {
        teamRemoveMemberRequest = ObjectSerializer.deserialize(
          teamRemoveMemberRequest,
          "TeamRemoveMemberRequest"
        );
      }
      const localVarPath = this.basePath + "/team/remove_member";
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (teamRemoveMemberRequest === null || teamRemoveMemberRequest === void 0) {
        throw new Error(
          "Required parameter teamRemoveMemberRequest was null or undefined when calling teamRemoveMember."
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      const result = generateFormData(
        teamRemoveMemberRequest,
        TeamRemoveMemberRequest.attributeTypeMap
      );
      localVarUseFormData = result.localVarUseFormData;
      let data = {};
      if (localVarUseFormData) {
        const formData2 = toFormData3(result.data);
        data = formData2;
        localVarHeaderParams = __spreadValues(__spreadValues({}, localVarHeaderParams), formData2.getHeaders());
      } else {
        data = ObjectSerializer.serialize(
          teamRemoveMemberRequest,
          "TeamRemoveMemberRequest"
        );
      }
      let localVarRequestOptions = {
        method: "POST",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
        responseType: "json",
        data
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise((resolve, reject) => {
          axios_default.request(localVarRequestOptions).then(
            (response) => {
              let body = response.data;
              if (response.status && response.status >= 200 && response.status <= 299) {
                body = ObjectSerializer.deserialize(body, "TeamGetResponse");
                resolve({ response, body });
              } else {
                reject(new HttpError(response, body, response.status));
              }
            },
            (error) => {
              if (error.response == null) {
                reject(error);
                return;
              }
              const response = error.response;
              let body;
              if (response.status === 201) {
                body = ObjectSerializer.deserialize(
                  response.data,
                  "TeamGetResponse"
                );
                reject(new HttpError(response, body, response.status));
                return;
              }
              let rangeCodeLeft = Number("4XX"[0] + "00");
              let rangeCodeRight = Number("4XX"[0] + "99");
              if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                body = ObjectSerializer.deserialize(
                  response.data,
                  "ErrorResponse"
                );
                reject(new HttpError(response, body, response.status));
                return;
              }
              reject(error);
            }
          );
        });
      });
    });
  }
  teamSubTeams(_0, _1, _2) {
    return __async(this, arguments, function* (teamId, page, pageSize, options = { headers: {} }) {
      const localVarPath = this.basePath + "/team/sub_teams/{team_id}".replace(
        "{team_id}",
        encodeURIComponent(String(teamId))
      );
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (teamId === null || teamId === void 0) {
        throw new Error(
          "Required parameter teamId was null or undefined when calling teamSubTeams."
        );
      }
      if (page !== void 0) {
        localVarQueryParameters["page"] = ObjectSerializer.serialize(
          page,
          "number"
        );
      }
      if (pageSize !== void 0) {
        localVarQueryParameters["page_size"] = ObjectSerializer.serialize(
          pageSize,
          "number"
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      let localVarRequestOptions = {
        method: "GET",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
        responseType: "json"
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise(
          (resolve, reject) => {
            axios_default.request(localVarRequestOptions).then(
              (response) => {
                let body = response.data;
                if (response.status && response.status >= 200 && response.status <= 299) {
                  body = ObjectSerializer.deserialize(
                    body,
                    "TeamSubTeamsResponse"
                  );
                  resolve({ response, body });
                } else {
                  reject(new HttpError(response, body, response.status));
                }
              },
              (error) => {
                if (error.response == null) {
                  reject(error);
                  return;
                }
                const response = error.response;
                let body;
                if (response.status === 200) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "TeamSubTeamsResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                let rangeCodeLeft = Number("4XX"[0] + "00");
                let rangeCodeRight = Number("4XX"[0] + "99");
                if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "ErrorResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                reject(error);
              }
            );
          }
        );
      });
    });
  }
  teamUpdate(_0) {
    return __async(this, arguments, function* (teamUpdateRequest, options = { headers: {} }) {
      if (teamUpdateRequest !== null && teamUpdateRequest !== void 0 && teamUpdateRequest.constructor.name !== "TeamUpdateRequest") {
        teamUpdateRequest = ObjectSerializer.deserialize(
          teamUpdateRequest,
          "TeamUpdateRequest"
        );
      }
      const localVarPath = this.basePath + "/team";
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (teamUpdateRequest === null || teamUpdateRequest === void 0) {
        throw new Error(
          "Required parameter teamUpdateRequest was null or undefined when calling teamUpdate."
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      const result = generateFormData(
        teamUpdateRequest,
        TeamUpdateRequest.attributeTypeMap
      );
      localVarUseFormData = result.localVarUseFormData;
      let data = {};
      if (localVarUseFormData) {
        const formData2 = toFormData3(result.data);
        data = formData2;
        localVarHeaderParams = __spreadValues(__spreadValues({}, localVarHeaderParams), formData2.getHeaders());
      } else {
        data = ObjectSerializer.serialize(teamUpdateRequest, "TeamUpdateRequest");
      }
      let localVarRequestOptions = {
        method: "PUT",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
        responseType: "json",
        data
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise((resolve, reject) => {
          axios_default.request(localVarRequestOptions).then(
            (response) => {
              let body = response.data;
              if (response.status && response.status >= 200 && response.status <= 299) {
                body = ObjectSerializer.deserialize(body, "TeamGetResponse");
                resolve({ response, body });
              } else {
                reject(new HttpError(response, body, response.status));
              }
            },
            (error) => {
              if (error.response == null) {
                reject(error);
                return;
              }
              const response = error.response;
              let body;
              if (response.status === 200) {
                body = ObjectSerializer.deserialize(
                  response.data,
                  "TeamGetResponse"
                );
                reject(new HttpError(response, body, response.status));
                return;
              }
              let rangeCodeLeft = Number("4XX"[0] + "00");
              let rangeCodeRight = Number("4XX"[0] + "99");
              if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                body = ObjectSerializer.deserialize(
                  response.data,
                  "ErrorResponse"
                );
                reject(new HttpError(response, body, response.status));
                return;
              }
              reject(error);
            }
          );
        });
      });
    });
  }
};

// api/templateApi.ts
var defaultBasePath9 = "https://api.hellosign.com/v3";
var TemplateApi = class {
  constructor(basePath) {
    this._basePath = defaultBasePath9;
    this._defaultHeaders = {
      "User-Agent": USER_AGENT
    };
    this._useQuerystring = false;
    this.authentications = {
      default: new VoidAuth(),
      api_key: new HttpBasicAuth(),
      oauth2: new HttpBearerAuth()
    };
    this.interceptors = [];
    if (basePath) {
      this.basePath = basePath;
    }
  }
  set useQuerystring(value) {
    this._useQuerystring = value;
  }
  set basePath(basePath) {
    this._basePath = basePath;
  }
  set defaultHeaders(defaultHeaders) {
    this._defaultHeaders = defaultHeaders;
  }
  get defaultHeaders() {
    return this._defaultHeaders;
  }
  get basePath() {
    return this._basePath;
  }
  setDefaultAuthentication(auth) {
    this.authentications.default = auth;
  }
  setApiKey(key) {
    this.authentications.api_key.username = key;
  }
  set username(username) {
    this.authentications.api_key.username = username;
  }
  set password(password) {
    this.authentications.api_key.password = password;
  }
  set accessToken(accessToken) {
    this.authentications.oauth2.accessToken = accessToken;
  }
  addInterceptor(interceptor) {
    this.interceptors.push(interceptor);
  }
  templateAddUser(_0, _1) {
    return __async(this, arguments, function* (templateId, templateAddUserRequest, options = { headers: {} }) {
      if (templateAddUserRequest !== null && templateAddUserRequest !== void 0 && templateAddUserRequest.constructor.name !== "TemplateAddUserRequest") {
        templateAddUserRequest = ObjectSerializer.deserialize(
          templateAddUserRequest,
          "TemplateAddUserRequest"
        );
      }
      const localVarPath = this.basePath + "/template/add_user/{template_id}".replace(
        "{template_id}",
        encodeURIComponent(String(templateId))
      );
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (templateId === null || templateId === void 0) {
        throw new Error(
          "Required parameter templateId was null or undefined when calling templateAddUser."
        );
      }
      if (templateAddUserRequest === null || templateAddUserRequest === void 0) {
        throw new Error(
          "Required parameter templateAddUserRequest was null or undefined when calling templateAddUser."
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      const result = generateFormData(
        templateAddUserRequest,
        TemplateAddUserRequest.attributeTypeMap
      );
      localVarUseFormData = result.localVarUseFormData;
      let data = {};
      if (localVarUseFormData) {
        const formData2 = toFormData3(result.data);
        data = formData2;
        localVarHeaderParams = __spreadValues(__spreadValues({}, localVarHeaderParams), formData2.getHeaders());
      } else {
        data = ObjectSerializer.serialize(
          templateAddUserRequest,
          "TemplateAddUserRequest"
        );
      }
      let localVarRequestOptions = {
        method: "POST",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
        responseType: "json",
        data
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise(
          (resolve, reject) => {
            axios_default.request(localVarRequestOptions).then(
              (response) => {
                let body = response.data;
                if (response.status && response.status >= 200 && response.status <= 299) {
                  body = ObjectSerializer.deserialize(
                    body,
                    "TemplateGetResponse"
                  );
                  resolve({ response, body });
                } else {
                  reject(new HttpError(response, body, response.status));
                }
              },
              (error) => {
                if (error.response == null) {
                  reject(error);
                  return;
                }
                const response = error.response;
                let body;
                if (response.status === 200) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "TemplateGetResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                let rangeCodeLeft = Number("4XX"[0] + "00");
                let rangeCodeRight = Number("4XX"[0] + "99");
                if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "ErrorResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                reject(error);
              }
            );
          }
        );
      });
    });
  }
  templateCreate(_0) {
    return __async(this, arguments, function* (templateCreateRequest, options = { headers: {} }) {
      if (templateCreateRequest !== null && templateCreateRequest !== void 0 && templateCreateRequest.constructor.name !== "TemplateCreateRequest") {
        templateCreateRequest = ObjectSerializer.deserialize(
          templateCreateRequest,
          "TemplateCreateRequest"
        );
      }
      const localVarPath = this.basePath + "/template/create";
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (templateCreateRequest === null || templateCreateRequest === void 0) {
        throw new Error(
          "Required parameter templateCreateRequest was null or undefined when calling templateCreate."
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      const result = generateFormData(
        templateCreateRequest,
        TemplateCreateRequest.attributeTypeMap
      );
      localVarUseFormData = result.localVarUseFormData;
      let data = {};
      if (localVarUseFormData) {
        const formData2 = toFormData3(result.data);
        data = formData2;
        localVarHeaderParams = __spreadValues(__spreadValues({}, localVarHeaderParams), formData2.getHeaders());
      } else {
        data = ObjectSerializer.serialize(
          templateCreateRequest,
          "TemplateCreateRequest"
        );
      }
      let localVarRequestOptions = {
        method: "POST",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
        responseType: "json",
        data
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise(
          (resolve, reject) => {
            axios_default.request(localVarRequestOptions).then(
              (response) => {
                let body = response.data;
                if (response.status && response.status >= 200 && response.status <= 299) {
                  body = ObjectSerializer.deserialize(
                    body,
                    "TemplateCreateResponse"
                  );
                  resolve({ response, body });
                } else {
                  reject(new HttpError(response, body, response.status));
                }
              },
              (error) => {
                if (error.response == null) {
                  reject(error);
                  return;
                }
                const response = error.response;
                let body;
                if (response.status === 200) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "TemplateCreateResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                let rangeCodeLeft = Number("4XX"[0] + "00");
                let rangeCodeRight = Number("4XX"[0] + "99");
                if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "ErrorResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                reject(error);
              }
            );
          }
        );
      });
    });
  }
  templateCreateEmbeddedDraft(_0) {
    return __async(this, arguments, function* (templateCreateEmbeddedDraftRequest, options = { headers: {} }) {
      if (templateCreateEmbeddedDraftRequest !== null && templateCreateEmbeddedDraftRequest !== void 0 && templateCreateEmbeddedDraftRequest.constructor.name !== "TemplateCreateEmbeddedDraftRequest") {
        templateCreateEmbeddedDraftRequest = ObjectSerializer.deserialize(
          templateCreateEmbeddedDraftRequest,
          "TemplateCreateEmbeddedDraftRequest"
        );
      }
      const localVarPath = this.basePath + "/template/create_embedded_draft";
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (templateCreateEmbeddedDraftRequest === null || templateCreateEmbeddedDraftRequest === void 0) {
        throw new Error(
          "Required parameter templateCreateEmbeddedDraftRequest was null or undefined when calling templateCreateEmbeddedDraft."
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      const result = generateFormData(
        templateCreateEmbeddedDraftRequest,
        TemplateCreateEmbeddedDraftRequest.attributeTypeMap
      );
      localVarUseFormData = result.localVarUseFormData;
      let data = {};
      if (localVarUseFormData) {
        const formData2 = toFormData3(result.data);
        data = formData2;
        localVarHeaderParams = __spreadValues(__spreadValues({}, localVarHeaderParams), formData2.getHeaders());
      } else {
        data = ObjectSerializer.serialize(
          templateCreateEmbeddedDraftRequest,
          "TemplateCreateEmbeddedDraftRequest"
        );
      }
      let localVarRequestOptions = {
        method: "POST",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
        responseType: "json",
        data
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise(
          (resolve, reject) => {
            axios_default.request(localVarRequestOptions).then(
              (response) => {
                let body = response.data;
                if (response.status && response.status >= 200 && response.status <= 299) {
                  body = ObjectSerializer.deserialize(
                    body,
                    "TemplateCreateEmbeddedDraftResponse"
                  );
                  resolve({ response, body });
                } else {
                  reject(new HttpError(response, body, response.status));
                }
              },
              (error) => {
                if (error.response == null) {
                  reject(error);
                  return;
                }
                const response = error.response;
                let body;
                if (response.status === 200) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "TemplateCreateEmbeddedDraftResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                let rangeCodeLeft = Number("4XX"[0] + "00");
                let rangeCodeRight = Number("4XX"[0] + "99");
                if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "ErrorResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                reject(error);
              }
            );
          }
        );
      });
    });
  }
  templateDelete(_0) {
    return __async(this, arguments, function* (templateId, options = { headers: {} }) {
      const localVarPath = this.basePath + "/template/delete/{template_id}".replace(
        "{template_id}",
        encodeURIComponent(String(templateId))
      );
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (templateId === null || templateId === void 0) {
        throw new Error(
          "Required parameter templateId was null or undefined when calling templateDelete."
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      let localVarRequestOptions = {
        method: "POST",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
        responseType: "json"
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise((resolve, reject) => {
          axios_default.request(localVarRequestOptions).then(
            (response) => {
              let body = response.data;
              if (response.status && response.status >= 200 && response.status <= 299) {
                resolve({ response, body });
              } else {
                reject(new HttpError(response, body, response.status));
              }
            },
            (error) => {
              if (error.response == null) {
                reject(error);
                return;
              }
              const response = error.response;
              let body;
              let rangeCodeLeft = Number("4XX"[0] + "00");
              let rangeCodeRight = Number("4XX"[0] + "99");
              if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                body = ObjectSerializer.deserialize(
                  response.data,
                  "ErrorResponse"
                );
                reject(new HttpError(response, body, response.status));
                return;
              }
              reject(error);
            }
          );
        });
      });
    });
  }
  templateFiles(_0, _1) {
    return __async(this, arguments, function* (templateId, fileType, options = { headers: {} }) {
      const localVarPath = this.basePath + "/template/files/{template_id}".replace(
        "{template_id}",
        encodeURIComponent(String(templateId))
      );
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/pdf", "application/zip", "application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (templateId === null || templateId === void 0) {
        throw new Error(
          "Required parameter templateId was null or undefined when calling templateFiles."
        );
      }
      if (fileType !== void 0) {
        localVarQueryParameters["file_type"] = ObjectSerializer.serialize(
          fileType,
          "'pdf' | 'zip'"
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      let localVarRequestOptions = {
        method: "GET",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
        responseType: "arraybuffer"
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise((resolve, reject) => {
          axios_default.request(localVarRequestOptions).then(
            (response) => {
              let body = response.data;
              if (response.status && response.status >= 200 && response.status <= 299) {
                body = ObjectSerializer.deserialize(body, "Buffer");
                resolve({ response, body });
              } else {
                reject(new HttpError(response, body, response.status));
              }
            },
            (error) => {
              if (error.response == null) {
                reject(error);
                return;
              }
              const response = error.response;
              let body;
              if (response.status === 200) {
                body = ObjectSerializer.deserialize(response.data, "RequestFile");
                reject(new HttpError(response, body, response.status));
                return;
              }
              let rangeCodeLeft = Number("4XX"[0] + "00");
              let rangeCodeRight = Number("4XX"[0] + "99");
              if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                body = ObjectSerializer.deserialize(
                  response.data,
                  "ErrorResponse"
                );
                reject(new HttpError(response, body, response.status));
                return;
              }
              reject(error);
            }
          );
        });
      });
    });
  }
  templateFilesAsDataUri(_0) {
    return __async(this, arguments, function* (templateId, options = { headers: {} }) {
      const localVarPath = this.basePath + "/template/files_as_data_uri/{template_id}".replace(
        "{template_id}",
        encodeURIComponent(String(templateId))
      );
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (templateId === null || templateId === void 0) {
        throw new Error(
          "Required parameter templateId was null or undefined when calling templateFilesAsDataUri."
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      let localVarRequestOptions = {
        method: "GET",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
        responseType: "json"
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise(
          (resolve, reject) => {
            axios_default.request(localVarRequestOptions).then(
              (response) => {
                let body = response.data;
                if (response.status && response.status >= 200 && response.status <= 299) {
                  body = ObjectSerializer.deserialize(
                    body,
                    "FileResponseDataUri"
                  );
                  resolve({ response, body });
                } else {
                  reject(new HttpError(response, body, response.status));
                }
              },
              (error) => {
                if (error.response == null) {
                  reject(error);
                  return;
                }
                const response = error.response;
                let body;
                if (response.status === 200) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "FileResponseDataUri"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                let rangeCodeLeft = Number("4XX"[0] + "00");
                let rangeCodeRight = Number("4XX"[0] + "99");
                if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "ErrorResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                reject(error);
              }
            );
          }
        );
      });
    });
  }
  templateFilesAsFileUrl(_0, _1) {
    return __async(this, arguments, function* (templateId, forceDownload, options = { headers: {} }) {
      const localVarPath = this.basePath + "/template/files_as_file_url/{template_id}".replace(
        "{template_id}",
        encodeURIComponent(String(templateId))
      );
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (templateId === null || templateId === void 0) {
        throw new Error(
          "Required parameter templateId was null or undefined when calling templateFilesAsFileUrl."
        );
      }
      if (forceDownload !== void 0) {
        localVarQueryParameters["force_download"] = ObjectSerializer.serialize(
          forceDownload,
          "number"
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      let localVarRequestOptions = {
        method: "GET",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
        responseType: "json"
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise((resolve, reject) => {
          axios_default.request(localVarRequestOptions).then(
            (response) => {
              let body = response.data;
              if (response.status && response.status >= 200 && response.status <= 299) {
                body = ObjectSerializer.deserialize(body, "FileResponse");
                resolve({ response, body });
              } else {
                reject(new HttpError(response, body, response.status));
              }
            },
            (error) => {
              if (error.response == null) {
                reject(error);
                return;
              }
              const response = error.response;
              let body;
              if (response.status === 200) {
                body = ObjectSerializer.deserialize(
                  response.data,
                  "FileResponse"
                );
                reject(new HttpError(response, body, response.status));
                return;
              }
              let rangeCodeLeft = Number("4XX"[0] + "00");
              let rangeCodeRight = Number("4XX"[0] + "99");
              if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                body = ObjectSerializer.deserialize(
                  response.data,
                  "ErrorResponse"
                );
                reject(new HttpError(response, body, response.status));
                return;
              }
              reject(error);
            }
          );
        });
      });
    });
  }
  templateGet(_0) {
    return __async(this, arguments, function* (templateId, options = { headers: {} }) {
      const localVarPath = this.basePath + "/template/{template_id}".replace(
        "{template_id}",
        encodeURIComponent(String(templateId))
      );
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (templateId === null || templateId === void 0) {
        throw new Error(
          "Required parameter templateId was null or undefined when calling templateGet."
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      let localVarRequestOptions = {
        method: "GET",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
        responseType: "json"
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise(
          (resolve, reject) => {
            axios_default.request(localVarRequestOptions).then(
              (response) => {
                let body = response.data;
                if (response.status && response.status >= 200 && response.status <= 299) {
                  body = ObjectSerializer.deserialize(
                    body,
                    "TemplateGetResponse"
                  );
                  resolve({ response, body });
                } else {
                  reject(new HttpError(response, body, response.status));
                }
              },
              (error) => {
                if (error.response == null) {
                  reject(error);
                  return;
                }
                const response = error.response;
                let body;
                if (response.status === 200) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "TemplateGetResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                let rangeCodeLeft = Number("4XX"[0] + "00");
                let rangeCodeRight = Number("4XX"[0] + "99");
                if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "ErrorResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                reject(error);
              }
            );
          }
        );
      });
    });
  }
  templateList(_0, _1, _2, _3) {
    return __async(this, arguments, function* (accountId, page, pageSize, query, options = { headers: {} }) {
      const localVarPath = this.basePath + "/template/list";
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (accountId !== void 0) {
        localVarQueryParameters["account_id"] = ObjectSerializer.serialize(
          accountId,
          "string"
        );
      }
      if (page !== void 0) {
        localVarQueryParameters["page"] = ObjectSerializer.serialize(
          page,
          "number"
        );
      }
      if (pageSize !== void 0) {
        localVarQueryParameters["page_size"] = ObjectSerializer.serialize(
          pageSize,
          "number"
        );
      }
      if (query !== void 0) {
        localVarQueryParameters["query"] = ObjectSerializer.serialize(
          query,
          "string"
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      let localVarRequestOptions = {
        method: "GET",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
        responseType: "json"
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise(
          (resolve, reject) => {
            axios_default.request(localVarRequestOptions).then(
              (response) => {
                let body = response.data;
                if (response.status && response.status >= 200 && response.status <= 299) {
                  body = ObjectSerializer.deserialize(
                    body,
                    "TemplateListResponse"
                  );
                  resolve({ response, body });
                } else {
                  reject(new HttpError(response, body, response.status));
                }
              },
              (error) => {
                if (error.response == null) {
                  reject(error);
                  return;
                }
                const response = error.response;
                let body;
                if (response.status === 200) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "TemplateListResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                let rangeCodeLeft = Number("4XX"[0] + "00");
                let rangeCodeRight = Number("4XX"[0] + "99");
                if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "ErrorResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                reject(error);
              }
            );
          }
        );
      });
    });
  }
  templateRemoveUser(_0, _1) {
    return __async(this, arguments, function* (templateId, templateRemoveUserRequest, options = { headers: {} }) {
      if (templateRemoveUserRequest !== null && templateRemoveUserRequest !== void 0 && templateRemoveUserRequest.constructor.name !== "TemplateRemoveUserRequest") {
        templateRemoveUserRequest = ObjectSerializer.deserialize(
          templateRemoveUserRequest,
          "TemplateRemoveUserRequest"
        );
      }
      const localVarPath = this.basePath + "/template/remove_user/{template_id}".replace(
        "{template_id}",
        encodeURIComponent(String(templateId))
      );
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (templateId === null || templateId === void 0) {
        throw new Error(
          "Required parameter templateId was null or undefined when calling templateRemoveUser."
        );
      }
      if (templateRemoveUserRequest === null || templateRemoveUserRequest === void 0) {
        throw new Error(
          "Required parameter templateRemoveUserRequest was null or undefined when calling templateRemoveUser."
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      const result = generateFormData(
        templateRemoveUserRequest,
        TemplateRemoveUserRequest.attributeTypeMap
      );
      localVarUseFormData = result.localVarUseFormData;
      let data = {};
      if (localVarUseFormData) {
        const formData2 = toFormData3(result.data);
        data = formData2;
        localVarHeaderParams = __spreadValues(__spreadValues({}, localVarHeaderParams), formData2.getHeaders());
      } else {
        data = ObjectSerializer.serialize(
          templateRemoveUserRequest,
          "TemplateRemoveUserRequest"
        );
      }
      let localVarRequestOptions = {
        method: "POST",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
        responseType: "json",
        data
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise(
          (resolve, reject) => {
            axios_default.request(localVarRequestOptions).then(
              (response) => {
                let body = response.data;
                if (response.status && response.status >= 200 && response.status <= 299) {
                  body = ObjectSerializer.deserialize(
                    body,
                    "TemplateGetResponse"
                  );
                  resolve({ response, body });
                } else {
                  reject(new HttpError(response, body, response.status));
                }
              },
              (error) => {
                if (error.response == null) {
                  reject(error);
                  return;
                }
                const response = error.response;
                let body;
                if (response.status === 200) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "TemplateGetResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                let rangeCodeLeft = Number("4XX"[0] + "00");
                let rangeCodeRight = Number("4XX"[0] + "99");
                if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "ErrorResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                reject(error);
              }
            );
          }
        );
      });
    });
  }
  templateUpdateFiles(_0, _1) {
    return __async(this, arguments, function* (templateId, templateUpdateFilesRequest, options = { headers: {} }) {
      if (templateUpdateFilesRequest !== null && templateUpdateFilesRequest !== void 0 && templateUpdateFilesRequest.constructor.name !== "TemplateUpdateFilesRequest") {
        templateUpdateFilesRequest = ObjectSerializer.deserialize(
          templateUpdateFilesRequest,
          "TemplateUpdateFilesRequest"
        );
      }
      const localVarPath = this.basePath + "/template/update_files/{template_id}".replace(
        "{template_id}",
        encodeURIComponent(String(templateId))
      );
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (templateId === null || templateId === void 0) {
        throw new Error(
          "Required parameter templateId was null or undefined when calling templateUpdateFiles."
        );
      }
      if (templateUpdateFilesRequest === null || templateUpdateFilesRequest === void 0) {
        throw new Error(
          "Required parameter templateUpdateFilesRequest was null or undefined when calling templateUpdateFiles."
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      const result = generateFormData(
        templateUpdateFilesRequest,
        TemplateUpdateFilesRequest.attributeTypeMap
      );
      localVarUseFormData = result.localVarUseFormData;
      let data = {};
      if (localVarUseFormData) {
        const formData2 = toFormData3(result.data);
        data = formData2;
        localVarHeaderParams = __spreadValues(__spreadValues({}, localVarHeaderParams), formData2.getHeaders());
      } else {
        data = ObjectSerializer.serialize(
          templateUpdateFilesRequest,
          "TemplateUpdateFilesRequest"
        );
      }
      let localVarRequestOptions = {
        method: "POST",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
        responseType: "json",
        data
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise(
          (resolve, reject) => {
            axios_default.request(localVarRequestOptions).then(
              (response) => {
                let body = response.data;
                if (response.status && response.status >= 200 && response.status <= 299) {
                  body = ObjectSerializer.deserialize(
                    body,
                    "TemplateUpdateFilesResponse"
                  );
                  resolve({ response, body });
                } else {
                  reject(new HttpError(response, body, response.status));
                }
              },
              (error) => {
                if (error.response == null) {
                  reject(error);
                  return;
                }
                const response = error.response;
                let body;
                if (response.status === 200) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "TemplateUpdateFilesResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                let rangeCodeLeft = Number("4XX"[0] + "00");
                let rangeCodeRight = Number("4XX"[0] + "99");
                if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "ErrorResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                reject(error);
              }
            );
          }
        );
      });
    });
  }
};

// api/unclaimedDraftApi.ts
var defaultBasePath10 = "https://api.hellosign.com/v3";
var UnclaimedDraftApi = class {
  constructor(basePath) {
    this._basePath = defaultBasePath10;
    this._defaultHeaders = {
      "User-Agent": USER_AGENT
    };
    this._useQuerystring = false;
    this.authentications = {
      default: new VoidAuth(),
      api_key: new HttpBasicAuth(),
      oauth2: new HttpBearerAuth()
    };
    this.interceptors = [];
    if (basePath) {
      this.basePath = basePath;
    }
  }
  set useQuerystring(value) {
    this._useQuerystring = value;
  }
  set basePath(basePath) {
    this._basePath = basePath;
  }
  set defaultHeaders(defaultHeaders) {
    this._defaultHeaders = defaultHeaders;
  }
  get defaultHeaders() {
    return this._defaultHeaders;
  }
  get basePath() {
    return this._basePath;
  }
  setDefaultAuthentication(auth) {
    this.authentications.default = auth;
  }
  setApiKey(key) {
    this.authentications.api_key.username = key;
  }
  set username(username) {
    this.authentications.api_key.username = username;
  }
  set password(password) {
    this.authentications.api_key.password = password;
  }
  set accessToken(accessToken) {
    this.authentications.oauth2.accessToken = accessToken;
  }
  addInterceptor(interceptor) {
    this.interceptors.push(interceptor);
  }
  unclaimedDraftCreate(_0) {
    return __async(this, arguments, function* (unclaimedDraftCreateRequest, options = { headers: {} }) {
      if (unclaimedDraftCreateRequest !== null && unclaimedDraftCreateRequest !== void 0 && unclaimedDraftCreateRequest.constructor.name !== "UnclaimedDraftCreateRequest") {
        unclaimedDraftCreateRequest = ObjectSerializer.deserialize(
          unclaimedDraftCreateRequest,
          "UnclaimedDraftCreateRequest"
        );
      }
      const localVarPath = this.basePath + "/unclaimed_draft/create";
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (unclaimedDraftCreateRequest === null || unclaimedDraftCreateRequest === void 0) {
        throw new Error(
          "Required parameter unclaimedDraftCreateRequest was null or undefined when calling unclaimedDraftCreate."
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      const result = generateFormData(
        unclaimedDraftCreateRequest,
        UnclaimedDraftCreateRequest.attributeTypeMap
      );
      localVarUseFormData = result.localVarUseFormData;
      let data = {};
      if (localVarUseFormData) {
        const formData2 = toFormData3(result.data);
        data = formData2;
        localVarHeaderParams = __spreadValues(__spreadValues({}, localVarHeaderParams), formData2.getHeaders());
      } else {
        data = ObjectSerializer.serialize(
          unclaimedDraftCreateRequest,
          "UnclaimedDraftCreateRequest"
        );
      }
      let localVarRequestOptions = {
        method: "POST",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
        responseType: "json",
        data
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise(
          (resolve, reject) => {
            axios_default.request(localVarRequestOptions).then(
              (response) => {
                let body = response.data;
                if (response.status && response.status >= 200 && response.status <= 299) {
                  body = ObjectSerializer.deserialize(
                    body,
                    "UnclaimedDraftCreateResponse"
                  );
                  resolve({ response, body });
                } else {
                  reject(new HttpError(response, body, response.status));
                }
              },
              (error) => {
                if (error.response == null) {
                  reject(error);
                  return;
                }
                const response = error.response;
                let body;
                if (response.status === 200) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "UnclaimedDraftCreateResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                let rangeCodeLeft = Number("4XX"[0] + "00");
                let rangeCodeRight = Number("4XX"[0] + "99");
                if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "ErrorResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                reject(error);
              }
            );
          }
        );
      });
    });
  }
  unclaimedDraftCreateEmbedded(_0) {
    return __async(this, arguments, function* (unclaimedDraftCreateEmbeddedRequest, options = { headers: {} }) {
      if (unclaimedDraftCreateEmbeddedRequest !== null && unclaimedDraftCreateEmbeddedRequest !== void 0 && unclaimedDraftCreateEmbeddedRequest.constructor.name !== "UnclaimedDraftCreateEmbeddedRequest") {
        unclaimedDraftCreateEmbeddedRequest = ObjectSerializer.deserialize(
          unclaimedDraftCreateEmbeddedRequest,
          "UnclaimedDraftCreateEmbeddedRequest"
        );
      }
      const localVarPath = this.basePath + "/unclaimed_draft/create_embedded";
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (unclaimedDraftCreateEmbeddedRequest === null || unclaimedDraftCreateEmbeddedRequest === void 0) {
        throw new Error(
          "Required parameter unclaimedDraftCreateEmbeddedRequest was null or undefined when calling unclaimedDraftCreateEmbedded."
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      const result = generateFormData(
        unclaimedDraftCreateEmbeddedRequest,
        UnclaimedDraftCreateEmbeddedRequest.attributeTypeMap
      );
      localVarUseFormData = result.localVarUseFormData;
      let data = {};
      if (localVarUseFormData) {
        const formData2 = toFormData3(result.data);
        data = formData2;
        localVarHeaderParams = __spreadValues(__spreadValues({}, localVarHeaderParams), formData2.getHeaders());
      } else {
        data = ObjectSerializer.serialize(
          unclaimedDraftCreateEmbeddedRequest,
          "UnclaimedDraftCreateEmbeddedRequest"
        );
      }
      let localVarRequestOptions = {
        method: "POST",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
        responseType: "json",
        data
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise(
          (resolve, reject) => {
            axios_default.request(localVarRequestOptions).then(
              (response) => {
                let body = response.data;
                if (response.status && response.status >= 200 && response.status <= 299) {
                  body = ObjectSerializer.deserialize(
                    body,
                    "UnclaimedDraftCreateResponse"
                  );
                  resolve({ response, body });
                } else {
                  reject(new HttpError(response, body, response.status));
                }
              },
              (error) => {
                if (error.response == null) {
                  reject(error);
                  return;
                }
                const response = error.response;
                let body;
                if (response.status === 200) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "UnclaimedDraftCreateResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                let rangeCodeLeft = Number("4XX"[0] + "00");
                let rangeCodeRight = Number("4XX"[0] + "99");
                if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "ErrorResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                reject(error);
              }
            );
          }
        );
      });
    });
  }
  unclaimedDraftCreateEmbeddedWithTemplate(_0) {
    return __async(this, arguments, function* (unclaimedDraftCreateEmbeddedWithTemplateRequest, options = { headers: {} }) {
      if (unclaimedDraftCreateEmbeddedWithTemplateRequest !== null && unclaimedDraftCreateEmbeddedWithTemplateRequest !== void 0 && unclaimedDraftCreateEmbeddedWithTemplateRequest.constructor.name !== "UnclaimedDraftCreateEmbeddedWithTemplateRequest") {
        unclaimedDraftCreateEmbeddedWithTemplateRequest = ObjectSerializer.deserialize(
          unclaimedDraftCreateEmbeddedWithTemplateRequest,
          "UnclaimedDraftCreateEmbeddedWithTemplateRequest"
        );
      }
      const localVarPath = this.basePath + "/unclaimed_draft/create_embedded_with_template";
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (unclaimedDraftCreateEmbeddedWithTemplateRequest === null || unclaimedDraftCreateEmbeddedWithTemplateRequest === void 0) {
        throw new Error(
          "Required parameter unclaimedDraftCreateEmbeddedWithTemplateRequest was null or undefined when calling unclaimedDraftCreateEmbeddedWithTemplate."
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      const result = generateFormData(
        unclaimedDraftCreateEmbeddedWithTemplateRequest,
        UnclaimedDraftCreateEmbeddedWithTemplateRequest.attributeTypeMap
      );
      localVarUseFormData = result.localVarUseFormData;
      let data = {};
      if (localVarUseFormData) {
        const formData2 = toFormData3(result.data);
        data = formData2;
        localVarHeaderParams = __spreadValues(__spreadValues({}, localVarHeaderParams), formData2.getHeaders());
      } else {
        data = ObjectSerializer.serialize(
          unclaimedDraftCreateEmbeddedWithTemplateRequest,
          "UnclaimedDraftCreateEmbeddedWithTemplateRequest"
        );
      }
      let localVarRequestOptions = {
        method: "POST",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
        responseType: "json",
        data
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise(
          (resolve, reject) => {
            axios_default.request(localVarRequestOptions).then(
              (response) => {
                let body = response.data;
                if (response.status && response.status >= 200 && response.status <= 299) {
                  body = ObjectSerializer.deserialize(
                    body,
                    "UnclaimedDraftCreateResponse"
                  );
                  resolve({ response, body });
                } else {
                  reject(new HttpError(response, body, response.status));
                }
              },
              (error) => {
                if (error.response == null) {
                  reject(error);
                  return;
                }
                const response = error.response;
                let body;
                if (response.status === 200) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "UnclaimedDraftCreateResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                let rangeCodeLeft = Number("4XX"[0] + "00");
                let rangeCodeRight = Number("4XX"[0] + "99");
                if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "ErrorResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                reject(error);
              }
            );
          }
        );
      });
    });
  }
  unclaimedDraftEditAndResend(_0, _1) {
    return __async(this, arguments, function* (signatureRequestId, unclaimedDraftEditAndResendRequest, options = { headers: {} }) {
      if (unclaimedDraftEditAndResendRequest !== null && unclaimedDraftEditAndResendRequest !== void 0 && unclaimedDraftEditAndResendRequest.constructor.name !== "UnclaimedDraftEditAndResendRequest") {
        unclaimedDraftEditAndResendRequest = ObjectSerializer.deserialize(
          unclaimedDraftEditAndResendRequest,
          "UnclaimedDraftEditAndResendRequest"
        );
      }
      const localVarPath = this.basePath + "/unclaimed_draft/edit_and_resend/{signature_request_id}".replace(
        "{signature_request_id}",
        encodeURIComponent(String(signatureRequestId))
      );
      let localVarQueryParameters = {};
      let localVarHeaderParams = Object.assign(
        {},
        this._defaultHeaders
      );
      const produces = ["application/json"];
      if (produces.indexOf("application/json") >= 0) {
        localVarHeaderParams["content-type"] = "application/json";
      } else {
        localVarHeaderParams["content-type"] = produces.join(",");
      }
      let localVarFormParams = {};
      let localVarBodyParams = void 0;
      if (signatureRequestId === null || signatureRequestId === void 0) {
        throw new Error(
          "Required parameter signatureRequestId was null or undefined when calling unclaimedDraftEditAndResend."
        );
      }
      if (unclaimedDraftEditAndResendRequest === null || unclaimedDraftEditAndResendRequest === void 0) {
        throw new Error(
          "Required parameter unclaimedDraftEditAndResendRequest was null or undefined when calling unclaimedDraftEditAndResend."
        );
      }
      Object.assign(localVarHeaderParams, options.headers);
      let localVarUseFormData = false;
      const result = generateFormData(
        unclaimedDraftEditAndResendRequest,
        UnclaimedDraftEditAndResendRequest.attributeTypeMap
      );
      localVarUseFormData = result.localVarUseFormData;
      let data = {};
      if (localVarUseFormData) {
        const formData2 = toFormData3(result.data);
        data = formData2;
        localVarHeaderParams = __spreadValues(__spreadValues({}, localVarHeaderParams), formData2.getHeaders());
      } else {
        data = ObjectSerializer.serialize(
          unclaimedDraftEditAndResendRequest,
          "UnclaimedDraftEditAndResendRequest"
        );
      }
      let localVarRequestOptions = {
        method: "POST",
        params: localVarQueryParameters,
        headers: localVarHeaderParams,
        url: localVarPath,
        paramsSerializer: this._useQuerystring ? queryParamsSerializer : void 0,
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
        responseType: "json",
        data
      };
      let authenticationPromise = Promise.resolve();
      if (this.authentications.api_key.username) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.api_key.applyToRequest(localVarRequestOptions)
        );
      }
      if (this.authentications.oauth2.accessToken) {
        authenticationPromise = authenticationPromise.then(
          () => this.authentications.oauth2.applyToRequest(localVarRequestOptions)
        );
      }
      authenticationPromise = authenticationPromise.then(
        () => this.authentications.default.applyToRequest(localVarRequestOptions)
      );
      let interceptorPromise = authenticationPromise;
      for (const interceptor of this.interceptors) {
        interceptorPromise = interceptorPromise.then(
          () => interceptor(localVarRequestOptions)
        );
      }
      return interceptorPromise.then(() => {
        return new Promise(
          (resolve, reject) => {
            axios_default.request(localVarRequestOptions).then(
              (response) => {
                let body = response.data;
                if (response.status && response.status >= 200 && response.status <= 299) {
                  body = ObjectSerializer.deserialize(
                    body,
                    "UnclaimedDraftCreateResponse"
                  );
                  resolve({ response, body });
                } else {
                  reject(new HttpError(response, body, response.status));
                }
              },
              (error) => {
                if (error.response == null) {
                  reject(error);
                  return;
                }
                const response = error.response;
                let body;
                if (response.status === 200) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "UnclaimedDraftCreateResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                let rangeCodeLeft = Number("4XX"[0] + "00");
                let rangeCodeRight = Number("4XX"[0] + "99");
                if (response.status >= rangeCodeLeft && response.status <= rangeCodeRight) {
                  body = ObjectSerializer.deserialize(
                    response.data,
                    "ErrorResponse"
                  );
                  reject(new HttpError(response, body, response.status));
                  return;
                }
                reject(error);
              }
            );
          }
        );
      });
    });
  }
};

// api/apis.ts
var import_form_data2 = __toESM(require_form_data());
var import_qs = __toESM(require_lib());
var HttpError = class extends Error {
  constructor(response, body, statusCode) {
    super("HTTP request failed");
    this.response = response;
    this.body = body;
    this.statusCode = statusCode;
    this.name = "HttpError";
  }
};
var queryParamsSerializer = (params) => {
  return import_qs.default.stringify(params, { arrayFormat: "brackets" });
};
var USER_AGENT = "OpenAPI-Generator/1.4.1/node";
var generateFormData = (obj, typemap) => {
  const data = {};
  let localVarUseFormData = false;
  if (typeof obj !== "object" || Array.isArray(obj) || obj === null) {
    return {
      localVarUseFormData,
      data
    };
  }
  typemap.forEach((paramInfo) => {
    if (obj[paramInfo.name] === void 0) {
      return;
    }
    if (paramInfo.type.indexOf("RequestFile") !== -1) {
      localVarUseFormData = true;
      if (Array.isArray(obj[paramInfo.name])) {
        obj[paramInfo.name].forEach((childObject, i) => {
          const key = `${paramInfo.baseName}[${i}]`;
          data[key] = childObject;
        });
        return;
      }
      data[paramInfo.baseName] = obj[paramInfo.name];
      return;
    }
    if (paramInfo.type.indexOf("boolean") !== -1) {
      data[paramInfo.baseName] = JSON.stringify(obj[paramInfo.name]);
      return;
    }
    const serialized = ObjectSerializer.serialize(
      obj[paramInfo.name],
      paramInfo.type
    );
    data[paramInfo.baseName] = shouldJsonify(serialized) ? JSON.stringify(serialized) : serialized;
  });
  return {
    localVarUseFormData,
    data
  };
};
var toFormData3 = (obj) => {
  const form = new import_form_data2.default();
  Object.keys(obj).forEach((key) => {
    if (isBufferDetailedFile(obj[key])) {
      form.append(key, obj[key].value, obj[key].options);
      return;
    }
    form.append(key, obj[key]);
  });
  return form;
};
function isBufferDetailedFile(obj) {
  var _a, _b;
  return obj.value !== void 0 && Buffer.isBuffer(obj.value) && obj.options !== void 0 && ((_a = obj.options) == null ? void 0 : _a.filename) !== void 0 && ((_b = obj.options) == null ? void 0 : _b.contentType) !== void 0;
}
var shouldJsonify = (val) => val === Object(val);

// api/index.ts
var APIS = [
  AccountApi,
  ApiAppApi,
  BulkSendJobApi,
  EmbeddedApi,
  OAuthApi,
  ReportApi,
  SignatureRequestApi,
  TeamApi,
  TemplateApi,
  UnclaimedDraftApi
];
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  APIS,
  AccountApi,
  AccountCreateRequest,
  AccountCreateResponse,
  AccountGetResponse,
  AccountResponse,
  AccountResponseQuotas,
  AccountUpdateRequest,
  AccountVerifyRequest,
  AccountVerifyResponse,
  AccountVerifyResponseAccount,
  ApiAppApi,
  ApiAppCreateRequest,
  ApiAppGetResponse,
  ApiAppListResponse,
  ApiAppResponse,
  ApiAppResponseOAuth,
  ApiAppResponseOptions,
  ApiAppResponseOwnerAccount,
  ApiAppResponseWhiteLabelingOptions,
  ApiAppUpdateRequest,
  ApiKeyAuth,
  BulkSendJobApi,
  BulkSendJobGetResponse,
  BulkSendJobGetResponseSignatureRequests,
  BulkSendJobListResponse,
  BulkSendJobResponse,
  BulkSendJobSendResponse,
  EmbeddedApi,
  EmbeddedEditUrlRequest,
  EmbeddedEditUrlResponse,
  EmbeddedEditUrlResponseEmbedded,
  EmbeddedSignUrlResponse,
  EmbeddedSignUrlResponseEmbedded,
  ErrorResponse,
  ErrorResponseError,
  EventCallbackHelper,
  EventCallbackRequest,
  EventCallbackRequestEvent,
  EventCallbackRequestEventMetadata,
  FileResponse,
  FileResponseDataUri,
  HttpBasicAuth,
  HttpBearerAuth,
  HttpError,
  ListInfoResponse,
  OAuth,
  OAuthApi,
  OAuthTokenGenerateRequest,
  OAuthTokenRefreshRequest,
  OAuthTokenResponse,
  ObjectSerializer,
  ReportApi,
  ReportCreateRequest,
  ReportCreateResponse,
  ReportResponse,
  SignatureRequestApi,
  SignatureRequestBulkCreateEmbeddedWithTemplateRequest,
  SignatureRequestBulkSendWithTemplateRequest,
  SignatureRequestCreateEmbeddedRequest,
  SignatureRequestCreateEmbeddedWithTemplateRequest,
  SignatureRequestEditEmbeddedRequest,
  SignatureRequestEditEmbeddedWithTemplateRequest,
  SignatureRequestEditRequest,
  SignatureRequestEditWithTemplateRequest,
  SignatureRequestGetResponse,
  SignatureRequestListResponse,
  SignatureRequestRemindRequest,
  SignatureRequestResponse,
  SignatureRequestResponseAttachment,
  SignatureRequestResponseCustomFieldBase,
  SignatureRequestResponseCustomFieldCheckbox,
  SignatureRequestResponseCustomFieldText,
  SignatureRequestResponseCustomFieldTypeEnum,
  SignatureRequestResponseDataBase,
  SignatureRequestResponseDataTypeEnum,
  SignatureRequestResponseDataValueCheckbox,
  SignatureRequestResponseDataValueCheckboxMerge,
  SignatureRequestResponseDataValueDateSigned,
  SignatureRequestResponseDataValueDropdown,
  SignatureRequestResponseDataValueInitials,
  SignatureRequestResponseDataValueRadio,
  SignatureRequestResponseDataValueSignature,
  SignatureRequestResponseDataValueText,
  SignatureRequestResponseDataValueTextMerge,
  SignatureRequestResponseSignatures,
  SignatureRequestSendRequest,
  SignatureRequestSendWithTemplateRequest,
  SignatureRequestUpdateRequest,
  SubAttachment,
  SubBulkSignerList,
  SubBulkSignerListCustomField,
  SubCC,
  SubCustomField,
  SubEditorOptions,
  SubFieldOptions,
  SubFormFieldGroup,
  SubFormFieldRule,
  SubFormFieldRuleAction,
  SubFormFieldRuleTrigger,
  SubFormFieldsPerDocumentBase,
  SubFormFieldsPerDocumentCheckbox,
  SubFormFieldsPerDocumentCheckboxMerge,
  SubFormFieldsPerDocumentDateSigned,
  SubFormFieldsPerDocumentDropdown,
  SubFormFieldsPerDocumentFontEnum,
  SubFormFieldsPerDocumentHyperlink,
  SubFormFieldsPerDocumentInitials,
  SubFormFieldsPerDocumentRadio,
  SubFormFieldsPerDocumentSignature,
  SubFormFieldsPerDocumentText,
  SubFormFieldsPerDocumentTextMerge,
  SubFormFieldsPerDocumentTypeEnum,
  SubMergeField,
  SubOAuth,
  SubOptions,
  SubSignatureRequestGroupedSigners,
  SubSignatureRequestSigner,
  SubSignatureRequestTemplateSigner,
  SubSigningOptions,
  SubTeamResponse,
  SubTemplateRole,
  SubUnclaimedDraftSigner,
  SubUnclaimedDraftTemplateSigner,
  SubWhiteLabelingOptions,
  TeamAddMemberRequest,
  TeamApi,
  TeamCreateRequest,
  TeamGetInfoResponse,
  TeamGetResponse,
  TeamInfoResponse,
  TeamInviteResponse,
  TeamInvitesResponse,
  TeamMemberResponse,
  TeamMembersResponse,
  TeamParentResponse,
  TeamRemoveMemberRequest,
  TeamResponse,
  TeamSubTeamsResponse,
  TeamUpdateRequest,
  TemplateAddUserRequest,
  TemplateApi,
  TemplateCreateEmbeddedDraftRequest,
  TemplateCreateEmbeddedDraftResponse,
  TemplateCreateEmbeddedDraftResponseTemplate,
  TemplateCreateRequest,
  TemplateCreateResponse,
  TemplateCreateResponseTemplate,
  TemplateEditResponse,
  TemplateGetResponse,
  TemplateListResponse,
  TemplateRemoveUserRequest,
  TemplateResponse,
  TemplateResponseAccount,
  TemplateResponseAccountQuota,
  TemplateResponseCCRole,
  TemplateResponseDocument,
  TemplateResponseDocumentCustomFieldBase,
  TemplateResponseDocumentCustomFieldCheckbox,
  TemplateResponseDocumentCustomFieldText,
  TemplateResponseDocumentFieldGroup,
  TemplateResponseDocumentFieldGroupRule,
  TemplateResponseDocumentFormFieldBase,
  TemplateResponseDocumentFormFieldCheckbox,
  TemplateResponseDocumentFormFieldDateSigned,
  TemplateResponseDocumentFormFieldDropdown,
  TemplateResponseDocumentFormFieldHyperlink,
  TemplateResponseDocumentFormFieldInitials,
  TemplateResponseDocumentFormFieldRadio,
  TemplateResponseDocumentFormFieldSignature,
  TemplateResponseDocumentFormFieldText,
  TemplateResponseDocumentStaticFieldBase,
  TemplateResponseDocumentStaticFieldCheckbox,
  TemplateResponseDocumentStaticFieldDateSigned,
  TemplateResponseDocumentStaticFieldDropdown,
  TemplateResponseDocumentStaticFieldHyperlink,
  TemplateResponseDocumentStaticFieldInitials,
  TemplateResponseDocumentStaticFieldRadio,
  TemplateResponseDocumentStaticFieldSignature,
  TemplateResponseDocumentStaticFieldText,
  TemplateResponseFieldAvgTextLength,
  TemplateResponseSignerRole,
  TemplateUpdateFilesRequest,
  TemplateUpdateFilesResponse,
  TemplateUpdateFilesResponseTemplate,
  USER_AGENT,
  UnclaimedDraftApi,
  UnclaimedDraftCreateEmbeddedRequest,
  UnclaimedDraftCreateEmbeddedWithTemplateRequest,
  UnclaimedDraftCreateRequest,
  UnclaimedDraftCreateResponse,
  UnclaimedDraftEditAndResendRequest,
  UnclaimedDraftResponse,
  VoidAuth,
  WarningResponse,
  enumsMap,
  generateFormData,
  queryParamsSerializer,
  toFormData,
  typeMap
});
/*!
 * mime-db
 * Copyright(c) 2014 Jonathan Ong
 * MIT Licensed
 */
/*!
 * mime-types
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
