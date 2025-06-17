import { takeLatest, all, call, put } from "redux-saga/effects";
import USER_ACTION_TYPES from "./user.types";
import { createUserDocumentFromAuth, getCurrentUser } from "../../utils/firebase/firebase.utils";
import { setCurrentUser, signInFailed, signInSuccess } from "./user.action";

export function* getSnapshotFromUserAuth(userAuth, additionalDetails) {
	try {
		const userSnapshot = yield call(createUserDocumentFromAuth, userAuth, additionalDetails);
		yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
	} catch (error) {
		yield put(signInFailed(error));
	}
}

export function* isUserAuthenticated() {
	try {
		const userAuth = yield call(getCurrentUser);
		if (!userAuth) return;
		yield call(getSnapshotFromUserAuth, userAuth);
	} catch (error) {
		yield put(signInFailed(error));
	}
}
// Whenever an actions happens and the saga hears it, we want to do something with it
export function* onCheckUserSession() {
	// get the latest action that matches the type and then what we want to happen
	yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

// This is essentially an accumulator that holds all the sagas for category
export function* userSaga() {
	yield all([call(onCheckUserSession)]);
}
