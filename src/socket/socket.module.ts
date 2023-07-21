import { Module } from '@nestjs/common';
import { Socket } from 'socket.io-client';
import { SocketClient } from './socket-cleint';

@Module({ providers: [SocketClient] })
export class SocketModule {}
