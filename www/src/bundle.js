/******/ (function(modules) { // webpackBootstrap
/******/ 	function hotDownloadUpdateChunk(chunkId) { // eslint-disable-line no-unused-vars
/******/ 		var chunk = require("./" + "" + chunkId + "." + hotCurrentHash + ".hot-update.js");
/******/ 		hotAddUpdateChunk(chunk.id, chunk.modules);
/******/ 	}
/******/
/******/ 	function hotDownloadManifest() { // eslint-disable-line no-unused-vars
/******/ 		try {
/******/ 			var update = require("./" + "" + hotCurrentHash + ".hot-update.json");
/******/ 		} catch(e) {
/******/ 			return Promise.resolve();
/******/ 		}
/******/ 		return Promise.resolve(update);
/******/ 	}
/******/
/******/ 	function hotDisposeChunk(chunkId) { //eslint-disable-line no-unused-vars
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/
/******/ 	
/******/ 	
/******/ 	var hotApplyOnUpdate = true;
/******/ 	var hotCurrentHash = "8cf06730ea56f1de1944"; // eslint-disable-line no-unused-vars
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule; // eslint-disable-line no-unused-vars
/******/ 	var hotCurrentParents = []; // eslint-disable-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = []; // eslint-disable-line no-unused-vars
/******/ 	
/******/ 	function hotCreateRequire(moduleId) { // eslint-disable-line no-unused-vars
/******/ 		var me = installedModules[moduleId];
/******/ 		if(!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if(me.hot.active) {
/******/ 				if(installedModules[request]) {
/******/ 					if(installedModules[request].parents.indexOf(moduleId) < 0)
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if(me.children.indexOf(request) < 0)
/******/ 					me.children.push(request);
/******/ 			} else {
/******/ 				console.warn("[HMR] unexpected require(" + request + ") from disposed module " + moduleId);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for(var name in __webpack_require__) {
/******/ 			if(Object.prototype.hasOwnProperty.call(__webpack_require__, name) && name !== "e") {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if(hotStatus === "ready")
/******/ 				hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/ 	
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if(hotStatus === "prepare") {
/******/ 					if(!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if(hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/ 	
/******/ 	function hotCreateModule(moduleId) { // eslint-disable-line no-unused-vars
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/ 	
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if(typeof dep === "undefined")
/******/ 					hot._selfAccepted = true;
/******/ 				else if(typeof dep === "function")
/******/ 					hot._selfAccepted = dep;
/******/ 				else if(typeof dep === "object")
/******/ 					for(var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else
/******/ 					hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if(typeof dep === "undefined")
/******/ 					hot._selfDeclined = true;
/******/ 				else if(typeof dep === "object")
/******/ 					for(var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else
/******/ 					hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if(idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/ 	
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if(!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if(idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/ 	
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/ 	
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/ 	
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for(var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/ 	
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/ 	
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash;
/******/ 	
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = (+id) + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/ 	
/******/ 	function hotCheck(apply) {
/******/ 		if(hotStatus !== "idle") throw new Error("check() is only allowed in idle status");
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if(!update) {
/******/ 				hotSetStatus("idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/ 	
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			var chunkId = 0;
/******/ 			{ // eslint-disable-line no-lone-blocks
/******/ 				/*globals chunkId */
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if(hotStatus === "prepare" && hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/ 	
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) { // eslint-disable-line no-unused-vars
/******/ 		if(!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for(var moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/ 	
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if(!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/ 	
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if(!deferred) return;
/******/ 		if(hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve().then(function() {
/******/ 				return hotApply(hotApplyOnUpdate);
/******/ 			}).then(
/******/ 				function(result) {
/******/ 					deferred.resolve(result);
/******/ 				},
/******/ 				function(err) {
/******/ 					deferred.reject(err);
/******/ 				}
/******/ 			);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for(var id in hotUpdate) {
/******/ 				if(Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/ 	
/******/ 	function hotApply(options) {
/******/ 		if(hotStatus !== "ready") throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/ 	
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/ 	
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/ 	
/******/ 			var queue = outdatedModules.slice().map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while(queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if(!module || module.hot._selfAccepted)
/******/ 					continue;
/******/ 				if(module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if(module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for(var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if(!parent) continue;
/******/ 					if(parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if(outdatedModules.indexOf(parentId) >= 0) continue;
/******/ 					if(parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if(!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 	
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/ 	
/******/ 		function addAllToSet(a, b) {
/******/ 			for(var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if(a.indexOf(item) < 0)
/******/ 					a.push(item);
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/ 	
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn("[HMR] unexpected require(" + result.moduleId + ") to disposed module");
/******/ 		};
/******/ 	
/******/ 		for(var id in hotUpdate) {
/******/ 			if(Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				var result;
/******/ 				if(hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if(result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch(result.type) {
/******/ 					case "self-declined":
/******/ 						if(options.onDeclined)
/******/ 							options.onDeclined(result);
/******/ 						if(!options.ignoreDeclined)
/******/ 							abortError = new Error("Aborted because of self decline: " + result.moduleId + chainInfo);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if(options.onDeclined)
/******/ 							options.onDeclined(result);
/******/ 						if(!options.ignoreDeclined)
/******/ 							abortError = new Error("Aborted because of declined dependency: " + result.moduleId + " in " + result.parentId + chainInfo);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if(options.onUnaccepted)
/******/ 							options.onUnaccepted(result);
/******/ 						if(!options.ignoreUnaccepted)
/******/ 							abortError = new Error("Aborted because " + moduleId + " is not accepted" + chainInfo);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if(options.onAccepted)
/******/ 							options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if(options.onDisposed)
/******/ 							options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if(abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if(doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for(moduleId in result.outdatedDependencies) {
/******/ 						if(Object.prototype.hasOwnProperty.call(result.outdatedDependencies, moduleId)) {
/******/ 							if(!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(outdatedDependencies[moduleId], result.outdatedDependencies[moduleId]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if(doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for(i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if(installedModules[moduleId] && installedModules[moduleId].hot._selfAccepted)
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 		}
/******/ 	
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if(hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/ 	
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while(queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if(!module) continue;
/******/ 	
/******/ 			var data = {};
/******/ 	
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for(j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/ 	
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/ 	
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/ 	
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/ 	
/******/ 			// remove "parents" references from all children
/******/ 			for(j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if(!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if(idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for(moduleId in outdatedDependencies) {
/******/ 			if(Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)) {
/******/ 				module = installedModules[moduleId];
/******/ 				if(module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for(j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if(idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// Not in "apply" phase
/******/ 		hotSetStatus("apply");
/******/ 	
/******/ 		hotCurrentHash = hotUpdateNewHash;
/******/ 	
/******/ 		// insert new code
/******/ 		for(moduleId in appliedUpdate) {
/******/ 			if(Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for(moduleId in outdatedDependencies) {
/******/ 			if(Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)) {
/******/ 				module = installedModules[moduleId];
/******/ 				if(module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for(i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if(cb) {
/******/ 							if(callbacks.indexOf(cb) >= 0) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for(i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch(err) {
/******/ 							if(options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if(!options.ignoreErrored) {
/******/ 								if(!error)
/******/ 									error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// Load self accepted modules
/******/ 		for(i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = [moduleId];
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch(err) {
/******/ 				if(typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch(err2) {
/******/ 						if(options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								orginalError: err, // TODO remove in webpack 4
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if(!options.ignoreErrored) {
/******/ 							if(!error)
/******/ 								error = err2;
/******/ 						}
/******/ 						if(!error)
/******/ 							error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if(options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if(!options.ignoreErrored) {
/******/ 						if(!error)
/******/ 							error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if(error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/ 	
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/ 	// Load entry module and return exports
/******/ 	return hotCreateRequire(0)(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/hot/log-apply-result.js":
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
module.exports = function(updatedModules, renewedModules) {
	var unacceptedModules = updatedModules.filter(function(moduleId) {
		return renewedModules && renewedModules.indexOf(moduleId) < 0;
	});
	var log = __webpack_require__("./node_modules/webpack/hot/log.js");

	if(unacceptedModules.length > 0) {
		log("warning", "[HMR] The following modules couldn't be hot updated: (They would need a full reload!)");
		unacceptedModules.forEach(function(moduleId) {
			log("warning", "[HMR]  - " + moduleId);
		});
	}

	if(!renewedModules || renewedModules.length === 0) {
		log("info", "[HMR] Nothing hot updated.");
	} else {
		log("info", "[HMR] Updated modules:");
		renewedModules.forEach(function(moduleId) {
			if(typeof moduleId === "string" && moduleId.indexOf("!") !== -1) {
				var parts = moduleId.split("!");
				log.groupCollapsed("info", "[HMR]  - " + parts.pop());
				log("info", "[HMR]  - " + moduleId);
				log.groupEnd("info");
			} else {
				log("info", "[HMR]  - " + moduleId);
			}
		});
		var numberIds = renewedModules.every(function(moduleId) {
			return typeof moduleId === "number";
		});
		if(numberIds)
			log("info", "[HMR] Consider using the NamedModulesPlugin for module names.");
	}
};


/***/ }),

/***/ "./node_modules/webpack/hot/log.js":
/***/ (function(module, exports) {

var logLevel = "info";

function dummy() {}

function shouldLog(level) {
	var shouldLog = (logLevel === "info" && level === "info") ||
		(["info", "warning"].indexOf(logLevel) >= 0 && level === "warning") ||
		(["info", "warning", "error"].indexOf(logLevel) >= 0 && level === "error");
	return shouldLog;
}

function logGroup(logFn) {
	return function(level, msg) {
		if(shouldLog(level)) {
			logFn(msg);
		}
	};
}

module.exports = function(level, msg) {
	if(shouldLog(level)) {
		if(level === "info") {
			console.log(msg);
		} else if(level === "warning") {
			console.warn(msg);
		} else if(level === "error") {
			console.error(msg);
		}
	}
};

var group = console.group || dummy;
var groupCollapsed = console.groupCollapsed || dummy;
var groupEnd = console.groupEnd || dummy;

module.exports.group = logGroup(group);

module.exports.groupCollapsed = logGroup(groupCollapsed);

module.exports.groupEnd = logGroup(groupEnd);

module.exports.setLogLevel = function(level) {
	logLevel = level;
};


/***/ }),

/***/ "./node_modules/webpack/hot/poll.js?1000":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__resourceQuery) {/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
/*globals __resourceQuery */
if(true) {
	var hotPollInterval = +(__resourceQuery.substr(1)) || (10 * 60 * 1000);
	var log = __webpack_require__("./node_modules/webpack/hot/log.js");

	var checkForUpdate = function checkForUpdate(fromUpdate) {
		if(module.hot.status() === "idle") {
			module.hot.check(true).then(function(updatedModules) {
				if(!updatedModules) {
					if(fromUpdate) log("info", "[HMR] Update applied.");
					return;
				}
				__webpack_require__("./node_modules/webpack/hot/log-apply-result.js")(updatedModules, updatedModules);
				checkForUpdate(true);
			}).catch(function(err) {
				var status = module.hot.status();
				if(["abort", "fail"].indexOf(status) >= 0) {
					log("warning", "[HMR] Cannot apply update.");
					log("warning", "[HMR] " + err.stack || err.message);
					log("warning", "[HMR] You need to restart the application!");
				} else {
					log("warning", "[HMR] Update failed: " + err.stack || err.message);
				}
			});
		}
	};
	setInterval(checkForUpdate, hotPollInterval);
} else {
	throw new Error("[HMR] Hot Module Replacement is disabled.");
}

/* WEBPACK VAR INJECTION */}.call(exports, "?1000"))

/***/ }),

/***/ "./src/api/controllers/controller.company.js":
/***/ (function(module, exports, __webpack_require__) {

const sequelize = __webpack_require__("./src/db/models/index.js")

exports.getCompany = (req, res) => {
  // Quick example
  // var query = req.body
  sequelize.query("SELECT * FROM company").then(myTableRows => {
    res.send(myTableRows)
  })

  // sequelize.getQueryInterface().showAllTables().then( function(data){
  //   console.log(data)
  // } )
}


/***/ }),

/***/ "./src/api/controllers/controller.industry.js":
/***/ (function(module, exports, __webpack_require__) {

var db = __webpack_require__("./src/db/models/index.js"),
  sequelize = db.sequelize,
  Sequelize = db.Sequelize;
// var models = require('../../db/migrations')
//
// // const JobPost = require('../../db/models/job_post').JobPost
exports.getIndustryList = (req, res) => {
//   // Quick example
//   // var query = req.body
//   // sequelize.query("SELECT * FROM industry").then(myTableRows => {
//   models.job_post.findAll().then((users)=>{
//     res.send(users)
//   })
    // res.send("myTableRows")
  // })
  // JobPost.findByPrimary(1)
  //  .then((result)=>{
  //    })
  // sequelize.getQueryInterface().showAllTables().then( function(data){
  //   console.log(data)
  // } )
}


/***/ }),

/***/ "./src/api/controllers/controller.jobpost.js":
/***/ (function(module, exports, __webpack_require__) {

// const sequelize = require('../../db/index')
var db = __webpack_require__("./src/db/models/index.js"),
  sequelize = db.sequelize,
  Sequelize = db.Sequelize;
const JobPost = __webpack_require__("./src/db/migrations/job_post.js").JobPost
exports.getJob = (req, res) => {
  // Quick example
  // var query = req.body
  // sequelize.on("SELECT * FROM job_post").then(myTableRows => {
    // res.send("myTableRows")
  // }).catch((err) => {
  //   console.log(err)
  // })
  JobPost.findAll()
    .then((result)=>{
      res.send(result)
      })

      // console.log("result")
  // sequelize.getQueryInterface().showAllTables().then( function(data){
  //   console.log(data)
  // } )
}


/***/ }),

/***/ "./src/api/routers/route.company.js":
/***/ (function(module, exports, __webpack_require__) {

const Router = __webpack_require__("express").Router();
const companyController = __webpack_require__("./src/api/controllers/controller.company.js");

Router.get("/company", companyController.getCompany);

module.exports = Router;


/***/ }),

/***/ "./src/api/routers/route.industry.js":
/***/ (function(module, exports, __webpack_require__) {

const Router = __webpack_require__("express").Router();
const industryController = __webpack_require__("./src/api/controllers/controller.industry.js");

Router.get("/industry", industryController.getIndustryList);

module.exports = Router;


/***/ }),

/***/ "./src/api/routers/route.jobpost.js":
/***/ (function(module, exports, __webpack_require__) {

const Router = __webpack_require__("express").Router();
const jobController = __webpack_require__("./src/api/controllers/controller.jobpost.js");

Router.get("/job", jobController.getJob);

module.exports = Router;


/***/ }),

/***/ "./src/db/migrations/answer.js":
/***/ (function(module, exports, __webpack_require__) {

/* jshint indent: 2 */
const sequelize = __webpack_require__("./src/db/models/index.js").Sequelize
const DataTypes = __webpack_require__("sequelize")

module.exports = sequelize.define('answer', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    submission_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'submission',
        key: 'id'
      }
    },
    text_answer: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    href: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    question_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'question',
        key: 'id'
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    user_account_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user_account',
        key: 'id'
      }
    },
    // Timestamps
    createdAt: {
      type:DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type:DataTypes.DATE,
      allowNull: false
    }
  }
);


/***/ }),

/***/ "./src/db/migrations/business_stream.js":
/***/ (function(module, exports, __webpack_require__) {

/* jshint indent: 2 */
/* jshint indent: 2 */
const sequelize = __webpack_require__("./src/db/models/index.js").Sequelize
const DataTypes = __webpack_require__("sequelize")
module.exports = sequelize.define('business_stream', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    business_stream_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    industry_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'industry',
        key: 'id'
      }
    },
    // Timestamps
    createdAt: {
      type:DataTypes.DATE,
      allowNull: false
    },
    updatedAt: {
      type:DataTypes.DATE,
      allowNull: false
    }
  });


/***/ }),

/***/ "./src/db/migrations/company.js":
/***/ (function(module, exports, __webpack_require__) {

/* jshint indent: 2 */
const sequelize = __webpack_require__("./src/db/models/index.js").Sequelize
const DataTypes = __webpack_require__("sequelize")
module.exports =  sequelize.define('company', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    company_name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    profile_description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    business_stream_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'business_stream',
        key: 'id'
      }
    },
    establishment_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    company_website_url: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    industry_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'industry',
        key: 'id'
      }
    },
    city_name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    state_name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    zip_code: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    street_address: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    // Timestamps
    createdAt: {
      type:DataTypes.DATE,
      allowNull: true
    },
    updatedAt: {
      type:DataTypes.DATE,
      allowNull: true
    }
  });


/***/ }),

/***/ "./src/db/migrations/company_image.js":
/***/ (function(module, exports, __webpack_require__) {

/* jshint indent: 2 */
/* jshint indent: 2 */
const sequelize = __webpack_require__("./src/db/models/index.js").Sequelize
const DataTypes = __webpack_require__("sequelize")
module.exports = sequelize.define('company_image', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    company_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'company',
        key: 'id'
      }
    },
    company_image: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    // Timestamps
    createdAt: {
      type:DataTypes.DATE,
      allowNull: true
    },
    updatedAt: {
      type:DataTypes.DATE,
      allowNull: true
    }
  });


/***/ }),

/***/ "./src/db/migrations/education_detail.js":
/***/ (function(module, exports, __webpack_require__) {

/* jshint indent: 2 */
/* jshint indent: 2 */
const sequelize = __webpack_require__("./src/db/models/index.js").Sequelize
const DataTypes = __webpack_require__("sequelize")

module.exports =  sequelize.define('education_detail', {
    user_account_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'seeker_profile',
        key: 'user_account_id'
      }
    },
    certificate_degree_name: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    major: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    institute_university_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    completion_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    // Timestamps
    createdAt: {
      type:DataTypes.DATE,
      allowNull: true
    },
    updatedAt: {
      type:DataTypes.DATE,
      allowNull: true
    }
  });


/***/ }),

/***/ "./src/db/migrations/experience_detail.js":
/***/ (function(module, exports, __webpack_require__) {

/* jshint indent: 2 */
const sequelize = __webpack_require__("./src/db/models/index.js").Sequelize
const DataTypes = __webpack_require__("sequelize")
module.exports = sequelize.define('experience_detail', {
    user_account_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'seeker_profile',
        key: 'user_account_id'
      }
    },
    is_current_job: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      primaryKey: true
    },
    end_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      primaryKey: true
    },
    job_title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    company_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    job_location_city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    job_location_state: {
      type: DataTypes.STRING,
      allowNull: false
    },
    job_location_country: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // Timestamps
    createdAt: {
      type:DataTypes.DATE,
      allowNull: true
    },
    updatedAt: {
      type:DataTypes.DATE,
      allowNull: true
    }
  });


/***/ }),

/***/ "./src/db/migrations/industry.js":
/***/ (function(module, exports, __webpack_require__) {

/* jshint indent: 2 */
const sequelize = __webpack_require__("./src/db/models/index.js").Sequelize
const Sequelize = __webpack_require__("sequelize")

module.exports = sequelize.define('industry', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    industry_name: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    // Timestamps
    createdAt: {
      type:Sequelize.DATE,
      allowNull: true
    },
    updatedAt: {
      type:Sequelize.DATE,
      allowNull: true
    }
  });


/***/ }),

/***/ "./src/db/migrations/interview.js":
/***/ (function(module, exports, __webpack_require__) {

/* jshint indent: 2 */
const sequelize = __webpack_require__("./src/db/models/index.js").Sequelize
const DataTypes = __webpack_require__("sequelize")
module.exports = sequelize.define('interview', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    question_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'question',
        key: 'id'
      }
    },
    company_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'company',
        key: 'id'
      }
    },
    submissions: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    job_status: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    // Timestamps
    createdAt: {
      type:DataTypes.DATE,
      allowNull: true
    },
    updatedAt: {
      type:DataTypes.DATE,
      allowNull: true
    }
  });


/***/ }),

/***/ "./src/db/migrations/job_location.js":
/***/ (function(module, exports, __webpack_require__) {

/* jshint indent: 2 */
const sequelize = __webpack_require__("./src/db/models/index.js").Sequelize
const DataTypes = __webpack_require__("sequelize")

module.exports = sequelize.define('job_location', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    street_address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state: {
      type: DataTypes.STRING,
      allowNull: false
    },
    country: {
      type: DataTypes.STRING,
      allowNull: false
    },
    zip: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // Timestamps
    createdAt: {
      type:DataTypes.DATE,
      allowNull: true
    },
    updatedAt: {
      type:DataTypes.DATE,
      allowNull: true
    }
  });


/***/ }),

/***/ "./src/db/migrations/job_post.js":
/***/ (function(module, exports, __webpack_require__) {

/* jshint indent: 2 */
const sequelize = __webpack_require__("./src/db/models/index.js").Sequelize
const DataTypes = __webpack_require__("sequelize")

module.exports = sequelize.define('job_post', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    posted_by_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user_account',
        key: 'id'
      }
    },
    job_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'job_type',
        key: 'id'
      }
    },
    company_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'company',
        key: 'id'
      }
    },
    is_company_name_hidden: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    created_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    job_description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    job_location_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'job_location',
        key: 'id'
      }
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    payment_amount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    payment_type: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    end_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    tentative_efforts_required_in_hours: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    interview_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    job_status: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    // Timestamps
    createdAt: {
      type:DataTypes.DATE,
      allowNull: true
    },
    updatedAt: {
      type:DataTypes.DATE,
      allowNull: true
    }
  });


/***/ }),

/***/ "./src/db/migrations/job_post_activity.js":
/***/ (function(module, exports, __webpack_require__) {

/* jshint indent: 2 */
const sequelize = __webpack_require__("./src/db/models/index.js").Sequelize
const DataTypes = __webpack_require__("sequelize")

module.exports = sequelize.define('job_post_activity', {
    user_account_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'user_account',
        key: 'id'
      }
    },
    job_post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'job_post',
        key: 'id'
      }
    },
    apply_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    // Timestamps
    createdAt: {
      type:DataTypes.DATE,
      allowNull: true
    },
    updatedAt: {
      type:DataTypes.DATE,
      allowNull: true
    }
  });


/***/ }),

/***/ "./src/db/migrations/job_post_skill_set.js":
/***/ (function(module, exports, __webpack_require__) {

/* jshint indent: 2 */
const sequelize = __webpack_require__("./src/db/models/index.js").Sequelize
const DataTypes = __webpack_require__("sequelize")

module.exports = sequelize.define('job_post_skill_set', {
    skill_set_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'skill_set',
        key: 'id'
      }
    },
    job_post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'job_post',
        key: 'id'
      }
    },
    skill_level: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    // Timestamps
    createdAt: {
      type:DataTypes.DATE,
      allowNull: true
    },
    updatedAt: {
      type:DataTypes.DATE,
      allowNull: true
    }
  });


/***/ }),

/***/ "./src/db/migrations/job_type.js":
/***/ (function(module, exports, __webpack_require__) {

/* jshint indent: 2 */
const sequelize = __webpack_require__("./src/db/models/index.js").Sequelize
const DataTypes = __webpack_require__("sequelize")

module.exports = sequelize.define('job_type', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    job_type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // Timestamps
    createdAt: {
      type:DataTypes.DATE,
      allowNull: true
    },
    updatedAt: {
      type:DataTypes.DATE,
      allowNull: true
    }
  });


/***/ }),

/***/ "./src/db/migrations/message.js":
/***/ (function(module, exports, __webpack_require__) {

/* jshint indent: 2 */
const sequelize = __webpack_require__("./src/db/models/index.js").Sequelize
const DataTypes = __webpack_require__("sequelize")

module.exports = sequelize.define('message', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    seeker_user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    company_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    hire_manager_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    message_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    message_text: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    job_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    from_hire_manger: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    job_post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'job_post',
        key: 'id'
      }
    },
    // Timestamps
    createdAt: {
      type:DataTypes.DATE,
      allowNull: true
    },
    updatedAt: {
      type:DataTypes.DATE,
      allowNull: true
    }
  });


/***/ }),

/***/ "./src/db/migrations/question.js":
/***/ (function(module, exports) {

/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('question', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    question_text: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    question_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'question_type',
        key: 'id'
      }
    },
    question_tip: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    time_limit: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    video: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    company_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'company',
        key: 'id'
      }
    },
    job_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'job_post',
        key: 'id'
      }
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    user_account_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user_account',
        key: 'id'
      }
    },
    interview_id: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    // Timestamps
    createdAt: {
      type:DataTypes.DATE,
      allowNull: true
    },
    updatedAt: {
      type:DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'question'
  });
};


/***/ }),

/***/ "./src/db/migrations/question_type.js":
/***/ (function(module, exports) {

/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('question_type', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // Timestamps
    createdAt: {
      type:DataTypes.DATE,
      allowNull: true
    },
    updatedAt: {
      type:DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'question_type'
  });
};


/***/ }),

/***/ "./src/db/migrations/seeker_profile.js":
/***/ (function(module, exports) {

/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('seeker_profile', {
    user_account_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'user_account',
        key: 'id'
      }
    },
    current_salary: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    is_annually_monthly: {
      type: DataTypes.BOOLEAN,
      allowNull: true
    },
    currency: {
      type: DataTypes.STRING,
      allowNull: true
    },
    // Timestamps
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,  // Timestamps
      createdAt: {
        type:DataTypes.DATE,
        allowNull: true
      },
      updatedAt: {
        type:DataTypes.DATE,
        allowNull: true
      }
    }, {
    tableName: 'seeker_profile'
  });
};


/***/ }),

/***/ "./src/db/migrations/seeker_skill_set.js":
/***/ (function(module, exports) {

/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('seeker_skill_set', {
    user_account_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'seeker_profile',
        key: 'user_account_id'
      }
    },
    skill_set_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'skill_set',
        key: 'id'
      }
    },
    skill_level: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    // Timestamps
    createdAt: {
      type:DataTypes.DATE,
      allowNull: true
    },
    updatedAt: {
      type:DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'seeker_skill_set'
  });
};


/***/ }),

/***/ "./src/db/migrations/skill_set.js":
/***/ (function(module, exports) {

/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('skill_set', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    skill_set_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // Timestamps
    createdAt: {
      type:DataTypes.DATE,
      allowNull: true
    },
    updatedAt: {
      type:DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'skill_set'
  });
};


/***/ }),

/***/ "./src/db/migrations/status.js":
/***/ (function(module, exports) {

/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('status', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    status_name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    // Timestamps
    createdAt: {
      type:DataTypes.DATE,
      allowNull: true
    },
    updatedAt: {
      type:DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'status'
  });
};


/***/ }),

/***/ "./src/db/migrations/submission.js":
/***/ (function(module, exports) {

/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('submission', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    seeker_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user_account',
        key: 'id'
      }
    },
    company_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'company',
        key: 'id'
      }
    },
    media_content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    job_post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'job_post',
        key: 'id'
      }
    },
    status: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'status',
        key: 'id'
      }
    },
    // Timestamps
    createdAt: {
      type:DataTypes.DATE,
      allowNull: true
    },
    updatedAt: {
      type:DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'submission'
  });
};


