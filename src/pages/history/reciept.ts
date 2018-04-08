export class reciept { 
    constructor (
		public day: any,
		public store: string, 
		public amount: number, 
		public description?: string,
		public tag?: any
	){}
}
