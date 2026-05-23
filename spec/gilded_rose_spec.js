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

it("quality is never more than 50", function() {
    const gildedRose = new Shop([new Item("Aged Brie", 10, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(50);
});

it("Aged Brie: quality increases by 1 each day", function() {
    const gildedRose = new Shop([new Item("Aged Brie", 10, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(21);
});

it("Aged Brie: quality increases by 2 after sellIn date passed", function() {
    const gildedRose = new Shop([new Item("Aged Brie", 0, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(22);
});

it("Sulfuras: quality never changes, always 80", function() {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 10, 80)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(80);
});

it("Sulfuras: sellIn never changes", function() {
    const gildedRose = new Shop([new Item("Sulfuras, Hand of Ragnaros", 10, 80)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(10);
});

it("Backstage passes: quality increases by 1 when sellIn > 10", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(21);
});

it("Backstage passes: quality increases by 2 when sellIn <= 10", function() {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 20)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(22);
});

});