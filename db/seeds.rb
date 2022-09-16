# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Article.create([{ title: "La Sapciensa" ,  image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/05/02/08/curse-of-la-llorona.jpg",  description: "None of the business",  content: "Content is key",  publish_date: "2021-10-10", category: "sports"}])

Article.create([{ title: "La LLorona" ,  image: "https://images.tntdrama.com/tnt/$dyna_params/https%3A%2F%2Fi.cdn.tntdrama.com%2Fassets%2Fimages%2F2021%2F05%2FCurseOfLaLlorona-1600x900_0.jpgg",  description: "On the fly",  content: "Making it up", publish_date: "2022-10-10", category: "arts"}])

Article.create([{ title: "La Sasa" ,  image: "https://images.mubicdn.net/images/cast_member/233828/cache-169819-1473067814/image-w856.jpg?size=800x",  description: "All of the business", content: "Keyis content",  publish_date: "2022-07-10", category: "fashion"}])

Article.create([{ title: "Miguel" ,  image: "https://www.greaterburlington.com/images/made/assets/images/gallery/_safe/michael_dear_300_376_s.PNG", description: "On the fly", content: "It'ssss lit" ,  publish_date: "2022-09-10", category: "arts"}])

Article.create([{ title: "EL venado" ,  image: "https://dearfinancial.com/wp-content/uploads/michael-dear-ea-tax-solutions.jpg",  description: "Wow thats's a business",  content: "No content",  publish_date: "2021-11-10",  category: "fashion"}])

Author.create([{first_name: "Michael", last_name: "Dear"}])
Author.create([{first_name: "Gabriel", last_name: "Burgos"}])
Author.create([{first_name: "Christian", last_name: "Trublet"}])
Author.create([{first_name: "Hammer", last_name: "Baby"}])
Author.create([{first_name: "Graham", last_name: "Price"}])

User.create([{username: "Mike", password: "Mike1", email: "mike@gmail.com"}])
User.create([{username: "Gabe", password: "Gabe1", email: "gabe@gmail.com"}])
User.create([{username: "Chris", password: "Chris1", email: "chris@gmail.com"}])

