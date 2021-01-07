curl "http://localhost:4741/games/${ID}" \
  --include \
  --request GET \
  --header "Authorization: Bearer ${TOKEN}"
