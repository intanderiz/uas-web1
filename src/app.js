document.addEventListener('alpine:init', () => {
    Alpine.data('shop', () => ({
        items: [
            {id: 1, name: 'Jepitan', img: 'jepitan.jpg', price: 20000 },
            {id: 2, name: 'Bunny Keychain', img: 'keychain1.jpg', price: 17000 },
            {id: 3, name: 'Braid Keychain', img: 'keychain2.jpg', price: 17000 },
            {id: 4, name: 'Scrunchie', img: 'scrunchie.jpg', price: 10000 },
            {id: 5, name: 'Butterfly Clip', img: 'scrunchie2.jpg', price: 10000 },
            {id: 6, name: 'Bracelet', img: 'gelang.jpg', price: 15000 },
        ],
        
    }));
    Alpine.store('cart', {
        items: [],
        total: 0,
        quantity: 0,
        add(newItem) {
          const cartItem = this.items.find((item) => item.id === newItem.id);

          if(!cartItem) {
          this.items.push({...newItem, quantity: 1, total: newItem.price } );
          this.quantity++;
          this.total += newItem.price;
        } else {
            this.items = this.items.map((item) => {
                if(item.id !== newItem.id) {
                    return item;
                } else {
                    item.quantity++;
                    item.total = item.price * item.quantity;
                    this.quantity++;
          this.total += item.price;
          return item;
                }
            });
        }
    },

    remove(id) {
        const cartItem = this.items.find((item) => item.id === id );

        if(cartItem.quantity > 1) {
            this.items = this.items.map((item) => {
                if(item.id !== id) {
                    return item;
                } else {
                    item.quantity--;
                    item.total = item.price * item.quantity;
                    this.quantity--;
                    this.total -= item.price;
                    return item;
                }
            })
        } else if (cartItem.quantity === 1 ) {
            this.items = this.items.filter((item) => item.id !== id);
            this.quantity--;
            this.total -= cartItem.price;
        }
    }

    });
});

// Konversi ke rupiah
const rupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
    }).format(number);
};
