import games from '@/views/games/index'
import Friands from '@/views/Friands/index'
import gameGoodDIY from '@/views/gameGoodDIY/index'
import gameRankings from '@/views/gameRankings/index'
import plyerTrading from '@/views/plyerTrading/index'

const childRouter = [
  { path: 'games', component: games, name: "游戏专区" , class:"el-icon-menu" },
  { path: 'friands', component: Friands, name: "交友专区",class:"el-icon-circle-plus" },
  { path: 'gameGoodDIY', component: gameGoodDIY, name: "游戏物品DIY" ,class:"el-icon-goods" },
  { path: 'gameRankings', component: gameRankings, name: "高玩排行",class:"el-icon-tickets" },
  { path: 'plyerTrading', component: plyerTrading, name: "玩家交易",class:"el-icon-sort" }
]

export default childRouter