# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Playlist.destroy_all
Track.destroy_all

musa = User.create(
    username: "msillah"
)

playlist1 = Playlist.create(
    name: "The Greatest",
    user_id: musa.id
)

playlist2 = Playlist.create(
    name: "Weeboo",
    user_id: musa.id
)

dope = Track.create(
    title: "Wanted You feat. Lil Uzi Vert",
    album: "Wanted You",
    total_playtime: "3:48",
    release_year: "2017",
    playlist_id: playlist1.id
)

sunsetWaltz = Track.create(
    title: "Sunset Waltz",
    album: "Final Fantasy XV: Original Soundtrack",
    total_playtime: "1:21",
    release_year: "2016",
    playlist_id: playlist2.id
)