/***/ }),

/***/ "./src/db/migrations/user_account.js":
/***/ (function(module, exports) {

/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_account', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user_type',
        key: 'id'
      }
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    first_name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    last_name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    password_salt: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    password_hash_algorithm: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    date_of_birth: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    gender: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    phone_number: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    sms_notification_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    email_notification_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    user_image: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    registration_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    twitter_handle: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    instagram_handle: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    website_url: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    facebook_url: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    // Timestamps
    createdAt: {
      type:DataTypes.DATE,
      allowNull: true
    },
    updatedAt: {
      type:DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'user_account'
  });
};


/***/ }),

/***/ "./src/db/migrations/user_content.js":
/***/ (function(module, exports) {

/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_content', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'user_account',
        key: 'id'
      }
    },
    user_media: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    // Timestamps
    createdAt: {
      type:DataTypes.DATE,
      allowNull: true
    },
    updatedAt: {
      type:DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'user_content'
  });
};


/***/ }),

/***/ "./src/db/migrations/user_log.js":
/***/ (function(module, exports) {

/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_log', {
    user_account_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'user_account',
        key: 'id'
      }
    },
    last_login_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    last_job_apply_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    // Timestamps
    createdAt: {
      type:DataTypes.DATE,
      allowNull: true
    },
    updatedAt: {
      type:DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'user_log'
  });
};


