/*
	the format of the tree definition file is simple,
	you can find specification in the Tigra Menu documentation at:

	http://www.softcomplex.com/products/tigra_menu/docs/items.html
*/




var TREE_ITEMS = [
	['Home', '../html/home/home.html',
		['Intro', '../intro.html'],
		['Fast Index', '../fastindex.html',


		 	['Main','../fastindex.html#main'],
		 	['Portfolio','../fastindex.html#portfolio'],
		 	['Info','../fastindex.html#info'],
		 	['Sports','../fastindex.html#sports'],
		 	['Services','../fastindex.html#services'],
		 	['Multimedia','../fastindex.html#multimedia'],

		 ],
		['Info', null,

			['Time', '../html/time/clock-da.html',
				['Worldtime', '../html/time/worldtime.html'],
				['Worldtime continued', '../html/time/wt.html'],
				['Analog clock', '../java/clock/clock.html'],
				['worldtimeserver', 'http://www.worldtimeserver.com/'],
				['worldtimeserver be', 'http://www.worldtimeserver.com/?locationid=BE'],
				['rotebetasoftware Event Manager ', 'http://www.rotebetasoftware.com/'],
				['xJournal', 'http://www.da3x.de/xJournal/'],
				['moonphasesoftware', 'http://www.moonphasesoftware.com/moon_phase_calculator/'],

			],
			['Calendar', '../html/calendar.html',
				['Feestdagen', '../html/feestdag.html'],
				['osafoundation', 'http://www.osafoundation.org/'],
				['Diary', 'http://www.csoftlab.com/Diary.html'],
				['kappix DRoster Employee Scheduling Software', 'http://www.kappix.com/'],
				['calendar magic', 'http://www.stokepoges.plus.com/calendar.htm'],

				['Mediabee Family Dashboard', 'http://mediabee.com/'],

			],

			['planning', '',
				['maplexp', 'http://maplexp.veex.net/'],
				['essentialpim', 'http://www.essentialpim.com/'],
				['project-open', 'http://www.project-open.com/'],

			],


			['Weer', '../html/weer.html',
				['Detail', 'http://www.bdb.be/weer/weer.html'],
				['Detail', 'http://www.bdb.be/nl/rubriek/weerbericht/meteo/'],
				['meteo', 'http://www.meteo.be/'],
				['Meteoservices', 'http://www.meteoservices.be'],
				['brussel', 'http://www.wunderground.com/global/stations/06451.html'],

				['yahoo WEER', 'http://uk.weather.yahoo.com/BEXX/BEXX0012/index_c.html'],
				['Agris', 'http://www.agris.be/nl/weer/w_menu.html'],
				['Irceline', 'http://www.irceline.be/'],
				['Air allergie', 'http://www.airallergy.be/'],
				['WNI', 'http://www.wni.be/'],
				['WeerOnline', 'http://www.weeronline.be/'],
				['mceweather', 'http://www.cbuenger.com/mceweather/'],
				['weatherpulse', 'http://tropicdesigns.net/weatherpulse.php'],


				['Space', '../images/astronomy_moon_eclipse.gif',

					['Hubble', 'http://sci.esa.int/hubble'],
					['Esa', 'http://www.esa.int'],
					['Nasa', 'http://www.nasa.gov'],
					['Mira', 'http://www.mira.be'],
					['Urania', 'http://www.urania.be'],
					['Volkssterrenwachten', 'http://www.volkssterrenwachten.be'],
				],
			],
			['Verkeer' , '../images/crash.gif' ,
				['Weg', '../images/verkeer.gif',
					['Overzicht', '../images/siren.gif',


						['Verkeersoverzicht', 'http://www.donna.be/donna_master/systeem/d_verkeersapp_start/index.html'],
						['Verkeersoverzicht fedpol', 'http://www.fedpol.be/police/nl.htm?fedpol/verkeer/structfiles.htm'],
						['Verkeersinfo', 'http://verkeersinfo.lin.vlaanderen.be/'],
						['Wegeninfo', 'http://www.wegeninfo.be/'],
						['Wegeninfo Touring','http://www.touring.be/nl/voertuigen-verkeer/verkeersinformatie/verkeer-situatie-belgie/index.asp'],
						['Snelheidscontroles', 'http://www.snelheidscontroles.be/'],

						['flitspalen', 'http://mobiliteit.vlaanderen.be/flitspalen/'],
						['verkeerswet', 'http://www.verkeerswet.be '],
						['antwerken', 'http://www.antwerken.be/'],
						['verkeerscentrum', 'http://www.verkeerscentrum.be'],
						['donna Verkeersoverzicht', 'http://www.donna.be/donna_master/systeem/d_verkeersapp_start/index.html'],

						['Buitenland', '../images/siren.gif',
							['bison-fute', 'http://www.bison-fute.equipement.gouv.fr/'],
							['Cita', 'http://www.cita.lu/'],
							['Adac', 'http://www.adac.de/'],
							['Anwb', 'http://www.anwb.nl/'],

						],

					],

					['Overheid', '../images/police.gif',
						['Lokerse politie', 'http://www.politielokeren.be/'],
						['Ministerie mobiliteit', 'http://www.mobilit.fgov.be/'],
						['Goca', 'http://www.goca.be'],
						['rijbewijs', 'http://vici.fgov.be/nl/weg/rijbewijs/rijschol.htm'],

						['mobielvlaanderen', 'http://www.mobielvlaanderen.be/'],
						['Wegcode', 'http://www.wegcode.be'],
						['rijbewijs', 'http://www.soundandvision.be/'],
						['gratisrijbewijsonline', 'http://gratisrijbewijsonline.be/'],
						['autorijden', 'http://www.autorijden.be/'],


						['Fiets', 'http://www.fietsvlaanderen.be/'],
						['Federale politie', 'http://www.fedpol.be/'],
						['Lokale politie', 'http://www.police.be/'],
						['Antwerpen mobiel', 'http://www.antwerpenmobiel.be/'],
						['Spoed',  'http://www.112spoed.nl/'],
						['Rode kruis',  'http://www.rodekruis.be/'],
						['Gestolen', 'http://www.gestolen.be'],
						['cyclebel', 'http://www.gamber.net/cyclebel/'],
						['fietsen in Zuid-Frankrijk', 'http://www.compublicaties.com/fietsen/leesdit.htm'],
						['infrastructuurwater', 'http://home.tiscali.be/guidocoolens/infrastructuur/infrastructuurwater/water.htm'],
						['ligfiets', 'http://www.ligfiets.be'],
						['segway', 'http://www.segway.com'],
						['flevobike', 'http://www.flevobike.nl/indexnieuws.html'],
						['landroller', 'http://www.landroller.com/'],
						['dynamicbicycles', 'http://www.dynamicbicycles.com/'],
						['trikke', 'http://trikke-europe.com/home.nl.php'],
						['trike', 'http://www.trikke-europe.com/belgium/'],
						['trike', 'http://www.trikke.com/'],
						['twike', 'http://www.twike.de/'],
						['twike', 'http://www.twike.nl/'],
						['drymer', 'http://www.drymer.nl/'],

					],

					['fiets', '../images/map.gif',
						['ligfiets', 'http://www.ligfiets.be'],
					],
					['auto', '../images/map.gif',
						['reva', 'http://www.revaindia.com/design/index.htm'],
						['how2tune', 'http://www.how2tune.be/'],
						['voordeligtanken', 'http://www.voordeligtanken.be/'],

					],

					['Touring', 'http://www.touring.be/'],
					['VAB', 'http://www.vab.be/'],

					['Landkaart', '../images/map.gif',
			 			['Mappy', 'http://www.mappy.com/'],
			 			['routeplanner telenet', 'http://breedband.telenet.be/auto/routeplanner'],

			 			['mappoint msn', 'http://mappoint.msn.be'],
			 			['Letsmove', 'http://www.letsmove.be/'],
			 			['Routenet', 'http://www.routenet.be/'],
			 			['viamichelin', 'http://www.viamichelin.com/'],
			 			['maporama', 'http://www.maporama.com/'],
			 			['Nationaal Geografisch Instituut', 'http://www.ngi.be/'],
			 			['manymaps', 'http://www.manymaps.com/'],
			 			['gisoost', 'http://www.gisoost.be/kleurenortho/viewer.htm/'],
			 			['gisvlaanderen', 'http://www.gisvlaanderen.be/geo-vlaanderen/kleurenortho/'],
			 			['google', 'http://maps.google.com/'],
			 			['http://earth.google.com/', 'http://earth.google.com/'],
			 			['platial', 'http://www.platial.com/'],
			 			['holidayhome', 'http://www.holidayhome.be'],

			 			['inyourpocket', 'http://www.inyourpocket.com/'],
			 			['pariszoom', 'http://www.pariszoom.com/'],

			 			['easygps', 'http://www.easygps.com/'],
			 			['earth.imagico.de', 'http://earth.imagico.de'],

			 		],
					['Verkeersles', '../images/rijschool.swf'],
					['parkeren', 'http://adverts.freeloader.com/zurich/preloader.swf'],

				],
				['Bus', null,
					['Bus 71', null,
						['Weekdag', '../files/bus/bus71.pdf'],
						['Zaterdag', '../files/bus/bus71zat.pdf'],
						['Zondag', null],
						['Vakantie', '../files/bus/bus71vak.pdf'],
						['Juli-Augustus', '../files/bus/bus71jul-aug.pdf'],
					],

					['Bus 79', null,
						['Weekdag', '../files/bus/bus79.pdf'],
						['Zaterdag', '../files/bus/bus79zat.pdf'],
						['Zondag', '../files/bus/bus79zon.pdf'],
						['Vakantie', '../files/bus/bus79vak.pdf'],
						['Juli-Augustus', '../files/bus/bus79-jul-aug.pdf'],
					],
					['De lijn', 'http://www.delijn.be'],
					['bttb', 'http://www.bttb.be/'],


				],

				['Trein',null,

					['nmbs', 'http://www.nmbs.be'],
					['Trein electronic_wallet', 'http://www.b-rail.be/rnvn/N/formul/electronic_wallet.html'],
					['Trein electronic_wallet', 'http://portelec.b-rail.be/portelec/porteFeuille-war/init.do?lang=nl'],
					['ratp.fr', 'http://ratp.fr/'],
				],

				['Metro',null,

					['mivb', 'http://www.mivb.be'],

				],

				['Vliegtuig',null,
					['Brusselsairport', 'http://www.brusselsairport.be'],
					['antwerpairport', 'http://www.antwerpairport.be/'],
					['Biac', 'http://www.biac.be'],
					['flySN', 'http://www.flySN.be'],
					['airportcitycodes', 'http://www.airportcitycodes.com'],
				],

			 ],

			 ['Toerisme', null,
			 		['vakantiegenoegens', 'http://www.vakantiegenoegens.be/'],
			 		['De kust', 'http://www.dekust.org'],
			 		['De kustatlas', 'http://www.kustatlas.be/'],
			 		['Meteo kust', 'http://www.meteokust.be'],
			 		['visiteurope', 'http://www.visiteurope.com/'],

			 		['Pretparken', 'http://www.pretparken.be',

						['disneylandparis', 'http://www.disneylandparis.com/'],
						['disneylandparis job', 'http://www.eurodisney.com/en/0140.php'],


					],
			 		['Museum', '../images/fineart.gif',
			 			['Legermuseum', 'http://www.klm-mra.be'],
			 			['Inflandersfields', 'http://www.inflandersfields.be'],
			 			['Ijzertoren', 'http://www.ijzertoren.org'],
			 			['Stoomcentrum', 'http://www.stoomcentrum.be'],
			 			['Archeos', 'http://www.archeos.nl'],
			 			['Mir', 'http://www.tallshipmir.ru'],
			 			['Arkive', 'http://www.arkive.org'],
			 			['aquatopia', 'http://www.aquatopia.be'],
			 			['zooantwerpen', 'http://www.zooantwerpen.be'],
			 			['beeldbankwaasland', 'http://www.beeldbankwaasland.be'],
			 			['technopolis', 'http://www.technopolis.be'],
			 			['niooo', 'http://niooo.fgov.be/'],
			 			['natuurwetenschappen', 'http://www.natuurwetenschappen.be/'],
			 			['leonardo3', 'http://www.leonardo3.net/'],
			 			['darwin', 'http://www.darwin-online.org.uk'],



			 		],
			 		['Parken', '../images/fineart.gif',
			 			['parken in brussel', 'http://www.ecli.net/rbc/'],
			 			['waalse dienst toerisme', 'http://www.opt.be/langue/nl/brochure.htm'],
			 			['groen vlaanderen', 'http://www.toervl.be/'],



			 		],
			 		['Culinair', '../images/bbq.gif',
			 			['Eten', '../images/kokkie.gif',
			 				['Tip culinair', 'http://www.tipculinair.nl'],
			 				['ASG', 'http://www.asg.be'],
			 				['Vlam', 'http://www.vlam.be'],
			 				['Imperial', 'http://www.imperial.be'],
			 				['Cocks', 'http://www.cocks.be'],
			 				['Restaurantgids', 'http://www.restaurantgids.com'],
			 			],

			 			['Bier', '../images/budweiser.gif',
			 				['Biersong', '../images/bier.swf'],
			 				['Bier dat is lekker!!', '../images/bierdatislekker.gif'],
			 				['Beerparadise', 'http://www.beerparadise.be'],
			 				['De Dolle Brouwers', 'http://www.dedollebrouwers.be/'],
			 				['Bierfestival', 'http://www.bierfestival.be'],
			 				['urthel', 'http://www.urthel.com/urthel.htm'],
			 				['halvemaan', 'http://www.halvemaan.be/'],

			 			],
			 		],
			 		['Akties', null,

				 		['Erfgoedweekend', 'http://www.erfgoedweekend.be'],
				 		['Monarchie', 'http://www.monarchie.be'],
				 		['Vlaanderendag', 'http://www.vlaanderendag.be'],
				 		['Kleurrijkvlaanderen', 'http://www.kleurrijkvlaanderen.be/'],
				 		['Open monumenten dag', 'http://www.monument.vlaanderen.be/'],
				 		['Open bedrijven dag', 'http://www.openbedrijvendag.be/'],

				 		['Earthday', 'http://www.earthday.net'],
				 		['BBL', 'http://www.bondbeterleefmilieu.be'],
				 		['natuurkalender', 'http://www.natuurkalender.nl'],
				 		['natuurgids', 'http://www.natuurgids.net/'],


				 		['wandelmee', 'http://wandelmee.be'],



				 		['VBSF', 'http://www.vbsf.be'],
				 		['dagvandetechnologie', 'http://www.dagvandetechnologie.be'],
				 	],
			 	],


			 ['Beestjes', null,
			 	['Honden', null,
			 		['hondenportaal', 'http://www.hondenportaal.be/'],
				 	['cairnterriers', 'http://www.cairnterriers.be/'],

			 	],
			 	['Vissen', null,
			 		['fishbase', 'http://www.fishbase.org/'],
				 	['aquatechonline', 'http://www.aquatechonline.net/'],
				 	['poisson-or', 'http://www.poisson-or.com/'],
				 	['aquariumhobby', 'http://www.aquariumhobby.nl/'],
				 	['zeewaterforum', 'http://www.zeewaterforum.org'],

				],
				['favv', 'http://www.favv.be'],


			 ],

			 ['Nutsvoorzieningen', null,
				['Electriciteit', '../images/elek_kat.jpg',
			 		['Regelgeving', '../images/lampblue.gif',

						['Vreg', 'http://www.vreg.be'],
						['Creg', 'http://www.creg.be'],
						['CCEG' , 'http://www.cceg.be/'],
						['Tarieven', 'http://www.stroomtarieven.be'],
						['Onderzoek', 'http://www.econ.kuleuven.ac.be/ew/academic/energmil'],
						['Belgisch energiebeleid', 'http://www.mineco.fgov.be/energy'],
						['Europa', 'http://europe.eu.int/comm/energy'],
						['Energiesparen' , 'http://www.energiesparen.be/'],

					],
					['Leveranciers', '../images/lampbig.gif',
				 		['Electrabel' , 'http://www.electrabel.be/'],
				 		['EBEM' , 'http://www.ebem.be/'],
				 		['Ecopower' , 'http://www.ecopower.be/'],
				 		['WattPlus' , 'http://www.wattplus.be/'],
				 		['Luminus' , 'http://www.luminus.be/'],
				 		['Nuon' , 'http://www.nuon.be/'],
				 		['Citypower' , 'http://www.citypower.be/'],

				 	],

				 	['Transmissie', '../images/windmolen.gif',
				 		['ELEKTRICITEIT' , 'http://www.elia.be/'],
				 		['GAS' , 'http://www.fluxys.be/'],
				 	],

				 	['Productie', '../images/windmolen.gif',
				 		['bfe-fpe' , 'http://www.bfe-fpe.be/'],
				 		['distrigas' , 'http://www.distrigas.be/'],
				 		['gasinfo' , 'http://www.gasinfo.be/'],
				 		['spe' , 'http://www.spe.be/'],
				 		['electrabel' , 'http://www.electrabel.com/'],




				 	],




				 	['Distributeurs', '../images/windmolen.gif',
				 		['IMEWO' , 'http://www.imewo.be/'],
				 		['gedis' , 'http://www.gedis.be/'],
				 		['indexis' , 'http://www.indexis.be/'],
				 	],

				],

				['TV', '../images/television_flipping_channels_prv.gif',
					['Mixt-ics' , 'http://www.mixtics.be/'],
					['lamabox' , 'http://www.lamabox.com'],
					['gbpvr' , 'http://www.gbpvr.com/'],
					['orb' , 'http://www.orb.com/'],



					['interactieve-digitale-tv' , 'http://www.interactieve-digitale-tv.be/'],
					['getdemocracy' , 'http://www.getdemocracy.com/'],
					['WebCamSplitter' , 'http://very-soft.com/index.php?page_id=information&obj=wcs'],


				],

				['TV pc kaarten', '../images/television_flipping_channels_prv.gif',
					['hauppauge' , 'http://www.hauppauge.tv/'],
					['progdvb' , 'http://www.progdvb.com/'],
					['pczapper' , 'http://www.pczapper.tv/'],

					['TV plugin for Winamp' , 'http://www.tv-plugin.com/'],

					['umediaserver' , 'http://www.umediaserver.net/'],
					['gbpvr' , 'http://www.gbpvr.com/'],
					['mediaportal' , 'http://www.team-mediaportal.com/'],

					['tv-vlaanderen' , 'http://www.tv-vlaanderen.be/'],
					['ktvision scart kabel' , 'http://www.ktvision.com/'],

				],

				['Telefoon', '../images/phone_rings.gif',
					['beltug', 'http://www.beltug.be/'],
			 		['Belgacom', 'http://www.belgacom.be/'],
			 		['Telenet', 'http://www.telenet.be/'],
			 		['preventel', 'http://www.preventel.be/'],
			 		['tik', 'http://www.tik.be/'],
			 		['euphony', 'http://www.euphony.be'],
			 		['free', 'http://www.free.fr/'],

			 		['providermonitor', 'http://www.providermonitor.be/'],
			 		['Goudengids', 'http://www.goudengids.be/'],
			 		['1207', 'http://www.1207.be/'],
			 		['Infobel', 'http://www.infobel.com/belgium/?qsellang=NL'],
			 		['BenCom', 'http://www.bellen.com'],
			 		['Gsm start', 'http://gsm.start.be/'],
			 		['Gsm mobieswing', 'http://www.mobieswing.nl/'],

				 	['SMS', '../images/sms.gif',
				 		['Pebbels', 'http://www.pebbels.be/'],
				 		['smsboard', 'http://www.smsboard.nl/'],
				 		['gvnet', 'http://www.gvnet.nl/sms/ '],
				 		['SMScity', 'http://www.SMScity.be'],
				 		['startkabel', 'http://warez.startkabel.nl/'],
				 		['tamingthebeast', 'http://www.tamingthebeast.net/ringtones/sms-plugin.htm'],
				 		['simy', 'http://www.simy.be/'],
				 		['hotxt', 'http://hotxt.co.uk/'],


				 	],


			 	],

				['Post', null,
					['mycertipost' , 'http://www.mycertipost.be/'],


				],



				['Milieu', null,
					['Idm' , 'http://www.idm.be/'],
					['ovam' , 'http://www.ovam.be/'],
					['vmm' , 'http://www.vmm.be/'],
					['vireg' , 'http://www.vireg.be/'],
					['vlm' , 'http://www.vlm.be/'],
					['vlaco' , 'http://www.vlaco.be/'],
					['aquafin' , 'http://www.aquafin.be/'],
					['ov-milieu' , 'http://www.oost-vlaanderen.be/milieu/'],
					['velt' , 'http://www.velt.be/'],
					['bioweek' , 'http://www.bioweek.be/'],




				],

			 ],

			 ['Media', null,
			 	['News', '../images/hetnieuws.gif',
			 		['newssearchportal', 'http://www.newssearchportal.com/'],
			 		['Googlenews', 'http://news.google.com'],
			 		['Googlenews be', 'http://news.google.be'],
			 		['Googlevideo', 'http://video.google.com'],
			 		['CNN', 'http://www.cnn.com/'],
			 		['ABC', 'http://www.abcnews.com/'],
			 		['gixo', 'http://www.gixo.com/'],
			 		['BBC News', 'http://news.bbc.co.uk/'],
			 		['Reuters', 'http://www.reuters.com/'],
			 		['Newsblaster', 'http://www1.cs.columbia.edu/nlp/newsblaster/'],
			 		['newsinessence', 'http://www.newsinessence.com/'],
			 		['uitpers', 'http://www.uitpers.be/'],
			 		['meernieuws', 'http://www.meernieuws.be/'],


			 		['Oorlog', null,
			 			['White house', 'http://www.whitehouse.gov/'],
			 			['pentagon', 'http://www.pentagon.mil/'],
			 			['cia', 'http://www.cia.gov/'],
			 			['vrede', 'http://www.motherearth.org/'],
			 			['unhcr', 'http://www.unhcr.ch/'],
			 			['iiss', 'http://www.iiss.org/'],
			 			['cfr', 'http://www.cfr.org/'],
			 			['globalsecurity', 'http://www.globalsecurity.org/'],


			 		],
			 	],


			 	['Muziek', '../images/zanger.gif',
						['findsounds', 'http://www.findsounds.com/'],
						['Geschwister Hofmann', 'http://www.geschwister-hofmann.de/'],
						['Francine Jordi', 'http://www.francine-jordi.ch/'],
						['Francine Jordi - Eurosong 2002', '../images/jordi.exe'],
						['Clouseau', 'http://www.clouseau.be/'],
						['praga khan', 'http://www.pragakhan.com/'],
						['arid central', 'http://www.aridcentral.com/'],
						['arid', 'http://www.arid.be/'],
						['within-temptation', 'http://www.within-temptation.com/'],
						['evanescence', 'http://www.evanescence.com/'],
						['enya', 'http://www.enya.com/'],
						['quinlanroad', 'http://www.quinlanroad.com/'],
						['norahjones', 'http://www.norahjones.com/'],
						['clic', 'http://www.okcharlie.be/'],
						['yasmine', 'http://www.yasmine.be/'],
						['jeenz', 'http://www.jeenz.be/'],
						['alliuscountry', 'http://www.alliuscountry.cjb.net/'],
						['lottifans', 'http://www.lottifans.de/'],
						['belleperez', 'http://www.belleperez.be'],
						['nailpin', 'http://www.nailpin.be/'],


						['playlistmag', 'http://playlistmag.com/'],
						['netlabelism', 'http://www.netlabelism.net/'],
						['clippagina', 'http://www.clippagina.nl/'],
						['peekvid', 'http://peekvid.com/'],
						['pandora', 'http://www.pandora.com'],
						['my pandora', 'http://www.pandora.com/?sc=sh140246762583285230'],



				],


				['TV', '../html/tv.html',
					['TvGrid', 'http://www.eurotv.com/scripts/gridbedu.htm'],
					['TVgids','http://gids.omroep.nl/'],
					['sjeemz','http://www.sjeemz.nl/'],
					['TvBlad', 'http://www.teveblad.be/FS_index.htm'],
					['uitzendinggemist','http://portal.omroep.nl/uitzendinggemist/'],

					['Natioaal', '../images/television_flipping_channels_prv.gif' ,


						['Vrt', 'http://www.vrt.be/'],
						['Vrt nieuws', 'http://www.vrtnieuws.net'],
						['een', 'http://www.een.be/'],
						['Tv1', 'http://www.tv1.be/'],
						['Teletekst brt', 'http://www.tv1.be/tt/index.html'],

						['Canvas', 'http://www.canvas.be/'],

						['Man bijt hond', 'http://www.manbijthond.be'],

						['Vtm', 'http://www.vtm.be/splash/index.htm'],
						['Vtm vandaag', 'http://www.vtm.be/tv/index_vandaag.htm'],
						['Vtm teletekst' , 'http://www.vtm.be/tv/index_teletext.htm'],

						['jim', 'http://www.jim.be'],
						['Ka2', 'http://www.kanaaltwee.be/home.htm'],
						['KanaalZ', 'http://www.kanaalz.be'],
						['VT4', 'http://www.vt4.be/'],
						['Vitaya', 'http://www.vitaya.tv/'],
						['TMF', 'http://www.tmf.be/'],
						['ftv', 'http://www.ftv.nl/be/'],
					],


					['Regionaal' , '../images/television_flipping_channels_prv.gif',
						['Kanaal3', 'http://www.kanaal3.be'],
						['AVS', 'http://www.avs.be'],
						['ATV', 'http://www.atv.be'],
					],
					['Buitenland', '../images/television_flipping_channels_prv.gif',
						['ARD', 'http://www.ard.de'],
						['DasErste.de - Programm - Heute im Ersten','http://programm.das-erste.de/'],
						['ZDF.de - ZDF.de', 'http://www.zdf.de/ZDFde/inhalt/0,1872,1000000,00.html'],
						['www.omroep.nl - Gids - Televisie','http://applic.portal.omroep.nl/gids/televisie.php'],
						['www.omroep.nl','http://www.omroep.nl'],
						['www.gids.omroep.nl','http://gids.omroep.nl/'],
						['Ananova', 'http://www.ananova.com/'],
						['BBC', 'http://www.bbc.co.uk'],
					],
					['Eurovisie', '../images/television_flipping_channels_prv.gif',
						['Eurovision tv ', 'http://www.eurovision.tv/'],
						['Eurovision net', 'http://www.eurovision.net/'],
						['Eurosongonline', 'http://www.eurosongonline.com/'],
						['Eurovisie BE', 'http://www.eurosong.be/'],
						['Eurovisie NL', 'http://www.eurosong.nl/'],
						['Eurosong net', 'http://www.eurosong.net/'],
						['EBU', 'http://www.ebu.ch/'],
						['BEU', 'http://www.beu.be/'],
						['Sandra Kim be ', 'http://www.sandra-kim.be/'],
						['Sandra Kim com', 'http://www.sandra-kim.com/'],
					],
					['Muziek', '../images/bg_sounds.gif',
						['Musikantenscheune', 'http://www.musikantenscheune.de/'],
						['Volksmuzik', 'http://www.volksmusik.zdf.de/'],



					],
					['internettv', '../images/bg_sounds.gif',
						['cybersky', 'http://www.tvoon.de/ctv//'],
						['cybersky', 'http://cybersky-tv.net/'],



					],
				],


				['Radio', '../images/jumping-radio.gif',
					['internetradio.vrt.be', 'http://internetradio.vrt.be/wmp.html?qsbrand=41&player=wmp'],
					['internetradio.vrt.be','http://internetradio.vrt.be/nolinux.html'],
					['Radio1', 'http://www.radio1.be/'],
					['Radio2', 'http://www.radio2.be/index2.htm'],

					['Klara', 'http://www.radio3.be/'],
					['StuBru', 'http://www.stubru.be/'],
					['Donna', 'http://www.donna.be/'],
					['RVI', 'http://www.rvi.be'],
					['927 live', 'http://www.927live.be'],
					['FiltyRadio', 'http://server2.somafm.com:8066'],
					['radiomilkavache', 'http://rs3.radiostreamer.com:8370'],
					['piraat basemantradio', 'http://83.116.232.66:8000/'],
					['Radiolocator', 'http://www.radio-locator.com'],
					['DAB', 'http://www.dab.be'],
					['frequenties', 'http://www.standaard.be/frequenties'],
					['axiradio', 'http://www.axiradio.be/'],
					['web-radio', 'http://www.web-radio.fm/'],
					['xstreamradio', 'http://www.xstreamradio.nl/'],
					['xstreamradio', 'http://www.xstreamradio.free.fr/'],


					['arrow 828', 'http://www.arrow.nl/'],
					['jouwradio', 'http://www.jouwradio.be/'],



				],

				['Krant', '../images/dog-krant.gif',
					['newspaperindex', 'http://www.newspaperindex.com/'],
					['krantenkoppen', 'http://www.krantenkoppen.be/'],
					['HetVolk', 'http://www.hetvolk.be/'],
					['Standaard', 'http://www.standaard.be/'],
					['Standaard biz', 'http://www.standaard.biz/'],
					['Tijd', 'http://www.tijd.be/'],
					['FT', 'http://www.ft.com/'],
					['demorgen', 'http://www.demorgen.be/'],
					['gva', 'http://www.gva.be/'],
					['hvbl', 'http://www.hvbl.be/'],
					['hln', 'http://www.hln.be/'],
					['nieuwsblad', 'http://www.nieuwsblad.be/'],
					['internetjournalistiek', 'http://www.internetjournalistiek.be/'],

					['Streekkrant', 'http://www.streekkrant.be/'],
					['NRC', 'http://www.nrc.nl/'],
					['metro', 'http://www.freemetro.be/'],
					['metrotime', 'http://metrotime.be/nl.html'],
				],

				['Magazine', '../images/dog-krant.gif',
					['knack', 'http://www.knack.be/'],
					['humo', 'http://www.humo.be/'],
					['eos', 'http://www.eos.be/'],

				],



			],


			['Sport', '../images/olympics.swf',
				['Wielrennen', 'http://www.dewielersite.net/tvopgave.htm',

					['Eendagswedstrijden' , '../images/vandamme_e.jpg',
						['omloop het volk', 'http://www.omloop.sportwereld.be ' ],
						['Milaan - San Remo', 'http://www.kings5.freeserve.co.uk/msr.htm' ],
						['RVV', 'http://www.rvv.be' ],
						['Amstel gold race', 'http://www.amstelgoldrace.nl/'],


					],
					['Rondes' ,'../images/tour.jpg',
						['Ronde van Belgi\EB', 'http://www.rondevanbelgie.be/'],
						['Giro', 'http://www.giroditalia.it'],
						['Tour', 'http://www.letour.fr/'],
						['Deutschland Tour', 'http://www.deutschland-tour.de/'],
						['Vuelta' , 'http://www.lavuelta.com/'],
						['Tour de Suisse', 'http://www.tds.ch/'],
						['Tour de Romandie', 'http://www.letourderomandie.ch/'],
						['Tour de Letzebourgh', 'http://www.tdl.lu/'],
						['Tour down under', 'http://www.tourdownunder.com.au/'],

					],
					['Wielersites', '../images/sport-be.gif',

						['Giro - Gazetta della Sport', 'http://www.gazzetta.it/'],

						['UCI', 'http://www.uci.ch/english/index.htm'],
						['Sportbe','http://www.sport.be/nl/'],

						['NYTimes','http://www.nytimes.com/pages/sports/sportsspecial/index.html'],
						['cyclingnews', 'http://www.cyclingnews.com/'],
						['velonews', 'http://www.velonews.com/'],
						['Kuipke', 'http://www.kuipke.be/'],
						['z6sdaagse', 'http://www.sport.be/z6sdaagse/'],

						['vlaamsewielrijdersbond','http://www.vlaamsewielrijdersbond.be/'],
						['wielren','http://www.wielren.com/'],
						['dewielersite','http://www.dewielersite.net'],
						['kbwb-rlvb','http://www.kbwb-rlvb.be'],
					],

					['Coureurs', '../images/richard-virenque.jpg',
						['VDB','http://www.vdb-online.be/'],
						['VDB','http://www.frankvdbroucke.be/'],
						['Jurgen van Goolen','http://www.jurgenvangoolen.be'],
						['Richard Virenque','http://www.virenquemania.fr.st/'],
						['pvp','http://users.pandora.be/pvp/'],
						['axelmerckx','http://www.axelmerckx.com/'],
						['jartazi','http://www.jartazi-cyclingteam.be/'],
					],


				],
				['Tennis', '../images/tennis800x600.jpg',
					['Kim Clijsters', 'http://www.kimclijsters.be/'],
					['Justine Henin', 'http://www.henin-hardenne.be/'],
					['Rolandgarros', 'http://www.rolandgarros.com/'],
					['Maria Sharapova', 'http://www.maria-sharapova.org/'],
				],

				['Voetbal', '../images/KONING_BOUDEWIJN.jpg',
					['SPORTING Lokeren - Sint-Niklaas', 'http://www.sporting.be/'],
					['UEFA', 'http://www.uefa.com/'],
					['KBVB', 'http://www.kbvb.be/'],
					['Voetbalkennis', 'http://www.voetbalkennis.com/'],
					['ltrack', 'http://www.ngthomas.co.uk/ltrack.htm'],

				],

				['Fighting', '../images/fight.avi'],

			],

			['Werk', null,
				['Tewerkstellingsmaatregelen', null,
					['aandeslag', 'http://www.aandeslag.be/'],

					['gom', 'http://www.gom.be'],
					['rosetta', 'http://www.rosetta.be'],
					['Tewerkstellingsmaatregelen', 'http://vdab.be/hraanbod/tewerkstelling.shtml'],
					['feweb', 'http://www.feweb.be/'],
					['slimtewerkstellen', 'http://www.slimtewerkstellen.be/'],
					['vokans', 'http://www.vokans.be/'],
					['dienstencheques', 'http://www.dienstencheques.be/'],

				],

				['Solliciteren', null,

					['werkinformatie', 'http://www.werkinformatie.nl/'],
					['sollicitatiebrieven', 'http://www.sollicitatiebrieven.nl/'],
				],
				['Vakbonden', null,


					['ACW', null,
						['ACW', 'http://www.acw.be'],
						['ACV Lokeren', 'http://acv-lokeren.no-ip.info'],
						['ACW-Visie', 'http://www.acwvisie.be'],
						['ACV', 'http://www.acv-online.be'],
						['ACV Waas en Dender', 'http://www.acv-waas-dender.be'],
						['ACV Waas en Dender', 'http://www.acv-waasendender.be'],
						['LBC-NVK', 'http://www.lbc-nvk.be/'],
						['loonwijzer', 'http://www.loonwijzer.be/'],
						['willibrordbijbel', 'http://www.willibrordbijbel.nl/'],
						['vatican', 'http://www.vatican.va'],
						['voorleesbijbel', 'http://www.voorleesbijbel.nl'],
						['downloadbijbel', 'http://www.downloadbijbel.nl'],

					],
					['ABVV', 'http://www.abvv.be'],
					['ACLVB', 'http://www.aclvb.be'],
				],
				['Sociaal kantoor', null,
					['SD Worx' , 'http://www.sd.be'],
					['Securex' , 'http://www.securex.be'],
					['Groeps' , 'http://www.groeps.be'],
					['groupes' , 'http://www.groupes.be/'],
					['Admb' , 'http://www.admb.be'],
					['acerta' , 'http://www.acerta.be'],
				],
				['Interim', null,
					['allinterim', 'http://www.allinterim.be/'],
					['Adecco', 'http://www.adecco.be/NL/adecco.main.dhtml'],
					['Ago', 'http://www.ago-interim.be/'],
					['Plus', 'http://www.plusuitzendkrachten.be'],
					['Randstad', 'http://www.randstad.be'],
					['randstadprofessionals', 'http://www.randstadprofessionals.be'],
					['Vedior', 'http://www.vedior.be'],
					['actief', 'http://www.actief.be'],
					['konvert', 'http://www.konvert.be'],
					['t-interim', 'http://www.t-interim.be'],
					['federgon', 'http://www.federgon.be'],
					['wfcc', 'http://www.wfcc.be/'],
					['informatic benelux', 'http://216.198.238.145/ib/'],
					['bakker & partners', 'http://www.bakker.be/'],
					['yacht', 'http://www.yachtgroup.com/bn/pages/home/default.asp'],

				],

				['Detachering', null,
					['Alfacon', 'http://www.alfacon.be'],
					['Evosoft', 'http://www.evosoft.be'],
					['Imalink', 'http://www.imalink.be'],
					['Yacht', 'http://www.yacht.be'],
					['saga', 'http://www.saga.be'],
					['brainbridge', 'http://www.brainbridge.be'],


				],


				['Jobsite', null,
					['jobat', 'http://www.jobat.be'],
					['vacature', 'http://www.vacature.com'],
					['intermediair', 'http://www.intermediair.nl/'],
					['werk start', 'http://werk.start.be/'],
					['monster', 'http://www.monster.be'],
					['jobscareer', 'http://www.jobscareer.be/'],
					['Adecco', 'http://www.adecco.be/NL/adecco.main.dhtml'],
					['toptalent', 'http://www.toptalent.be'],
					['namezzz', 'http://www.namezzz.be/'],
					['dienstenfabriek', 'http://www.dienstenfabriek.be'],
					['jobshot', 'http://jobshot.freemetro.be/'],
					['jobzone', 'http://www.jobzone.be/'],
					['scriptlance', 'http://www.scriptlance.com/'],
					['zoneplus', 'http://www.zoneplus.be/'],
					['jobs', 'http://www.jobs.be/'],
					['theitjobboard', 'http://www.theitjobboard.be'],
				],

				['Leren', null,
					['ICT', 'http://www.ictopleidingen.be'],
					['Grote leerweek', 'http://www.groteleerweek.be'],
					['Leerplek', 'http://www.leerplek.be'],
					['Cevora', 'http://www.cevora.be'],
					['Multimedi', 'http://www.multimedi.be/'],
					['vlod', 'http://www.vlod.be'],
					['avondschool', 'http://www.avondschool.be/'],
					['wordwatjewil', 'http://www.wordwatjewil.be/'],

				],

				['Zelfstandig', null,
					['prokmo', 'http://www.prokmo.be'],


				],


				['Newsgroup be.jobs', 'news:be.jobs'],
				['Jobwerking', 'http://www.jobwerking.be/'],
				['Werkwinkel', 'http://www.werkwinkel.be/'],
				['pwawaasland', 'http://www.pwawaasland.be'],

				['Vdab', 'http://www.vdab.be/'],
				['arvastat', 'http://arvastat.vdab.be/'],
				['Technoport', 'http://www.technoport.be/'],
				['Werken-in-het-waasland', 'http://www.werken-in-het-waasland.be'],
			],


			['Gezondheid', '../images/ghostfire.gif',
				['Medinet',  'http://www.medinet.be/'],
				['Apotheek',  'http://www.apotheek.be/'],
				['Huisarts',  'http://www.huisarts.be/'],
				['sexwoordenboek',  'http://www.sexwoordenboek.nl/'],
				['Red-antibiotica',  'http://www.red-antibiotica.org/'],
				['Gezondheid',  'http://www.gezondheid.be/'],
				['Gezondste gids',  'http://www.gezondstegids.nl/'],
				['Mamshoekje',  'http://www.mamshoekje.nl/'],
				['Hairy back', 'http://www.hairyback.com/'],
				['vinnigvlaanderen',  'http://www.vinnigvlaanderen.be/'],
				['goedgevoel',  'http://www.goedgevoel.be/'],
				['topsante',  'http://www.topsante.nl/'],
				['vitaya',  'http://www.vitaya.be/'],
				['kanker',  'http://www.kanker.be/'],
				['dieetvoeding',  'http://www.dieetvoeding.be/'],
				['gezondvermageren',  'http://www.gezondvermageren.be/'],
				['who',  'http://www.who.int/csr/don/en/'],
				['who',  'http://www.who.int/'],
				['diplomatie',  'http://www.diplomatie.be/nl/travel/'],
				['itg',  'http://www.itg.be/'],


				['avi-v',  'http://www.avi-v.be'],
				['avi-v new',  'http://allserv.ugent.be/~gpennemn'],
				['nowedo',  'http://www.nowedo.be/'],
				['gebaren',  'http://gebaren.ugent.be'],

				['Body',  'http://www.bbc.co.uk/science/humanbody/'],
				['Alarm', '../sound/3-tonig.wav'],
				['influenza',  'http://www.influenza.be/'],
				['gezondheidstest',  'http://www.gezondheidstest.be/'],

			],
			['Wetenschap', '../images/physics-generator-bal.gif',
				['Chemie','',

					['periodictableonline', 'http://www.periodictableonline.org/'],
					['periodic table', 'http://www.paulalanfreshney.com/'],
					['wikipedia', 'http://nl.wikipedia.org/'],
					['1point1c', 'http://1point1c.physci.org/'],
					['chem', 'http://www.chem.uoa.gr'],

				],

				['Aardrijkskunde','',

					['geo-guide', 'http://www.geo-guide.de/'],
					['dov.vlaanderen', 'http://dov.vlaanderen.be/html/'],



				],
				['wiskunde','',

					['math', 'http://www.ies.co.jp/math/'],



				],
				['ieee', 'http://www.ieee.org/'],
				['geschiedenisvoorkinderen', 'http://www.geschiedenisvoorkinderen.nl/'],

			],





			['Overheid' , '../images/struisvogel.gif',
				['vlaanderenkiest', 'http://www.vlaanderenkiest.be/'],
				['notaris', 'http://www.notaris.be/'],
				['patrimoniumplanner', 'http://www.patrimoniumplanner.be/'],
				['Europa', 'http://europe.eu.int/'],
				['atlasofeuropeanvalues', 'http://www.atlasofeuropeanvalues.com/'],
				['Federaal', null,


					['Belgium', 'http://www.belgium.be/'],
					['Staatsblad', 'http://www.staatsblad.be/'],
					['staatsbladclip', 'http://www.staatsbladclip.be/clip/p.aspx?lang=nl-BE'],
					['staatsbladclip', 'http://www.staatsbladclip.be/'],

					['Kamer', 'http://dekamer.streamcasechannel.com/noplugin_nl.html'],
					['Senaat', 'http://www.senaat.be/www/?MIval=/Video/VideoIndex&M=1&LANG=nl'],

					['Ministerie van Financi\EBn', 'http://minfin.fgov.be/'],
					['VENNOOTSCHAPSBELASTING', 'http://mineco.fgov.be/enterprises/vademecum/Vade11_nl-03.htm'],
					['Ministerie van Economische Zaken', 'http://www.mineco.fgov.be/'],
					['Selor', 'http://www.selor.be/'],
					['FOD Werkgelegenheid, Arbeid en Sociaal Overleg', 'http://www.meta.fgov.be/'],
					['Sociale zekerheid', 'http://www.sociale-zekerheid.be/'],
					['Kruispuntbank Sociale zekerheid', 'http://bcss.fgov.be/'],
					['Rijksregister', 'http://www.rijksregister.fgov.be/'],
					['RVA', 'http://www.rva.fgov.be/'],
					['Raad Van State', 'http://www.raadvst-consetat.be/'],
					['Departement Leefmilieu en Infrastructuur', 'http://www.lin.vlaanderen.be/'],
					['Fostplus', 'http://www.fostplus.be/'],
					['Leger', 'http://www.mil.be/'],
				],
				['Gewestelijk', null,

					['Vlaamse gemeenschap', 'http://www.vlaanderen.be/'],

				],
				['Provincie', null,

					['Oost-Vlaanderen', 'http://www.oost-vlaanderen.be/'],
					['VVSG', 'http://www.vvsg.be/'],
				],


				['Gemeentelijk', null,
					['Lokeren', 'http://www.lokeren.be/'],
					['Lokeren startpagina', 'http://lokeren.startpagina.be/'],
					['ocmw lokeren', 'http://www.ocmw-lokeren.be/'],
					['doorslaar', 'http://www.doorslaar.be/'],

					['ocmw sintniklaas', 'http://www.ocmwsintniklaas.be/'],
					['Gent', 'http://www.gent.be/'],
					['Gent blogt', 'http://gent.blogt.be/'],
					['Gent stadsplan', 'http://www.gent.be/stadsplan/'],
					['mechelen', 'http://www.mechelen.be/'],


				],

				['Feesten', null,

					['Lokerse feesten', 'http://www.lokersefeesten.be/'],
					['Fonne feesten', 'http://www.fonnefeesten.be/'],
					['Gezoarse feesten', 'http://www.gezoarsefeesten.be/'],
					['Gentse feesten', 'http://www.gentsefeesten.be/'],
					['use-it', 'http://www.use-it.be/'],
				],



			],

			['Beurzen', null,
				['Flanders expo', 'http://www.flandersexpo.be/ned/'],
				['Heizel', 'http://www.brusselsexpo.be/'],
				['TMAB', 'http://www.tmab.be/'],
				['beurskalender', 'http://www.beurskalender.be/'],


			],

			['Winkel', null,
				['Colruyt', 'http://www.colruyt.be'],
				['Aldi', 'http://www.aldi.be'],
				['Lidl', 'http://www.lidl.be'],
				['Makro', 'http://www.makro.be'],
				['Carrefour Belgium', 'http://www.hypercarrefour.be/H01.cfm?lang=nl'],
				['Delhaize finacieel', 'http://www.delhaize-de-leeuw.be/nl/default.asp'],
				['Delhaize', 'http://www.delhaize.be/'],
				['Alfaparts', 'http://www.alfaparts.be/'],
				['Klusboek', 'http://www.klusboek.nl/'],
				['Brico', 'http://www.brico.be/'],
				['Tuinweb', 'http://www.tuinweb.nl/'],
				['boekenfestijn', 'http://www.boekenfestijn.com/'],


			],

			['Bouwen', null,
				['Brico', 'http://www.brico.be/'],
				['Architecture', 'http://www.architecture.com/'],
				['Bouwsite', 'http://www.bouwsite.be/'],
				['Bouwmagazine', 'http://www.bouwmagazine.be/'],



			],
			['Fun', '../images/skul.gif',
				['Lachclub', 'http://www.lachclub.be/'],
				['Cijfers', 'http://www.cijfers.net/'],
				['Wereldcijfers', 'http://www.osearth.com/resources/worldometers'],
				['Easter eggs', 'http://www.eastereggs.com/'],
				['Groente orkest', 'http://www.gemueseorchester.org/'],
				['Biersong', '../images/bier.swf'],
				['Gunmen', '../images/gunmen.swf'],
				['Movie mistakes', 'http://www.moviemistakes.com/'],
				['Bimbam', 'http://www.bimbam.be/'],
				['Excollega', '../images/excollega.gif'],
				['Sadam', 'http://www.madblast.com/funflash/swf/theUSA.swf'],
				['Sadam', '../images/theUSA.swf'],
				['Olympics', '../images/olympics.swf'],
				['Be happy', '../images/behappy.swf'],
				['Flowgo', 'http://www.flowgo.com '],
				['Kicken', 'http://www.kicken.com/'],
				['Miniclip', 'http://www.miniclip.com/'],
				['Onzin', 'http://www.onzin.com/'],
				['Spele', 'http://www.spele.nl/'],
				['cosmicdreamer movies', 'http://www.cosmicdreamer.be/movies/'],
				['humorweb', 'http://www.humorweb.nu/'],
				['fun from hell', 'http://fun.from.hell.pl/'],
				['weerwolfje', 'http://www.wepsite.net/weerwolfje/'],



			],
			['Movies', '../images/skul.gif',
				['Animatrix', 'http://www.theanimatrix.com/'],
				['Matrix', 'http://www.thematrix.com/'],
				['starwreck', 'http://www.starwreck.com/'],

			],

			['Games', '../images/skul.gif',
				['Tetris', '../html/tetris/tetris.html'],
				['Vaste Hand', '../images/finaleasy.swf'],
				['illusionsoftware', 'http://www.illusionsoftware.be/'],

			],



			['Computer', '../images/computer2031.gif',
				['laptop', 'http://laptop.media.mit.edu/'],

				['euro-copyrights', 'http://www.euro-copyrights.org/'],

				['pdf', '../images/computer2031.gif',
					['planetpdf', 'http://www.planetpdf.com/'],
					['pdfcreator', 'http://sourceforge.net/projects/pdfcreator/'],
					['primopdf', 'http://www.primopdf.com/'],
					['ookle find pdf', 'http://www.ookle.com/'],
					['foxitsoftware', 'http://www.foxitsoftware.com/'],
					['PDF Explorer', 'http://homepage.oniduo.pt/pdfe/'],
					['coolpdf', 'http://www.coolpdf.com/'],
					['Adobe Reader Speed-Up ', 'http://www.tnk-bootblock.co.uk/'],
					['coolpdf', 'http://www.coolpdf.com/'],


				],

				['SnelToetsen', 'http://members.home.nl/j.scholte/SnelToetsen.htm'],
				['free_books', 'http://giuciao.altervista.org/free_books.html'],
				['mijnipadres', 'http://www.mijnipadres.be/'],
				['whatismyip', 'http://whatismyip.com/'],
				['showmyip', 'http://www.showmyip.com/'],
				['spyderweb', 'http://www.spyderweb.nl/'],

				['cobrashelpbox', 'http://www.cobrashelpbox.be/'],
				['workrave', 'http://www.workrave.org'],




				['ncstrl', 'http://www.ncstrl.org/'],
				['automatiseringsgids', 'http://www.automatiseringsgids.nl/'],
				['Tools', '../images/computer2031.gif',

					['Color', '../html/color.html'],
					['Convert', '../html/convert.html'],
					['Chmodcalculator', '../html/chmodcalculator.html'],
					['yenc32', 'http://www.yenc32.com/'],
					['process lasso', 'http://www.bitsum.com/prosuper.asp'],
					['Process Tamer', 'http://www.donationcoder.com/Software/Mouser/proctamer/'],

					['tunnelier ssh', 'http://www.bitvise.com/tunnelier.html'],
					['vshell ssh', 'http://www.vandyke.com/products/vshell/'],


					['carthagosoft', 'http://www.carthagosoft.net/'],
					['internet-soft', 'http://www.internet-soft.com/'],

					['blogger', 'http://www.blogger.com/'],
					['bloggar', 'http://www.bloggar.cjb.net/'],

					['freeware', 'http://freeware.com/'],
					['magicsoftware', 'http://www.magicsoftware.com'],
					['pvx', 'http://www.pvx.com/'],

					['tasklist_a', 'http://www.answersthatwork.com/Tasklist_pages/tasklist_a.htm'],
					['analogx', 'http://www.analogx.com/'],
					['megaiq', 'http://www.megaiq.com/downloads.htm'],
					['vmware', 'http://www.vmware.com/'],
					['parallels', 'http://www.parallels.com/'],

					['dosbox', 'http://dosbox.sourceforge.net'],
					['bochs', 'http://bochs.sourceforge.net/']
					['opencd', 'http://opencd.dischosting.nl/'],
					['vnunet', 'http://downloads.vnunet.be/'],
					['mitec', 'http://www.mitec.cz/'],
					['sphere', 'http://www.hamar.sk/sphere/'],
					['deskloops', 'http://www.xilokit.com/deskloops'],

					['mono-project', 'http://www.mono-project.com/'],
					['whatsrunning', 'http://www.whatsrunning.net'],
					['foldershare', 'https://www.foldershare.com/'],
					['xpy', 'http://sourceforge.net/projects/xpy/'],
					['multires', 'http://www.entechtaiwan.net/util/multires.shtm'],

					['gtk', 'http://www.gtk.org/'],

					['djlizard', 'http://djlizard.net/'],
					['Dial-a-fix', 'http://wiki.djlizard.net/Dial-a-fix'],

					['dcleaner', 'http://www.dcleaner.ca/'],
					['serverdoc', 'http://www.serverdoc.com/'],
					['eventlogxp', 'http://www.eventlogxp.com/'],
					['WinAudit', 'http://www.pxserver.com/WinAudit.htm'],
					['baremetalsoft grep tail', 'http://www.baremetalsoft.com/'],
					['prgrep', 'http://patrick.renaud.free.fr/tools/prgrep/prgrep_en.php'],

					['CHM Encoder', 'http://www.gridinsoft.com/chm.php'],
					['nsis Nullsoft Install System', 'http://nsis.sourceforge.net/'],

					['httrack Website Copier', 'http://www.httrack.com/'],

					['coderanger', 'http://www.coderanger.com/products/buildit/'],

				],

				['muziekspelers', '../images/computer2031.gif',
					['quinnware', 'http://www.quinnware.com/'],
					['winamp', 'http://www.winamp.com/'],
					['WWWinamp enusbaum', 'http://www.enusbaum.com/'],

					['codecguide', 'http://www.codecguide.com/'],
					['foobar2000', 'http://www.foobar2000.org/'],
					['opensebj', 'http://www.evolvingsoftware.com/opensebj.html'],

					['XMPlay', 'http://www.un4seen.com/'],
					['freeboxjukebox', 'http://www.freeboxjukebox.com/'],
					['songbirdnest', 'http://www.songbirdnest.com/'],
					['vuplayer', 'http://www.vuplayer.com/vuplayer.php'],
					['mp3surround', 'http://www.iis.fraunhofer.de/amm/download/mp3surround/index.html'],

					['yamipod', 'http://www.yamipod.com/'],

					['musicmatch', 'http://www.musicmatch.com/'],

				],
				['muziekconversie', '../images/computer2031.gif',
					['quinnware', 'http://www.quinnware.com/'],
					['muvaudio', 'http://www.muvaudio.com/'],
					['cheetahburner', 'http://www.cheetahburner.com/'],
					['softwareclub', 'http://www.softwareclub.ws/'],

					['cockos', 'http://www.cockos.com/'],
					['audio4fun', 'http://www.audio4fun.com/'],
					['bonkenc', 'http://www.bonkenc.org/'],
					['mp3tag', 'http://www.mp3tag.de/en/index.html'],
					['astonsoft', 'http://www.astonsoft.com/'],
					['germanixsoft', 'http://www.germanixsoft.de/'],
					['audacity', 'http://audacity.sourceforge.net/'],
					['mediamonkey', 'http://www.mediamonkey.com/'],
					['koyotstar', 'http://koyotstar.free.fr/indexEn.html'],
					['enfis', 'http://www.enfis.it/'],
					['enfis CUE Splitter', 'http://www.enfis.it/details.php?id=42'],
					['mediacoder', 'http://mediacoder.sourceforge.net/'],

				],
				['hard disk recovery', '../images/computer2031.gif',
					['r-studio', 'http://www.r-studio.com/'],
					['jstmm', 'http://jstmm.netfirms.com/'],
					['vcsoftwares', 'http://www.vcsoftwares.com/'],
					['ntfsrecovery', 'http://www.ntfsrecovery.com/'],
					['data_recovery', 'http://www.smartpctools.com/data_recovery/'],

					['testdisk', 'http://www.cgsecurity.org/index.html?testdisk.html/'],

				],

				['screen saver', '../images/computer2031.gif',
					['screen saver', 'http://www.zeallsoft.com/'],

				],

				['print screen', '../images/computer2031.gif',
					['winsnap', 'http://www.ntwind.com/winsnap/'],

				],

				['print manager', '../images/computer2031.gif',
					['remote-queue-manager', 'http://usefulsoft.com/remote-queue-manager/'],

				],




				['csv', '../images/computer2031.gif',
					['csv', 'http://home.hccnet.nl/s.j.francke/t2t/text2table.htm'],

				],

				['media recorder', '../images/computer2031.gif',
					['mediarecorder', 'http://www.twinklesoft.com/mediaDetail.html'],

				],


				['videoconversie', '../images/computer2031.gif',
					['Ultra Video Joiner', 'http://www.aone-soft.com/joiner.htm'],
					['SoftwareAvi2Dvd', 'http://www.trustfm.net/divx/SoftwareAvi2Dvd.html'],
					['virtualdub', 'http://www.virtualdub.org/'],
					['camstudio', 'http://camstudio.org/'],
					['amcap', 'http://www.noeld.com/programs.asp?cat=video'],
					['SoftwareAvi2Dvd', 'http://www.trustfm.net/divx/SoftwareAvi2Dvd.html'],
					['divx', 'http://labs.divx.com/archives/000072.html'],
					['divx', 'http://www.divx.com/'],
					['drdivx', 'http://www.drdivx.com/'],
					['RealAnime ', 'http://www.detritus.qc.ca/'],
					['vlc ', 'http://www.videolan.org/vlc/'],

					['AutoGK (Auto Gordian Knot) ', 'http://www.autogk.me.uk/'],

					['koepi xvid', 'http://www.koepi.org/'],
					['Virtual Audio Cable', 'http://spider.nrcde.ru/music/software/eng/vac.html'],
					['QuickTime Alternative', 'http://www.codecguide.com/about_qt.htm'],

				],

				['video sharing service server', '../images/computer2031.gif',
					['grouper', 'http://www.grouper.com/'],



				],

				['video card', '../images/computer2031.gif',
					['video-card-stability-test', 'http://freestone-group.com/video-card-stability-test.htm'],



				],





				['flash player', '../images/computer2031.gif',
					['FlashDX', 'http://neksus.dk/index.php?id=11'],



				],
				['cd burner', '../images/computer2031.gif',
					['cdrtools Easy Burning', 'http://cdr.dpaehl.de/'],
					['concelsys', 'http://www.concelsys.com/'],
					['cheetahburner', 'http://www.cheetahburner.com/'],
					['FinalBurner', 'http://www.protectedsoft.com/products.php'],

					['zlurp', 'http://www.zlurp.com/'],
					['iso burner', 'http://www.terabyteunlimited.com/utilities.html'],

					['imgburn', 'http://www.imgburn.com/'],

					['romcenter', 'http://www.romcenter.com/romcenter/'],


					['sizeme', 'http://lars.werner.no/sizeme/'],


				],

				['modem', '../images/computer2031.gif',
					['concelsys', 'http://www.concelsys.com/voice_modem_software_call_recorder_logger_apr.htm'],
					['concelsys', 'http://www.concelsys.com/'],
					['DEKSI Modem Pooling', 'http://www.deksoftware.com/dmp/'],


				],



				['editor', '../images/computer2031.gif',
					['pspad', 'http://www.pspad.com/'],
					['jedit', 'http://www.jedit.org/'],
					['Highlight', 'http://www.andre-simon.de/'],
					['xstandard', 'http://xstandard.com/'],
					['webtide', 'http://webtide.lx.ro/'],

				],
				['php', 'http://www.php.net/',
					['php', 'http://www.php.net/'],
					['cncat', 'http://www.cn-software.com/cncat/'],
					['phpmyadmin', 'http://www.phpmyadmin.net/home_page/index.php'],
					['vertrigo', 'http://vertrigo.sourceforge.net/'],
					['phpMyAdmin', 'http://mysql.systray.be/'],
					['php-free', 'http://www.php-free.de/Datei-Management/Datei-Upload/'],

					['java2s', 'http://www.java2s.com/'],
					['xampp-windows', 'http://www.apachefriends.org/en/xampp-windows.html'],
					['xampp-linux', 'http://www.apachefriends.org/en/xampp-linux.html'],

				],


				['python', '../images/computer2031.gif',
					['python', 'http://www.python.org/'],

				],


				['mysql', 'http://www.mysql.com/',
					['mysql', 'http://www.mysql.com/'],
					['webyog', 'http://www.webyog.com/'],
					['sqlyog', 'http://www.webyog.com/sqlyog/'],
					['dswsoft', 'http://www.dswsoft.com/'],
					['eventum', 'http://dev.mysql.com/downloads/other/eventum/'],
					['vubb forum', 'http://vubb.com/'],
					['sqlmanager', 'http://www.sqlmanager.net/products/mysql/manager'],


				],

				['database', '../images/computer2031.gif',

					['berkely db', 'http://www.sleepycat.com/'],
					['cache', 'http://www.intersystems.com/cache/'],
					['firebirdsql', 'http://www.firebirdsql.org/'],
					['viper db2 xml', 'http://www-306.ibm.com/software/data/db2/udb/viper/'],

				],

					['programmeertalen', '../images/computer2031.gif',

						['rapideuphoria', 'http://www.rapideuphoria.com/'],
						['ruby', 'http://www.ruby-lang.org/en/'],
						['docbook', 'http://docbook.sourceforge.net/'],
						['docbookxsl', 'http://www.sagehill.net/docbookxsl/ToolsSetup.html'],
						['scrollkeeper', 'http://www.linuxfromscratch.org/blfs/view/stable/gnome/scrollkeeper.html'],
						['scrollkeeper', 'http://scrollkeeper.sourceforge.net/docbook.shtml'],


					],



				['Progress', 'http://www.progress.com/',
					['Progress be', 'http://www.progress.be/'],
					['Progress manuals', 'http://www.progress.com/v9/documentation/start.htm'],

					['PEG', 'http://www.peg.com/'],
					['Pug challenge nl', 'http://www.pugchallenge.nl/'],
					['Pug nl', 'http://www.pug.nl/'],
					['Amduus', 'http://www.amduus.com/'],
					['4gl', 'http://www.4gl.fr/'],
					['4gl xprint', 'http://www.4gl.fr/xprint.htm'],

					['Web4each', 'http://www.foreach.nl/web4each.htm'],
					['Topsetup dwp', 'http://www.topsetup.nl/'],
					['netsetup dwp', 'http://www.netsetup.nl/'],
					['Sourceforge', 'http://chwp.sourceforge.net/'],
					['sonicsoftware', 'http://www.sonicsoftware.com/'],


				],
				['Javascript', '../images/computer2031.gif',
					['Webreference', 'http://webreference.com/'],
					['Bravenet', 'http://www.bravenet.com/'],
					['essetee', 'http://www.essetee.be/'],
					['artifactnetwork', 'http://www.artifactnetwork.com/'],
					['codeproject', 'http://www.codeproject.com/'],
					['javascripter', 'http://www.javascripter.net'],
					['javascriptkit', 'http://www.javascriptkit.com'],
					['devx', 'http://www.devx.com/'],
					['yav', 'http://yav.sourceforge.net/'],
					['lutanho', 'http://www.lutanho.net/index.html'],
					['reference', 'http://webreference.com/javascript/reference/core_ref/'],
					['venkman', 'http://www.hacksrus.com/~ginda/venkman/'],
					['dseffects', 'http://www.dseffects.com/'],
					['JS_Optimization_Techniques', 'http://homepage.mac.com/rue/JS_Optimization_Techniques/'],



				],
				['Java', '../images/computer2031.gif',
					['JAVA SUN', 'http://java.sun.com/'],
					['JAVA SUN', 'http://www.java.com/'],
					['jamvm', 'http://jamvm.sourceforge.net/'],
					['programmerworld', 'http://programmerworld.net/resources/java.htm'],
					['javarss', 'http://www.javarss.com/'],
					['Free Java Resources', 'http://programmerworld.net/resources/java.htm'],

					['java 3d down', 'http://java.sun.com/products/java-media/3D/download.html/'],
					['mainsoft', 'http://www.mainsoft.com/products/vmw_j2ee.html'],
					['javatrawl', 'http://www.javatrawl.com'],


					['Java ide', '../images/computer2031.gif',


						['jgrasp', 'http://www.jgrasp.org/'],
						['skyide', 'http://www.skyide.com/'],


					],
					['Java jvm', '../images/computer2031.gif',

						['kaffe', 'http://www.kaffe.org/'],
						['jamvm', 'http://jamvm.sourceforge.net/'],
						['jrockit bea', 'http://www.bea.com/framework.jsp?CNT=index.htm&FP=/content/products/jrockit'],

					],
					['Java xml', '../images/computer2031.gif',


						['castor', 'http://www.castor.org/'],

					],



					['eatj', 'http://www.eatj.com'],
					['Java apps', '../images/computer2031.gif',
						['jsmooth', 'http://jsmooth.sourceforge.net/'],
						['pdfbox', 'http://www.pdfbox.org/'],
						['cete  DynamicPDF', 'http://www.cete.com/'],
						['reportgenerator', 'http://www.reportgenerator.org/'],
						['jprintout', 'http://www.jprintout.com'],
						['javazoom', 'http://www.javazoom.net/'],
						['jakarta', 'http://jakarta.apache.org/'],
						['javamania', 'http://www.javamania.nl'],
						['javatoolbox', 'http://javatoolbox.com/'],

						['ritemail', 'http://www.ritemail.net/'],
						['netomat', 'http://www.netomat.net/'],
						['scheduleworld', 'http://www.scheduleworld.com/'],
						['demicron', 'http://www.demicron.com/'],
						['visualthesaurus', 'http://www.visualthesaurus.com/'],
						['jars', 'http://www.jars.com/'],
						['xeq', 'http://www.xeq.se/'],
						['webmin jshock', 'http://www.webmin.com/jshock'],
						['curl', 'http://curl.haxx.se/'],

						['xmlpdf', 'http://www.xmlpdf.com/articles-apache.html'],
						['vamphq', 'http://www.vamphq.com/'],
						['codebase', 'http://www.codebase.com/'],
						['mars_rover', 'http://www.java.com/en/explore/everywhere/mars_rover.jsp'],
						['newslettervideo', 'http://www.vmailit.com/newslettervideo.htm'],
						['geosoft', 'http://geosoft.no/software/index.html'],
						['database admin', 'http://www.trash.net/~ffischer/admin/']

						['mail jsp', 'http://www.stardeveloper.com/articles/display.html?article=2001101101&page=1'],
						['Managing ezines with JavaMail and XSLT', 'http://www-106.ibm.com/developerworks/library/x-xmlist1/index.html'],
						['javaworld', 'http://www.javaworld.com/'],
						['mailman', 'http://sourceforge.net/projects/mailman/'],
						['knife', 'http://bluezoo.org/knife/'],
						['icemail', 'http://www.icemail.org/'],
						['freshmeat', 'http://freshmeat.net/'],
						['mrpostman', 'http://mrpostman.sourceforge.net/'],
						['mogwai', 'http://mogwai.sourceforge.net/'],
						['jdx', 'http://www.softwaretree.com/'],
						['simplesql', 'http://www.simplesql.org/'],
						['sql-clients', 'http://java-source.net/open-source/sql-clients'],
						['java-source', 'http://java-source.net/'],
						['j3d', 'http://www.j3d.org'],
						['enterprisedt', 'http://www.enterprisedt.com/'],
						['sqlanyware', 'http://sourceforge.net/projects/sqlanyware'],
						['sql-workbench', 'http://www.sql-workbench.net/'],
						['jexcelapi', 'http://www.andykhan.com/jexcelapi/'],
						['javamail', 'http://java.sun.com/products/javamail/'],
						['courier', 'http://www.courier-mta.org/'],
						['java.com', 'http://www.java.com'],
						['ant', 'http://ant.apache.org/'],
						['schemaspy', 'http://schemaspy.sourceforge.net/'],


					],
					['Java training', '../images/computer2031.gif',
						['booksites', 'http://www.booksites.net/bell'],
						['pearsoneducation', 'http://www.pearsoneducation.nl/hogeronderwijs/'],
						['ariadne', 'http://www.ariadnetraining.co.uk/'],
						['trainingtools', 'http://www.trainingtools.com'],
						['mmg sofia', 'http://www.mmg.tu-sofia.bg/'],
						['utdallas', 'http://www.utdallas.edu/'],
						['armstrong', 'http://www.cs.armstrong.edu/liang'],
						['brothersoft', 'http://www.brothersoft.com/'],
						['mindprod', 'http://www.mindprod.com/'],
						['resequencer', 'http://www.resequencer.com/'],
						['javaboutique', 'http://javaboutique.internet.com/'],
						['letsvip', 'http://www.letsvip.com/'],
						['jsptags', 'http://jsptags.com'],
						['eckelobjects', 'http://www.eckelobjects.com/ '],
						['onjava', 'http://www.onjava.com/'],
						['javaranch', 'http://saloon.javaranch.com/'],
						['java net', 'http://www.java.net/'],
						['javaworld', 'http://www.javaworld.com/'],
						['http://www.heiner-kuecker.de/', 'http://www.heiner-kuecker.de/'],
						['cursusweb', 'http://www.ivobrugge.be/cursusweb/'],
						['Java programming using Netbeans', 'http://www.bushidohacks.com/pub/lab/cgi-bin/java.pl'],

					],
					['Java tools', '../images/computer2031.gif',
						['eclipse', 'http://www.eclipse.org/'],
						['myeclipseide', 'http://www.myeclipseide.com/'],

						['jcreator', 'http://www.jcreator.com/'],
						['jboss.org', 'http://www.jboss.org/'],
						['jboss.com', 'http://www.jboss.com/'],

						['struts', 'http://struts.application-servers.com/doc/index.html'],
						['JetspeedTutorial', 'http://www.bluesunrise.com/jetspeed-docs/JetspeedTutorial.htm'],
						['tapestry', 'http://www2.cpttm.org.mo/cyberlab/softdev/tapestry/index.html'],

						['webopensource', 'http://www.webopensource.com/'],
						['springhub', 'http://www.springhub.com/'],



					],
					['Java manuals', '../images/computer2031.gif',
						['easycomputing', 'http://www.easycomputing.com'],
						['javanotes', 'http://math.hws.edu/javanotes'],
						['realapplets', 'http://www.realapplets.com/tutorial/ '],
						['joegrip', 'http://www.joegrip.com/java-course.html '],
						['useful_javaXmlTutorial', 'http://www.ipwebdesign.net/kaelisSpace/useful_javaXmlTutorial.html'],

						['java2s', 'http://www.java2s.com/'],
					],

					['JSP manuals', '../images/computer2031.gif',
						['courses coreservlets', 'http://courses.coreservlets.com'],
						['coreservlets', 'http://www.coreservlets.com'],
						['moreservlets', 'http://www.moreservlets.com'],
						['tomcat', 'http://raibledesigns.com/tomcat/index.html'],
						['javaperformancetuning', 'http://www.javaperformancetuning.com/'],
						['tutorial', 'http://java.sun.com/j2ee/1.4/docs/tutorial/doc/index.html'],
						['herong_yang', 'http://www.geocities.com/herong_yang/'],

					],


					['JSP servers', '../images/computer2031.gif',
						['servertec', 'http://www.servertec.com/'],
						['jetty', 'http://jetty.mortbay.org/jetty/index.html'],

						['tomcat', 'http://tomcat.apache.org/'],
						['geronimo', 'http://geronimo.apache.org/'],
						['mytunesrss', 'http://www.codewave.de/?page=products/mytunesrss/'],

						['webmon isa', 'http://www.gfi.com/webmon/'],



					],

				],

				['HTML', '../images/computer2031.gif',

					['handleiding html', 'http://www.handleidinghtml.nl/'],
					['w3schools', 'http://www.w3schools.com/'],

					['HTML tools editor', '../images/computer2031.gif',
						['webtide', 'http://webtide.lx.ro/'],
						['xstandard', 'http://xstandard.com/'],
						['evrsoft', 'http://www.evrsoft.com/'],
						['chami html-kit', 'http://www.chami.com/'],
						['freegaia', 'http://www.freegaia.com/'],
						['freedownloadmanager', 'http://www.freedownloadmanager.org/'],
						['stardownloader', 'http://www.stardownloader.com/'],
						['flashgot', 'http://www.flashgot.net/'],


						['luckydownloads', 'http://www.luckydownloads.com/search-software/'],

						['urlwatch', 'http://blog.rootshell.be/urlwatch/'],
						['Online viewer for PDF, PostScript and Word', 'http://view.samurajdata.se/'],
						['nvu', 'http://nvu.com/'],

						['straight2web', 'http://www.straight2web.net/'],

					],
					['Html training', '../images/computer2031.gif',
						['ruleweb', 'http://www.ruleweb.com'],
						['zope', 'http://www.zope.org'],
						['ravecore', 'http://maximus.ravecore.com/'],
						['html.pagina', 'http://www.html.pagina.nl'],
						['cursusweb', 'http://www.ivobrugge.be/cursusweb/'],
						['artdhtml', 'http://www.artdhtml.com/'],
						['htmlgoodies', 'http://www.htmlgoodies.com/'],
					],
					['HTML clipart', '../images/computer2031.gif',
						['csprgs', 'http://www.csprgs.com/lines.htm'],




					],

					['HTML foto', '../images/computer2031.gif',
						['photofiltre', 'http://www.photofiltre.com/'],
						['recolored', 'http://www.recolored.com/'],
						['prismaticsoftware', 'http://www.prismaticsoftware.com/'],
						['undercoverxp', 'http://jump.to/undercoverxp'],
						['photo-resize', 'http://www.realfiletools.com/free/photo-resize.htm'],
						['roborealm', 'http://www.roborealm.com/'],
						['SqirlzLite', 'http://www.xiberpix.com/SqirlzLite.html'],
						['fxfoto', 'http://www.triscape.com/'],
						['ambientdesign', 'http://www.ambientdesign.com/'],
						['photonizer', 'http://www.photonizer.com/'],
						['Bitmap Ripper', 'http://mark0.net/soft-bitmaprip-e.html'],


					],

					['opengl glview', 'http://www.realtech-vr.com/glview/'],

					['HTML css', '../images/computer2031.gif',
						['cssplay', 'http://www.cssplay.co.uk/'],




					],
					['HTML hosting', '../images/computer2031.gif',
						['freezee', 'http://www.freezee.org/'],
						['b-one', 'http://www.b-one.net/'],
						['webhoster4free', 'http://www.webhoster4free.com/'],



					],
					['invisibleip', '../images/computer2031.gif',
						['invisibleip', 'http://invisibleip.com/'],
						['tor', 'http://tor.eff.org/cvs/tor/doc/tor-doc-win32.html'],



					],


					['dns hosting', '../images/computer2031.gif',
						['no-ip', 'http://www.no-ip.com/'],
						['dyndns', 'http://www.dyndns.org/'],
						['tzo', 'http://www.tzo.com/'],
						['argosoft', 'http://www.argosoft.com/'],
						['zoneedit', 'http://www.zoneedit.com/'],
						['shorturl', 'http://www.vze.com/'],
						['f2b', 'http://f2b.be/__redirection__/'],
						['tk', 'http://www.dot.tk/'],


					],

					['dns server', '../images/computer2031.gif',


						['janaserver', 'http://www.janaserver.de/'],
						['treewalk dns', 'http://ntcanuck.com/index.htm'],
						['mailsbroadcast', 'http://www.mailsbroadcast.com/email.bolts&nuts/pc.mailserver.htm'],
						['dns', 'http://www.dirfile.com/freeware/dns.htm'],
						['dns4me', 'http://www.dns4me.com/'],
						['raidendnsd', 'http://www.raidendnsd.com/'],
						['domain-email', 'http://www.hashemian.com/tools/domain-email.php'],
						['powerdns', 'http://www.powerdns.com/'],
						['dslwebserver', 'http://www.dslwebserver.com/main/fr_index.html?/main/DNS.html'],
						['bind9', 'http://www.bind9.net/'],
						['dnsjava', 'http://www.xbill.org/dnsjava/'],
						['bind9', 'http://www.bind9.net/'],
						['bind9', 'http://www.bind9.net/'],
						['bind9', 'http://www.bind9.net/'],
						['bind9', 'http://www.bind9.net/'],



					],


					['mail attachments', '../images/computer2031.gif',
						['podmailing', 'http://www.podmailing.com/'],
						['pando', 'http://pando.com/'],
						['abyssws', 'http://www.aprelium.com/abyssws/'],
						['merakmailserver', 'http://www.merakmailserver.com/'],
					],


					['mailclient', '../images/computer2031.gif',

						['pegasus', 'http://www.pmail.com/'],
						['emailaya', 'http://www.emailaya.com/'],

						['sylpheed', 'http://sylpheed.good-day.net/en/'],
						['evolution', 'http://www.gnome.org/projects/evolution/'],
						['Top 5 Linux/UNIX Email Clients for Windows Converts', 'http://email.about.com/cs/linuxclientrevs/tp/windows.htm'],
						['convert dbx to mbox', 'http://www.pcquest.com/content/search/showarticle.asp?artid=63440'],
						['dbxconv', 'http://people.freenet.de/ukrebs/'] ,
						['Dawn, the Address Converter and Manager', 'http://www.joshie.com/projects/dawn/'] ,

						['netmail', 'http://www.internet-soft.com/netmail.htm'],

					],

					['mailtools', '../images/computer2031.gif',

						['xrayapp', 'http://www.xrayapp.com/'],
						['gmanager', 'http://www.longfocus.com/firefox/gmanager/'],


					],


					['mailserver', '../images/computer2031.gif',
						['aydiag', 'http://www.aysoft.com/aydiag.htm'],
						['xmailserver', 'http://xmailserver.org/'],
						['hmailserver', 'http://www.hmailserver.com/'],

						['argosoft', 'http://www.argosoft.com/'],
						['abyssws', 'http://www.aprelium.com/abyssws/'],
						['merakmailserver', 'http://www.merakmailserver.com/'],
						['pegasus', 'http://www.pmail.com/'],
						['mobiletcp', 'http://www.klocktornet.com/html/products/mobiletcp.php'],
						['freesmtp', 'http://www.softstack.com/freesmtp.html'],
						['baby_pop3_server', 'http://www.pablosoftwaresolutions.com/html/baby_pop3_server.html'],


					],

					['mailingserver', '../images/computer2031.gif',

						['email-announcer', 'http://www.email-announcer.com/'],
						['absolutefuturity', 'http://www.absolutefuturity.com/Rapid-Emailer.htm?EZGoal.com/Emailsoftware'],
						['absolutefuturity', 'http://www.absolutefuturity.com'],
						['group-mail', 'http://www.group-mail.com/asp/common/groupmail.asp?EZGoal.com/Emailsoftware'],
						['thefreesite', 'http://www.thefreesite.com/Email_Freebies/Free_E_mail_software/'],
						['frinmail', 'http://www.hlrnet.com/frinmail.htm'],
						['massmail', 'http://www.kgpsoftware.com/massmail.htm'],
						['groupmail', 'http://www.infacta.com/asp/common/groupmail.asp'],

						['netmail', 'http://www.internet-soft.com/netmail.htm'],

						['interactiveni', 'http://www.interactiveni.com/'],
						['chatwithmenow', 'http://www.chatwithmenow.com'],

						['emailtophone', 'http://www.emailtophone.com/'],
						['chatstat', 'http://www.chatstat.com/'],



					],
					['chat server', '../images/computer2031.gif',
						['chatwithmenow', 'http://www.chatwithmenow.com'],
						['Intranet Chat', 'http://vnalex.tripod.com/en/'],
						['birdchat', 'http://birdchat.sourceforge.net/'],
						['achat', 'http://achat.sourceforge.net/'],

						['chatstat', 'http://www.chatstat.com/'],

					],

					['vpn', '../images/computer2031.gif',
						['hamachi', 'http://www.hamachi.cc/'],
						['openvpn', 'http://openvpn.se/'],



					],



					['ftp server', '../images/computer2031.gif',
						['cerberusftp', 'http://www.cerberusftp.com/'],
						['sambar', 'http://www.sambar.com/'],
						['ftpschedbasic', 'http://www.prosoftcentral.com/products/ftpschedbasic.htm'],
						['apache2triad', 'http://apache2triad.net/'],
						['baby_ftp_server', 'http://www.pablosoftwaresolutions.com/html/baby_ftp_server.html'],

					],

					['ftp client', '../images/computer2031.gif',
						['Stealth Dupecheck', 'http://www.dslextreme.com/users/kuphryn/software.html'],
						['sambar', 'http://www.sambar.com/'],
						['filezilla', 'http://filezilla.sourceforge.net/'],
						['ftp_wanderer', 'http://www.pablosoftwaresolutions.com/html/ftp_wanderer.html'],


					],
					['HTML webserver', '../images/computer2031.gif',
						['FSBrowserDetail', 'http://www.faststone.org/FSBrowserDetail.htm'],
						['sambar', 'http://www.sambar.com/'],
						['argosoft', 'http://www.argosoft.com/'],
						['abyssws', 'http://www.aprelium.com/abyssws/'],
						['merakmailserver', 'http://www.merakmailserver.com/'],
						['aolserver', 'http://www.aolserver.com/'],
						['warden apache', 'http://www.freshsw.com/warden/'],
						['warden apache', 'http://www.freshsoftware.com/warden/'],
						['apache', 'http://www.apache.org/'],
						['baby_web_server', 'http://www.pablosoftwaresolutions.com/html/baby_web_server.html'],



					],
					['browser', '../images/computer2031.gif',
						['deepnetexplorer', 'http://www.deepnetexplorer.com/'],
						['fasterfox', 'http://fasterfox.mozdev.org/'],
						['getfoxie', 'http://www.getfoxie.com/'],
						['flock', 'http://www.flock.com/'],

						['siteadvisor', 'http://siteadvisor.com/'],
						['mozbackup', 'http://mozbackup.jasnapaka.com/'],

						['seamonkey', 'http://www.mozilla.org/projects/seamonkey/'],
						['mozbackup', 'http://mozbackup.jasnapaka.com/'],
						['webmail', 'http://webmail.mozdev.org/installation.html'],


						['Opera', 'http://www.turturia.it/idel/rox/Opera.tgz'],


						['dillo', 'http://www.dillo.org/'],
						['maxthon', 'http://www.maxthon.com/'],

						['browster', 'http://www.browster.com/'],
						['cubicreality CubicExplorer', 'http://www.cubicreality.com/'],
						['kmeleon', 'http://kmeleon.sourceforge.net/'],

						['ubrowser', 'http://www.ubrowser.com/'],
						['bufferzone', 'http://www.trustware.com/'],
						['sandboxie', 'http://www.sandboxie.com/'],
						['MeX Browser', 'http://www.xtme.net/'],
						['unipage', 'http://unipage.org/'],
						['iespell', 'http://www.iespell.com/'],

						['firemonger', 'http://www.firemonger.org/en/'],

						['httrack offline browser utility', 'http://www.httrack.com/'],


					],
				],


				['UML', '../images/computer2031.gif',

					['togetherj', 'http://www.togetherj.com/'],
					['smartdraw', 'http://www.smartdraw.com/'],
					['gentleware', 'http://www.gentleware.com/'],
					['rational', 'http://www.rational.com/'],
					['objecteering', 'http://www.objecteering.com/'],
					['jude', 'http://www.esm.jp/jude-web/en/index.html'],

				],

				['XML', '../images/computer2031.gif',

					['arieldolan', 'http://arieldolan.com/'],
					['sarissa', 'http://sourceforge.net/projects/sarissa'],
					['css2xslfo', 'http://www.re.be/css2xslfo/'],


				],
				['rss', '../images/computer2031.gif',

					['fuzzyduck', 'http://www.fuzzyd.co.uk/'],
					['sarissa', 'http://sourceforge.net/projects/sarissa'],
					['rssreader', 'http://www.rssreader.com/'],
					['feedreader', 'http://www.feedreader.com/'],
					['wticker', 'http://www.wticker.org/'],
					['feedexplorer', 'http://www.feedexplorer.net/'],
					['rssbandit', 'http://www.rssbandit.org/'],
					['rss2htmlscout', 'http://www.bytescout.com/rss2htmlscout.html'],
					['newsplorer', 'http://www.newsplorer.com/'],
					['rss-wizard', 'http://www.extralabs.com/rss-wizard.htm'],
					['bitscast', 'http://www.bitscast.com/software/'],


					['ROFX - Public Press Releases Open Format XML', 'http://www.rofx.org/'],

						['mytunesrss', 'http://www.codewave.de/?page=products/mytunesrss/'],
				],


				['ajax', '../images/computer2031.gif',

					['AJAX', 'http://en.wikipedia.org/wiki/AJAX'],
					['sajax', 'http://www.modernmethod.com/sajax/'],
					['ajaxtoolbox', 'http://www.ajaxtoolbox.com/'],
					['ajaxinfo', 'http://www.ajaxinfo.com/'],
					['fiddler', 'http://www.fiddlertool.com/fiddler/'],
					['codeproject', 'http://www.codeproject.com/Ajax/'],

				],

				['SQL', '../images/computer2031.gif',

					['validator', 'http://developer.mimer.se/validator/index.htm '],


				],



				['ASP', '../images/computer2031.gif',

					['aspnetcenter', 'http://www.aspnetcenter.com/'],
					['emilie', 'http://www33.brinkster.com/02emilie'],
					['webmon isa', 'http://www.gfi.com/webmon/'],

				],
				['netwerk', '../images/computer2031.gif',

					['webmin', 'http://www.webmin.com/'],
					['brinkster', 'http://www.brinkster.com/'],
					['ethereal', 'http://www.ethereal.com/'],
					['networkscanner', 'http://www.softperfect.com/products/networkscanner/'],
					['scanner', 'http://www.blabsoft.com/products/scanner/'],


					['wake on lan', 'http://www.tnk-bootblock.co.uk/'],
					['wake on lan', 'http://www.tnk-bootblock.co.uk/prods/misc/'],
					['n37dev lantool', 'http://www.n37dev.com/'],
					['httrack offline browser utility', 'http://www.httrack.com/'],

					['d3tr', 'http://www.d3tr.de/'],
					['ConnectionManager', 'http://www.bvrp.com/ENG/products/ConnectionManager'],

				],




				['Linux', '../images/computer2031.gif',
					['linux4you', 'http://linux4you.be/'],
					['linuxchix', 'http://www.linuxchix.org/'],
					['kernel', 'http://kernel.org/'],
					['linuxprinting', 'http://www.linuxprinting.org/'],
					['linuxcommand', 'http://www.linuxcommand.org/'],


					['distrowatch', 'http://distrowatch.com/'],

					['t2', 'http://www.t2-project.org/'],

					['linspire', 'http://www.linspire.com/'],
					['slax', 'http://www.slax.org/'],

					['Linux Distribution Chooser', 'http://www.zegeniestudios.net/ldc/'],

					['gnome', 'http://www.gnome.org/'],

					['suselinux', 'http://www.novell.com/products/suselinux/?sourceidint=productsmenu_linuxprofessional'],
					['opensuse', 'http://www.opensuse.org/'],

					['mandriva', 'http://www.mandriva.com/'],
					['mandriva', 'http://frontal1.mandriva.com/en/community/'],

					['gentoo', 'http://www.gentoo.org/'],
					['centos', 'http://www.centos.org/'],

					['nexenta', 'http://www.nexenta.com'],
					['koffice', 'http://www.koffice.org/'],

					['fedora', 'http://fedora.redhat.com/'],
					['redhat', 'http://www.redhat.com/'],
					['debian', 'http://www.debian.org/'],
					['debian manual', 'http://d-i.alioth.debian.org/manual/en.i386/index.html'],


					['mozilla', 'http://www.mozilla.org/'],
					['ubuntulinux', 'http://www.ubuntulinux.org/'],

					['damnsmalllinux', 'http://www.damnsmalllinux.org/'],


					['puppy', 'http://www.goosee.com/puppy/'],
					['puppy', 'http://www.puppylinux.org'],
					['dotpups', 'http://dotpups.de/'],
					['DotPups', 'http://puppylinux.org/wikka/DotPups'],


					['flowplayer', 'http://www.turturia.it/idel/'],
					['flowplayer', 'http://flowplayer.sourceforge.net/'],

					['puppy ftp', 'ftp://ibiblio.org/pub/linux/distributions/puppylinux/'],


					['puppyfiles', 'http://puppyfiles.us/'],
					['wine', 'http://www.winehq.com/'],
					['wine downloads', 'http://www.puppylinux.org/user/downloads.php?cat_id=12'],

					['puppy emulator 98', 'http://www.psyplan.com/puppy.htm'],
					['puppy emulator 98', 'http://www.murga.org/~puppy/viewtopic.php?p=35005'],
					['puppy emulator xp', 'http://www.murga.org/~puppy/viewtopic.php?t=2525'],
					['puppy help index', 'http://www.murga.org/~puppy/viewtopic.php?t=597'],
					['QEMU', 'http://en.wikipedia.org/wiki/QEMU'],
					['QEMUPuppy', 'http://puppylinux.org/wikka/QEMUPuppy'],
					['qemupuppy', 'http://www.erikveen.dds.nl/qemupuppy/index.html'],


					['DotPups', 'http://puppylinux.org/wikka/DotPups'],

					['rox', 'http://rox.sourceforge.net/desktop/static.html'],
					['eumario lilo', 'http://www.trilake.net/puppylinux/lilo.tar.gz'],

					['eumario lilo', 'http://www.trilake.net/puppylinux/logo64a.bmp'],
					['eumario lilo', 'http://www.trilake.net/puppylinux/lilo.pup'],

					['PearPC', 'http://en.wikipedia.org/wiki/PearPC'],

					['puppyfiles', 'http://puppyfiles.us/'],
					['modules', 'ftp://puppyfiles.us/pub/releases/v1.0.7/modules-2.4.29-complete.tar.gz'],
					['wine', 'http://www.winehq.com/'],
					['icewm', 'http://www.icewm.org/'],
					['icewm', 'http://xwinman.org/icewm.php'],



					['freedos', 'http://www.freedos.org/'],
					['Pup4DOS', 'http://puppylinux.org/wikka/Pup4DOS'],
					['btmgr', 'http://btmgr.sourceforge.net/about.html'],


					['Tmxxine_Linux', 'http://peace.wikicities.com/wiki/Tmxxine_Linux'],


					['fs-driver', 'http://www.fs-driver.org/'],


					['spblinux', 'http://spblinux.sourceforge.net/'],

					['knoppix', 'http://www.knopper.net/knoppix/'],
					['knoppix', 'http://www.knoppix.org/'],
					['knoppix-std', 'http://www.knoppix-std.org/'],


					['sam linux', 'http://sam.hipsurfer.com/'],
					['sam linux', 'http://librenix.com/?inode=6157'],
					['sam linux', 'http://www.sam-linux.org/'],

					['linuxconsole', 'http://linuxconsole.org/'],
					['mepis', 'http://www.mepis.org/'],
					['mepis', 'http://www.mepis.com/'],



					['geexbox', 'http://geexbox.org/en/index.html'],

					['amarok', 'http://amarok.kde.org/'],
					['amaroklive', 'http://amaroklive.com/'],
					['amarok Scripts', 'http://amaroklive.com/wiki/Scripts'],

					['wolvix', 'http://wolvix.org/'],



					['geexbox', 'http://geexbox.org/en/index.html'],
					['tvtime', 'http://tvtime.sourceforge.net/'],
					['linuxtv', 'http://www.linuxtv.org/'],
					['mythtv', 'http://www.mythtv.org/'],
					['mysettopbox', 'http://mysettopbox.tv/'],
					['linuxnetmag', 'http://www.linuxnetmag.com/en/issue5/m5tvkarte1.html'],
					['multimedia4linux', 'http://www.multimedia4linux.de/'],
					['linuxnetmag', 'http://www.linuxnetmag.com/nl/nltvkarte1.html'],
					['LinuxTutorialVideo', 'http://yolinux.com/TUTORIALS/LinuxTutorialVideo.html'],
					['tivo', 'http://www.weethet.nl/dutch/tivo_accessbash.php'],
					['linvdr', 'http://linvdr.org/projects/linvdr/index.en.php'],
					['sagetv', 'http://www.sagetv.com/linuxOEMedition.html'],
					['DVD player using Linux', 'http://linuxgazette.net/issue83/stoddard.html'],
					['linuxtv', 'http://www.linuxtv.org/'],
					['linuxtv', 'http://www.linuxtv.org/'],
					['linuxtv', 'http://www.linuxtv.org/'],
					['linuxtv', 'http://www.linuxtv.org/'],
					['linuxtv', 'http://www.linuxtv.org/'],





					['dynebolic', 'http://dynebolic.org/'],


					['pclinuxonline', 'http://www.pclinuxonline.com/pclos/'],


					['linuxcd', 'http://www.linuxcd.org/'],
					['overzicht mini cd linux', 'http://www.frozentech.com/content/livecd.php'],

					['qnx', 'http://www.qnx.com/'],
					['openqnx', 'http://www.openqnx.com/'],
					['winaxe', 'http://www.labf.com/winaxe/'],
					['userful', 'http://userful.com/'],

					['freebsd', 'http://www.freebsd.org/'],
					['pcbsd', 'http://www.pcbsd.org/'],

					['linux', 'http://www.dirkw.com/linux/'],
					['belenix open solaris', 'http://belenix.sarovar.org/'],
					['anonym.os', 'http://theory.kaos.to/projects.html'],

					['cygwin', 'http://www.cygwin.com/'],

					['linuxiso', 'http://www.linuxiso.org/'],
					['livecd', 'http://www.frozentech.com/content/livecd.php'],
					['ltsp', 'http://www.ltsp.org/'],

					['ipodlinux', 'http://ipodlinux.sourceforge.net/screens.shtml'],
				],

				['bootcd', '../images/busines.gif',

					['trinityhome', 'http://trinityhome.org/trk/'],
					['ultimatebootcd', 'http://www.ultimatebootcd.com/'],
					['kanotix', 'http://www.kanotix.net/'],


					['hiren bootcd', 'http://homepage.ntlworld.com/hiren.thanki/bootcd.html'],

					['hiren bootcd download', 'http://www.9down.com/story.php?sid=6150'],

					['sysresccd', 'http://www.sysresccd.org/'],


					['sysresccd', 'http://www.sysresccd.org/'],

					['ubcd4win', 'http://www.ubcd4win.com/'],
					['pebuilder', 'http://www.nu2.nu/pebuilder/'],
					['ryanvm', 'http://ryanvm.net/msfn/'],

					['allbootdisks', 'http://www.allbootdisks.com/'],
					['osloader', 'http://www.osloader.com/'],

					['xp stripped-bone', 'http://www.mai9.net/blog/prog/stripped-bone/'],
					['xp stripped-bone', 'http://thepiratebay.org/details.php?id=3346054'],



				],

				['boot diskette', '../images/busines.gif',

					['bootdisk', 'http://www.bootdisk.com/'],



				],
				['iso drive', '../images/busines.gif',

					['daemon-tools', 'http://www.daemon-tools.cc/'],

					['isobuster', 'http://www.isobuster.com'],
					['virtualcd', 'http://www.virtualcd-online.com/'],
					['daemount', 'http://www.aldostools.com/daemount.html'],
					['daemon-tools', 'http://www.daemon-tools.cc/dtcc/announcements.php'],


				],





				['hard disk recovery', '../images/computer2031.gif',
					['r-studio', 'http://www.r-studio.com/'],
					['jstmm', 'http://jstmm.netfirms.com/'],
					['vcsoftwares', 'http://www.vcsoftwares.com/'],
					['MHDD', 'http://hddguru.com/content/en/software/2005.10.02-MHDD/'],

					['testdisk', 'http://www.cgsecurity.org/index.html?testdisk.html/'],
					['Swissknife', 'http://www.compuapps.com/download/swissknife/Swissknife.htm'],

					['data_recovery', 'http://www.smartpctools.com/data_recovery'],


				],



				['other os', '../images/busines.gif',

					['menuet', 'http://www.menuet.org/'],
					['inferno', 'http://www.vitanuova.com/'],
					['plan9', 'http://plan9.bell-labs.com/plan9/'],
					['skyos', 'http://www.skyos.org/'],

					['reactos', 'http://www.reactos.org/xhtml/en/index.html'],
				],


				['password manager', '../images/busines.gif',

					['keywallet', 'http://www.keywallet.com/'],

				],
				['desktop switcher utility', '../images/busines.gif',

					['supsu', 'http://www.stefan-kuhr.de/supsu/main.php3'],

				],

				['barcode', '../images/busines.gif',

					['xtrafinal', 'http://www.xtrafinal.com/'],

				],

				['tutorial', '../images/busines.gif',

					['wink', 'http://www.debugmode.com/wink/'],

				],



				['Telecommunicatie', '../images/busines.gif',

					['DNS', 'http://www.dns.be/'],
					['Bipt', 'http://www.bipt.be/'],
					['belnet', 'http://www.belnet.net'],
					['poppeeper', 'http://www.poppeeper.com/'],
					['freepops', 'http://www.freepops.org/en/'],

					['Messenger', '../images/busines.gif',

						['pucazone', 'http://www.pucazone.com/msn.php'],
						['Clean Messenger', 'http://perso.wanadoo.fr/lguillaume/'],
						['Messenger', 'http://messenger.msn.be'],
						['msn-int', 'http://messenger.msn-int.com'],
						['msn-com', 'http://messenger.msn.com/'],
						['windowsupdate', 'http://windowsupdate.microsoft.com'],
						['e-Messenger', 'http://www.e-messenger.net/'],
						['ebuddy', 'http://www.ebuddy.com/'],
						['meebo', 'http://wwwm.meebo.com/'],

						['msn webmessenger', 'http://webmessenger.msn.com/?mkt=nl-be'],


						['Msgplus', 'http://www.msgplus.net/'],
						['Mess be', 'http://www.mess.be/'],
						['messfreak', 'http://www.messfreak.be/'],
						['coolenaam', 'http://www.coolenaam.nl/'],
						['mastaline', 'http://www.mastaline.com/'],
						['messengerworld', 'http://www.messengerworld.nl/'],

						['paltalk', 'http://www.paltalk.com'],
						['camfrog', 'http://www.camfrog.com/'],
						['camfrog nl', 'http://www.camfrog.nl/'],
						['bearware', 'http://www.bearware.dk/'],

						['jabber', 'http://www.jabber.org/'],
						['zango', 'http://www.zango.com/'],
						['instantbird', 'http://instantbird.com/'],
						['miranda', 'http://www.miranda-im.org/'],
						['gaim', 'http://gaim.sourceforge.net/'],
						['portable gaim', 'http://portableapps.com/apps/internet/chat/portable_gaim'],


						['bitwiseim', 'http://www.bitwiseim.com/'],
						['psi-im', 'http://psi-im.org/'],



						['userplane', 'http://www.userplane.com/'],
						['amsn', 'http://amsn.sourceforge.net/'],
						['easymessage', 'http://www.easymessage.net/'],

						['abosabreenmessenger', 'http://www.freewebs.com/abosabreenmessenger/'],
						['borgchat', 'http://borgchat.softnews.ro/'],
						['paulychat', 'http://pauly.com.au/paulychat.htm'],
						['vypress', 'http://www.vypress.com/products/chat/'],
						['goteamspeak', 'http://www.goteamspeak.com/downloads.php'],
						['winchat', 'cmd winchat'],
						['ventrillo', 'http://www.ventrilo.com/'],
						['jabber', 'http://www.jabber.org/software/servers.shtml '],
						['ncn', 'http://www.ncn-software.com/'],
						['yackpack', 'http://www.yackpack.com/'],
						['Bopup Observer', 'http://www.blabsoft.com/products/observer/'],
						['blabsoft', 'http://www.blabsoft.com/'],
						['Bopup scanner', 'http://www.blabsoft.com/products/scanner/'],



					],
					['mirc', '../images/busines.gif',

						['icechat', 'http://www.icechat.net/'],
						['mirc', 'http://www.mirc.com/'],
						['xchat', 'http://www.xchat.org/'],
						['mircpowerpack', 'http://www.mircpowerpack.com/'],
						['nnscript', 'http://www.nnscript.de/'],
						['PsyBC Bouncer', 'http://www.ned-clan.nl/content/view/28/'],
						['psybnc', 'http://www.psybnc.net/'],
						['psybnc', 'http://linuxreviews.org/software/irc/bnc/'],

					],



					['SIP', '../images/busines.gif',
						['iptel', 'http://www.iptel.org/'],
						['brekeke', 'http://www.brekeke.com/'],
						['skype', 'http://ui.skype.com/'],
						['vskype', 'http://www.vskype.com/'],
						['soonr', 'http://www.soonr.com/web/front/home.jsp'],

						['teleonnetworks', 'http://www.teleonnetworks.com/'],
						['PCI Gateway', 'http://www.teleon.net/product1.html'],


						['KishKish SAM ', 'http://www.kishkish.com/sam/'],

						['gizmoproject', 'http://www.gizmoproject.com/'],
						['skype download', 'http://www.zdnet.be/downl.cfm?id=30393&mxp=27'],
						['groepscommunicatie', 'http://groepscommunicatie.surfnet.nl/info/telefoneren/artikel_content.jsp?objectnumber=26836'],
						['sip', 'http://www.pernau.at/kd/voip/bookmarks-sip-rtp-ua.html'],
						['sipfoundry', 'http://www.sipfoundry.org/sipXpbx/index.html'],
						['networkworld', 'http://www.networkworld.com/research/2004/0510sipgettingstarted.html'],
						['sipproxy', 'http://www.inin.com/sipproxy/'],
						['vrvs', 'http://www.vrvs.org/Documentation/SIP-Client-guide.html'],
						['sipphone', 'http://www.sipphone.com/'],
						['phoner', 'http://www.phoner.de/'],
						['openwengo', 'http://developer.berlios.de/projects/openwengo/'],
						['wengo', 'http://www.wengo.fr/'],
						['openwengo', 'http://www.openwengo.org/'],

						['phonegaim', 'http://www.phonegaim.com/'],
						['sjlabs', 'http://www.sjlabs.com/products.html'],
						['xten', 'http://www.xten.com/'],
						['linphone', 'http://www.linphone.org/'],
						['sjlabs', 'http://sjlabs.com/'],
						['google talk', 'http://www.google.com/talk/'],
						['xten', 'http://www.xten.com/'],
						['xten', 'http://www.xten.com/'],
						['xten', 'http://www.xten.com/'],
						['xten', 'http://www.xten.com/'],


					],


					['Rooms', '../images/busines.gif',
						['awcontent', 'http://www.awcontent.com/chat/'],
						['msnchat', 'http://www.msnchat.be'],
						['tijgerkenchat', 'http://tijgerkenchat.v3.be'],


					],

					['Virtual Reality Rooms', '../images/busines.gif',
						['croquetproject', 'http://www.croquetproject.org'],
						['blaxxun', 'http://www.blaxxun.com'],
						['sketchup google', 'http://sketchup.google.com/'],


						['blaxxun download', 'http://www.blaxxun.com/services/support/download/install.shtml'],
						['moove', 'http://www.moove.com/'],
						['blaxxun download', 'http://www.icity.co.il/downloada.html'],

						['3D Virtual Reality Rooms', '../images/busines.gif',
							['zorg et mel', 'http://zorg-design.com/mondes/contact.htm'],


							['barbarian', 'http://www.tonaki.net/barbarian/contact.html'],
							['artifair', 'http://www.artifair.nl/'],
							['dhyan', 'http://www.dhyan.it/public/prova/contact.htm'],
							['dhyan TempleofDeath', 'http://www.dhyan.it/public/TempleofDeath/contact.htm'],
							['magicvalley', 'http://www.lucidspace.com/vrml/mu/magicvalley/wrl/contact.htm'],
							['gville', 'http://www.3dworlds.ca/gville10/contact.php'],

							['ayiki', 'http://www.cyberkp.com/axetg/builders/concoursbuilders/ayiki/contact.htm'],
							['ayiki tonaki', 'http://www.tonaki.net/'],

							['piano', 'http://web3d.theome.nc/piano/contact.html'],
							['eris', 'http://eris.atspace.com/'],
							['piano', 'http://web3d.theome.nc/piano/contact.html'],
							['evoluta', 'http://evoluta.revemonde.net/chat/contact.htm'],
							['jewelofindra', 'http://www.jewelofindra.com/'],
							['merrick-10 bells', 'http://www.3dworlds.ca/web3d/xcontact.htm'],
							['la cite des amazones', 'http://mypage.bluewin.ch/nikiprivatesite/3d/contact.htm'],
							['lilly03', 'http://lilly03.free.fr/3d-home/contact.htm'],
							['milereed', 'http://milereed.revemonde.net/Good_Life/contact.htm'],
							['haloween', 'http://av.alleyweb.co.uk/no_cache/gm/casa/contact.htm'],
							['mingxiaoling', 'http://vr.mingxiaoling.org/contact.htm'],

						],

						['avatar', null,
							['hadesthedragonavgzip','http://av.alleyweb.co.uk/no_cache/gm/hadesthedragonavgzip.wrl'],
							['gargoyleav','http://av.alleyweb.co.uk/no_cache/gm/gargoyleav.wrl'],
							['gandolfthegreyav','http://av.alleyweb.co.uk/no_cache/gm/gandolfthegreyav.wrl'],
							['flyingdragonav','http://av.alleyweb.co.uk/no_cache/gm/flyingdragonav.wrl'],
							['manngruen','http://www.blaxxun.com/vrml/avatars/manngruen.wrl'],
							['fraugruen','http://www.blaxxun.com/vrml/avatars/fraugruen.wrl'],
							['wolfav','http://av.alleyweb.co.uk/no_cache/gm/wolfav.wrl'],
							['unicornav','http://av.alleyweb.co.uk/no_cache/gm/unicornav.wrl'],
							['goth5','http://www.vrprincesskj.com/avs/no_cache/goth5.wrl'],
							['allblacks','http://www.chez.com/charlysite/no_cache/allblacks.wrl'],
							['lara','http://www.chez.com/kiki1/avatars/lara/lara.wrl'],
							['nonoss','http://www.chez.com/kiki1/avatars/nonoss/nonoss.wrl'],
							['pirana','http://www.chez.com/kiki1/avatars/pirana/pirana.wrl'],
							['tank','http://www.chez.com/kiki1/avatars/tank/tank.wrl'],
							['skelet','http://www.embrium.com/avatars/holi/halloween/guys/skel.wrl'],
							['knightav2','http://av.alleyweb.co.uk/no_cache/gm/knightav2.wrl'],
							['bearav','http://av.alleyweb.co.uk/no_cache/gm/bearav.wrl'],
							['yoyo1','http://www.geocities.com/ramona391/yoyo1.wrl'],
							['shifterunitav','http://av.alleyweb.co.uk/no_cache/gm/shifterunitav.wrl'],
							['vegetassj2av','http://av.alleyweb.co.uk/no_cache/gm/vegetassj2av.wrl'],

							['purplefae','http://www.vrprincesskj.com/no_cache/purplefae.wrl'],
							['robot','http://3dplanets.com:8080/commserv/community/dbavatars/A/a0/00/00/06/av.wrl'],
							['yoyo1','http://www.geocities.com/ramona391/yoyo1.wrl'],
							['jewelofindra','http://www.jewelofindra.com/commserv/community/dbavatars/A/a0/00/00/3a/av.wrl'],
							['yoyo1','http://www.geocities.com/ramona391/yoyo1.wrl'],
							['yoyo1','http://www.geocities.com/ramona391/yoyo1.wrl'],
							['yoyo1','http://www.geocities.com/ramona391/yoyo1.wrl'],



						],
						['avatar sites', null,
							['alleyweb','http://av.alleyweb.co.uk/'],
							['blaxxun','http://www.blaxxun.com/vrml/avatars/'],
							['vrprincesskj','http://www.vrprincesskj.com/'],
							['fae',' http://www.vrprincesskj.com/fae.html '],
							['chez/kiki','http://www.chez.com/kiki1/'],
							['charlysite', 'http://www.chez.com/charlysite/'],
							['swaffette', 'http://mysite.freeserve.com/swaffette'],
							['embrium', 'http://www.embrium.com'],
							['bonsurf', 'http://www.bonsurf.net/avatars/'],


						],


					],

				],
				['Virus', '../images/computer2031.gif',
					['knudde', 'http://www.knudde.be/'],
					['zdnet', 'http://virusscan.zdnet.be/housecall/virus_zd.asp?land=be'],
					['computerveilig', 'http://www.computerveilig.nl/'],

					['grisoft avg', 'http://www.grisoft.com/'],
					['clamwin', 'http://www.clamwin.com/'],
					['trendmicro', 'http://be.trendmicro-europe.com/consumer/housecall/housecall_launch.php'],
					['knudde', 'http://www.knudde.be/'],

					['cyberhawk', 'http://www.novatix.com/cyberhawk/'],
					['free-av', 'http://www.free-av.com/'],
					['nod32', 'http://www.nod32.lu/'],


				],
				['Firewall', '../images/computer2031.gif',
					['zonealarm', 'http://www.zonealarm.com/'],
					['kerio', 'http://www.kerio.com'],
					['Tiny Personal Firewall', 'http://www.webmasterfree.com/tpfw.html'],
					['sygate', 'http://www.sygate.com/'],
					['sygate', 'http://smb.sygate.com/download_buy.htm'],
					['tinysoftware', 'http://www.tinysoftware.com/'],
					['jetico', 'http://www.jetico.com/'],
					['bitdefender', 'http://www.bitdefender.com/'],
					['r-tt', 'http://www.r-tt.com/'],
					['coresecurity', 'http://force.coresecurity.com/'],
					['softperfect', 'http://www.softperfect.com/products/firewall/'],
					['comodo', 'http://www.personalfirewall.comodo.com/'],

				],

				['pc toegangsbeveiliging', '../images/computer2031.gif',
					['safend', 'http://www.safend.com/'],

					['devicelock', 'http://www.devicelock.com/'],
					['securewave', 'http://www.securewave.com/home.jsp'],
					['secretmaker', 'http://www.secretmaker.com/'],
					['mywifizone', 'http://www.mywifizone.com/'],
					['2hotspot', 'http://www.2hotspot.com/'],


				],


				['spam', '../images/computer2031.gif',
					['spamihilator', 'http://www.spamihilator.com/'],
					['spamexperts', 'http://www.spamexperts.com/'],

					['spamfighter', 'http://www.spamfighter.com/Payment_Group_List.asp'],
					['computerveilig', 'http://www.computerveilig.nl/'],
					['secretmaker', 'http://www.secretmaker.com/'],
					['spampal', 'http://www.spampal.org/'],
					['jam-software', 'http://www.jam-software.com/'],
					['bluesecurity Blue Frog', 'http://www.bluesecurity.com/'],




				],
				['spyware', '../images/computer2031.gif',
					['winpatrol', 'http://www.winpatrol.com/'],

					['NoAds', 'http://www.southbaypc.com/NoAds/'],

					['spamfighter', 'http://www.spamfighter.com/Payment_Group_List.asp'],
					['computerveilig', 'http://www.computerveilig.nl/'],
					['secretmaker', 'http://www.secretmaker.com/'],
					['arovaxantispyware', 'http://www.arovaxantispyware.com/'],
					['arovaxcompany', 'http://www.arovaxcompany.com/'],
					['arovaxshield', 'http://www.arovaxshield.com/'],

					['rootkit', 'http://research.microsoft.com/rootkit/'],
					['blacklight', 'http://www.europe.f-secure.com/exclude/blacklight/index.shtml'],
					['trace', 'http://www.workshare.com/products/trace/'],
					['anonymizer', 'http://www.anonymizer.com'],
					['amust defender', 'http://www.amustsoft.com/1%2Ddefender/'],
					['amust', 'http://www.amustsoft.com/'],


				],


				['Systeem', '../images/computer2031.gif',
					['answersthatwork', 'http://www.answersthatwork.com/Tasklist_pages/tasklist_a.htm'],
					['Tasklist_pages', 'http://www.answersthatwork.com/Tasklist_pages/tasklist_a.htm'],
					['ShadowUser', 'http://www.shadowstor.com/products/ShadowUser/'],

					['cpuz', 'http://www.cpuid.com/cpuz.php'],

					['CrystalCPUID', 'http://crystalmark.info/software/CrystalCPUID/index-e.html'],
					['belarc', 'http://www.belarc.com/free_download.html'],



				],

				['commodore 64 c64 cbm', '../images/computer2031.gif',
					['viceteam c64 emulator', 'http://www.viceteam.org/'],


					['tapes c64', 'http://tapes.c64.no/'],

				],
				['arcade emulator', '../images/computer2031.gif',

					['emuloader emulator', 'http://www.mameworld.net/emuloader/'],
					['zsnes', 'http://www.zsnes.com/'],

					['wolvix', 'http://wolvix.org/'],
				],




				['forum', '../images/computer2031.gif',
					['forumforfree', 'http://www.forumforfree.com/'],
					['proboards', 'http://www.proboards.com/index.html'],
					['phpbb3', 'http://www.phpbb3.net/'],
				],



				['Backup sync', '../images/computer2031.gif',
					['allwaysync', 'http://www.allwaysync.com/'],
					['Tasklist_pages', 'http://www.answersthatwork.com/Tasklist_pages/tasklist_a.htm'],
					['cobian', 'http://www.educ.umu.se/~cobian/cobianbackup.htm'],
					['syncback', 'http://www.2brightsparks.com/'],
					['Back4Win', 'http://www.alistairgeorge.com/'],
					['File Backup Watcher', 'http://www.dswsoft.com/fbw.php'],
					['freewinbackup', 'http://www.backupanswers.com/freewinbackup/'],
					['Back4Win', 'http://www.alistairgeorge.com/'],

					['winret', 'http://winret.sourceforge.net/'],
					['acritum', 'http://www.acritum.com/'],
					['mozy', 'http://www.mozy.com/'],
					['usbfileguard', 'http://www.richskills.com/support/usbfileguard_help.html'],
					['ICEMirror', 'http://www.ice-graphics.com/ICEMirror/IndexE.html'],


				],

				['winmerge', '../images/computer2031.gif',
					['winmerge', 'http://winmerge.org/'],
					['Tasklist_pages', 'http://www.answersthatwork.com/Tasklist_pages/tasklist_a.htm'],


				],


				['remote control vnc', '../images/computer2031.gif',
					['beanywhere', 'http://www.beanywhere.com'],
					['tightvnc', 'http://www.tightvnc.com/'],
					['realvnc', 'http://www.realvnc.com/'],
					['ultravnc', 'http://ultravnc.sourceforge.net/'],
					['getbymail', 'http://www.getbymail.com/'],
					['Remote Assistance Identification', 'http://www.infosys.co.yu/rai/'],

					['desktopmobiles', 'http://www.desktopmobiles.com/'],
					['zzzsoftware', 'http://www.zzzsoftware.com/'],


					['spiceworks', 'http://www.spiceworks.com/'],
				],


				['Tools', '../images/computer2031.gif',
					['csprgs', 'http://www.csprgs.com'],
					['Tasklist_pages', 'http://www.answersthatwork.com/Tasklist_pages/tasklist_a.htm'],
					['trafficzap', 'http://www.trafficzap.com/'],
					['blackviper', 'http://www.blackviper.com/'],
					['izsoft', 'http://www.izsoft.dir.bg/'],
					['zipgenius', 'http://www.zipgenius.it/'],
					['whatsrunning', 'http://www.whatsrunning.net'],
					['tugzip', 'http://www.tugzip.com/'],
					['tidystartmenu', 'http://www.tidystartmenu.com/'],
					['doublekiller', 'http://bigbangenterprises.de/en/doublekiller/'],

					['fontpage', 'http://bluefive.pair.com/fontpage.htm'],

					['fontbrowser', 'http://www.stcassociates.com/lab/fontbrowser.html'],




				],
				['toolbar', '../images/computer2031.gif',
					['metaeureka', 'http://www.metaeureka.com/'],
					['e-press', 'http://www.e-press.com/'],

					['desktopsidebar', 'http://www.desktopsidebar.com/'],


				],


				['office', '../images/computer2031.gif',
					['openoffice', 'http://www.openoffice.org'],
					['portable_openoffice', 'http://portableapps.com/apps/office/suites/portable_openoffice'],

					['e-press', 'http://www.e-press.com/'],
					['abisource', 'http://www.abisource.com/'],
					['actualdoc', 'http://www.flexigensoft.com/actualdoc'],

					['brformsword', 'http://www.replsoft.com/brformsword.html'],

					['koffice', 'http://www.koffice.org/'],

					['scribus', 'http://www.scribus.net/'],
				],

				['portal', '../images/computer2031.gif',
					['xmlportal', 'http://www.xmlportal.net/'],
					['e-press', 'http://www.e-press.com/'],

				],

				['newsreader', '../images/computer2031.gif',
					['BNR = Binary News Reaper = Binary News Reader', 'http://www.bnr2.org/' ],

					['grabit', 'http://www.binaries4all.nl/grabit/'],
					['grabit manual', 'http://www.duken.nl/content/view/60/29/'],
					['grabit manual', 'http://support.newsxs.nl/NewsXShandl.htm'],


					['ftdv3', 'http://www.nieuws-groepen.nl/ftdv3.6.html'],
					['shemes', 'http://www.shemes.com/'],
					['alt.binaries.e-book.technical', 'alt.binaries.e-book.technical'],

					['xnews', 'http://xnews.newsguy.com/'],

				],
				['torrent', '../images/computer2031.gif',
					['utorrent', 'http://www.utorrent.com/'],
					['azureus', 'http://azureus.sourceforge.net/'],
					['arctic torrent', 'http://dev.int64.org/arctic.html'],

				],

				['p2p', '../images/computer2031.gif',

					['bearshare', 'http://www.bearshare.com/'],
					['cabos', 'http://cabos.sourceforge.jp/'],
					['limewire', 'http://www.limewire.com/'],

					['nakido', 'http://www.nakido.com/'],
					['sababadc', 'http://sababadc.com/en/'],
					['pixvillage', 'http://www.pixvillage.com/'],
					['civilnetizen', 'http://www.civilnetizen.com/'],

				],

				['Magazines', null,
					['Datanews', 'http://www.datanews.be/'],
					['Zdnet', 'http://www.zdnet.be/'],
					['Pcmagazine', 'http://www.pcmagazine.be/'],
					['betanews', 'http://fileforum.betanews.com/'],

				],


			],
		['Other', '../images/skul.gif',
				['Suzy', 'http://users.skynet.be/suzy.van.verre/cv'],
				['handleiding', 'http://www.handleiding-online.nl/'],
				['claire', 'http://memoire.auschwitz.chez.tiscali.fr/'],
				['digipic', 'http://www.digipic.be/'],
				['smolders', 'http://users.telenet.be/inge.smolders/'],
				['zoekezoef', 'http://www.zoekezoef.com/'],
				['confour', 'http://go.to/confour'],
				['caroline_verwaeren', 'http://users.pandora.be/caroline_verwaeren'],
				['maggy.boone', 'http://users.pandora.be/maggy.boone'],
				['nathalie vdb', 'http://www.nathalie.20mn.com'],
				['nathalie vdb', 'http://www.fotobord.be/fotograaf.php?ID=2285'],
				['20mn.com', 'http://www.20mn.com'],
				['netsorcist', 'http://users.pandora.be/netsorcist/webdesign.htm'],
				['eljosoft', 'http://users.pandora.be/eljosoft/'],

				['rizzy', 'http://spaces.msn.com/rizzy'],
				['rizzy', 'http://spaces.msn.com/members/rizzy/PersonalSpaces'],

				['low-freq-f.be', 'http://www.low-freq-f.be'],



		],



		],
		['Zakelijk', '../images/busines2.gif',
			['Calculator','../html/rekmach.html'],
			['esbcalc','http://www.esbconsult.com.au/esbcalc/esbcalc.html'],
			['algebrus','http://www.astrise.com/software/algebrus/'],



			['Euro', '../images/be1e.gif',

				['Euro Calculator','http://www.budget-net.com/euro/website/calc.asp?node=2541&code=BEN'],
				['Euromunten','http://www.budget-net.com/euro/website/money.asp?code=BEN'],
				['Eurolanden','http://www.budget-net.com/euro/website/BENcountry.htm'],
			],
			['Beurs','../images/getchart.gif',
				['Quotestream','http://www.myquotestream.com/'],
				['Beurs','../html/beurs.html'],
				['Beurs be','http://www.beurs.be'],
				['Morningstar','http://www.morningstar.be'],
				['Euronext','http://www.euronext.com'],
				['Belegger','http://www.belegger.be'],
				['zibb','http://www.zibb.nl/'],
				['vfb','http://www.vfb.be/'],
				['codebuysse','http://www.codebuysse.be/'],
				['finance.google','http://finance.google.com/finance'],

			],
			['budget', '../images/be1e.gif',

				['budgettracker','http://www.ducksoftware.com/budgettracker.html'],

			],


			['Woordenboek', null,
				['Van dale', 'http://www.vandale.nl'],
				['wnt', 'http://wnt.inl.nl/'],

				['internetwoordenboek', 'http://www.internetwoordenboek.com/'],
				['Puzzelwoordenvinder', 'http://www.inventio.nl/puzzel/'],
				['Inventio', 'http://www.inventio.nl/'],
				['Onze taal', 'http://www.onzetaal.nl/'],
				['Afkortingen chat & SMS', '../html/afkort.html'],
				['Afkortingen chat & SMS 2', '../html/afkortingen.html'],
				['smstaal', 'http://wwww.smstaal.nl/'],
				['acroniemen', 'http://www.sunplace.be/acroniemen.php'],
				['smileys', 'http://www.sunplace.be/smileys.php#my1'],
				['freetranslation', 'http://www.freetranslation.com/'],
				['babelfish', 'http://babelfish.altavista.com/'],
				['worldlingo', 'http://www.worldlingo.com/'],
				['taalunieversum', 'http://taalunieversum.org/'],
				['taaladvies', 'http://www.taaladvies.net'],
				['lichaamstaal', 'http://www.lichaamstaal.com/'],
				['taaldatabanken', 'http://www.taaldatabanken.com/'],
				['taaltelefoon', 'http://taaltelefoon.vlaanderen.be/'],
				['wikipedia', 'http://www.wikipedia.org/'],
				['wikipedia be', 'http://www.wikipedia.be/'],
				['ChoosingaWiki', 'http://c2.com/cgi-bin/wiki?ChoosingaWiki'],
				['sixpourcent', 'http://www.sixpourcent.com/'],
				['interglot', 'http://interglot.com'],
				['woordenlijst', 'http://woordenlijst.org/'],
				['wordweb', 'http://wordweb.info/'],
				['polyglot3000', 'http://www.polyglot3000.com/'],
				['voorlezer', 'http://www.voorlezer.net/'],
				['klaretaal', 'http://www.klaretaal.org/'],

				['wordweb', 'http://wordweb.info/'],
				['wordwebonline', 'http://www.wordwebonline.com/'],
				['talenanimatie', 'http://www.talenanimatie.be/'],


						['iespell', 'http://www.iespell.com/'],
			],
		],

		['Services', '../images/frustration.gif',
			['Hitcounter', '../html/hitcounter.html'],
			['Links', '../html/links.html'],



			['Contacts', '../html/contacts.html'],
			['You were here', '../html/sneaky.html'],
			['E-mail', 'mailto:patriek.zoetaert@pandora.be?subject=Request for information from your website&cc=patriekzoetaert@hotmail.com&bcc=patriekzoetaert@hotmail.com&body=Beste Patriek, I want a request for information from your website.'],
			['Mailinglist', '../html/mailinglist.html'],
			['Submissionform', '../html/submission-form.html'],
			['Guestbook', 'http://pub17.bravenet.com/guestbook/show.php?usernum=1432044645&cpv=1'],
			['Guestmap', 'http://pub17.bravenet.com/guestmap/show.php?usernum=1432044645&lightmap=0&icons=0&&entrylist=0&zoom=0&welcome=1'],
			['Forum', 'http://pub17.bravenet.com/forum/show.php?usernum=1432044645&cpv=1'],
			['Chatroom', 'http://pub17.bravenet.com/chat/show.php?usernum=1432044645&cpv=1'],
			['Cartoon of the day', 'http://pub17.bravenet.com/cartoon/show.php?usernum=1432044645&cpv=1'],
			['Systeminfo', '../html/sysinfo.html'],
			['Multimedia', null,
				['Foto Album',  '../html/scroller/foto-scroller.html'],
				['Mediaplayer',  '../html/mediaplayer.html'],
				['Mediaplayer 2',  '../html/video-browse.html'],
			],



			['Up&download', null,
				['Map', '../up&download'],
				['Files', '../files'],
				['Sound', '../sound'],



			],
			['Zoek', null,
				['Google', 'http://www.google.be/'],
				['Google glossary', 'http://labs.google.com/glossary'],
				['Google labs', 'http://labs.google.com/'],
				['Google cheatsheet', 'http://www.google.com/help/cheatsheet.html'],
				['touchgraph', 'http://www.touchgraph.com/TGGoogleBrowser.html'],
				['soople', 'http://www.soople.com/'],
				['spotmo', 'http://www.spotmo.com'],
				['bsearch', 'http://www.bsearch.be'],
				['speegle', 'http://speegle.co.uk/'],
				['blinkx', 'http://www.blinkx.com/'],
				['Google gmail drive', 'http://www.viksoe.dk/code/gmail.htm'],
				['gmanager', 'http://www.longfocus.com/firefox/gmanager/'],
				['print.google.be', 'http://print.google.be/'],
				['Motivation', 'http://filequota.com/'],


				['grabit', 'http://www.grabit.com/'],
				['Google analytics', 'http://www.google.com/analytics/'],
				['quinturasearch', 'http://www.quintura.com/quinturasearch/'],

				['pages.google.com', 'http://pages.google.com'],
				['xrayfolders', 'http://www.xrayfolders.com/'],
				['prgrep', 'http://patrick.renaud.free.fr/tools/prgrep/prgrep_en.php'],


			],
			['YAHOO', null,
				['yahoo uk', 'http://www.yahoo.co.uk/'],
				['briefcase.yahoo', 'http://uk.briefcase.yahoo.com/praticles'],

				['ypopsemail', 'http://www.ypopsemail.com/'],
			],

		],
		['ICQ', '../html/icq/icq-online.html',
				['ICQ time', '../html/icq/icq-time.html'],
				['ICQ pager', '../html/icq/icq-pager.html'],
				['ICQ pager2', '../html/icq/icq-pager2.html'],
				['ICQ webcast', '../html/icq/icq-webcast.html'],
				['ICQ pcc', '../html/icq/pcc.html'],


		],



		['Curriculum Vitae',  '../html/cv.html'],


		['portfolio', null,
				['ACV LOKEREN', 'http://www.acv-lokeren.be'],
				['ACV Zele', 'http://www.acv-zele.be'],
				['ACV Berlare', 'http://www.acv-berlare.be'],


		],

	],


];






