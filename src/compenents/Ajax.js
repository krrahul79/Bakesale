const apiHost = 'https://bakesaleforgood.com'

export default {
    async fetchInitialDeals(){
        try {
            const response = await fetch(apiHost+
              '/api/deals'
            );
            const json = await response.json();
            return json.movies;
          } catch (error) {
            console.error(error);
          }
    }
}