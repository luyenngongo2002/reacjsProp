function data(dataName) {
    switch (dataName) {
        case "products":
            const products = [
                {   
                    id_category: 1,
                    name: "SAMSUM ",
                    img: "https://vn.canon/media/image/2019/07/08/02ad3d440d6c4c249650ccfe66ccdcbe_PowerShot+G5+X+mkII+Front.png",
                    detail: "Ao",
                    
                    
                },
                {
                    id_category: 1,
                    name: "VIVO",
                    img: "https://vn.canon/media/image/2019/07/08/02ad3d440d6c4c249650ccfe66ccdcbe_PowerShot+G5+X+mkII+Front.png",
                    detail: "Ao"
                },
                {
                    id_category: 2,
                    name: "HP",
                    img: "https://vn.canon/media/image/2019/07/08/02ad3d440d6c4c249650ccfe66ccdcbe_PowerShot+G5+X+mkII+Front.png",
                    detail: "Ao"
                }, {
                    id_category: 1,
                    name: "IPHONE 5",
                    img: "https://vn.canon/media/image/2019/07/08/02ad3d440d6c4c249650ccfe66ccdcbe_PowerShot+G5+X+mkII+Front.png",
                    detail: "Ao"
                },
            ];
            return products;
        case "categories":
            const categories = [
                {
                    id_category: 1,
                    name: "Phone",
                    
                },
                {
                    id_category: 2,
                    name: "Laptop",
                   
                },
                {
                    id_category: 3,
                    name: "Computer",
                  
                },
            ];
            return categories;
    }
}
export default data;