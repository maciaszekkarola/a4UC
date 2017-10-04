import { Subject } from 'rxjs/Subject';

// przez to, że tworzę objekt subject to korystam z Observable i Observera w tym samym czasie

export class UsersService {
    userActivated = new Subject();
}
