import Http from './../utils/Http';

export function getListRoomsByUser({ page, filter_type }) {
  return new Http().authenticated().get(`/rooms/index?page=${page}&&filter_type=${filter_type}`);
}

export function getListRoomsBySubName(text) {
  return new Http().authenticated().get(`/rooms/get-rooms-by-sub-name?sub_name=${text}`);
}

export function getQuantityRoomsByUserId(filter_type) {
  return new Http().authenticated().get(`/rooms/get-total-rooms-by-user?filter_type=${filter_type}`);
}

export function deleteRoom(roomId) {
  return new Http().authenticated().delete('/delete-room', roomId);
}

export function createRoom(data) {
  return new Http().authenticated().post('/create-room', data);
}

export function getInfoRoomWithInvitionCode(code) {
  return new Http().authenticated().get(`/r/${code}`);
}

export function sendRequestJoinRoom(data) {
  return new Http().authenticated().post('/rooms/requests/add', data);
}

export function getMembersOfRoom(roomId) {
  return new Http().authenticated().get(`/rooms/${roomId}/members`);
}

export function deleteMember(data) {
  return new Http().authenticated().delete('/rooms/delete-member', data);
}

export function getInforRoom(roomId) {
  return new Http().authenticated().get('rooms/' + roomId);
}

export function getRequests(roomId, page) {
  return new Http().authenticated().get(`/rooms/${roomId}/requests?page=${page}`);
}

export function getNumberOfRequests(roomId) {
  return new Http().authenticated().get(`/rooms/${roomId}/total-requests`);
}

export function acceptRequests(roomId, requestIds) {
  return new Http().authenticated().post(`/rooms/${roomId}/accept-requests`, requestIds);
}

export function rejectRequests(roomId, requestIds) {
  return new Http().authenticated().post(`/rooms/${roomId}/reject-requests`, requestIds);
}
