import React, { useState } from 'react';
import Block from './Blocks/Block';

//name ideas: ShortStack, breakUp, the Break Up

function BlockEditor() {
  let [block2Render, setBlock2Render] = useState(false); //is block 2 visible?
  let [block1Type, setBlock1Type] = useState("paragraph");
  let [block2Type, setBlock2Type] = useState("test"); //what type of content is block 2?

  let [blockTitleContent, setBlockTitleContent] = useState("");
  let [blockBylineContent, setBlockBylineContent] = useState("");
  let [block1Content, setBlock1Content] = useState("1"); //the actual content itself
  let [block2Content, setBlock2Content] = useState("2");

  let [block1Order, setBlock1Order] = useState(0);
  let [block2Order, setBlock2Order] = useState(1);

  let [array, setArray] = useState([block1Content, block2Content]);

  // set block contents into an array and move them around in the array for sending them to the server in the correct order
  // let array = [block1Content, block2Content];
  // use these index numbers^ to set the flex order in the <li>s below to keep the order the same
  // so, block 1's flex order should be array.indexOf(block1Content) -- maybe "block1Content"

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
    console.log("array: ", array);
    console.log("blockOrder: ", block1Order, block2Order);
  }

 setBlock1ContentFunction = (e) => {
    setBlock1Content(e.target.value);
  }

  function setBlock2ContentFunction(value) {
    setBlock2Content(value);
  }

  return (
    <div className='text-center'>
      <h3>BlockEditor</h3>
      <br />
      <div className='content-center'>
        <form className='w-3/6 inline-block'>
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
              <label
                htmlFor="paragraph block"
                className="block">
                <textarea
                  type="text"
                  className="form-textarea mt-1 block w-full"
                  rows="3"
                  {
                  ...(block1Content === ""
                    ?
                    { placeholder: "This is a paragraph" }
                    :
                    { value: block1Content })
                  }
                  onChange={setBlock1ContentFunction}>
                </textarea>
              </label>
            </li>

            {/* block2 */}
            {
              block2Render
                ?
                <li draggable="true" className={`order-${block2Order}`}>
                  <Block
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

export default BlockEditor;