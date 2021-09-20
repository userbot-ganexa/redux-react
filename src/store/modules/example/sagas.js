import { call, put, all, takeLatest } from 'redux-saga/effects'
import { toast } from 'react-toastify'
import * as actions from './actions'
import * as types from '../types'

const require = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve()
    }, 2000)
  })

function* exampleRequest() {
  try {
    yield call(require)
    yield put(actions.clicaBotaoSucess())
  } catch (e) {
    toast.error('Ops :(, tente novamente mais tarde...s')
    yield put(actions.clicaBotaoFailure())
  }
}

export default all([
  takeLatest(types.BOTAO_CLICADO_REQUEST, exampleRequest)
])
