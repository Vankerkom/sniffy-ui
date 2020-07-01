export interface MessagePacketReceived {
  sessionId: number;
  timestamp: Date;
  payload: string;
}