/***/ }),

/***/ "./src/db/migrations/user_type.js":
/***/ (function(module, exports) {

/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_type', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_type_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    // Timestamps
    createdAt: {
      type:DataTypes.DATE,
      allowNull: true
    },
    updatedAt: {
      type:DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'user_type'
  });
};


/***/ }),

/***/ "./src/db/models/index.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__filename) {const Sequelize = __webpack_require__("sequelize")
var db = {}
const path = __webpack_require__("path")
var basename  = path.basename(__filename);
const fs = __webpack_require__("fs")

var sequelize = new Sequelize("postgres://ymemsnvl:sWk06AobVzqlDofPhQ93rJEJh8vlotJ5@baasu.db.elephantsql.com:5432/ymemsnvl")
module.exports.Sequelize = sequelize;

// var sequelize = new Sequelize('felly','postgres','123kid',{
//
//   host: 'localhost',
//   dialect: 'postgres',
//    pool: {
//      max: 5,
//      min: 0,
//      acquire: 30000,
//      idle: 10000
//    },
//  // http://docs.sequelizejs.com/manual/tutorial/querying.html#operators
//  operatorsAliases: false
// });

// console.log(path)
// const modules = require('./answer.js')
// const JobPost = require('./job_post')
// console.log("file")
//
// for (var i in files) {
//   // var definition = require('./application/models/' + files[i]).Model;
//   console.log('Model Loaded: ' + i);
// }
// console.log(files)
// const pathy = '/Users/macbookpro/Documents/HackReactor/Opp/src/db/migrations'
// fs.readdirSync(pathy)
//   .filter(file => {
//     return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
//     console.log(file)
//   })
//   .forEach(file => {
//     var model = sequelize['import'](path.join(pathy, file));
//     db[model.name] = model;
//     console.log(file)
//   });
// db.industry.sync()
// // console.log(__dirname)
//
// Object.keys(db).forEach(modelName => {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });
// console.log(db)
//
// modules.forEach(module) => {
//   const model = module(sequelize, Sequelize, config)
//   db[model.name] = model
// }
// // ...
const answer = __webpack_require__("./src/db/migrations/answer.js")
const business_stream = __webpack_require__("./src/db/migrations/business_stream.js")
const company_image = __webpack_require__("./src/db/migrations/company_image.js")
const company = __webpack_require__("./src/db/migrations/company.js")
const education_detail = __webpack_require__("./src/db/migrations/education_detail.js")
const experience_detail = __webpack_require__("./src/db/migrations/experience_detail.js")
const industry = __webpack_require__("./src/db/migrations/industry.js")
const interview = __webpack_require__("./src/db/migrations/interview.js")
const job_location = __webpack_require__("./src/db/migrations/job_location.js")
const job_post_activity = __webpack_require__("./src/db/migrations/job_post_activity.js")
const job_post_skill_set = __webpack_require__("./src/db/migrations/job_post_skill_set.js")
const job_post = __webpack_require__("./src/db/migrations/job_post.js")
const job_type = __webpack_require__("./src/db/migrations/job_type.js")
const message = __webpack_require__("./src/db/migrations/message.js")
const question_type = __webpack_require__("./src/db/migrations/question_type.js")
const question = __webpack_require__("./src/db/migrations/question.js")
const seeker_profile = __webpack_require__("./src/db/migrations/seeker_profile.js")
const seeker_skill_set = __webpack_require__("./src/db/migrations/seeker_skill_set.js")
const skill_set = __webpack_require__("./src/db/migrations/skill_set.js")
const status = __webpack_require__("./src/db/migrations/status.js")
const submission = __webpack_require__("./src/db/migrations/submission.js")
const user_account = __webpack_require__("./src/db/migrations/user_account.js")
const user_content = __webpack_require__("./src/db/migrations/user_content.js")
const user_log = __webpack_require__("./src/db/migrations/user_log.js")
const user_type = __webpack_require__("./src/db/migrations/user_type.js")

