import { fork, all, takeLatest } from 'redux-saga/effects';
import saga from './saga';

const rootSaga = function*() {
  yield all([takeLatest('HANDLE_LOGIN', saga)]);
};
export default rootSaga;
