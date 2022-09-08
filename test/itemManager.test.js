const ItemManager = artifacts.require("./ItemManager.sol");

contract("ItemManager", accounts => {

before(async () => {
    this.itemManagerInstance = await ItemManager.deployed();
    })
    
it('deploys successfully', async () => {
    const address = await this.itemManagerInstance.address
    assert.notEqual(address, 0x0)
    assert.notEqual(address, '')
    assert.notEqual(address, null)
    assert.notEqual(address, undefined)
    })

it("... should let you create new Items.", async () => {
    const itemName = "test1";
    const itemPrice = 500;

    const result = await this.itemManagerInstance.createItem(itemName, itemPrice, { from: accounts[0] });
    assert.equal(result.logs[0].args._itemIndex, 0, "There should be one item index in there")
    const item = await this.itemManagerInstance.items(0);
    assert.equal(item._identifier, itemName, "The item has a different identifier");
});
});