# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

article1 = Article.create([{ title: "La Sapciensa"} ,  {image: "https://cdn.theconversation.com/avatars/335030/width238/dear_m_200_200.jpg"}, { description: "None of the business"}, { content: "Content is key"}, { publish_date: "2021-10-10"}, { category: "sports"}])

article2 = Article.create([{ title: "La LLorona"} ,  {image: "https://res.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_170,w_170,f_auto,g_faces,z_0.7,b_white,q_auto:eco,dpr_1/baxql7eoh4mprnb3wq2e"}, { description: "On the fly"}, { content: "Making it up"}, { publish_date: "2022-10-10"}, { category: "arts"}])

article3 = Article.create([{ title: "La Sasa"} ,  {image: "https://images.mubicdn.net/images/cast_member/233828/cache-169819-1473067814/image-w856.jpg?size=800x"}, { description: "All of the business"}, { content: "Keyis content"}, { publish_date: "2022-07-10"}, { category: "fashion"}])

article4 = Article.create([{ title: "Miguel"} ,  {image: "https://www.greaterburlington.com/images/made/assets/images/gallery/_safe/michael_dear_300_376_s.PNG"}, { description: "On the fly"}, { content: "It'ssss lit" }, { publish_date: "2022-09-10"}, { category: "arts"}])

article5 = Article.create([{ title: "EL venado"} ,  {image: "https://dearfinancial.com/wp-content/uploads/michael-dear-ea-tax-solutions.jpg"}, { description: "Wow thats's a business"}, { content: "No content"}, { publish_date: "2021-11-10"}, { category: "fashion"}])



