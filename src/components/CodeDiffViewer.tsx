import React, { useState } from 'react';
import { GIT_DIFF_FILES } from '../data/diffData';
import { DiffFile } from '../types';
import { 
  GitCommit, 
  GitPullRequest, 
  FileCode, 
  PlusCircle, 
  MinusCircle, 
  Check, 
  Copy,
  ExternalLink
} from 'lucide-react';

export const CodeDiffViewer: React.FC = () => {
  const [selectedFilename, setSelectedFilename] = useState<string>(GIT_DIFF_FILES[0].filename);
  const [copied, setCopied] = useState(false);

  const activeFile: DiffFile =
    GIT_DIFF_FILES.find((f) => f.filename === selectedFilename) || GIT_DIFF_FILES[0];

  const handleCopy = () => {
    navigator.clipboard.writeText(activeFile.afterSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6 pb-12">
      {/* Commit Metadata Bar */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-slate-100 text-slate-700">
                <GitCommit className="w-3.5 h-3.5 text-slate-500" />
                7a7d854...b770d80
              </span>
              <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">
                17 files changed • +1,780 / -680
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Git Commit Code Diff & Architectural Modifications
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Commit message:{' '}
              <span className="text-slate-800 font-semibold italic">
                "feat: complete Singapore Carpark Rates application with full CX/UX improvements, live simulation, and bug fixes"
              </span>
            </p>
          </div>

          <a
            href="https://github.com/Happyyybunnyyy/SG-Carpark-V1"
            target="_blank"
            rel="noopener noreferrer"
            className="self-start lg:self-auto inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-xs transition-colors"
          >
            <span>View GitHub Repository</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* File selector list */}
        <div className="mt-6 flex gap-2 overflow-x-auto pb-2 no-scrollbar">
          {GIT_DIFF_FILES.map((file) => {
            const isSelected = file.filename === selectedFilename;
            return (
              <button
                key={file.filename}
                onClick={() => setSelectedFilename(file.filename)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono whitespace-nowrap transition-all border ${
                  isSelected
                    ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                }`}
              >
                <FileCode className="w-3.5 h-3.5" />
                <span>{file.filename.replace('src/', '')}</span>
                <span className={`px-1.5 py-0.2 rounded text-[10px] ${
                  isSelected ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-700'
                }`}>
                  +{file.additions} -{file.deletions}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Code diff display */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xs space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-mono font-bold text-base text-slate-900">{activeFile.filename}</h3>
              <span className={`px-2 py-0.5 rounded text-[11px] font-bold uppercase ${
                activeFile.status === 'added' ? 'bg-emerald-100 text-emerald-800' : 'bg-blue-100 text-blue-800'
              }`}>
                {activeFile.status}
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-1">{activeFile.description}</p>
          </div>

          <button
            onClick={handleCopy}
            className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-600 hover:text-slate-900 bg-white hover:bg-slate-50 shadow-2xs"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied' : 'Copy Code'}</span>
          </button>
        </div>

        {/* Change bullet list */}
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
          <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
            Key Changes in this File:
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
            {activeFile.keyChanges.map((change, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-blue-500 font-bold">•</span>
                <span>{change}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Diff Code Box */}
        <div className="rounded-2xl border border-slate-800 bg-slate-950 text-slate-100 font-mono text-xs overflow-hidden shadow-md">
          <div className="px-4 py-2.5 bg-slate-900 border-b border-slate-800 text-[11px] text-slate-400 flex items-center justify-between">
            <span>{activeFile.filename}</span>
            <div className="flex items-center gap-3">
              <span className="text-emerald-400">+{activeFile.additions} lines added</span>
              <span className="text-red-400">-{activeFile.deletions} lines deleted</span>
            </div>
          </div>

          {activeFile.beforeSnippet && (
            <div className="p-4 border-b border-slate-800/80 bg-red-950/20">
              <div className="text-[11px] font-bold text-red-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <MinusCircle className="w-3.5 h-3.5" />
                V1 Previous Snippet
              </div>
              <pre className="text-red-200/80 whitespace-pre-wrap leading-relaxed overflow-x-auto">
                {activeFile.beforeSnippet}
              </pre>
            </div>
          )}

          <div className="p-4 bg-emerald-950/20">
            <div className="text-[11px] font-bold text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <PlusCircle className="w-3.5 h-3.5" />
              V2 New Implementation
            </div>
            <pre className="text-emerald-200/90 whitespace-pre-wrap leading-relaxed overflow-x-auto">
              {activeFile.afterSnippet}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};
