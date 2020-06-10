// TODO :add is professional attribute 
export class User {
    constructor(
        public id: number = null,
        public firstName: string = null,
        public lastName: string = null,
        public email: string = null,
        public password: string = null,
        public phone: number = null,
        public profilePictureUrl: string = null,
        public isProfessional: boolean = false, // Users are initially assumed to be clients, not professional
        public category_id: number = null,
        public adress: string = null,
        public longitude: number = null,
        public latitude: number = null,
        public motorized: boolean = null,
        public description: string = null
    ) {}
}
