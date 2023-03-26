//SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract LimaSmart {
//contract address 0xA31d890a49D03e745215B84C6Ba5518c00FAfD0F
    //struct to store farmers profile
    struct FarmerProfile {
        string name;
        string location;
        string crop;
        string contact;
        address walletAddress;

    }

    //struct to store retailers profile
      struct RetailerProfile {
          string name;
        string location;
        string purchasedCrops;
        string contact;
        address walletAddress;
    }

    //mapping to store all farmers profile
    mapping (address => FarmerProfile) farmers;

    //mapping to store all retailers profile
    mapping (address => RetailerProfile) retailers;
 
     //function to create farmers profile
     function createFarmerProfile(string memory _location, string memory _crop, string memory _contact, string memory _name) public {
        FarmerProfile storage farmer = farmers[msg.sender];
        farmer.location = _location;
        farmer.crop = _crop;
        farmer.name = _name;
        farmer.contact = _contact;
        farmer.walletAddress = msg.sender;
    }

    //function to create retailers profile
      function createRetailerProfile(string memory _location, string memory _purchasedCrops, string memory _contact, string memory _name) public {
        RetailerProfile storage retailer = retailers[msg.sender];
        retailer.location = _location;
        retailer.purchasedCrops = _purchasedCrops;
        retailer.name = _name;
        retailer.contact = _contact;
        retailer.walletAddress = msg.sender;
    }

    //function to return the farmers profile
     function getFarmerProfile(address _farmerAddress) public view returns (string memory, string memory, string memory, string memory, address) {
        FarmerProfile storage farmer = farmers[_farmerAddress];
        return (farmer.name, farmer.location, farmer.crop, farmer.contact, farmer.walletAddress);
    }

    
    function getRetailerProfile(address _retailerAddress) public view returns (string memory, string memory, string memory, string memory, address) {
        RetailerProfile storage retailer = retailers[_retailerAddress];
        return (retailer.name, retailer.location, retailer.purchasedCrops, retailer.contact, retailer.walletAddress);
    }


    /////////////////MARKETPLACE/////////////////

        struct Product {
        string name;
        string description;
        uint256 price;
        uint256 quantity;
        string image;
    }

    mapping (uint256 => Product) private products;
    uint256 private productId = 0;

    function addProduct(string memory _name, string memory _description, uint256 _price, uint256 _quantity, string memory _image) public {
        // Increment the product ID
        productId++;

        // Add the product to the mapping
        products[productId] = Product({
            name: _name,
            description: _description,
            price: _price,
            quantity: _quantity,
            image: _image
        });
    }

    function getProduct(uint256 _productId) public view returns (string memory, string memory, uint256, uint256, string memory) {
        // Get the product from the mapping
        Product memory product = products[_productId];

        // Return the product fields
        return (product.name, product.description, product.price, product.quantity, product.image);
    }

    function getAllProducts() public view returns (Product[] memory) {
        // Create a new dynamic array to hold all the products
        Product[] memory allProducts = new Product[](productId);

        // Loop through all the product IDs and add the products to the array
        for (uint256 i = 1; i <= productId; i++) {
            Product memory product = products[i];
            allProducts[i - 1] = product;
        }

        // Return the array of products
        return allProducts;
    }
}
