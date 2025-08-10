export function WelcomeAnimation() {
  return (
    <div className="fixed top-0 left-0 flex justify-center items-center w-lvw h-lvh bg-fourth text-white/70 z-50 move-welcome-animation-section">
      <div className="relative flex flex-col items-center gap-2 font-primary">
        <div className="absolute bg-fourth border-b-[1.5px] border-white/10 w-[105%] top-0 h-1/2 open-welcome-top z-50"></div>
        <p className="text-4xl w-full">
          AHMED MANSOUR
        </p>
        <p className="text-white/60">
          Frontend | Founder Sesha
        </p>
        <div className="absolute bg-fourth border-t-[1.5px] border-white/10 w-[105%] bottom-0 h-1/2 open-welcome-bottom z-50"></div>
      </div>
    </div>
  );
}
