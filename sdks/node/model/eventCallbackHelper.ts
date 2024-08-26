import * as crypto from "crypto";
import { EventCallbackRequest } from "./";

export class EventCallbackHelper {
  static readonly EVENT_TYPE_ACCOUNT_CALLBACK = "account_callback";

  static readonly EVENT_TYPE_APP_CALLBACK = "app_callback";

  /**
   * Verify that callback came from HelloSign.com
   */
  static isValid = (
    apiKey: string,
    eventCallback: EventCallbackRequest
  ): boolean => {
    const hmac = crypto.createHmac("sha256", apiKey);
    hmac.update(
      `${eventCallback.event.eventTime}${eventCallback.event.eventType}`
    );

    return eventCallback.event.eventHash === hmac.digest("hex").toString();
  };

  /**
   * Identifies the callback type, one of "account_callback" or "app_callback".
   * "app_callback" will always include a value for "reported_for_app_id"
   */
  static getCallbackType = (eventCallback: EventCallbackRequest): string => {
    if (
      !eventCallback.event.eventMetadata ||
      !eventCallback.event.eventMetadata.reportedForAppId
    ) {
      return EventCallbackHelper.EVENT_TYPE_ACCOUNT_CALLBACK;
    }

    return EventCallbackHelper.EVENT_TYPE_APP_CALLBACK;
  };
}
