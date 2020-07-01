export interface MessagePacket {
  id: string;
  sessionId: number;
  timestamp: Date;
  inbound: boolean;
  payload: string;
}
