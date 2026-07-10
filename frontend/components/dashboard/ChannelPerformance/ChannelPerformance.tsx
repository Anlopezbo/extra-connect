"use client";

import Panel from "../Panel";

export default function ChannelPerformance() {
  return (
    <Panel title="Rendimiento por canal">

      <div className="space-y-5">

        <div>
          <div className="mb-2 flex justify-between">

            <span>WhatsApp</span>

            <span className="font-semibold">
              94%
            </span>

          </div>

          <div className="h-3 rounded-full bg-slate-200">

            <div className="h-3 w-[94%] rounded-full bg-green-500"/>

          </div>

        </div>

        <div>

          <div className="mb-2 flex justify-between">

            <span>Email</span>

            <span>82%</span>

          </div>

          <div className="h-3 rounded-full bg-slate-200">

            <div className="h-3 w-[82%] rounded-full bg-blue-600"/>

          </div>

        </div>

        <div>

          <div className="mb-2 flex justify-between">

            <span>SMS</span>

            <span>71%</span>

          </div>

          <div className="h-3 rounded-full bg-slate-200">

            <div className="h-3 w-[71%] rounded-full bg-yellow-500"/>

          </div>

        </div>

      </div>

    </Panel>
  );
}