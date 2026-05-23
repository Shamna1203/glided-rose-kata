describe("Gilded Rose", function() {

    it("normal item: quality decreases by 1 each day", function() {
        const gildedRose = new Shop([new Item("normal item", 10, 20)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(19);
    });

});