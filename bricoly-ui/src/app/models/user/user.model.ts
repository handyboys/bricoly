// TODO :add is professional attribute 
export class User {
    constructor(
        public id: number = null,
        public firstName: string = null,
        public lastName: string = null,
        public email: string = null,
        public password: string = null,
        public phone: number = null,
        public profilePictureUrl: string = null
    ) {}
}
