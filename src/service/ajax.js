// import superagent from 'superagent'
// import noCache from 'superagent-no-cache'
//import { restPath } from './api.js'

const restPath = "http://localhost:8090/api/";

const processResponse = (response, next) => {
    response.json().then((data) => {
        next(false, data);
    }).catch((err) => next(err, null));
}

// const processResponse = next => (err, res) => {
//   if(err)
//     return next(err);

//   if(!res.text)
//     return next('no data');

//   let data = JSON.parse(res.text);

//   next(false, data);
// }

// export const post = (to, data, next) => {
//   superagent
//     .post(restPath + to)
//     .use(noCache)
//     .send(data)
//     .end(processResponse(next));
// }

// export const get = (to, next) => {
//   superagent
//     .get(restPath + to)
//     .use(noCache)
//     .end(processResponse(next));
// }

export const get = (to, next) => {
    const path =  restPath + to;
    fetch(path).then((response) => { 
        if (!response.ok) {
            next(true, null);
        }else {
            processResponse(response, next);
        }
    });
  }

// export const deleteRes = (to, next) => {
//   superagent
//     .delete(restPath + to)
//     .use(noCache)
//     .end(processResponse(next));
// }