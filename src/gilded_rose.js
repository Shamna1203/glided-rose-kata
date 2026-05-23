class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      const item = this.items[i];

      if (item.name == 'Conjured') {
        item.quality = Math.max(0, item.quality - 2);
        item.sellIn -= 1;
        continue;
      }

      if (item.name == 'Sulfuras, Hand of Ragnaros') {
        continue;
      }

      item.sellIn -= 1;

      if (item.name == 'Aged Brie') {
        item.quality = Math.min(50, item.quality + (item.sellIn < 0 ? 2 : 1));
        continue;
      }

      if (item.name == 'Backstage passes to a TAFKAL80ETC concert') {
        if (item.sellIn < 0) {
          item.quality = 0;
        } else if (item.sellIn < 5) {
          item.quality = Math.min(50, item.quality + 3);
        } else if (item.sellIn < 10) {
          item.quality = Math.min(50, item.quality + 2);
        } else {
          item.quality = Math.min(50, item.quality + 1);
        }
        continue;
      }

      item.quality = Math.max(0, item.quality - (item.sellIn < 0 ? 2 : 1));
    }

    return this.items;
  }
}