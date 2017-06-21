        var divTop = document.getElementById('divtop');
        var btnTop = document.getElementById('btntop')
        var btnHeroes = document.getElementById('heroesbtn');
        var btnView = document.getElementById('btnview');
        var heroes = [
            {id:11, name:"Narco"},
            {id:12, name:"Mr.Nice"},
            {id:13, name:"Bombasto"},
            {id:14, name:"Celeritas"},
            {id:15, name:"Magnetta"},
            {id:16, name:"Dr. IQ"},
            {id:17, name:"Magma"},
            {id:18, name:"Tornado"},
            {id:8, name:"Victor"}
        ];

        var favoriteHeroes = [
            {id:11, name:"Narco"},
            {id:13, name:"Bombasto"},
            {id:15, name:"Magnetta"},
            {id:16, name:"Dr. IQ"},
            {id:8, name:"Victor"}
        ];
        
        function showDetails(id) {
            
            var hero = favoriteHeroes.find(hero => hero.id == id);
            
            var detailsDiv = document.getElementById("details");
            var header = document.getElementById("header");
            var idHeader = document.getElementById("num");
            var input = document.getElementById("name");
            
            header.innerHTML = hero.name + " details!";
            idHeader.innerHTML = hero.id;
            input.value = hero.name;
            
            detailsDiv.style.display = "block";
            divTop.style.display = "none";
            divHeroes.style.display = 'none';
        }
        
        function createHeroListItem(id,name){
            return "<li class='hero' data='" + id + "'><span class='numbers'>" + id + "</span><span>" + name + "</span></li>" ;
        }
        
        function createHeroList(){
            var items = "";
            heroes.forEach(hero => {
                items += createHeroListItem(hero.id, hero.name);
            })
            return items;
        }

        document.getElementById('herolist').innerHTML = createHeroList();
        
        function selectHero(event) {
            var id = event.target.attributes['data'].value;
            var hero = heroes.find(hero => hero.id == id);
            document.getElementById("selected").style.display = 'block';
            var p1 = document.getElementById("p1")
            p1.innerHTML = "<h3>" + hero.name + " is my Hero!</h3>";
            document.getElementById("selected").appendChild(p1);
            var selectedHero = hero.id;
            btnView.onclick = function(){
            showDetails(selectedHero)
            }
        }  
        
        var heroesItems = document.getElementsByClassName("hero");
        for (var i = 0; i < heroesItems.length; i++) {
            heroesItems[i].onclick = selectHero;
        }
        
        function createHeroFlexItem(id, name){
            return '<div class = "flex-element" data="'+id+'"><p class="p1">'+name+'</p></div>'
        }

        function createHeroDashboard(){
            var items = "";
            favoriteHeroes.forEach(favHero => {
                items += createHeroFlexItem(favHero.id, favHero.name)
            })
            return items;
        }

         document.getElementById('flex-container').innerHTML = createHeroDashboard()
         
         function heroDetails(event){
             var id = event.target.attributes['data'].value;
             showDetails(id);
         }

        var flexElements = document.getElementsByClassName('flex-element');
        for (var i = 0; i < flexElements.length; i++){
            flexElements[i].onclick = heroDetails;
        }
        
        
        var divHeroes = document.getElementById('heroes');
        var detailsDiv = document.getElementById('details');
        
        
        btnHeroes.onclick = function(){
            divTop.style.display = 'none'
            divHeroes.style.display = 'block'
            detailsDiv.style.display = 'none'
        }
        btnTop.onclick = function(){
            divHeroes.style.display = 'none'
            divTop.style.display = 'block'
            detailsDiv.style.display = 'none'
        }
        
        var btnback = document.getElementById('btndiv')
        
        btnback.onclick = function(){
            detailsDiv.style.display = 'none'
            divTop.style.display = 'block'
        }
        