// Sync all ../db/models that aren't already in the database

// sequelize.sync().then(() => {
//   // ok ... everything is nice!
//   console.log('created big fella')
// }).catch(error => {
//   // oooh, did you enter wrong database credentials?
//   console.log('not created big fella'+ error)
//
// })
// sequelize.getQueryInterface().describeTable('company').success( … )
// => this will result in the structure of a table with all it's attributes and
// JobPost().findAll()
//  .then((result)=>{
//    console.log(result)
//    })

// => this will result in an array with all existing table names

// console.log(JSON.parse(db.industry))
// db.job_post = job_post;
// module.exports = db;// module.exports.JobPost = JobPost
module.exports.industry = industry;
// const seed = require('../seed')()

/* WEBPACK VAR INJECTION */}.call(exports, "/index.js"))

/***/ }),

/***/ "./src/server-config.js":
/***/ (function(module, exports, __webpack_require__) {

const app = __webpack_require__("express")()
const webpack = __webpack_require__("webpack");
const webpackConfig = __webpack_require__("./webpack.config.js");
const sequelize = __webpack_require__("./src/db/models/index.js");

app.use(__webpack_require__("./src/api/routers/route.company.js"))

app.use(__webpack_require__("./src/api/routers/route.jobpost.js"))

app.use(__webpack_require__("./src/api/routers/route.industry.js"))

app.get('/',function(req,res){
  res.send('Hello World');
})
module.exports = app


/***/ }),

