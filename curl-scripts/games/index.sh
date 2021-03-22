curl "http://localhost:4741/games" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"
