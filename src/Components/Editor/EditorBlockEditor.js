import React, { useState } from 'react';
import EditorBlockSelector from './EditorBlockSelector';

//name ideas: ShortStack, breakUp, the Break Up

function EditorBlockEditor() {
  let [block2Render, setBlock2Render] = useState(false); //is block 2 visible?
  let [block1Type, setBlock1Type] = useState("paragraph");
  let [block2Type, setBlock2Type] = useState("test"); //what type of content is block 2?

  let [blockTitleContent, setBlockTitleContent] = useState("");
  let [blockBylineContent, setBlockBylineContent] = useState("");

  let [block1Content, setBlock1Content] = useState("");
  let [block2Content, setBlock2Content] = useState("");
  let [array, setArray] = useState([block1Content, block2Content]);

  let [block1Order, setBlock1Order] = useState(0);
  let [block2Order, setBlock2Order] = useState(1);


  function block2Up() {
    [array[0], array[1]] = [array[1], array[0]];
    setArray(array);
    setBlock1Order(array.indexOf(block1Content));
    setBlock2Order(array.indexOf(block2Content));
  }

  function addBlock2(blockType) {
    setBlock2Type(blockType);
    setBlock2Render(true);
  };

  function seeDomTree() {
    // console.log(document.getElementsByTagName('*'));
    console.log("array: ", array); //TODO: array isn't updating automatically, need to reset the state after every change or just right before submitting?
    console.log("blockOrder: ", block1Order, block2Order);
    console.log(block1Content);
  }

  function setBlock1ContentFunction(value) {
    setBlock1Content(value);
  }
  function setBlock2ContentFunction(value) {
    setBlock2Content(value);
  }

  return (
    // this is where we set the responsive column width of the editor - these will all be the same for each page's main component
    <div className='col-start-2 col-end-12 md:col-start-3 md:col-end-11 xl:col-start-4 xl:col-end-10 text-center border-solid border-gray-200 border-2'>
      <h3>BlockEditor</h3>
      <br />
      <div className='content-center'>
        <form className='w-full inline-block'>
          {/* title */}
          <label htmlFor="title block" className="block">
            <input type="text" className="form-input mt-1 block w-full font-bold" placeholder="How to write a ShortStack article" />
          </label>
          {/* byline */}
          <label htmlFor="byline block" className="block">
            <input type="text" className="form-input mt-1 block w-full italic" placeholder={`"This is how I did it..."`} />
          </label>
          <ul className="flex flex-col">

            {/* block1 */}
            <li className={`order-${block1Order}`}>
                  <EditorBlockSelector
                    blockType={block1Type}
                    blockContent={block1Content}
                    setBlockContent={setBlock1ContentFunction} />
                </li>

            {/* block2 */}
            {
              block2Render
                ?
                <li className={`order-${block2Order}`}>
                  <EditorBlockSelector
                    blockType={block2Type}
                    blockContent={block2Content}
                    setBlockContent={setBlock2ContentFunction} />
                </li>
                :
                null
            }

          </ul>
        </form>
      </div>
      {/* blockRender(setBlockType, blockType, setBlockRender) */}
      <button className="p-4" type="button" onClick={() => addBlock2("paragraph")}>add paragraph</button>
      <button className="p-4" type="button" onClick={() => addBlock2("list")}>add list</button>
      <button className="p-4" type="button" onClick={() => addBlock2("codepen")}>add codepen</button>
      <button className="p-4" type="button" onClick={block2Up}>move block 2 up</button>
      <button className="p-4" type="button" onClick={seeDomTree}>console log dom</button>
    </div>
  );
}

export default EditorBlockEditor;