/***/ "./src/server.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_http__ = __webpack_require__("http");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_http__);

__webpack_require__("dotenv").config()
const app = __webpack_require__("./src/server-config.js")

const server = __WEBPACK_IMPORTED_MODULE_0_http___default.a.createServer(app)
let currentApp = app
server.listen(3000)
console.log('listening on port 3000')
// check if HMR is enabled

if (true) {
 module.hot.accept("./src/server.js", () => {
  server.removeListener('request', currentApp)
  server.on('request', app)
  currentApp = app
 })
}


/***/ }),

/***/ "./webpack.config.js":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__dirname) {var path = __webpack_require__("path");
var webpack = __webpack_require__("webpack");
var nodeModules = {};
var Dotenv = __webpack_require__("dotenv-webpack")
__webpack_require__("dotenv").config()


var fs = __webpack_require__("fs")
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;

  });


const StartServerPlugin = __webpack_require__("start-server-webpack-plugin")
module.exports = {
  context: path.join(__dirname),
  entry: ['webpack/hot/poll?1000','./src/server'],
  output: {
    path: path.join(__dirname,'www/src'),
    filename: 'bundle.js'
  },
  watch: true,
  target: 'node',
  externals: [nodeModules],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: path.join(__dirname, 'app'),
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  plugins:[
        new StartServerPlugin('bundle.js'),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            "process.env": {
                "BUILD_TARGET": JSON.stringify('server')
            }
        }),
        new Dotenv({
      path: './.env', // Path to .env file (this is the default)
      safe: false // load .env.example (defaults to "false" which does not use dotenv-safe)
    })
  ]

}

/* WEBPACK VAR INJECTION */}.call(exports, "/"))

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("./node_modules/webpack/hot/poll.js?1000");
module.exports = __webpack_require__("./src/server.js");


/***/ }),

/***/ "dotenv":
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),

/***/ "dotenv-webpack":
/***/ (function(module, exports) {

module.exports = require("dotenv-webpack");

/***/ }),

/***/ "express":
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "fs":
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "http":
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "path":
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "sequelize":
/***/ (function(module, exports) {

module.exports = require("sequelize");

/***/ }),

/***/ "start-server-webpack-plugin":
/***/ (function(module, exports) {

module.exports = require("start-server-webpack-plugin");

/***/ }),

/***/ "webpack":
/***/ (function(module, exports) {

module.exports = require("webpack");

/***/ })

/******/ });