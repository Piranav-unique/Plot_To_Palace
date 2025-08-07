// Define the main module with dependency injection
angular.module('buildingPlannerApp', ['ngAnimate'])

// ===== SERVICES =====
.service('BuildingService', function() {
  this.getRoomTypes = function() {
    return [
      { type: 'hall', name: 'Hall/Living Room', length: 20, width: 15, height: 10 },
      { type: 'bedroom', name: 'Bedroom', length: 12, width: 10, height: 9 },
      { type: 'kitchen', name: 'Kitchen', length: 15, width: 12, height: 9 },
      { type: 'bathroom', name: 'Bathroom', length: 8, width: 6, height: 8 },
      { type: 'study', name: 'Study Room', length: 10, width: 8, height: 9 }
    ];
  };
  
  this.calculateAreas = function(room) {
    return {
      floorArea: room.length * room.width,
      wallArea: 2 * (room.length + room.width) * room.height
    };
  };
  
  this.getMaterialRates = function() {
    return {
      cement: 410, // per bag
      steel: 60000, // per ton
      sand: 4000, // per unit
      bricks: 9, // per piece
      tiles: 45, // per sq ft
      paint: 25 // per sq ft
    };
  };
})

// ===== FACTORIES =====
.factory('MaterialFactory', function() {
  return {
    createMaterial: function(name, quantity, unit, unitPrice) {
      return {
        name: name,
        quantity: quantity,
        unit: unit,
        unitPrice: unitPrice,
        totalCost: quantity * unitPrice,
        highlight: false
      };
    },
    
    calculateMaterials: function(room) {
      var areas = {
        floorArea: room.length * room.width,
        wallArea: 2 * (room.length + room.width) * room.height
      };
      
      return [
        this.createMaterial('Cement', Math.ceil(areas.floorArea * 0.1), 'bags', 410),
        this.createMaterial('Steel', Math.ceil(areas.floorArea * 0.003), 'tons', 60000),
        this.createMaterial('Sand', Math.ceil(areas.floorArea * 0.15), 'units', 4000),
        this.createMaterial('Bricks', Math.ceil(areas.wallArea * 10), 'pieces', 9),
        this.createMaterial('Floor Tiles', areas.floorArea, 'sq ft', 45),
        this.createMaterial('Wall Tiles', areas.wallArea, 'sq ft', 35),
        this.createMaterial('Paint', areas.wallArea, 'sq ft', 25)
      ];
    }
  };
})

.factory('DesignFactory', function() {
  return {
    generateColorPalette: function(primaryColor) {
      // Simple color palette generation
      var colors = [
        { name: 'Primary', hex: primaryColor, textColor: '#ffffff' },
        { name: 'Secondary', hex: this.adjustBrightness(primaryColor, -20), textColor: '#ffffff' },
        { name: 'Accent', hex: this.adjustBrightness(primaryColor, 30), textColor: '#000000' },
        { name: 'Neutral', hex: '#f8f9fa', textColor: '#000000' }
      ];
      return colors;
    },
    
    adjustBrightness: function(hex, percent) {
      // Simple brightness adjustment
      var num = parseInt(hex.replace("#",""), 16);
      var amt = Math.round(2.55 * percent);
      var R = (num >> 16) + amt;
      var G = (num >> 8 & 0x00FF) + amt;
      var B = (num & 0x0000FF) + amt;
      return "#" + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 +
        (G < 255 ? G < 1 ? 0 : G : 255) * 0x100 +
        (B < 255 ? B < 1 ? 0 : B : 255)).toString(16).slice(1);
    }
  };
})

// ===== FILTERS =====
.filter('materialFilter', function() {
  return function(materials, searchTerm) {
    if (!searchTerm) return materials;
    return materials.filter(function(material) {
      return material.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
    });
  };
})

.filter('currency', function() {
  return function(amount, symbol) {
    if (!amount) return symbol + '0';
    return symbol + amount.toLocaleString();
  };
})

.filter('number', function() {
  return function(input, decimals) {
    if (!input) return '0';
    return input.toFixed(decimals || 0);
  };
})

// ===== DIRECTIVES =====
.directive('roomPreview', function() {
  return {
    restrict: 'E',
    scope: {
      room: '='
    },
    template: `
      <div class="room-preview">
        <div class="room-dimensions top">{{room.length}}'</div>
        <div class="room-dimensions left">{{room.width}}'</div>
        <div class="room-dimensions right">{{room.width}}'</div>
        <div class="room-dimensions bottom">{{room.length}}'</div>
        <div style="text-align: center; padding: 40px;">
          <h4>{{room.name}}</h4>
          <p>Floor Area: {{room.floorArea | number:1}} sq ft</p>
          <p>Wall Area: {{room.wallArea | number:1}} sq ft</p>
        </div>
      </div>
    `,
    link: function(scope, element, attrs) {
      // Add animation on room change
      element.addClass('fade-in');
    }
  };
})

