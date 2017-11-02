import {
    Injectable
} from '@angular/core';
import {
    Http,
    Response
} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class QuestionService {
    private _url: string = "/assets/config.json";
    constructor(private _http: Http) {}

    getAllQuestions() {
        return this._http.get(this._url).map((response: Response) => {
            let _response = response.json();
            //console.log('_response : ',_response.configuration.programs[0]['questions']);
            return _response.questions;
            //response.json();
            //return [];
        });
    }

    getVisibleQuestion() {
        return [];
    }

    getQuestionsByProgramId( _pid: string ){
        if (!_pid) {return null;};
        return [];
    }
}