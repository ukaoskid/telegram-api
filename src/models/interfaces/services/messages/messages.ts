import { ISendMessagePayload } from "../../payloads/requests/send-message-payload";
import { IUser } from "../../entities/user";
import { IForwardMessagePayload } from "../../payloads/requests/forward-message";
import { ISendPhotoPayload } from "../../payloads/requests/send-photo-payload";
import { IMessageResponse } from "../../payloads/response/message-response";
import { ISendAudioPayload } from "../../payloads/requests/send-audio-payload";
import { ISendDocumentPayload } from "../../payloads/requests/send-document-payload";

export interface IMessages {

  getMe(): Promise<IUser>;
  sendMessage(payload: ISendMessagePayload): Promise<IMessageResponse>;
  forwardMessage(payload: IForwardMessagePayload): Promise<IMessageResponse>;
  sendPhoto(payload: ISendPhotoPayload): Promise<IMessageResponse>;
  sendAudio(payload: ISendAudioPayload): Promise<IMessageResponse>;
  sendDocument(payload: ISendDocumentPayload): Promise<IMessageResponse>;
}