.directive('materialCard', function() {
  return {
    restrict: 'E',
    scope: {
      material: '=',
      onHighlight: '&'
    },
    template: `
      <div class="material-item" ng-class="{'bounce': material.highlight}">
        <h4>{{material.name}}</h4>
        <p><strong>Quantity:</strong> {{material.quantity | number:1}} {{material.unit}}</p>
        <p><strong>Unit Price:</strong> {{material.unitPrice | currency:'₹':0}}</p>
        <p><strong>Total Cost:</strong> {{material.totalCost | currency:'₹':0}}</p>
        <button class="btn" ng-click="onHighlight({material: material})">Highlight</button>
      </div>
    `,
    link: function(scope, element, attrs) {
      // Add hover effects
      element.on('mouseenter', function() {
        element.addClass('slide-in');
      });
    }
  };
})

.directive('progressBar', function() {
  return {
    restrict: 'E',
    scope: {
      value: '=',
      max: '=',
      label: '@'
    },
    template: `
      <div class="progress-container">
        <div class="progress-bar">
          <div class="progress-fill" ng-style="{width: (value / max * 100) + '%'}"></div>
        </div>
        <p>{{label}}: {{value | number:0}} / {{max | number:0}}</p>
      </div>
    `,
    link: function(scope, element, attrs) {
      // Animate progress bar
      scope.$watch('value', function(newVal, oldVal) {
        if (newVal !== oldVal) {
          element.find('.progress-fill').addClass('bounce');
        }
      });
    }
  };
})

// ===== MAIN CONTROLLER =====
.controller('MainController', function($scope, $timeout, $log, BuildingService, MaterialFactory, DesignFactory) {
  var vm = this;
  
  // Initialize data
  vm.activeTab = 'planner';
  vm.roomTypes = BuildingService.getRoomTypes();
  vm.selectedRoomType = 'hall';
  vm.currentRoom = vm.roomTypes[0];
  vm.materialResults = null;
  vm.materials = [];
  vm.budget = 0;
  vm.searchFilter = '';
  vm.primaryColor = '#3498db';
  vm.selectedStyle = 'modern';
  vm.colorPalette = [];
  vm.totalCost = 0;
  
  // Project phases for analytics
  vm.projectPhases = [
    { name: 'Foundation', duration: 7, cost: 50000, progress: 100 },
    { name: 'Structure', duration: 14, cost: 150000, progress: 75 },
    { name: 'Finishing', duration: 10, cost: 80000, progress: 50 },
    { name: 'Interior', duration: 5, cost: 40000, progress: 25 }
  ];
  
  // Tab navigation
  vm.setActiveTab = function(tab) {
    vm.activeTab = tab;
    $log.info('Switched to tab:', tab);
  };
  
  // Update room specifications
  vm.updateRoomSpecs = function() {
    var selectedRoom = vm.roomTypes.find(function(room) {
      return room.type === vm.selectedRoomType;
    });
    
    if (selectedRoom) {
      vm.currentRoom = selectedRoom;
      var areas = BuildingService.calculateAreas(vm.currentRoom);
      vm.currentRoom.floorArea = areas.floorArea;
      vm.currentRoom.wallArea = areas.wallArea;
      
      $log.info('Room updated:', vm.currentRoom);
    }
  };
  
  // Calculate materials
  vm.calculateMaterials = function() {
    // Use custom dimensions if provided
    if (vm.customLength && vm.customWidth && vm.customHeight) {
      vm.currentRoom.length = parseFloat(vm.customLength);
      vm.currentRoom.width = parseFloat(vm.customWidth);
      vm.currentRoom.height = parseFloat(vm.customHeight);
      vm.currentRoom.name = 'Custom Room';
    }
    
    vm.materialResults = MaterialFactory.calculateMaterials(vm.currentRoom);
    vm.materials = vm.materialResults;
    vm.totalCost = vm.materials.reduce(function(sum, material) {
      return sum + material.totalCost;
    }, 0);
    
    $log.info('Materials calculated:', vm.materialResults);
    $log.info('Total cost:', vm.totalCost);
  };
  
  // Highlight material
  vm.highlightMaterial = function(material) {
    // Reset all highlights
    vm.materials.forEach(function(m) {
      m.highlight = false;
    });
    
    // Highlight selected material
    material.highlight = true;
    
    // Remove highlight after animation
    $timeout(function() {
      material.highlight = false;
    }, 600);
    
    $log.info('Material highlighted:', material.name);
  };
  
  // Update color scheme
  vm.updateColorScheme = function() {
    vm.colorPalette = DesignFactory.generateColorPalette(vm.primaryColor);
    $log.info('Color scheme updated:', vm.colorPalette);
  };
  
  // Update design
  vm.updateDesign = function() {
    $log.info('Design style changed to:', vm.selectedStyle);
    // Add design-specific logic here
  };
  
  // Initialize
  vm.updateRoomSpecs();
  vm.updateColorScheme();
  
  // Simulate loading
  vm.loading = true;
  $timeout(function() {
    vm.loading = false;
    vm.calculateMaterials();
  }, 1000);
  
  // Watch for budget changes
  $scope.$watch('main.budget', function(newBudget) {
    if (newBudget && vm.totalCost > newBudget) {
      $log.warn('Budget exceeded!');
    }
  });
  
  // Watch for material changes
  $scope.$watch('main.materials', function(newMaterials) {
    if (newMaterials && newMaterials.length > 0) {
      vm.totalCost = newMaterials.reduce(function(sum, material) {
        return sum + material.totalCost;
      }, 0);
    }
  }, true);
});