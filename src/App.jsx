import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./App.css";
import { Governors } from "./CodegenQuery/Governors";
import { Proposals } from "./RawQuery/Proposals";
import { PolygonProposals} from "./ReactQuery/PolygonProposals"

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider contextSharing={true} client={queryClient}>
      <div className="App">
        <Header />
        <Governors />
        <Proposals />
        <PolygonProposals />
      </div>
    </QueryClientProvider>
  );
}

const Header = () => {
  return (
    <div>
      <h1>Tally API Quickstart</h1>
    </div>
  );
};



export default App;
