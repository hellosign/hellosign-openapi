<?php
/**
 * HelloSign PHP SDK (https://github.com/hellosign/hellosign-php-sdk/)
 */

/**
 * The MIT License (MIT)
 *
 * Copyright (C) 2014 hellosign.com
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

namespace HelloSignLegacy;

/**
 * Represents a HelloSign BulkSendJob to send Embedded SignatureRequests based on a Template
 *
 * An embedded SignatureRequest is one that can be signed from within an
 * iFrame on your website.
 */
class EmbeddedBulkSendJob extends AbstractSignatureRequestWrapper
{
    /**
     * @return array
     * @ignore
     */
    public function toParams()
    {
        /**
         * Here we combine (using the + operator) the param arrays for the
         * BulkSendJob object with itself (the Embedded BulkSendJob
         * object) to get the final params array. The order of this union is
         * important! The params from $this->request must be left of the union
         * operator so that its values (e.g. test_mode) take precedence over
         * our defaults.
         */
        return $this->request->toParams(array(
            'except' => array(
            )
        )) + $this->toArray(array(
            'except' => array(
                'request',
                'skip_me_now'
            )
        ));
    }
}
