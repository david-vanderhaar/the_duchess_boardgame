(this.webpackJsonpthe_duchess=this.webpackJsonpthe_duchess||[]).push([[0],{121:function(e,t,n){e.exports=n(167)},126:function(e,t,n){},159:function(e,t){},167:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(15),r=n.n(o),l=(n(126),n(113)),c=n(18),s=n(48),m=n(61),d=n.n(m);n(81);var u=function(){return i.a.createElement("div",null,i.a.createElement("a",{className:"App-link",href:"/the_duchess_boardgame"},"Home"),i.a.createElement("a",{className:"App-link",href:"/the_duchess_boardgame/#/play"},"Play"),i.a.createElement("a",{className:"App-link",href:"/the_duchess_boardgame/#/create"},"Tile Creator"))};var h=function(){return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},i.a.createElement("img",{src:d.a,className:"App-logo",alt:"logo"}),i.a.createElement("p",null,"Edit ",i.a.createElement("code",null,"src/Home.js")," and save to reload."),i.a.createElement(u,null)))},p=n(204),f=n(24),y=n(114);n(2);var g={name:"duke",setup:function(){return{boardHeight:6,boardWidth:6,cells:Array(6).fill(null).map((function(e,t){return Array(6).fill(null).map((function(e,t){return null}))}))}},turn:{moveLimit:1},moves:{A:function(e,t){}}},v=Object(p.a)((function(e){return{root:{display:"flex",height:"100%",width:"100%"},tileGrid:{display:"flex",borderWidth:1,flex:5,flexDirection:"column"},gridRow:{display:"flex",flex:1}}}));var w=function(e){var t=e.height,n=e.width,a=e.renderGridSpace,o=v(),r=Object(f.a)();return i.a.createElement("div",{className:o.root},i.a.createElement("div",{className:o.tileGrid},Array(t).fill(null).map((function(e,t){return i.a.createElement("div",{key:t,className:o.gridRow},Array(n).fill(null).map((function(e,n){return a(n,t,r)})))}))))},E=function(e){return console.log(e),i.a.createElement("div",{style:{height:600,width:600}},i.a.createElement(w,{height:e.G.boardHeight,width:e.G.boardWidth,renderGridSpace:function(e,t){return i.a.createElement("div",null,"".concat(e,", ").concat(t))}}))},T=Object(y.a)({game:g,board:E}),b=Object(p.a)((function(e){return{root:{display:"flex",flexDirection:"column",justifyContent:"space-evenly",alignItems:"center"}}}));var x=function(){var e=b();return Object(f.a)(),i.a.createElement("div",{className:e.root},i.a.createElement("h1",null,"Title"),i.a.createElement(T,null))},S=n(27),C=n(54),k=n(105),j=n.n(k),I=n(209),q=n(45),N=n(6),B=n.n(N),_=n(12),D=n(103),W=n.n(D),J=function(){var e=Object(_.a)(B.a.mark((function e(t){var n,a,i,o;return B.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.current,e.next=3,W()(n);case 3:a=e.sent,i=a.toDataURL("image/png"),"string"===typeof(o=document.createElement("a")).download?(o.href=i,o.download="image.png",document.body.appendChild(o),o.click(),document.body.removeChild(o)):window.open(i);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=n(95),O=function(){return i.a.createElement("path",{d:"M256 23.05C127.5 23.05 23.05 127.5 23.05 256S127.5 488.9 256 488.9 488.9 384.5 488.9 256 384.5 23.05 256 23.05z"})},A=function(){return i.a.createElement("path",{d:"M255.997 16.004c-120 0-239.997 60-239.997 149.998C16 226.002 61 256 61 316c0 45-15 45-15 75 0 14.998 48.01 32.002 89.998 44.998v60h239.997v-60s90.567-27.957 90-45c-.933-27.947-15-30-15-74.998 0-30 45.642-91.42 44.998-149.998 0-90-119.998-149.998-239.996-149.998zm-90 179.997c33.137 0 60 26.864 60 60 0 33.136-26.863 60-60 60C132.863 316 106 289.136 106 256c0-33.136 26.862-60 59.998-60zm179.998 0c33.136 0 60 26.864 60 60 0 33.136-26.864 60-60 60-33.136 0-60-26.864-60-60 0-33.136 26.864-60 60-60zm-89.998 105c15 0 45 60 45 75 0 29.998 0 29.998-15 29.998h-60c-15 0-15 0-15-30 0-15 30-74.998 45-74.998z"})},z=function(){return i.a.createElement("path",{d:"M256 22.017l-69.427 102.007-123.038-9.32L100 232.584l-84 90.384 114.898 44.987 18.292 122.028L256 428.2l106.81 61.783 18.292-122.028L496 322.968l-84-90.385 36.465-117.88-123.038 9.32z"})},G=function(){return i.a.createElement("path",{d:"M256 54.99c-27 0-46.418 14.287-57.633 32.23-10.03 16.047-14.203 34.66-15.017 50.962-30.608 15.135-64.515 30.394-91.815 45.994-14.32 8.183-26.805 16.414-36.203 25.26C45.934 218.28 39 228.24 39 239.99c0 5 2.44 9.075 5.19 12.065 2.754 2.99 6.054 5.312 9.812 7.48 7.515 4.336 16.99 7.95 27.412 11.076 15.483 4.646 32.823 8.1 47.9 9.577-14.996 25.84-34.953 49.574-52.447 72.315C56.65 378.785 39 403.99 39 431.99c0 4-.044 7.123.31 10.26.355 3.137 1.256 7.053 4.41 10.156 3.155 3.104 7.017 3.938 10.163 4.28 3.146.345 6.315.304 10.38.304h111.542c8.097 0 14.026.492 20.125-3.43 6.1-3.92 8.324-9.275 12.67-17.275l.088-.16.08-.166s9.723-19.77 21.324-39.388c5.8-9.808 12.097-19.576 17.574-26.498 2.74-3.46 5.304-6.204 7.15-7.754.564-.472.82-.56 1.184-.76.363.2.62.288 1.184.76 1.846 1.55 4.41 4.294 7.15 7.754 5.477 6.922 11.774 16.69 17.574 26.498 11.6 19.618 21.324 39.387 21.324 39.387l.08.165.088.16c4.346 8 6.55 13.323 12.61 17.254 6.058 3.93 11.974 3.45 19.957 3.45H448c4 0 7.12.043 10.244-.304 3.123-.347 6.998-1.21 10.12-4.332 3.12-3.122 3.984-6.997 4.33-10.12.348-3.122.306-6.244.306-10.244 0-28-17.65-53.205-37.867-79.488-17.493-22.74-37.45-46.474-52.447-72.315 15.077-1.478 32.417-4.93 47.9-9.576 10.422-3.125 19.897-6.74 27.412-11.075 3.758-2.168 7.058-4.49 9.81-7.48 2.753-2.99 5.192-7.065 5.192-12.065 0-11.75-6.934-21.71-16.332-30.554-9.398-8.846-21.883-17.077-36.203-25.26-27.3-15.6-61.207-30.86-91.815-45.994-.814-16.3-4.988-34.915-15.017-50.96C302.418 69.276 283 54.99 256 54.99z"})},R=function(){return i.a.createElement("path",{d:"M256 23.57l-16.1 48.86h32.2zM73 90.43v15.97h366V90.43zm48 33.97V479l135-105 135 105V124.4zm87 37h96l-32 80 80-32v96l-80-32 32 80h-96l32-80-80 32v-96l80 32zm48 235.4l-23 17.9v73.7h46v-73.7z",transform:"translate(512, 0) scale(-1, 1) rotate(720, 256, 256)"})},H=function(){return i.a.createElement("path",{d:"M23.05 23.05V488.9H488.9V23.05H23.05z"})},F=function(){return i.a.createElement("path",{d:"M106.854 106.002a26.003 26.003 0 0 0-25.64 29.326c16 124 16 117.344 0 241.344a26.003 26.003 0 0 0 35.776 27.332l298-124a26.003 26.003 0 0 0 0-48.008l-298-124a26.003 26.003 0 0 0-10.136-1.994z"})},L="sl_E",P="jsl_E",V="empty",U=[{type:V,name:"Empty",definition:"Clear this space",getIcon:function(e){return i.a.createElement(M.a,{style:{fill:e.palette.common.white,stroke:e.palette.primary.main,strokeWidth:40},viewBox:"0 0 512 512"},i.a.createElement(H,null))}},{type:"s",name:"Front",definition:"The tile must start on this side.",getIcon:function(){return i.a.createElement(M.a,{viewBox:"0 0 512 512"},i.a.createElement(G,null))}},{type:"s2",name:"Back",definition:"The tile must start on the other side.",getIcon:function(e){return i.a.createElement(M.a,{style:{fill:e.palette.common.white,stroke:e.palette.primary.main,strokeWidth:40},viewBox:"0 0 512 512"},i.a.createElement(G,null))}},{type:"m",name:"Move",definition:"This icon allows a Troop Tile to move to the indicated square if there is a clear and straight path to it from the starting square (the square the tile occupies on the gameboard). If there is a friendly or enemy Troop Tile in between the starting and target squares, then the move cannot be made. Likewise, the move cannot be made if there is a friendly Troop Tile in the target square. If there is an enemy in the target square, however, the move can be made and the player captures the enemy tile.",getIcon:function(){return i.a.createElement(M.a,{viewBox:"0 0 512 512"},i.a.createElement(O,null))}},{type:"jm",name:"Jump Move",definition:"This icon allows a Troop Tile to move to the square shown, jumping over any Troop Tile (friend or enemy) along a shortest path from the starting square to the target square.If there is a friendly Troop Tile in the target square, the move cannot be made.If there is an enemy in the target square, the move can be made and the enemy tile is captured(see Capturing Tiles, p. 5).Nothing happens to the Troop Tiles that were jumped over.",getIcon:function(e){return i.a.createElement(M.a,{style:{fill:e.palette.common.white,stroke:e.palette.primary.main,strokeWidth:40},viewBox:"0 0 512 512"},i.a.createElement(O,null))}},{type:"dr",name:"Dread",definition:"After any movement or placement of a new tile is completed or placement of a new tile, any tile (friendly or enemy) in a square covered by a Dread icon is frozen in place.The tile cannot be moved, captured, shifted by the Command ability, or use any ability, until the Dread icon is removed(i.e.at the start of the controlling player\u2019s turn, the Dread icon is no longer covering the previously frozen tile).The Fort(and Camelot) Tile protects against the Dread icon; a tile in the Fort(and Camelot) cannot be frozen in place, while a tile with a Dread icon inside the Fort(and Camelot) cannot freeze any tile in place outside.Additionally, any tile acting as the Duke, as well as any tile with a Dread icon, is immune to the Dread icon.",getIcon:function(){return i.a.createElement(M.a,{viewBox:"0 0 512 512"},i.a.createElement(A,null))}},{type:"st",name:"Strike",definition:"This icon allows a Troop Tile to capture from afar. Remove an enemy Troop Tile in one of the squares indicated by this icon (see Capturing Tiles, p. 5), but leave the Troop Tile in its original location; using this icon does not move the Troop Tile, but the Tile still flips.This icon has no effect on a friendly tile.",getIcon:function(e){return i.a.createElement(M.a,{style:{fill:e.palette.common.white,stroke:e.palette.primary.main,strokeWidth:40},viewBox:"0 0 512 512"},i.a.createElement(z,null))}},{type:"sh",name:"Shot",definition:"This is similar to the Strike icon. This icon allows a Troop Tile to capture from afar, but only if the Troop Tile has a clear path to the enemy Troop Tile.",getIcon:function(){return i.a.createElement(M.a,{viewBox:"0 0 512 512"},i.a.createElement(z,null))}},{type:L,name:"Slide",definition:"This icon allows a Troop Tile to move any number of squares in the direction shown, as long as it has a clear path.The Troop Tile may not jump over any pieces.If it ends its turn in an opponent\u2019s square, the controlling player captures that piece(see Capturing Tiles, p. 5); it cannot end its movement in a square occupied by a friendly tile.",getIcon:function(){return i.a.createElement(M.a,{transform:"rotate(0)",viewBox:"0 0 512 512"},i.a.createElement(F,null))}},{type:"sl_SE",name:"Slide",definition:"This icon allows a Troop Tile to move any number of squares in the direction shown, as long as it has a clear path.The Troop Tile may not jump over any pieces.If it ends its turn in an opponent\u2019s square, the controlling player captures that piece(see Capturing Tiles, p. 5); it cannot end its movement in a square occupied by a friendly tile.",getIcon:function(){return i.a.createElement(M.a,{transform:"rotate(45)",viewBox:"0 0 512 512"},i.a.createElement(F,null))},parent:L},{type:"sl_S",name:"Slide",definition:"This icon allows a Troop Tile to move any number of squares in the direction shown, as long as it has a clear path.The Troop Tile may not jump over any pieces.If it ends its turn in an opponent\u2019s square, the controlling player captures that piece(see Capturing Tiles, p. 5); it cannot end its movement in a square occupied by a friendly tile.",getIcon:function(){return i.a.createElement(M.a,{transform:"rotate(90)",viewBox:"0 0 512 512"},i.a.createElement(F,null))},parent:L},{type:"sl_SW",name:"Slide",definition:"This icon allows a Troop Tile to move any number of squares in the direction shown, as long as it has a clear path.The Troop Tile may not jump over any pieces.If it ends its turn in an opponent\u2019s square, the controlling player captures that piece(see Capturing Tiles, p. 5); it cannot end its movement in a square occupied by a friendly tile.",getIcon:function(){return i.a.createElement(M.a,{transform:"rotate(135)",viewBox:"0 0 512 512"},i.a.createElement(F,null))},parent:L},{type:"sl_W",name:"Slide",definition:"This icon allows a Troop Tile to move any number of squares in the direction shown, as long as it has a clear path.The Troop Tile may not jump over any pieces.If it ends its turn in an opponent\u2019s square, the controlling player captures that piece(see Capturing Tiles, p. 5); it cannot end its movement in a square occupied by a friendly tile.",getIcon:function(){return i.a.createElement(M.a,{transform:"rotate(180)",viewBox:"0 0 512 512"},i.a.createElement(F,null))},parent:L},{type:"sl_NW",name:"Slide",definition:"This icon allows a Troop Tile to move any number of squares in the direction shown, as long as it has a clear path.The Troop Tile may not jump over any pieces.If it ends its turn in an opponent\u2019s square, the controlling player captures that piece(see Capturing Tiles, p. 5); it cannot end its movement in a square occupied by a friendly tile.",getIcon:function(){return i.a.createElement(M.a,{transform:"rotate(225)",viewBox:"0 0 512 512"},i.a.createElement(F,null))},parent:L},{type:"sl_N",name:"Slide",definition:"This icon allows a Troop Tile to move any number of squares in the direction shown, as long as it has a clear path.The Troop Tile may not jump over any pieces.If it ends its turn in an opponent\u2019s square, the controlling player captures that piece(see Capturing Tiles, p. 5); it cannot end its movement in a square occupied by a friendly tile.",getIcon:function(){return i.a.createElement(M.a,{transform:"rotate(270)",viewBox:"0 0 512 512"},i.a.createElement(F,null))},parent:L},{type:"sl_NE",name:"Slide",definition:"This icon allows a Troop Tile to move any number of squares in the direction shown, as long as it has a clear path.The Troop Tile may not jump over any pieces.If it ends its turn in an opponent\u2019s square, the controlling player captures that piece(see Capturing Tiles, p. 5); it cannot end its movement in a square occupied by a friendly tile.",getIcon:function(){return i.a.createElement(M.a,{transform:"rotate(315)",viewBox:"0 0 512 512"},i.a.createElement(F,null))},parent:L},{type:P,name:"Jump Slide",definition:"This icon follows the exact rules for Slide, with the following addition: this icon allows a Troop Tile to move in the direction of the Jump Slide icon and completely ignore any tile that might be adjacent, along the direction indicated. (This will not allow a tile to Jump Slide past the Mountain Tile.)",getIcon:function(e){return i.a.createElement(M.a,{transform:"rotate(0)",style:{fill:e.palette.common.white,stroke:e.palette.primary.main,strokeWidth:40},viewBox:"0 0 512 512"},i.a.createElement(F,null))}},{type:"jsl_SE",name:"Jump Slide",definition:"This icon follows the exact rules for Slide, with the following addition: this icon allows a Troop Tile to move in the direction of the Jump Slide icon and completely ignore any tile that might be adjacent, along the direction indicated. (This will not allow a tile to Jump Slide past the Mountain Tile.)",getIcon:function(e){return i.a.createElement(M.a,{transform:"rotate(45)",style:{fill:e.palette.common.white,stroke:e.palette.primary.main,strokeWidth:40},viewBox:"0 0 512 512"},i.a.createElement(F,null))},parent:P},{type:"jsl_S",name:"Jump Slide",definition:"This icon follows the exact rules for Slide, with the following addition: this icon allows a Troop Tile to move in the direction of the Jump Slide icon and completely ignore any tile that might be adjacent, along the direction indicated. (This will not allow a tile to Jump Slide past the Mountain Tile.)",getIcon:function(e){return i.a.createElement(M.a,{transform:"rotate(90)",style:{fill:e.palette.common.white,stroke:e.palette.primary.main,strokeWidth:40},viewBox:"0 0 512 512"},i.a.createElement(F,null))},parent:P},{type:"jsl_SW",name:"Jump Slide",definition:"This icon follows the exact rules for Slide, with the following addition: this icon allows a Troop Tile to move in the direction of the Jump Slide icon and completely ignore any tile that might be adjacent, along the direction indicated. (This will not allow a tile to Jump Slide past the Mountain Tile.)",getIcon:function(e){return i.a.createElement(M.a,{transform:"rotate(135)",style:{fill:e.palette.common.white,stroke:e.palette.primary.main,strokeWidth:40},viewBox:"0 0 512 512"},i.a.createElement(F,null))},parent:P},{type:"jsl_W",name:"Jump Slide",definition:"This icon follows the exact rules for Slide, with the following addition: this icon allows a Troop Tile to move in the direction of the Jump Slide icon and completely ignore any tile that might be adjacent, along the direction indicated. (This will not allow a tile to Jump Slide past the Mountain Tile.)",getIcon:function(e){return i.a.createElement(M.a,{transform:"rotate(180)",style:{fill:e.palette.common.white,stroke:e.palette.primary.main,strokeWidth:40},viewBox:"0 0 512 512"},i.a.createElement(F,null))},parent:P},{type:"jsl_NW",name:"Jump Slide",definition:"This icon follows the exact rules for Slide, with the following addition: this icon allows a Troop Tile to move in the direction of the Jump Slide icon and completely ignore any tile that might be adjacent, along the direction indicated. (This will not allow a tile to Jump Slide past the Mountain Tile.)",getIcon:function(e){return i.a.createElement(M.a,{transform:"rotate(225)",style:{fill:e.palette.common.white,stroke:e.palette.primary.main,strokeWidth:40},viewBox:"0 0 512 512"},i.a.createElement(F,null))},parent:P},{type:"jsl_N",name:"Jump Slide",definition:"This icon follows the exact rules for Slide, with the following addition: this icon allows a Troop Tile to move in the direction of the Jump Slide icon and completely ignore any tile that might be adjacent, along the direction indicated. (This will not allow a tile to Jump Slide past the Mountain Tile.)",getIcon:function(e){return i.a.createElement(M.a,{transform:"rotate(270)",style:{fill:e.palette.common.white,stroke:e.palette.primary.main,strokeWidth:40},viewBox:"0 0 512 512"},i.a.createElement(F,null))},parent:P},{type:"jsl_NE",name:"Jump Slide",definition:"This icon follows the exact rules for Slide, with the following addition: this icon allows a Troop Tile to move in the direction of the Jump Slide icon and completely ignore any tile that might be adjacent, along the direction indicated. (This will not allow a tile to Jump Slide past the Mountain Tile.)",getIcon:function(e){return i.a.createElement(M.a,{transform:"rotate(315)",style:{fill:e.palette.common.white,stroke:e.palette.primary.main,strokeWidth:40},viewBox:"0 0 512 512"},i.a.createElement(F,null))},parent:P},{type:"c",name:"Command",definition:"A Troop Tile with these symbols can move other Troop Tiles around it. Instead of moving this Troop Tile, the player moves one of the Troop Tiles he controls from any square indicated by one of these symbols to any other square indicated by one of these symbols; though this tile does not move, it still flips, as always.If the Troop Tile that was moved ends its turn in a square occupied by an enemy tile, capture that tile(see Capturing Tiles, at right); a tile cannot end its move in a square occupied by a friendly tile. The Mountain Tile(see p. 8) does not block Command movement in any way(a tile still cannot end its movement in a Mountain Tile).No other tiles block a Command move in any way; the moving tile simply can move from any square with the Command icon to any other square with the Command icon.",getIcon:function(){return i.a.createElement(M.a,{viewBox:"0 0 512 512"},i.a.createElement(R,null))}},{type:"d",name:"Defense",definition:"A tile cannot capture a target tile if its straight move towards or into the target square would pass through a square with  a Defense icon as indicated on the target tile; even if the tile starts the turn adjacent to the target tile, if the square it starts  on indicates a Defense icon on that tile, the target cannot be captured.   If a move into a target square using a Jump icon can be achieved with a straight line move, then in the instance of a   Defense icon on the target tile potentially blocking that move, that straight line must be used and hence is blocked; i.e.you   cannot take a non- straight line to the target.However, if there is no straight line move to the target square, then the player   can use which ever path can move around the Defense icon.   The Strike icon follows the same rules as Jump / Jump Slide icon; i.e.if there is a straight line attack to the target hex,   that must be chosen and so if a Defense icon is along that path, it blocks the Strike icon.But if there is a non - straight path  to the target, than the Strike icon can be used to capture the target.   Note that Command can always move a tile and capture the target tile, regardless of Defense icons",getIcon:function(){return i.a.createElement(M.a,{viewBox:"0 0 512 512"},i.a.createElement(H,null))}}],$=Object(p.a)((function(e){return{gridSquare:{border:"solid",borderWidth:1,bordercolor:e.palette.primary.main,color:e.palette.primary.main,display:"flex",justifyContent:"center",alignItems:"center",flex:1,transition:"0.4s",height:"100%",width:"100%","&:hover":{backgroundColor:e.palette.primary.main,color:e.palette.common.white,stroke:e.palette.common.white}}}}));var K=function(e){var t=e.onClick,n=e.type,a=e.gridSquareClass,o=void 0!==a&&a,r=$(),l=Object(f.a)();o||(o=r.gridSquare);var c=U.filter((function(e){return e.type===n})),s=function(){return null};return c.length&&(s=function(){return c[0].getIcon(l)}),i.a.createElement("div",{onClick:t,className:o},s())},Q=i.a.forwardRef((function(e,t){e.onFlip;var n=e.tileData,a=(e.currentSide,e.renderGrid),o=X();return i.a.createElement("div",{ref:t,className:o.tileContainer},i.a.createElement("div",{className:o.tileLeft},i.a.createElement("div",{className:o.tileGrid},a()),i.a.createElement("div",{className:o.tileName},i.a.createElement(C.a,{className:o.title},n.name))),i.a.createElement("div",{className:o.tileRight},i.a.createElement("div",{className:o.tileIcon},n.icon())))})),X=Object(p.a)((function(e){return{tileColumn:{display:"flex",flex:2,justifyContent:"center",alignItems:"center",flexDirection:"column"},tileContainer:{border:"solid",borderWidth:1,display:"flex",flexDirection:"row",height:300,margin:10,width:300},tileLeft:{display:"flex",flex:3,flexDirection:"column"},tileRight:{display:"flex",flex:1},tileGrid:{display:"flex",flex:3,flexDirection:"column"},gridRow:{display:"flex",flex:1},gridSquare:{color:e.palette.primary.main,display:"flex",justifyContent:"center",alignItems:"center",flex:1,transition:"0.4s",height:"100%",width:"100%","&:hover":{backgroundColor:e.palette.primary.main,color:e.palette.common.white,stroke:e.palette.common.white}},tileName:{flex:1,display:"flex",justifyContent:"space-around",alignItems:"center"},tileIcon:{border:"solid",borderCollapse:"collapse",borderWidth:1,flex:1,display:"flex",justifyContent:"center",alignItems:"center"}}})),Y=Q,Z=(Object(p.a)((function(e){return{gridSquare:{border:"solid",borderWidth:1,bordercolor:e.palette.primary.main,color:e.palette.primary.main,display:"flex",justifyContent:"center",alignItems:"center",flex:1,transition:"0.4s",height:"100%",width:"100%"},red:{backgroundColor:"red"}}})),Object(p.a)((function(e){return{gridSquare:{border:"solid",borderWidth:1,bordercolor:e.palette.primary.main,color:e.palette.primary.main,display:"flex",justifyContent:"center",alignItems:"center",flex:1,transition:"0.4s",height:"100%",width:"100%","&:hover":{backgroundColor:e.palette.primary.main,color:e.palette.common.white,stroke:e.palette.common.white}}}}))),ee=i.a.forwardRef((function(e,t){var n=e.onFlip,a=e.tile,o=e.currentSide,r=e.onEditGridSquare,l=Z(),c=a.sides[o].moves;return i.a.createElement(Y,{ref:t,onFlip:n,tileData:a,currentSide:o,renderGrid:function(){return i.a.createElement(w,{height:a.height,width:a.width,renderGridSpace:function(e,t,n){var a=c.filter((function(n){return n.x===e&&n.y===t})),o=a.length?a[0].type:null;return i.a.createElement(K,{key:"".concat(e).concat(t),onClick:function(){return r(e,t)},type:o,gridSquareClass:l.gridSquare})}})}})})),te=n(219),ne=n(208),ae=n(220),ie=Object(p.a)((function(e){return{movePalette:{border:"solid",borderRadius:5,borderWidth:1,display:"flex",flexWrap:"wrap",flexDirection:"column",margin:20,padding:20},movePaletteButton:{margin:10}}}));function oe(e){var t=e.selectedMoveType,n=e.setMoveType,a=ie(),o=Object(f.a)(),r=U.filter((function(e){return!Object(q.has)(e,"parent",!1)})),l=function(e,n){return t===e||Object(q.findIndex)(n,{type:t})>-1};return i.a.createElement("div",{className:a.movePalette},r.map((function(e,r){var c=U.filter((function(t){return Object(q.get)(t,"parent",!1)===e.type}));return i.a.createElement("div",{key:r,className:a.movePaletteButton},i.a.createElement(te.a,{title:e.definition},i.a.createElement(ae.a,{variant:e.type===t?"default":"outlined",color:"primary",icon:e.getIcon(o),label:e.name,onClick:function(){return n(e.type)}})),i.a.createElement(ne.a,{in:l(e.type,c)},i.a.createElement("div",null,c.map((function(e,r){return i.a.createElement("div",{key:r,className:a.movePaletteButton},i.a.createElement(ae.a,{variant:e.type===t?"default":"outlined",color:"primary",icon:e.getIcon(o),label:e.name,onClick:function(){return n(e.type)}}))})))))})))}var re=Object(p.a)((function(e){return{root:{display:"flex",justifyContent:"space-evenly",alignItems:"center",flexWrap:"wrap-reverse"},paletteColumn:{flex:1},tileColumn:{display:"flex",flex:2,justifyContent:"center",alignItems:"center",flexDirection:"column"},editableTileContainer:{display:"flex"},tileLeft:{display:"flex",flex:5,flexDirection:"column"},tileRight:{display:"flex",flex:1},tileGrid:{display:"flex",flex:5,flexDirection:"column"},gridRow:{display:"flex",flex:1},tileName:{height:"22mm",display:"flex",justifyContent:"center",alignItems:"center"},tileSideIndicator:{backgroundColor:e.palette.primary.main,color:e.palette.common.white,padding:10,textAlign:"center",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",marginTop:10},tileIcon:{border:"solid",borderCollapse:"collapse",borderWidth:1,flex:1,display:"flex",justifyContent:"center",alignItems:"center"},tileSideLabel:{backgroundColor:e.palette.primary.main,color:e.palette.common.white,padding:10,textAlign:"center",display:"flex",flexDirection:"column",justifyContent:"center"}}})),le=function(){var e=re(),t=i.a.useState("m"),n=Object(S.a)(t,2),a=n[0],o=n[1],r=i.a.useState(0),l=Object(S.a)(r,2),c=l[0],s=l[1],m=function(){s(1-c)},d={name:"Footman",icon:function(){return i.a.createElement(j.a,null)},height:5,width:5,sides:[{moves:[{x:2,y:2,type:"s",editable:!1}]},{moves:[{x:2,y:2,type:"s2",editable:!1}]}]},u=i.a.useState(d),h=Object(S.a)(u,2),p=h[0],f=h[1],y=(p.sides[c].moves,i.a.useRef());return i.a.createElement("div",{className:e.root},i.a.createElement("div",{className:e.paletteColumn},i.a.createElement(oe,{selectedMoveType:a,setMoveType:o})),i.a.createElement("div",{className:e.tileColumn},i.a.createElement("h1",null,"Tile Creator"),i.a.createElement(I.a,{variant:"contained",color:"secondary",onClick:function(){return J(y)}},"Export as PNG"),i.a.createElement("div",{className:e.tileSideIndicator},i.a.createElement(C.a,{style:{marginRight:10}},"Side ",c+1),i.a.createElement(I.a,{variant:"contained",color:"secondary",onClick:m},"Flip")),i.a.createElement(ee,{ref:y,onFlip:m,onEditGridSquare:function(e,t){var n=Object(q.cloneDeep)(p);a===V?function(e,t,n){var a=n.sides[c].moves.filter((function(n,a){return!(n.x===e&&n.y===t)}));n.sides[c].moves=a,f(n)}(e,t,n):function(e,t,n){var i={x:e,y:t,type:a},o=!1;n.sides[c].moves=n.sides[c].moves.map((function(n,i){return n.x===e&&n.y===t&&(o=!0,n.type=a),n})),o||n.sides[c].moves.push(i),f(n)}(e,t,n)},currentSide:c,tile:p})))};var ce=function(){return i.a.createElement("div",{className:"App"},i.a.createElement("header",{className:"App-header"},i.a.createElement("img",{src:d.a,className:"App-logo",alt:"logo"}),i.a.createElement("p",null,"Edit ",i.a.createElement("code",null,"src/BagBuilder.js")," and save to reload."),i.a.createElement(u,null)))},se=n(3),me=n(210),de=n(213),ue=n(211),he=n(212),pe=n(106),fe=n.n(pe),ye=n(218),ge=n(215),ve=n(214),we=n(107),Ee=n.n(we),Te=n(108),be=n.n(Te),xe=n(221),Se=n(216),Ce=n(217),ke=n(109),je=n.n(ke),Ie=n(110),qe=n.n(Ie),Ne=n(111),Be=n.n(Ne),_e=n(112),De=n.n(_e),We=Object(p.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},hide:{display:"none"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerHeader:Object(se.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar,{justifyContent:"flex-end"})}}));function Je(){var e=We(),t=Object(f.a)(),n=i.a.useState(!1),a=Object(S.a)(n,2),o=a[0],r=a[1];return i.a.createElement("div",{className:e.root},i.a.createElement(me.a,{position:"static"},i.a.createElement(ue.a,null,i.a.createElement(he.a,{color:"inherit","aria-label":"open drawer",onClick:function(){r(!0)},edge:"start",className:o?e.hide:e.menuButton},i.a.createElement(fe.a,null)),i.a.createElement(C.a,{variant:"h6",className:e.title},i.a.createElement(de.a,{href:"/the_duchess_boardgame",color:"inherit",underline:"none"},"The Duchess")))),i.a.createElement(ye.a,{className:e.drawer,variant:"persistent",anchor:"left",open:o,classes:{paper:e.drawerPaper}},i.a.createElement("div",{className:e.drawerHeader},i.a.createElement(he.a,{onClick:function(){r(!1)}},"ltr"===t.direction?i.a.createElement(Ee.a,null):i.a.createElement(be.a,null))),i.a.createElement(ve.a,null),i.a.createElement(ge.a,null,i.a.createElement(de.a,{href:"/the_duchess_boardgame",color:"inherit",underline:"none"},i.a.createElement(xe.a,{button:!0},i.a.createElement(Se.a,null,i.a.createElement(je.a,null)),i.a.createElement(Ce.a,{primary:"Home"}))),i.a.createElement(de.a,{href:"/the_duchess_boardgame/#/play",color:"inherit",underline:"none"},i.a.createElement(xe.a,{button:!0},i.a.createElement(Se.a,null,i.a.createElement(qe.a,null)),i.a.createElement(Ce.a,{primary:"Play"}))),i.a.createElement(de.a,{href:"/the_duchess_boardgame/#/create",color:"inherit",underline:"none"},i.a.createElement(xe.a,{button:!0},i.a.createElement(Se.a,null,i.a.createElement(Be.a,null)),i.a.createElement(Ce.a,{primary:"Tile Creator"}))),i.a.createElement(de.a,{href:"/the_duchess_boardgame/#/build",color:"inherit",underline:"none"},i.a.createElement(xe.a,{button:!0},i.a.createElement(Se.a,null,i.a.createElement(De.a,null)),i.a.createElement(Ce.a,{primary:"Bag Builder"}))))))}var Me={initial:{opacity:0},in:{opacity:1},out:{opacity:0}},Oe=function(){return i.a.createElement(l.a,{basename:"/the_duchess_boardgame"},i.a.createElement(Je,null),i.a.createElement(c.a,{render:function(e){var t=e.location;return i.a.createElement(s.a,{exitBeforeEnter:!0,initial:!0},i.a.createElement(c.c,{location:t,key:t.pathname},i.a.createElement(c.a,{exact:!0,path:"/",component:function(){return i.a.createElement(s.b.div,{initial:"initial",animate:"in",exit:"out",variants:Me},i.a.createElement(h,null))}}),i.a.createElement(c.a,{path:"/play",component:function(){return i.a.createElement(s.b.div,{initial:"initial",animate:"in",exit:"out",variants:Me},i.a.createElement(x,null))}}),i.a.createElement(c.a,{path:"/create",component:function(){return i.a.createElement(s.b.div,{initial:"initial",animate:"in",exit:"out",variants:Me},i.a.createElement(le,null))}}),i.a.createElement(c.a,{path:"/build",component:function(){return i.a.createElement(s.b.div,{initial:"initial",animate:"in",exit:"out",variants:Me},i.a.createElement(ce,null))}})))}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(Oe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},61:function(e,t,n){e.exports=n.p+"static/media/logo.ee7cd8ed.svg"},81:function(e,t,n){}},[[121,1,2]]]);
//# sourceMappingURL=main.23bf51af.chunk.js.map