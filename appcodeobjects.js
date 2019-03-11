var demoApp = angular.module('demoApp', []);

function uuidv4() {
  return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
  )
}

//generic coding object that references all coding objects
function Object(Type) {
   this.type = Type;
}
Object.prototype.getProperty = function(name) {
	return this.objectData.typeProperties[name].data;
}

//used to "dynanically type access type-based properties from an object instance"
function ObjectType() {
	this.setParentType(null); //call this in every type def with parenttype as param
	this.typeProperties = [];
  this.typePropertyNames = []; 
  this.addTypeProperty('title','string');
  this.addTypeProperty('uuid','GUID'); 
}
ObjectType.prototype.addTypeProperty = function(name,type) {
	this.typePropertyNames += name;
  this.typeProperties += new ObjectTypeProperty(name,type);
}
ObjectType.prototype.setParentType = function(ParentType) {
	this.parentType = ParentType;
  if(this.parentType) {
  	var parent = new ParentType();
    this.typeProperties += parent.typeProperties;
    this.typePropertyNames += parent.typePropertyNames;
  }
}

function ObjectTypeProperty(name,dataType) {
	this.name = name;
  this.dataType = dataType;
  this.data = null;
}

function CodeObject() {
	this.setParentType(Object);
}

function AppObject() {
	this.setParentType(CodeObject);
}

function ClientObject() {
	this.setParentType(AppObject);
  this.addTypeProperty('title','string');
}

function ClientUIElement() {
	
}

function ClientView {
	this.setParentType(ClientUIElement);
 	
}
ClientView.prototype.parentType = 

function ObjectProperti

function ObjectTypeInfo(var name) {
	this.uuid = uuidv4();
  this.type = "element";
  this.name = name;
}

function ObjectType(typeName) {
	this.typeInfo = new ObjectTypeInfo(typeName)
  this.properties = [];
}

ObjectType.prototype.addProperty = function(property) {
	this.properties.push(property);
};

function ObjectTypeDataProperty() {
	this.
}

// create angular controller
demoApp.controller("demoController", ["$scope",
  function($scope) {
  	$scope.currentJobIndex = 0;
    $scope.jobs = [];
    $scope.jobs.push(new)
    "Job 1", "Job 2", "Job 3", "Job 4", "Job 5"];
    $scope.showNext = function(index) {
      $scope.currentJobIndex = ++index;
    };
    $scope.hideThis = function(index) {
      $scope.currentJobIndex = --index;
    };
  }
]);

