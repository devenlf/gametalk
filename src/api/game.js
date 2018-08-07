import server from '@/util/request';

export function getListData() {
  return server({
    url: '/game/list',
    method: 'post',
    data: {
      type:0
    }
  })
}