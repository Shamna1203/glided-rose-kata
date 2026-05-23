describe("Gilded Rose", function() {

    it("normal item: quality decreases by 1 each day", function() {
        const gildedRose = new Shop([new Item("normal item", 10, 20)]);
        const items = gildedRose.updateQuality();
        expect(items[0].quality).toEqual(19);
    });

    it("normal item: quality decreases by 2 after sellIn date passed", function() {
    const gildedRose = new Shop([new Item("normal item", 0, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(18);
});

it("quality is never negative", function() {
    const gildedRose = new Shop([new Item("normal item", 10, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(0);
});

});