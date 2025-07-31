import { FileUser, Github, LibraryBig, ListCollapse } from 'lucide-react';

import { SmallBubble } from './components/SmallBubble';

const App: React.FC = () => {
  return (
    <div>
      <nav className="flex justify-between px-10 py-6">
        <div className="text-2xl font-bold">intlbridge</div>
        <Github />
      </nav>
      <div className="flex items-center m-40 gap-20">
        <div>
          <h1 className="text-7xl pb-2 font-extrabold bg-gradient-to-br from-red-600 to-blue-600 bg-clip-text text-transparent">
            intlbridge
          </h1>
          <p className="mt-6 text-xl text-neutral-200">
            bridging the gap between aspiring international students and college
            in the US 🇺🇸
          </p>
          <div className="mt-4 flex gap-4">
            <SmallBubble
              Icon={() => <LibraryBig width={16} height={16} />}
              text="centralized info"
            />
            <SmallBubble
              Icon={() => <ListCollapse width={16} height={16} />}
              text="college recommendations"
            />
            <SmallBubble
              Icon={() => <FileUser width={16} height={16} />}
              text="application tracker"
            />
          </div>
          <button className="mt-10 p-3 rounded-xl font-bold bg-gradient-to-br from-red-600 to-blue-600 shadow-[6px_6px_6px_0px_rgba(0,_0,_0,_0.1)] ring-1">
            begin your journey
          </button>
        </div>
        <div />
      </div>
    </div>
  );
};

export default App;
