window.onload = init();

function init() { 

	var xhr = new XMLHttpRequest();

	xhr.open('GET', 'gitTweet.php', true)

	xhr.send(null);

	xhr.onload = function() { 
		if (xhr.status == 200) { 
			var tweets = JSON.parse(xhr.responseText);
			console.log(tweets);
			// INITIALIZE IMAGE ARRAY
			var images = [];
			// THIS IS ACTUALLY NOT THE AUTHOR IT'S THE RETWEETER
			var author = [];
			var contain = document.getElementById("result");
			var header = document. getElementById("header");
			for(var i=0;i<100;i++) { 
				//Pushes 100 tweet images to an array
						
						if (typeof tweets.statuses[i].entities.media !== 'undefined') { 
								images.push(tweets.statuses[i].entities.media[0].media_url);
								author.push(tweets.statuses[i].user.screen_name);
							}
						
						}
						// Deletes any Duplicate Images
							for(y=0;y<100;y++){
								for (x=0;x<100;x++){
								if ((images[y] == images[x]) &&  (x !== y)) { 
									images.splice(x,1);
									author.splice(x,1);
									}
								}
							}
							// Makes sure that only the actual values get displayed
							var img = [];
							var a = [];
							for(w=0;w<images.length;w++) { 
								a[w] = document.createElement('a');
								img[w] = document.createElement('IMG');
								img[w].setAttribute('src', images[w]);
								img[w].setAttribute('width', '700px');
								img[w].setAttribute('max-height', '700px');
								img[w].setAttribute('id', 'img'+w);
								img[w].className = "imgStyle";
								a[w].setAttribute('target', '_blank');
								a[w].setAttribute('href', 'https://twitter.com/'+author[w]);
								a[w].setAttribute('id', 'a'+w);
								if (img[w] !== 0) { 
								document.getElementById('result').append(a[w]);
								document.getElementById('a'+w).append(img[w]);
								


								
								}
							}
							//header CSS
							header.style.width = '100%';
							header.style.height = '250px';
							header.style.marginBottom = '0';

							//container CSS
							contain.style.marginRight = "32%";
							contain.style.marginLeft = "32%";
							contain.style.paddingTop = "15%"
						

							contain.style.width = "1280px";

							}
							console.log(images);
							console.log(author);
						}
					}
				
					
								
						
		

	
