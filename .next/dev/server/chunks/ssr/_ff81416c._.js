module.exports = [
"[project]/components/ConvexClientProvider.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConvexClientProvider",
    ()=>ConvexClientProvider
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/convex/dist/esm/react/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/convex/dist/esm/react/client.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
function ConvexClientProvider({ children }) {
    const convex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const url = ("TURBOPACK compile-time value", "https://benevolent-salamander-141.convex.cloud");
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConvexReactClient"](url);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConvexProvider"], {
        client: convex,
        children: children
    }, void 0, false, {
        fileName: "[project]/components/ConvexClientProvider.tsx",
        lineNumber: 17,
        columnNumber: 10
    }, this);
}
}),
"[project]/components/QuestionForm.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>QuestionForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
'use client';
;
function QuestionForm({ questionsArray, answerArray, onSubmit }) {
    if (questionsArray.length === 0) return null;
    const currentQuestion = questionsArray[0];
    const currentAnswers = answerArray.filter((a)=>a.questionId === currentQuestion._id);
    if (currentAnswers.length === 0) return null;
    const answerObj = currentAnswers[0];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full max-w-6xl mx-auto px-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col justify-center items-center min-h-[450px] gap-8 py-8",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl md:text-3xl lg:text-4xl font-semibold text-center text-white mb-8 max-w-4xl leading-relaxed",
                    children: currentQuestion.question
                }, void 0, false, {
                    fileName: "[project]/components/QuestionForm.tsx",
                    lineNumber: 34,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl",
                    children: answerObj.answers.map((answer, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: "modern-card p-6 flex flex-col items-center justify-center min-h-[140px] group hover:border-volcano-orange/50 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-volcano-orange focus:ring-offset-2 focus:ring-offset-transparent",
                            onClick: ()=>onSubmit(answer),
                            "aria-label": `Select answer: ${answer}`,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-lg md:text-xl font-medium text-center text-white mb-4 group-hover:text-volcano-amber transition-colors",
                                    children: answer
                                }, void 0, false, {
                                    fileName: "[project]/components/QuestionForm.tsx",
                                    lineNumber: 46,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-12 h-12 rounded-full bg-volcano-gradient opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-white font-bold text-xl",
                                        "aria-hidden": "true",
                                        children: "✓"
                                    }, void 0, false, {
                                        fileName: "[project]/components/QuestionForm.tsx",
                                        lineNumber: 50,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/QuestionForm.tsx",
                                    lineNumber: 49,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, `answer-${index}`, true, {
                            fileName: "[project]/components/QuestionForm.tsx",
                            lineNumber: 40,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/QuestionForm.tsx",
                    lineNumber: 38,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/QuestionForm.tsx",
            lineNumber: 33,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/QuestionForm.tsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/HeartsContainer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeartsContainer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function HeartsContainer({ wrongAnswers }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex gap-3 z-10",
        children: [
            wrongAnswers === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "heart"
            }, void 0, false, {
                fileName: "[project]/components/HeartsContainer.tsx",
                lineNumber: 8,
                columnNumber: 30
            }, this),
            wrongAnswers <= 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "heart"
            }, void 0, false, {
                fileName: "[project]/components/HeartsContainer.tsx",
                lineNumber: 9,
                columnNumber: 29
            }, this),
            wrongAnswers <= 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "heart"
            }, void 0, false, {
                fileName: "[project]/components/HeartsContainer.tsx",
                lineNumber: 10,
                columnNumber: 29
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/HeartsContainer.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/GameStatistics.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GameStatistics
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function GameStatistics({ correctAnswers }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-fit mt-5 statistics z-10 modern-card p-4 rounded-xl",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-xl md:text-2xl font-semibold",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-volcano-amber",
                    children: "Correct:"
                }, void 0, false, {
                    fileName: "[project]/components/GameStatistics.tsx",
                    lineNumber: 9,
                    columnNumber: 9
                }, this),
                ' ',
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-white",
                    children: correctAnswers
                }, void 0, false, {
                    fileName: "[project]/components/GameStatistics.tsx",
                    lineNumber: 10,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/GameStatistics.tsx",
            lineNumber: 8,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/GameStatistics.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/MainQuestionSection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MainQuestionSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$QuestionForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/QuestionForm.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$HeartsContainer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/HeartsContainer.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$GameStatistics$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/GameStatistics.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
function MainQuestionSection({ questionsArray, answerArray, wrongAnswers, correctAnswers, answerClass, onSubmit }) {
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const adjustHeight = ()=>{
            if (sectionRef.current) {
                const height = `${sectionRef.current.scrollHeight}px`;
                sectionRef.current.style.setProperty('--pseudo-element-height', height);
            }
        };
        if (sectionRef.current) {
            sectionRef.current.addEventListener('scroll', adjustHeight);
            window.addEventListener('resize', adjustHeight);
            adjustHeight();
        }
        return ()=>{
            if (sectionRef.current) {
                sectionRef.current.removeEventListener('scroll', adjustHeight);
            }
            window.removeEventListener('resize', adjustHeight);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: `relative bg-stHelensWithtop text-white min-h-screen w-full bg-cover bg-center ${answerClass}`,
        ref: sectionRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"
            }, void 0, false, {
                fileName: "[project]/components/MainQuestionSection.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 flex flex-col items-center justify-center min-h-screen p-4 md:p-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-between items-start w-full max-w-7xl mb-8 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$GameStatistics$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                correctAnswers: correctAnswers
                            }, void 0, false, {
                                fileName: "[project]/components/MainQuestionSection.tsx",
                                lineNumber: 69,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$HeartsContainer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                wrongAnswers: wrongAnswers
                            }, void 0, false, {
                                fileName: "[project]/components/MainQuestionSection.tsx",
                                lineNumber: 70,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/MainQuestionSection.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full flex-1 flex items-center justify-center",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$QuestionForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            questionsArray: questionsArray,
                            answerArray: answerArray,
                            onSubmit: onSubmit
                        }, void 0, false, {
                            fileName: "[project]/components/MainQuestionSection.tsx",
                            lineNumber: 73,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/MainQuestionSection.tsx",
                        lineNumber: 72,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/MainQuestionSection.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/MainQuestionSection.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/LostScreen.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LostScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
;
;
function LostScreen({ correctAnswers, wrongAnswers }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-lavaVolcano text-white min-h-screen w-full bg-cover bg-center flex justify-center items-center p-4 relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"
            }, void 0, false, {
                fileName: "[project]/components/LostScreen.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "modern-card p-8 md:p-12 max-w-lg w-full relative z-10 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl md:text-5xl font-bold mb-6 bg-volcano-gradient bg-clip-text text-transparent",
                        children: "Game Over"
                    }, void 0, false, {
                        fileName: "[project]/components/LostScreen.tsx",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xl md:text-2xl mb-8 text-gray-300",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            children: "Would you be this close to an active volcano?"
                        }, void 0, false, {
                            fileName: "[project]/components/LostScreen.tsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/LostScreen.tsx",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xl md:text-2xl mb-8 space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-volcano-amber font-semibold",
                                children: [
                                    "Correct: ",
                                    correctAnswers
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/LostScreen.tsx",
                                lineNumber: 20,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-volcano-red font-semibold",
                                children: [
                                    "Incorrect: ",
                                    wrongAnswers
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/LostScreen.tsx",
                                lineNumber: 21,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/LostScreen.tsx",
                        lineNumber: 19,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/high-scores",
                                className: "btn-modern text-center",
                                children: "High Scores"
                            }, void 0, false, {
                                fileName: "[project]/components/LostScreen.tsx",
                                lineNumber: 24,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "link-modern text-xl font-semibold py-2",
                                children: "Return Home"
                            }, void 0, false, {
                                fileName: "[project]/components/LostScreen.tsx",
                                lineNumber: 27,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/LostScreen.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/LostScreen.tsx",
                lineNumber: 12,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/LostScreen.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/AnimatedVolcanoBackground.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AnimatedVolcanoBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
function AnimatedVolcanoBackground({ variant = 'flowing-lava', intensity = 'moderate' }) {
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        // Set canvas size
        const resizeCanvas = ()=>{
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        let animationId;
        let time = 0;
        const speed = {
            subtle: 0.3,
            moderate: 0.5,
            intense: 0.8
        };
        // Particle class for explosions/embers
        class Particle {
            x;
            y;
            vx;
            vy;
            size;
            life;
            maxLife;
            color;
            constructor(x, y){
                this.x = x;
                this.y = y;
                this.vx = (Math.random() - 0.5) * 2;
                this.vy = -Math.random() * 3 - 1;
                this.size = Math.random() * 3 + 1;
                this.maxLife = Math.random() * 60 + 40;
                this.life = this.maxLife;
                this.color = {
                    r: 255,
                    g: Math.random() * 100 + 100,
                    b: Math.random() * 50
                };
            }
            update() {
                this.x += this.vx;
                this.y += this.vy;
                this.vy += 0.05; // gravity
                this.life--;
            }
            draw(ctx) {
                const alpha = this.life / this.maxLife;
                ctx.globalAlpha = alpha;
                ctx.fillStyle = `rgb(${this.color.r}, ${this.color.g}, ${this.color.b})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
                ctx.globalAlpha = 1;
            }
            isDead() {
                return this.life <= 0;
            }
        }
        // Lava flow particle
        class LavaParticle {
            x;
            y;
            speed;
            waveOffset;
            size;
            constructor(x, y){
                this.x = x;
                this.y = y;
                this.speed = Math.random() * 2 + 1;
                this.waveOffset = Math.random() * Math.PI * 2;
                this.size = Math.random() * 4 + 2;
            }
            update(time, canvas) {
                this.y += this.speed * speed[intensity];
                // Wave motion
                this.x += Math.sin(time * 0.02 + this.waveOffset) * 0.5;
                // Reset if off screen
                if (this.y > canvas.height + 50) {
                    this.y = -50;
                    this.x = Math.random() * canvas.width;
                }
            }
            draw(ctx) {
                const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 2);
                gradient.addColorStop(0, `rgba(255, ${150 + Math.random() * 50}, ${50 + Math.random() * 50}, 0.8)`);
                gradient.addColorStop(1, 'rgba(196, 30, 58, 0)');
                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }
        let particles = [];
        let lavaParticles = [];
        // Initialize particles based on variant
        if (variant === 'flowing-lava') {
            // Create particles for explosions
            for(let i = 0; i < 100; i++){
                particles.push(new Particle(Math.random() * canvas.width, canvas.height * 0.7 + Math.random() * 100));
            }
            // Create flowing lava particles
            for(let i = 0; i < 80; i++){
                lavaParticles.push(new LavaParticle(Math.random() * canvas.width, Math.random() * canvas.height));
            }
        } else if (variant === 'side-flowing-lava') {
            // Side view - particles flow horizontally from left
            for(let i = 0; i < 150; i++){
                const y = canvas.height * 0.7 + (Math.random() - 0.5) * canvas.height * 0.3;
                const particle = new LavaParticle(-50 + Math.random() * 100, y);
                particle.speed = Math.random() * 3 + 2;
                lavaParticles.push(particle);
            }
        } else if (variant === 'calm-volcano') {
            // Calm - just gentle particles
            for(let i = 0; i < 20; i++){
                particles.push(new Particle(Math.random() * canvas.width, canvas.height * 0.6 + Math.random() * 50));
            }
        }
        const draw = ()=>{
            time += 1;
            // Clear canvas
            ctx.fillStyle = '#0F0F0F';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            if (variant === 'flowing-lava') {
                // Dark base
                const baseGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
                baseGradient.addColorStop(0, '#0F0F0F');
                baseGradient.addColorStop(0.5, '#1A1A1A');
                baseGradient.addColorStop(0.7, '#2A1A1A');
                baseGradient.addColorStop(1, '#0F0F0F');
                ctx.fillStyle = baseGradient;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                // Flowing lava streams (vertical)
                for(let i = 0; i < 5; i++){
                    const x = canvas.width / 6 * (i + 1);
                    const wave = Math.sin(time * 0.02 + i) * 30;
                    const gradient = ctx.createLinearGradient(x + wave, 0, x + wave, canvas.height);
                    gradient.addColorStop(0, 'rgba(26, 26, 26, 0)');
                    gradient.addColorStop(0.6, `rgba(255, ${100 + i * 30}, ${50 + i * 20}, 0.3)`);
                    gradient.addColorStop(0.7, `rgba(255, ${120 + i * 30}, ${60 + i * 20}, 0.6)`);
                    gradient.addColorStop(0.8, `rgba(196, 30, 58, 0.4)`);
                    gradient.addColorStop(1, 'rgba(139, 21, 56, 0)');
                    ctx.fillStyle = gradient;
                    ctx.fillRect(x + wave - 40, 0, 80, canvas.height);
                }
                // Draw flowing lava particles
                lavaParticles.forEach((particle)=>{
                    particle.update(time, canvas);
                    particle.draw(ctx);
                });
                // Draw explosion particles
                particles.forEach((particle)=>{
                    particle.update();
                    particle.draw(ctx);
                    if (particle.isDead()) {
                        particle.x = Math.random() * canvas.width;
                        particle.y = canvas.height * 0.7 + Math.random() * 100;
                        particle.life = particle.maxLife;
                        particle.vx = (Math.random() - 0.5) * 2;
                        particle.vy = -Math.random() * 3 - 1;
                    }
                });
                // Add occasional explosion bursts
                if (Math.random() < 0.02) {
                    const explosionX = Math.random() * canvas.width;
                    const explosionY = canvas.height * 0.7;
                    for(let i = 0; i < 15; i++){
                        const p = new Particle(explosionX, explosionY);
                        p.vx = (Math.random() - 0.5) * 4;
                        p.vy = -Math.random() * 5 - 2;
                        particles.push(p);
                    }
                }
            } else if (variant === 'side-flowing-lava') {
                // Side view perspective
                // Dark background
                ctx.fillStyle = '#0F0F0F';
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                // Ground/rock layer at bottom
                const groundGradient = ctx.createLinearGradient(0, canvas.height * 0.7, 0, canvas.height);
                groundGradient.addColorStop(0, 'rgba(26, 26, 26, 0.8)');
                groundGradient.addColorStop(1, '#1A1A1A');
                ctx.fillStyle = groundGradient;
                ctx.fillRect(0, canvas.height * 0.7, canvas.width, canvas.height * 0.3);
                // Sky gradient
                const skyGradient = ctx.createLinearGradient(0, 0, 0, canvas.height * 0.7);
                skyGradient.addColorStop(0, '#0F0F0F');
                skyGradient.addColorStop(0.5, '#1A0F0F');
                skyGradient.addColorStop(1, '#2A1A1A');
                ctx.fillStyle = skyGradient;
                ctx.fillRect(0, 0, canvas.width, canvas.height * 0.7);
                // Lava flow streams (horizontal, from left to right)
                const flowY = canvas.height * 0.7;
                for(let i = 0; i < 3; i++){
                    const y = flowY + (i - 1) * 30;
                    const progress = time * speed[intensity] * 0.5 % (canvas.width + 200);
                    const gradient = ctx.createLinearGradient(progress - 100, y, progress + 100, y);
                    gradient.addColorStop(0, 'rgba(255, 107, 53, 0)');
                    gradient.addColorStop(0.2, 'rgba(255, 140, 66, 0.6)');
                    gradient.addColorStop(0.5, 'rgba(255, 179, 71, 0.8)');
                    gradient.addColorStop(0.8, 'rgba(255, 107, 53, 0.6)');
                    gradient.addColorStop(1, 'rgba(196, 30, 58, 0)');
                    ctx.fillStyle = gradient;
                    ctx.beginPath();
                    ctx.moveTo(progress - 100, y - 15);
                    ctx.quadraticCurveTo(progress, y - 20, progress + 100, y - 15);
                    ctx.quadraticCurveTo(progress + 50, y, progress + 100, y + 15);
                    ctx.quadraticCurveTo(progress, y + 20, progress - 100, y + 15);
                    ctx.closePath();
                    ctx.fill();
                }
                // Draw horizontal flowing particles
                lavaParticles.forEach((particle)=>{
                    particle.update(time, canvas);
                    particle.draw(ctx);
                    if (particle.x > canvas.width + 50) {
                        particle.x = -50;
                        particle.y = canvas.height * 0.7 + (Math.random() - 0.5) * 60;
                    }
                });
                // Add glow effect
                const glowGradient = ctx.createRadialGradient(canvas.width * 0.3, flowY, 0, canvas.width * 0.3, flowY, 200);
                glowGradient.addColorStop(0, 'rgba(255, 107, 53, 0.2)');
                glowGradient.addColorStop(1, 'rgba(255, 107, 53, 0)');
                ctx.fillStyle = glowGradient;
                ctx.fillRect(0, flowY - 100, canvas.width, 200);
            } else if (variant === 'calm-volcano') {
                // Calm, peaceful volcano
                // Dark night sky
                const skyGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
                skyGradient.addColorStop(0, '#0F0F0F');
                skyGradient.addColorStop(0.4, '#1A0F0F');
                skyGradient.addColorStop(0.7, '#1A1A1A');
                skyGradient.addColorStop(1, '#2A1A1A');
                ctx.fillStyle = skyGradient;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                // Gentle volcano glow (bottom center)
                const volcanoX = canvas.width / 2;
                const volcanoY = canvas.height * 0.8;
                const glowGradient = ctx.createRadialGradient(volcanoX, volcanoY, 0, volcanoX, volcanoY, canvas.height * 0.4);
                glowGradient.addColorStop(0, 'rgba(255, 107, 53, 0.15)');
                glowGradient.addColorStop(0.5, 'rgba(196, 30, 58, 0.1)');
                glowGradient.addColorStop(1, 'rgba(139, 21, 56, 0)');
                ctx.fillStyle = glowGradient;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                // Very gentle particles (like distant stars/embers)
                particles.forEach((particle)=>{
                    particle.update();
                    particle.vy *= 0.98; // Much slower
                    particle.vx *= 0.98;
                    particle.draw(ctx);
                    if (particle.isDead() || particle.y < 0) {
                        particle.x = Math.random() * canvas.width;
                        particle.y = canvas.height * 0.7 + Math.random() * 50;
                        particle.life = particle.maxLife * 2; // Longer life
                        particle.vx = (Math.random() - 0.5) * 0.3;
                        particle.vy = -Math.random() * 0.5 - 0.2;
                        particle.size = Math.random() * 2 + 1;
                    }
                });
                // Subtle pulsing glow
                const pulseAlpha = 0.05 + Math.sin(time * 0.02) * 0.02;
                const pulseGradient = ctx.createRadialGradient(volcanoX, volcanoY, 0, volcanoX, volcanoY, canvas.height * 0.3);
                pulseGradient.addColorStop(0, `rgba(255, 179, 71, ${pulseAlpha})`);
                pulseGradient.addColorStop(1, 'rgba(255, 107, 53, 0)');
                ctx.fillStyle = pulseGradient;
                ctx.fillRect(0, 0, canvas.width, canvas.height);
            }
            animationId = requestAnimationFrame(draw);
        };
        draw();
        return ()=>{
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationId);
        };
    }, [
        variant,
        intensity
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
        ref: canvasRef,
        className: "fixed inset-0 w-full h-full -z-10",
        style: {
            background: '#0F0F0F'
        }
    }, void 0, false, {
        fileName: "[project]/components/AnimatedVolcanoBackground.tsx",
        lineNumber: 364,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/WinScreen.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WinScreen
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AnimatedVolcanoBackground$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/AnimatedVolcanoBackground.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
function WinScreen({ correctAnswers, wrongAnswers }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "min-h-screen flex justify-center items-center text-white w-full p-4 relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$AnimatedVolcanoBackground$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                variant: "calm-volcano",
                intensity: "subtle"
            }, void 0, false, {
                fileName: "[project]/components/WinScreen.tsx",
                lineNumber: 14,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/50"
            }, void 0, false, {
                fileName: "[project]/components/WinScreen.tsx",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "modern-card p-8 md:p-12 max-w-lg w-full relative z-10 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-8",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-5xl md:text-6xl font-bold mb-4 bg-volcano-gradient bg-clip-text text-transparent",
                                children: "🎉 Congratulations! 🎉"
                            }, void 0, false, {
                                fileName: "[project]/components/WinScreen.tsx",
                                lineNumber: 18,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xl md:text-2xl text-gray-300 mb-6",
                                children: "You've proven yourself as a true Volcanologist!"
                            }, void 0, false, {
                                fileName: "[project]/components/WinScreen.tsx",
                                lineNumber: 21,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/WinScreen.tsx",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "text-xl md:text-2xl mb-8 space-y-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-volcano-amber font-semibold",
                                children: [
                                    "Correct: ",
                                    correctAnswers
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/WinScreen.tsx",
                                lineNumber: 26,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-volcano-red font-semibold",
                                children: [
                                    "Incorrect: ",
                                    wrongAnswers
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/WinScreen.tsx",
                                lineNumber: 27,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/WinScreen.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/high-scores",
                                className: "btn-modern text-center",
                                children: "High Scores"
                            }, void 0, false, {
                                fileName: "[project]/components/WinScreen.tsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "link-modern text-xl font-semibold py-2",
                                children: "Return Home"
                            }, void 0, false, {
                                fileName: "[project]/components/WinScreen.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/WinScreen.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/WinScreen.tsx",
                lineNumber: 16,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/WinScreen.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}),
"[project]/components/LoadingComponent.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoadingComponent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function LoadingComponent() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative min-h-screen w-full bg-bg-darker flex justify-center items-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"
            }, void 0, false, {
                fileName: "[project]/components/LoadingComponent.tsx",
                lineNumber: 4,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 flex flex-col items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "loader"
                    }, void 0, false, {
                        fileName: "[project]/components/LoadingComponent.tsx",
                        lineNumber: 6,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xl text-gray-400 font-medium",
                        children: "Loading..."
                    }, void 0, false, {
                        fileName: "[project]/components/LoadingComponent.tsx",
                        lineNumber: 7,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/LoadingComponent.tsx",
                lineNumber: 5,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/LoadingComponent.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
}),
"[project]/convex/_generated/api.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* eslint-disable */ /**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */ __turbopack_context__.s([
    "api",
    ()=>api,
    "components",
    ()=>components,
    "internal",
    ()=>internal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/convex/dist/esm/server/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/convex/dist/esm/server/api.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$components$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/convex/dist/esm/server/components/index.js [app-ssr] (ecmascript) <locals>");
;
const api = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["anyApi"];
const internal = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["anyApi"];
const components = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$server$2f$components$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["componentsGeneric"])();
}),
"[project]/lib/auth.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "generateUserIdFromEmail",
    ()=>generateUserIdFromEmail,
    "useAuth",
    ()=>useAuth,
    "useAuthActionsHook",
    ()=>useAuthActionsHook
]);
'use client';
function useAuth() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return null;
}
function generateUserIdFromEmail(email) {
    // Simple hash function to create consistent userId
    let hash = 0;
    for(let i = 0; i < email.length; i++){
        const char = email.charCodeAt(i);
        hash = (hash << 5) - hash + char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return `user_${Math.abs(hash)}`;
}
function useAuthActionsHook() {
    return {
        signIn: async (provider, options)=>{
            // Generate consistent userId based on email
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            return null;
        },
        signUp: async (provider, options)=>{
            // Generate consistent userId based on email
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            return null;
        },
        signOut: async ()=>{
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
        }
    };
}
}),
"[project]/lib/gameUtils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useGameUtils",
    ()=>useGameUtils
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/moment/moment.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/convex/dist/esm/react/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/convex/dist/esm/react/client.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$convex$2f$_generated$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/convex/_generated/api.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/auth.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
function useGameUtils() {
    const auth = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$auth$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useAuth"])();
    const userId = auth?.userId;
    const updateUserScore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])(__TURBOPACK__imported__module__$5b$project$5d2f$convex$2f$_generated$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].mutations.profiles.updateUserScore);
    const insertHighScore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMutation"])(__TURBOPACK__imported__module__$5b$project$5d2f$convex$2f$_generated$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].mutations.highScores.insertHighScore);
    const getProfileDisplayName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])(__TURBOPACK__imported__module__$5b$project$5d2f$convex$2f$_generated$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].queries.profiles.getProfileDisplayName, userId ? {
        userId
    } : 'skip');
    const postScore = async (correctAnswers, wrongAnswers)=>{
        if (!userId) return;
        const timeStamp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$moment$2f$moment$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])().format('MMM Do YY');
        try {
            await updateUserScore({
                userId,
                correctAnswers,
                wrongAnswers,
                timeStamp
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].success('Score updated');
        } catch (error) {
            console.error('Error posting score:', error);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].error('Error posting score');
        }
    };
    const updateHighScore = async (displayName, correctAnswers)=>{
        if (!displayName) return;
        try {
            await insertHighScore({
                userName: displayName,
                score: correctAnswers
            });
        } catch (error) {
            console.error('Error updating high score:', error);
        }
    };
    const sortQuestions = (questionsArray, answerArray)=>{
        questionsArray.shift();
        answerArray.forEach((a)=>{
            if (questionsArray.length > 0 && a.questionId === questionsArray[0]._id) {
                a.answers.sort(()=>Math.random() - 0.5);
            }
        });
    };
    return {
        postScore,
        updateHighScore,
        sortQuestions,
        displayName: getProfileDisplayName,
        userId
    };
}
}),
"[project]/app/game/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GamePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ConvexClientProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ConvexClientProvider.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MainQuestionSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/MainQuestionSection.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LostScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/LostScreen.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WinScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/WinScreen.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LoadingComponent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/LoadingComponent.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/convex/dist/esm/react/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/convex/dist/esm/react/client.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$convex$2f$_generated$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/convex/_generated/api.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gameUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/gameUtils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-hot-toast/dist/index.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
function GamePageContent() {
    const [questionsArray, setQuestionsArray] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [answerArray, setAnswerArray] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [wrongAnswers, setWrongAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [correctAnswers, setCorrectAnswers] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [answerSubmitted, setAnswerSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [lastAnswerCorrect, setLastAnswerCorrect] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const backgroundMusicRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const correctSoundRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const incorrectSoundRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const allQuestions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])(__TURBOPACK__imported__module__$5b$project$5d2f$convex$2f$_generated$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].queries.questions.getRandomQuestions, {
        count: 100
    });
    const { postScore, updateHighScore, sortQuestions, displayName, userId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gameUtils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGameUtils"])();
    // Store initial 5 questions for query (never changes)
    const [initialQuestions, setInitialQuestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Only initialize questions if game hasn't ended
        const totalAnswered = correctAnswers + wrongAnswers;
        const gameEnded = wrongAnswers >= 3 || totalAnswered === 5;
        if (allQuestions && questionsArray.length === 0 && !gameEnded) {
            // Shuffle the questions array fresh each time to ensure randomization
            const shuffledQuestions = [
                ...allQuestions
            ].sort(()=>Math.random() - 0.5);
            // Get 5 unique random questions from the shuffled array
            const uniqueQuestions = [];
            const questionTexts = new Set();
            for (const question of shuffledQuestions){
                if (!questionTexts.has(question.question) && uniqueQuestions.length < 5) {
                    questionTexts.add(question.question);
                    uniqueQuestions.push(question);
                }
            }
            setQuestionsArray(uniqueQuestions);
            setInitialQuestions(uniqueQuestions); // Store for query
        }
    }, [
        allQuestions,
        questionsArray.length,
        correctAnswers,
        wrongAnswers
    ]);
    // Fetch answers once for all 5 questions using initial IDs (never changes)
    const questionIds = initialQuestions.length > 0 ? initialQuestions.map((q)=>q._id) : [];
    const answers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$convex$2f$dist$2f$esm$2f$react$2f$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useQuery"])(__TURBOPACK__imported__module__$5b$project$5d2f$convex$2f$_generated$2f$api$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["api"].queries.answers.getAnswersForQuestions, questionIds.length > 0 ? {
        questionIds
    } : 'skip');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (answers && questionsArray.length > 0) {
            const shuffledAnswers = [
                ...answers
            ];
            // Shuffle answers for first question
            const firstQuestionAnswers = shuffledAnswers.filter((a)=>a.questionId === questionsArray[0]._id);
            if (firstQuestionAnswers.length > 0) {
                firstQuestionAnswers[0].answers.sort(()=>Math.random() - 0.5);
            }
            setAnswerArray(shuffledAnswers);
            setLoading(false);
        } else if (questionsArray.length === 0 && allQuestions) {
            setLoading(false);
        }
    }, [
        answers,
        questionsArray,
        allQuestions
    ]);
    const playBackgroundMusic = async ()=>{
        if (backgroundMusicRef.current) {
            try {
                await backgroundMusicRef.current.play();
            } catch (error) {
                console.log('Audio autoplay prevented (requires user interaction)');
            }
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        playBackgroundMusic();
    }, []);
    const checkAnswer = async (selectedAnswer)=>{
        if (answerSubmitted) return;
        const currentAnswer = answerArray.find((a)=>a.questionId === questionsArray[0]?._id);
        if (!currentAnswer) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$hot$2d$toast$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].error('Answer not found');
            return;
        }
        const isCorrect = selectedAnswer === currentAnswer.correctAnswer;
        setAnswerSubmitted(true);
        setLastAnswerCorrect(isCorrect);
        // Calculate new scores before updating state
        const newCorrectAnswers = isCorrect ? correctAnswers + 1 : correctAnswers;
        const newWrongAnswers = isCorrect ? wrongAnswers : wrongAnswers + 1;
        const totalAnswered = newCorrectAnswers + newWrongAnswers;
        // Check if game is over (3 wrong answers) - MUST check first
        if (newWrongAnswers === 3) {
            // Update state immediately
            if (isCorrect) {
                setCorrectAnswers(newCorrectAnswers);
                if (correctSoundRef.current) {
                    correctSoundRef.current.play().catch(()=>{});
                }
            } else {
                setWrongAnswers(newWrongAnswers);
                if (incorrectSoundRef.current) {
                    incorrectSoundRef.current.play().catch(()=>{});
                }
            }
            setTimeout(async ()=>{
                await postScore(newCorrectAnswers, newWrongAnswers);
                setQuestionsArray([]); // Clear to show LostScreen
                // Ensure final state is set
                setCorrectAnswers(newCorrectAnswers);
                setWrongAnswers(newWrongAnswers);
            }, 800);
            return;
        }
        // Check if won (answered all 5 questions correctly) - MUST check before moving
        if (totalAnswered === 5 && newWrongAnswers < 3) {
            // Update state immediately
            if (isCorrect) {
                setCorrectAnswers(newCorrectAnswers);
                if (correctSoundRef.current) {
                    correctSoundRef.current.play().catch(()=>{});
                }
            } else {
                setWrongAnswers(newWrongAnswers);
                if (incorrectSoundRef.current) {
                    incorrectSoundRef.current.play().catch(()=>{});
                }
            }
            setTimeout(async ()=>{
                await postScore(newCorrectAnswers, newWrongAnswers);
                // Update high score if player got 4 or more correct (like Vue version)
                if (newCorrectAnswers >= 4 && displayName) {
                    await updateHighScore(displayName, newCorrectAnswers);
                }
                setQuestionsArray([]); // Clear to show WinScreen
                // Ensure final state is set
                setCorrectAnswers(newCorrectAnswers);
                setWrongAnswers(newWrongAnswers);
            }, 800);
            return;
        }
        // Update state for continuing game
        if (isCorrect) {
            setCorrectAnswers(newCorrectAnswers);
            if (correctSoundRef.current) {
                correctSoundRef.current.play().catch(()=>{});
            }
        } else {
            setWrongAnswers(newWrongAnswers);
            if (incorrectSoundRef.current) {
                incorrectSoundRef.current.play().catch(()=>{});
            }
        }
        // Move to next question using sortQuestions - ONLY if game continues
        // Don't move if we've answered 5 questions or lost
        if (questionsArray.length > 0 && totalAnswered < 5 && newWrongAnswers < 3) {
            setTimeout(()=>{
                const newQuestions = [
                    ...questionsArray
                ];
                const newAnswers = [
                    ...answerArray
                ];
                sortQuestions(newQuestions, newAnswers);
                setQuestionsArray(newQuestions);
                setAnswerArray(newAnswers);
            }, 800);
        }
        setTimeout(()=>{
            setAnswerSubmitted(false);
        }, 800);
    };
    const answerClass = answerSubmitted ? lastAnswerCorrect ? 'correct' : 'incorrect' : '';
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LoadingComponent$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
            fileName: "[project]/app/game/page.tsx",
            lineNumber: 200,
            columnNumber: 12
        }, this);
    }
    // Show lose screen if 3 wrong answers
    if (wrongAnswers >= 3) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$LostScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            correctAnswers: correctAnswers,
            wrongAnswers: wrongAnswers
        }, void 0, false, {
            fileName: "[project]/app/game/page.tsx",
            lineNumber: 205,
            columnNumber: 12
        }, this);
    }
    // Show win screen if we've answered 5 questions and haven't lost
    const totalAnswered = correctAnswers + wrongAnswers;
    if (totalAnswered === 5 && wrongAnswers < 3) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WinScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            correctAnswers: correctAnswers,
            wrongAnswers: wrongAnswers
        }, void 0, false, {
            fileName: "[project]/app/game/page.tsx",
            lineNumber: 211,
            columnNumber: 12
        }, this);
    }
    // Also show win screen if questions array is cleared after winning
    if (questionsArray.length === 0 && totalAnswered >= 5 && wrongAnswers < 3) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$WinScreen$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
            correctAnswers: correctAnswers,
            wrongAnswers: wrongAnswers
        }, void 0, false, {
            fileName: "[project]/app/game/page.tsx",
            lineNumber: 216,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative min-h-screen w-full",
        children: [
            questionsArray.length > 0 && answerArray.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$MainQuestionSection$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                questionsArray: questionsArray,
                answerArray: answerArray,
                wrongAnswers: wrongAnswers,
                correctAnswers: correctAnswers,
                answerClass: answerClass,
                onSubmit: checkAnswer
            }, void 0, false, {
                fileName: "[project]/app/game/page.tsx",
                lineNumber: 222,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("audio", {
                ref: backgroundMusicRef,
                src: "/lava-loop-3.wav",
                autoPlay: true,
                loop: true
            }, void 0, false, {
                fileName: "[project]/app/game/page.tsx",
                lineNumber: 231,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("audio", {
                ref: correctSoundRef,
                src: "/correct.mp3"
            }, void 0, false, {
                fileName: "[project]/app/game/page.tsx",
                lineNumber: 232,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("audio", {
                ref: incorrectSoundRef,
                src: "/wronganswer.mp3"
            }, void 0, false, {
                fileName: "[project]/app/game/page.tsx",
                lineNumber: 233,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/game/page.tsx",
        lineNumber: 220,
        columnNumber: 5
    }, this);
}
function GamePage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ConvexClientProvider$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConvexClientProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(GamePageContent, {}, void 0, false, {
            fileName: "[project]/app/game/page.tsx",
            lineNumber: 241,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/game/page.tsx",
        lineNumber: 240,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_ff81416c._.js.map