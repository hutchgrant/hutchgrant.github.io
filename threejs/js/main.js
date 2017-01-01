$(document).ready(function () {

	var WIDTH  = window.innerWidth;
	var HEIGHT = window.innerHeight;
	var boolRender = 0;
	var lastTimeMsec= null;
	var updateFcts	= [];
	var scene	= new THREE.Scene();
	var mixerContext, mixerPlane;
	var domElement;
	var camera, renderer;
	var url;

	init();
	render();
	animate();

	function init(){

		renderer	= new THREE.WebGLRenderer({
			alpha		: true,
		});
		renderer.autoClear	= false;
		renderer.setSize( WIDTH, HEIGHT );
		document.body.appendChild( renderer.domElement );

   		camera = new THREE.PerspectiveCamera(60, WIDTH / HEIGHT, 1, 1000);
    		camera.position.set(11.5, 5.5, 6.8);
    		camera.rotation.x = 0;
    		camera.rotation.y = 0;
    		camera.rotation.z = 0;
		// var controls	= new THREE.OrbitControls(camera)

		//progess manager
		manager = new THREE.LoadingManager();

		manager.onProgress = function (item, loaded, total) {
    			console.log(item, loaded, total);
		};
		manager.onLoad = function () {
    			console.log('all items loaded');
    			allItemsLoaded();
		};
		manager.onError = function () {
    			console.log('there has been an error');
		};

	
		window.addEventListener('resize', onResize, false)

		initMixer();
	}

	function initMixer(){

		mixerContext= new THREEx.HtmlMixer.Context(renderer, scene, camera)

		// handle window resize for mixerContext
		window.addEventListener('resize', function(){
			mixerContext.rendererCss.setSize( window.innerWidth, window.innerHeight )
		}, false)

 		// set up rendererCss
		var rendererCss		= mixerContext.rendererCss
		rendererCss.setSize( window.innerWidth, window.innerHeight )
		// set up rendererWebgl
		var rendererWebgl	= mixerContext.rendererWebgl

		var css3dElement		= rendererCss.domElement
		css3dElement.style.position	= 'absolute'
		css3dElement.style.top		= '0px'
		css3dElement.style.width	= '100%'
		css3dElement.style.height	= '100%'
		document.body.appendChild( css3dElement )
	
		var webglCanvas			= rendererWebgl.domElement
		webglCanvas.style.position	= 'absolute'
		webglCanvas.style.top		= '0px'
		webglCanvas.style.width		= '100%'
		webglCanvas.style.height	= '100%'
		webglCanvas.style.pointerEvents	= 'none'
		css3dElement.appendChild( webglCanvas )

		// create the iframe element
		url = 'home.html';	
		createFrameElem();
		document.addEventListener( 'mouseover', onMouseOver, false );
		
		// Load Scene, set main frame obj
		var loader = new THREE.ObjectLoader(manager);
		loader.load( "js/sitescene.json", function ( loadedScene ) {
			scene = loadedScene;
			var BoardObject = loadedScene.getObjectByName("Board", true); 
			scene.add( camera );
			setObj(BoardObject);
		});
	}

	function onMouseOver( event ) {
  		// event.preventDefault();
		$('#winBtn').click(function() {
			console.log('clicked');
			url = 'http://127.0.0.1/wp/community/';
			resetObj();
		});
	}

	function createFrameElem(){
		domElement = document.createElement('div');
		domElement.className = 'mainWindow';
		domElement.innerHTML = '<iframe src="'+url+'" '+'style="z-index:4; position:absolute; margin:auto; margin-top:15px; top:50px; border:none; width:100%; height:100%;" ></iframe>';
		/// Add iframe Overlay buttons;
		/* domElement.innerHTML += '<div class="windowOverlay" style="position:absolute; z-index:5; bottom:100px;"><button id="winBtn">Test</button></div>'; */
			
		// Add iframe without overlay
		/*var domElement	= document.createElement('iframe')
		domElement.src	= url
		domElement.style.border	= 'none'
		domElement.style.marginTop = '-760px'; */
	}


	function allItemsLoaded() {
    		$('.onepix-imgloader').fadeOut();
    		// fade in content (using opacity instead of fadein() so it retains it's height.
    		$('.loading-container > *:not(.onepix-imgloader)').fadeTo(8000, 100);
	}

	function setObj(board){;
		// create the plane
		mixerPlane	= new THREEx.HtmlMixer.Plane(mixerContext, domElement);
		mixerPlane.object3d.scale.multiplyScalar(7);
		mixerPlane.object3d.scale.x += 2.08;
		mixerPlane.object3d.scale.y += 0.05;
		mixerPlane.object3d.position.x= board.position.x+12.965;
		mixerPlane.object3d.position.y= board.position.y+6.38;
		mixerPlane.object3d.position.z= -1.1;
		scene.add(mixerPlane.object3d);  
	}

	function resetObj(board){;
		// create the plane
		scene.remove(mixerPlane.object3d);
		var prevMixer = mixerPlane; 
		mixerPlane = new THREEx.HtmlMixer.Plane(mixerContext, domElement);
		// mixerPlane.object3d.scale.multiplyScalar(7);
		mixerPlane.object3d.scale.x = prevMixer.object3d.scale.x;
		mixerPlane.object3d.scale.y = prevMixer.object3d.scale.y;
		// mixerPlane.object3d.scale.x = 12;
		mixerPlane.object3d.position.x= prevMixer.object3d.position.x;
		mixerPlane.object3d.position.y= prevMixer.object3d.position.y;
		mixerPlane.object3d.position.z= prevMixer.object3d.position.z;
		scene.add(mixerPlane.object3d);  
	}


	function onResize(){
		// notify the renderer of the size change
		renderer.setSize( window.innerWidth, window.innerHeight )
		// update the camera
		camera.aspect	= window.innerWidth / window.innerHeight
		camera.updateProjectionMatrix()	

		if(innerWidth >= 1500){
  			camera.position.set(11, 5.5, 6.5);
		}else if(innerWidth <= 1500 && innerWidth >= 1100){
 			camera.position.set(13, 5.5, 7.0);
		}else if(innerWidth < 1100 && innerWidth > 860){
  			camera.position.set(13, 4.5, 9);
		}else if(innerWidth < 860){
  			camera.position.set(13, 3.5, 11);
		}
	}

	function render(){
		// render the css3d
		updateFcts.push(function(delta, now){
			// NOTE: it must be after camera mode
			mixerContext.update(delta, now)
		})
		// render the webgl
		updateFcts.push(function(){
			renderer.render( scene, camera );
		})
	}

	function animate(){
		requestAnimationFrame(function animate(nowMsec){
			// keep looping
			requestAnimationFrame( animate );
			// measure time
			lastTimeMsec	= lastTimeMsec || nowMsec-1000/60
			var deltaMsec	= Math.min(200, nowMsec - lastTimeMsec)
			lastTimeMsec	= nowMsec
			// call each update function
			updateFcts.forEach(function(updateFn){
				updateFn(deltaMsec/1000, nowMsec/1000)
			})
		})
	}

});
