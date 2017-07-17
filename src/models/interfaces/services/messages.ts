import { ISendMessagePayload } from "../payloads/send/send-message-payload";
import { IForwardMessagePayload } from "../payloads/send/forward-message";
import { ISendPhotoPayload } from "../payloads/send/send-photo-payload";
import { IMessage } from "../entities/message";
import { ISendAudioPayload } from "../payloads/send/send-audio-payload";
import { ISendDocumentPayload } from "../payloads/send/send-document-payload";
import { ISendStickerPayload } from "../payloads/send/send-sticker-payload";
import { ISendVideoPayload } from "../payloads/send/send-video-payload";
import { ISendVoicePayload } from "../payloads/send/send-voice-payload";
import { ISendVideoNotePayload } from "../payloads/send/send-video-note-payload";
import { ISendLocationPayload } from "../payloads/send/send-location-payload";
import { ISendVenuePayload } from "../payloads/send/send-venue-payload";
import { ISendContactPayload } from "../payloads/send/send-contact-payload";
import { ISendChatAction } from "../payloads/send/send-chat-action-payload";
import { TelegramResponse } from "../payloads/response/generic-response";

export interface IMessages {

  sendMessage(payload: ISendMessagePayload): Promise<TelegramResponse<IMessage>>;
  forwardMessage(payload: IForwardMessagePayload): Promise<TelegramResponse<IMessage>>;
  sendPhoto(payload: ISendPhotoPayload): Promise<TelegramResponse<IMessage>>;
  sendAudio(payload: ISendAudioPayload): Promise<TelegramResponse<IMessage>>;
  sendDocument(payload: ISendDocumentPayload): Promise<TelegramResponse<IMessage>>;
  sendSticker(payload: ISendStickerPayload): Promise<TelegramResponse<IMessage>>;
  sendVideo(payload: ISendVideoPayload): Promise<TelegramResponse<IMessage>>;
  sendVoice(payload: ISendVoicePayload): Promise<TelegramResponse<IMessage>>;
  sendVideoNote(payload: ISendVideoNotePayload): Promise<TelegramResponse<IMessage>>;
  sendLocation(payload: ISendLocationPayload): Promise<TelegramResponse<IMessage>>;
  sendVenue(payload: ISendVenuePayload): Promise<TelegramResponse<IMessage>>;
  sendContact(payload: ISendContactPayload): Promise<TelegramResponse<IMessage>>;
  sendChatAction(payload: ISendChatAction): Promise<TelegramResponse<boolean>>;
}