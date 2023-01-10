module.exports = {
    routes: [
        {
            method: 'POST',
            path: '/products/:id/review',
            handler: 'product.review'
        }
    ]
}