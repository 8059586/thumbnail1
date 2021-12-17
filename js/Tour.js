AFRAME.registerComponent("tour", {
  init: function () {
    this.placesContainer = this.el;
    this.createCards();
  },

  createCards: function () {
    const thumbNailsRef = [
      {
        id: "taj-mahal",
        title: "Taj Mahal",
        url: "./assets/thumbnails/taj_mahal.png",
      },
      {
        id: "budapest",
        title: "Budapest",
        url: "./assets/thumbnails/budapest.jpg",
      },

      {
        id: "eiffel-tower",
        title: "Eiffel Tower",
        url: "./assets/thumbnails/eiffel_tower.jpg",
      },
      {
        id: "new-york-city",
        title: "New York City",
        url: "./assets/thumbnails/new_york_city.png",
      },
    ];
    let prevoiusXPosition = -60;

    for (var item of thumbNailsRef) {
      const posX = prevoiusXPosition + 25;
      const posY = 10;
      const posZ = -40;
      const position = { x: posX, y: posY, z: posZ };
      prevoiusXPosition = posX;

      // Border Element
      var border = this.createBorder(position,item.id)
      // Thumbnail Element
     var thumbnail = this.createThumbnail(item)
     border.appendChild(thumbnail)
      // Title Text Element
      var title = this.createTitle(position,item)
      border.appendChild(title)
      this.placesContainer.appendChild(border);
    }
  },
  createBorder:function(position,id){
    var entity = document.createElement("a-entity")
    entity.setAttribute("id",id)
    entity.setAttribute("position",position)
    entity.setAttribute("visible",true)
    entity.setAttribute("geometry",{primitive:"ring",radiusInner:9,radiusOuter:10})
    entity.setAttribute("material",{color:"yellow",opacity:1})
    return entity
  },
  
  createThumbnail:function(item){
    var entity = document.createElement("a-entity")
    entity.setAttribute("visible",true)
    entity.setAttribute("geometry",{primitive:"circle",radius:9})
    entity.setAttribute("material",{src:item.url})
    return entity
  },
  createTitle:function(position,item){
    var entity = document.createElement("a-entity")
    var epos = position
    epos.y = -20
    entity.setAttribute("position",epos)
    entity.setAttribute("visible",true)
    entity.setAttribute("text",{
      font:"exo2bold",
      align:"center",
      width:70,
      color:"green",
      value:item.title
    })
    return entity
  },
});
