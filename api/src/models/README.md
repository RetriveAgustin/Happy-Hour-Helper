Modelos necesarios:

User:
--> id: uuid v4
--> name: string
--> lastname: string
--> mail: string
--> password: string
--> fauvorites: array (de uuid(s) de productos) (allowNull: true)
--> show: boolean (borrado lógico)

Adress:
--> id: uuid v4
--> street: string
--> number: numeric (allowNull: true)
--> description: string (allowNull: true)
--> show: boolean

Payment-methods
--> id: uuid v4
--> name: string
--> code: numeric
--> expiration-date: date
--> propetary-name: string
--> propetary-last-name: string
--> show: boolean:

Order:
--> id: uuid v4
--> date: date
--> delivered: boolean
--> canceled: boolean
--> adress: numeric (uuid de Adress)
--> payment-method: numeric (uuid de Payment-methods)

Offers:
--> id: uuid v4
--> name: string
--> price: numeric
--> img: string (allowNull: true)
--> description: string (allowNull: true)
--> percentage: boolean
--> initial-date: date
--> expiration-date: date

Product:
--> id: uuid v4
--> name: string
--> img: string (allowNull: true)
--> price: float
--> capacity: numeric
--> minimum-amount-for-bulk: numeric (allowNull: true)
--> bulk-discount: numeric (allowNull: true)
--> stock: numeric (allowNull: true)
--> rating: ENUM (0-5) (allowNull: true)
--> show: boolean

Discount:
--> id: uuid v4
--> initial-date: date
--> expiration-date: date
--> discount-amount: numeric

Brand:
--> id: uuid v4
--> name: string
--> show: boolean

Category:
--> id: uuid v4
--> name: string

Sub-Category:
--> id: uuid v4
--> name: string


RELACIONES:

User 1:n Adress
User 1:n Payment-method
User 1:n Order
Order 1:n Offers
Order 1:n Product
Offers 1:n Product
Brand 1:n Product
Product 1:n Category
Product n:n Discount
Category 1:n Sub-category