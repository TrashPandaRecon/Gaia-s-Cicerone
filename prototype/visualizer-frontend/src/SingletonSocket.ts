import { ENDPOINT } from './config/config';

// This is a Singleton design pattern. Its a design pattern from object oriented programming that only allows a single instance of a class. 
// It is useful when you want all users of the class to use the same instance to prevent wasting of resources or duplicates, also helps with synchronizing class usage. 
const socketIOClient = require('socket.io-client');
export class SingletonSocket {
	private static instance: SingletonSocket;
	private socket: any;
	private constructor() {
		this.socket = socketIOClient(ENDPOINT);
	}
	public static getInstance() {
		if (!SingletonSocket.instance) {
			SingletonSocket.instance = new SingletonSocket();
		}
		return SingletonSocket.instance;
	}
	public getSocket() {
		return this.socket;
	}
}
