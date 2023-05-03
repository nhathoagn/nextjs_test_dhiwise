import React from "react";

import { Img, Text, Button, Line, List, CheckBox } from "components";

const LandingpagePage: React.FC = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-rubik items-center justify-end mx-auto pt-[45px] w-full">
        <div className="flex flex-col md:gap-10 gap-[130px] justify-start w-full">
          <div className="flex flex-col items-start justify-start md:ml-[0] ml-[150px] md:px-5 w-[84%] md:w-full">
            <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-[95%] md:w-full">
              <div className="flex flex-row gap-2.5 items-center justify-start w-[13%] md:w-full">
                <Img
                  src="images/img_upload.svg"
                  className="h-9 w-[35px]"
                  alt="upload"
                />
                <Text
                  className="font-bold text-gray_900 text-left w-auto"
                  as="h4"
                  variant="h4"
                >
                  LaslesVPN
                </Text>
              </div>
              <Text
                className="md:ml-[0] ml-[158px] not-italic text-blue_gray_700 text-left w-auto"
                as="h6"
                variant="h6"
              >
                About
              </Text>
              <Text
                className="ml-10 md:ml-[0] not-italic text-blue_gray_700 text-left w-auto"
                as="h6"
                variant="h6"
              >
                Features
              </Text>
              <Text
                className="ml-10 md:ml-[0] not-italic text-blue_gray_700 text-left w-auto"
                as="h6"
                variant="h6"
              >
                Pricing
              </Text>
              <Text
                className="md:ml-[0] ml-[39px] not-italic text-blue_gray_700 text-left w-auto"
                as="h6"
                variant="h6"
              >
                Testimonials
              </Text>
              <Text
                className="ml-10 md:ml-[0] not-italic text-blue_gray_700 text-left w-auto"
                as="h6"
                variant="h6"
              >
                Help
              </Text>
              <a
                href="javascript:"
                className="font-medium md:ml-[0] ml-[150px] text-base text-gray_900 text-left w-auto"
              >
                <Text className="">Sign In</Text>
              </a>
              <Button
                className="cursor-pointer font-medium leading-[normal] min-w-[150px] md:ml-[0] ml-[30px] text-base text-center text-red_A200 w-auto"
                shape="RoundedBorder22"
                size="sm"
                variant="OutlineRedA200"
              >
                Sign Up
              </Button>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between mt-[88px] w-full">
              <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-[27px] w-[46%] md:w-full">
                <Text
                  className="leading-[70.00px] text-gray_900 text-left w-full"
                  as="h1"
                  variant="h1"
                >
                  Want anything to be easy with LaslesVPN.
                </Text>
                <Text
                  className="leading-[30.00px] mt-5 not-italic text-blue_gray_700_01 text-left w-full"
                  as="h6"
                  variant="h6"
                ></Text>
                <div className="md:h-[110px] h-[85px] mt-[50px] relative w-[46%]">
                  <div className="absolute backdrop-opacity-[0.5] bg-red_500_59 blur-[54.00px] bottom-[0] h-[60px] inset-x-[0] mx-auto rounded-[10px] w-[85%]"></div>
                  <Button
                    className="absolute cursor-pointer font-bold inset-x-[0] min-w-[250px] mx-auto text-base text-center text-white_A700 top-[0] w-auto"
                    shape="RoundedBorder10"
                    size="md"
                    variant="FillRed500"
                  >
                    Get Started
                  </Button>
                </div>
              </div>
              <div className="md:h-[205px] h-[382px] relative w-[51%] md:w-full">
                <div className="absolute bottom-[0] md:h-[205px] h-[324px] left-[17%] w-[63%] sm:w-full">
                  <div className="md:h-[205px] h-[324px] m-auto w-full">
                    <div className="absolute flex inset-y-[0] left-[0] my-auto w-4/5">
                      <div className="md:h-[205px] h-[324px] my-auto w-[79%]">
                        <div className="absolute md:h-[205px] h-[322px] inset-[0] justify-center m-auto w-full">
                          <div className="absolute md:h-[205px] h-[322px] inset-[0] justify-center m-auto w-full">
                            <div className="absolute flex flex-col h-max inset-[0] justify-center m-auto w-full">
                              <Img
                                src="images/img_eye.svg"
                                className="h-[22px] md:ml-[0] ml-[69px] w-auto"
                                alt="eye"
                              />
                              <div className="h-[293px] relative w-full">
                                <div
                                  className="bg-cover bg-no-repeat flex flex-col h-24 items-start justify-start mb-[-16.1px] ml-auto mr-[59px] p-[26px] sm:px-5 w-[39%] z-[1]"
                                  style={{
                                    backgroundImage:
                                      "url('images/img_group18.png')",
                                  }}
                                >
                                  <Img
                                    src="images/img_volume.svg"
                                    className="h-[18px] mb-2.5 mt-[13px] w-auto"
                                    alt="volume"
                                  />
                                </div>
                                <div className="md:h-[183px] h-[212px] mt-auto mx-auto w-full">
                                  <div
                                    className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[184px] inset-x-[0] items-end justify-start mx-auto pb-[83px] md:px-10 sm:px-5 px-[83px] w-full"
                                    style={{
                                      backgroundImage:
                                        "url('images/img_group15.png')",
                                    }}
                                  >
                                    <div className="bg-red_A700 h-[37px] mb-[63px] rounded-[25px] w-[70%]"></div>
                                  </div>
                                  <div
                                    className="absolute bg-cover bg-no-repeat flex flex-col h-[59px] items-center justify-start right-[34%] top-[0] w-1/5"
                                    style={{
                                      backgroundImage:
                                        "url('images/img_group21.png')",
                                    }}
                                  >
                                    <Img
                                      src="images/img_maskgroup.svg"
                                      className="h-[59px] w-auto"
                                      alt="maskgroup"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="absolute bg-cover bg-no-repeat flex flex-col h-28 items-end justify-start p-0.5 right-[23%] top-[0] w-[45%]"
                              style={{
                                backgroundImage:
                                  "url('images/img_group17.svg')",
                              }}
                            >
                              <Img
                                src="images/img_vector24.svg"
                                className="h-[19px] mb-[18px] mt-[69px] w-5"
                                alt="vectorTwentyFour"
                              />
                            </div>
                          </div>
                          <div
                            className="absolute bg-cover bg-no-repeat flex flex-col h-[61px] items-end justify-start pb-0.5 px-0.5 right-[28%] top-[0] w-[34%]"
                            style={{
                              backgroundImage: "url('images/img_group20.svg')",
                            }}
                          >
                            <Img
                              src="images/img_contrast.svg"
                              className="h-[11px] mb-[47px] w-auto"
                              alt="contrast"
                            />
                          </div>
                        </div>
                        <div className="absolute flex flex-row gap-[11px] items-end justify-center right-[23%] top-[16%] w-[45%]">
                          <div className="h-[47px] relative w-[36%]">
                            <div className="bg-white_A700 h-[47px] m-auto rounded-[23px] w-full"></div>
                            <div className="absolute h-[47px] inset-[0] justify-center m-auto w-full">
                              <div className="h-[47px] m-auto w-full">
                                <div className="bg-white_A700 h-[47px] m-auto rounded-[23px] w-full"></div>
                                <div className="absolute bg-teal_400 h-[22px] inset-[0] justify-center m-auto rounded-[11px] w-[48%]"></div>
                              </div>
                              <Img
                                src="images/img_contrast.svg"
                                className="absolute bottom-[0] h-6 left-[0] w-auto"
                                alt="contrast_One"
                              />
                            </div>
                          </div>
                          <div
                            className="bg-cover bg-no-repeat flex flex-col h-[31px] items-start justify-end mt-4 p-[3px] w-[54%]"
                            style={{
                              backgroundImage: "url('images/img_group23.svg')",
                            }}
                          >
                            <Img
                              src="images/img_vector25.svg"
                              className="h-[17px] mt-[7px] w-auto"
                              alt="vectorTwentyFive"
                            />
                          </div>
                        </div>
                        <div
                          className="absolute bg-cover bg-no-repeat bottom-[0] md:h-[30px] h-[57px] left-[0] p-[11px] w-[94%]"
                          style={{
                            backgroundImage: "url('images/img_group22.png')",
                          }}
                        >
                          <div className="absolute bottom-[19%] flex flex-row gap-[38px] items-end justify-between right-[19%] w-[29%]">
                            <Img
                              src="images/img_contrast.svg"
                              className="h-[27px] mb-0.5 w-auto"
                              alt="contrast_Two"
                            />
                            <div className="h-[17px] md:h-[30px] mt-[13px] relative w-4">
                              <Img
                                src="images/img_minimize.svg"
                                className="absolute bottom-[0] h-2.5 left-[0] w-auto"
                                alt="minimize"
                              />
                              <Img
                                src="images/img_minimize.svg"
                                className="absolute h-[17px] inset-y-[0] my-auto right-[0] w-auto"
                                alt="minimize_One"
                              />
                            </div>
                          </div>
                          <Img
                            src="images/img_rectangle295.png"
                            className="absolute h-1.5 right-[28%] rotate-[-6deg] rounded-[50%] top-[19%] w-[8%]"
                            alt="rectangle295"
                          />
                        </div>
                      </div>
                      <div
                        className="bg-cover bg-no-repeat flex flex-col md:gap-10 gap-[60px] h-[163px] justify-start mb-[43px] ml-[-23.92px] mt-auto p-[7px] w-[29%] z-[1]"
                        style={{
                          backgroundImage: "url('images/img_group16.png')",
                        }}
                      >
                        <div className="flex flex-row items-start justify-end ml-auto mr-1.5 w-[44%] md:w-full">
                          <Img
                            src="images/img_vector39.svg"
                            className="h-[11px] mt-2 w-auto"
                            alt="vectorThirtyNine"
                          />
                          <Img
                            src="images/img_vector41.svg"
                            className="h-2.5 ml-0.5 mt-[3px] w-auto"
                            alt="vectorFortyOne"
                          />
                          <Img
                            src="images/img_vector41.svg"
                            className="h-2.5 ml-1 w-auto"
                            alt="vectorForty"
                          />
                          <Img
                            src="images/img_vector42.svg"
                            className="h-[7px] ml-2.5 mt-2 w-auto"
                            alt="vectorFortyTwo"
                          />
                        </div>
                        <Img
                          src="images/img_minimize.svg"
                          className="h-[19px] mb-[50px] ml-1.5 md:ml-[0] w-auto"
                          alt="minimize_Two"
                        />
                      </div>
                      <Img
                        src="images/img_rectangle289.svg"
                        className="h-1.5 ml-[undefinedpx] mr-[70px] mt-auto w-auto z-[1]"
                        alt="rectangle289"
                      />
                    </div>
                    <div
                      className="absolute bg-cover bg-no-repeat bottom-[0] flex flex-col h-[93px] items-end justify-end p-[31px] sm:px-5 right-[0] rounded-[3px] w-[43%]"
                      style={{
                        backgroundImage: "url('images/img_group19.png')",
                      }}
                    >
                      <div className="bg-white_A700 h-[26px] mr-[34px] mt-1 rotate-[-20deg] rounded-[13px] w-[22%]"></div>
                    </div>
                  </div>
                  <div className="absolute bottom-[15%] flex flex-row items-end justify-between left-[17%] w-[38%]">
                    <Line className="bg-blue_gray_800 h-6 w-[3px]" />
                    <Img
                      src="images/img_vector39.svg"
                      className="h-3.5 my-1 w-auto"
                      alt="vectorThirtyTwo"
                    />
                  </div>
                </div>
                <div className="absolute bottom-[3%] flex flex-col gap-[30px] inset-x-[0] items-start justify-start mx-auto w-[3%]">
                  <Img
                    src="images/img_vector42.svg"
                    className="h-[5px] w-auto"
                    alt="vectorThirtyThree"
                  />
                  <Img
                    src="images/img_minimize.svg"
                    className="h-6 w-auto"
                    alt="minimize_Three"
                  />
                </div>
                <Img
                  src="images/img_group1256.svg"
                  className="absolute bottom-[0] h-[186px] right-[0] w-auto"
                  alt="group1256"
                />
                <div className="absolute bottom-[0] flex flex-col gap-[9px] justify-start left-[0] w-[13%]">
                  <Img
                    src="images/img_vector47.png"
                    className="h-[108px] md:h-auto object-cover w-auto sm:w-full"
                    alt="vectorFortySeven"
                  />
                  <Img
                    src="images/img_group1257.png"
                    className="h-[59px] md:h-auto ml-2.5 md:ml-[0] object-cover w-auto sm:w-full"
                    alt="group1257"
                  />
                </div>
                <Img
                  src="images/img_youtube.svg"
                  className="absolute h-[59px] right-[35%] top-[0] w-auto"
                  alt="youtube"
                />
                <Img
                  src="images/img_group1263.png"
                  className="absolute h-[79px] left-[2%] object-cover top-[0] w-auto"
                  alt="group1263"
                />
                <div className="absolute flex flex-col items-center justify-start left-[11%] top-[35%] w-[12%]">
                  <div className="border border-gray_300_87 border-solid md:h-[45px] h-[54px] p-1 relative rounded w-full">
                    <Img
                      src="images/img_maskgroup_32x32.png"
                      className="h-8 m-auto object-cover w-8"
                      alt="maskgroup_One"
                    />
                    <div className="absolute bg-white_A700_87 h-[45px] inset-y-[0] my-auto right-[14%] w-[61%]"></div>
                  </div>
                </div>
                <Img
                  src="images/img_group1266.svg"
                  className="absolute h-[82px] right-[10%] top-[17%] w-auto"
                  alt="group1266"
                />
              </div>
            </div>
            <div className="md:h-[1019px] h-[242px] sm:h-[302px] mt-[102px] relative w-[95%] md:w-full">
              <div className="absolute backdrop-opacity-[0.5] bg-gray_900_5f blur-[114.00px] bottom-[0] h-[189px] inset-x-[0] mx-auto rounded-[10px] w-[94%]"></div>
              <div className="absolute bg-white_A700 flex md:flex-col flex-row md:gap-5 inset-x-[0] items-center justify-end mx-auto p-[37px] sm:px-5 rounded-[10px] top-[0] w-full">
                <Button
                  className="flex h-[55px] items-center justify-center md:mt-0 my-[35px] w-[55px]"
                  shape="icbRoundedBorder27"
                  size="smIcn"
                  variant="icbFillRed50"
                >
                  <Img
                    src="images/img_heroiconssmuser.svg"
                    className="h-6"
                    alt="heroiconssmuser"
                  />
                </Button>
                <div className="flex md:flex-1 flex-col gap-[7px] items-start justify-start ml-9 md:ml-[0] w-auto md:w-full">
                  <Text
                    className="font-bold text-gray_900 text-left w-auto"
                    as="h3"
                    variant="h3"
                  >
                    90+
                  </Text>
                  <Text
                    className="font-normal not-italic text-blue_gray_700 text-left w-auto"
                    as="h4"
                    variant="h4"
                  >
                    Users
                  </Text>
                </div>
                <Line className="bg-blue_gray_50 md:h-0.5 h-[125px] md:ml-[0] ml-[130px] w-0.5 md:w-full" />
                <Button
                  className="flex h-[55px] items-center justify-center md:ml-[0] ml-[111px] md:mt-0 my-[35px] w-[55px]"
                  shape="icbRoundedBorder27"
                  size="smIcn"
                  variant="icbFillRed50"
                >
                  <Img
                    src="images/img_gridiconslocation.svg"
                    className="h-6"
                    alt="gridiconslocati"
                  />
                </Button>
                <div className="flex md:flex-1 flex-col items-center justify-start ml-9 md:ml-[0] w-[9%] md:w-full">
                  <div className="flex flex-col gap-[7px] items-start justify-start w-full">
                    <Text
                      className="font-bold text-gray_900 text-left w-auto"
                      as="h3"
                      variant="h3"
                    >
                      30+
                    </Text>
                    <Text
                      className="font-normal not-italic text-blue_gray_700 text-left w-auto"
                      as="h4"
                      variant="h4"
                    >
                      Locations
                    </Text>
                  </div>
                </div>
                <Line className="bg-blue_gray_50 md:h-0.5 h-[125px] md:ml-[0] ml-[134px] w-0.5 md:w-full" />
                <Button
                  className="flex h-[55px] items-center justify-center md:ml-[0] ml-[89px] md:mt-0 my-[35px] w-[55px]"
                  shape="icbRoundedBorder27"
                  size="smIcn"
                  variant="icbFillRed50"
                >
                  <Img
                    src="images/img_bxbxsserver.svg"
                    className="h-6"
                    alt="bxbxsserver"
                  />
                </Button>
                <div className="flex md:flex-1 flex-col items-center justify-start ml-9 md:ml-[0] mr-[53px] w-[7%] md:w-full">
                  <div className="flex flex-col gap-[7px] items-start justify-start w-full">
                    <Text
                      className="font-bold text-gray_900 text-left w-auto"
                      as="h3"
                      variant="h3"
                    >
                      50+
                    </Text>
                    <Text
                      className="font-normal not-italic text-blue_gray_700 text-left w-auto"
                      as="h4"
                      variant="h4"
                    >
                      Servers
                    </Text>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-col flex-row md:gap-10 items-end justify-between md:ml-[0] ml-[34px] mt-[53px] w-[92%] md:w-full">
              <Img
                src="images/img_illustration2.svg"
                className="h-[414px] w-auto"
                alt="illustrationTwo"
              />
              <div className="flex flex-col items-start justify-start md:mt-0 mt-[54px] w-auto md:w-full">
                <Text
                  className="leading-[50.00px] text-gray_900 text-left w-[90%] sm:w-full"
                  as="h2"
                  variant="h2"
                >
                  We Provide Many Features You Can Use
                </Text>
                <Text
                  className="leading-[30.00px] mt-5 not-italic text-blue_gray_700_01 text-left w-full"
                  as="h6"
                  variant="h6"
                >
                  You can explore the features that we provide with fun and have
                  their own functions each feature.
                </Text>
                <div className="flex flex-row gap-2.5 items-start justify-start mt-[23px] w-1/2 md:w-full">
                  <Img
                    src="images/img_bxbxscheckcircle.svg"
                    className="h-6 w-6"
                    alt="bxbxscheckcircl"
                  />
                  <Text
                    className="mt-1 not-italic text-blue_gray_700 text-left w-auto"
                    variant="body1"
                  >
                    Powerfull online protection.
                  </Text>
                </div>
                <div className="flex flex-row gap-2.5 items-center justify-start mt-[21px] w-[47%] md:w-full">
                  <Img
                    src="images/img_bxbxscheckcircle.svg"
                    className="h-6 w-6"
                    alt="bxbxscheckcircl_One"
                  />
                  <Text
                    className="not-italic text-blue_gray_700 text-left w-auto"
                    variant="body1"
                  >
                    Internet without borders.
                  </Text>
                </div>
                <div className="flex flex-row gap-2.5 items-end justify-start mt-[21px] w-[37%] md:w-full">
                  <Img
                    src="images/img_bxbxscheckcircle.svg"
                    className="h-6 w-6"
                    alt="bxbxscheckcircl_Two"
                  />
                  <Text
                    className="mt-[5px] not-italic text-blue_gray_700 text-left w-auto"
                    variant="body1"
                  >
                    Supercharged VPN
                  </Text>
                </div>
                <div className="flex flex-row gap-2.5 items-start justify-start mt-[21px] w-[42%] md:w-full">
                  <Img
                    src="images/img_bxbxscheckcircle.svg"
                    className="h-6 w-6"
                    alt="bxbxscheckcircl_Three"
                  />
                  <Text
                    className="mt-1 not-italic text-blue_gray_700 text-left w-auto"
                    variant="body1"
                  >
                    No specific time limits.
                  </Text>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start overflow-auto w-full">
            <div className="bg-gradient  flex flex-col items-center justify-end p-[29px] sm:px-5 w-full">
              <div className="flex flex-col items-center justify-start max-w-[1090px] mt-[54px] mx-auto md:px-5 w-full">
                <Text
                  className="text-center text-gray_900 w-auto"
                  as="h2"
                  variant="h2"
                >
                  Choose Your Plan
                </Text>
                <Text
                  className="leading-[30.00px] mt-6 not-italic text-blue_gray_700_01 text-center w-[51%] sm:w-full"
                  as="h6"
                  variant="h6"
                >
                  <>
                    Let&#39;s choose the package that is best for you and
                    explore it happily and cheerfully.
                  </>
                </Text>
                <List
                  className="sm:flex-col flex-row gap-[50px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center mt-[60px] w-full"
                  orientation="horizontal"
                >
                  <div className="bg-white_A700 border-2 border-gray_300_01 border-solid flex flex-1 flex-col items-center justify-end p-[50px] md:px-10 sm:px-5 rounded-[10px] w-full">
                    <Img
                      src="images/img_illustrationfree.svg"
                      className="h-[165px] mt-[29px] w-auto"
                      alt="illustrationfre"
                    />
                    <Text
                      className="mt-[33px] text-center text-gray_900 w-auto"
                      as="h5"
                      variant="h5"
                    >
                      Free Plan
                    </Text>
                    <div className="flex flex-col gap-4 items-start justify-start mt-[37px] w-[83%] md:w-full">
                      <CheckBox
                        className="font-normal not-italic text-blue_gray_700_01 text-left text-sm"
                        inputClassName="mr-[5px]"
                        name="unlimitedbandwi_One"
                        id="unlimitedbandwi_One"
                        label="Unlimited Bandwitch"
                        size="sm"
                      ></CheckBox>
                      <CheckBox
                        className="font-normal not-italic text-blue_gray_700_01 text-left text-sm"
                        inputClassName="mr-[5px]"
                        name="encryptedconnec_One"
                        id="encryptedconnec_One"
                        label="Encrypted Connection"
                        size="sm"
                      ></CheckBox>
                      <CheckBox
                        className="font-normal not-italic text-blue_gray_700_01 text-left text-sm"
                        inputClassName="mr-[5px]"
                        name="notrafficlogs"
                        id="notrafficlogs"
                        label="No Traffic Logs"
                        size="sm"
                      ></CheckBox>
                      <CheckBox
                        className="font-normal not-italic text-blue_gray_700_01 text-left text-sm"
                        inputClassName="mr-[5px]"
                        name="worksonalldevic_One"
                        id="worksonalldevic_One"
                        label="Works on All Devices"
                        size="sm"
                      ></CheckBox>
                    </div>
                    <Text
                      className="font-medium mt-[133px] text-center text-gray_900 w-auto"
                      as="h3"
                      variant="h3"
                    >
                      Free
                    </Text>
                    <Button
                      className="cursor-pointer font-bold leading-[normal] min-w-[177px] mt-[19px] text-base text-center text-red_500 w-auto"
                      shape="RoundedBorder22"
                      size="sm"
                      variant="OutlineRed500"
                    >
                      Select
                    </Button>
                  </div>
                  <div className="bg-white_A700 border-2 border-gray_300_01 border-solid flex flex-1 flex-col items-center justify-end p-[50px] md:px-10 sm:px-5 rounded-[10px] w-full">
                    <Img
                      src="images/img_illustrationstandard.svg"
                      className="h-[165px] mt-[29px] w-auto"
                      alt="illustrationsta"
                    />
                    <Text
                      className="mt-[33px] text-center text-gray_900 w-auto"
                      as="h5"
                      variant="h5"
                    >
                      Standard Plan
                    </Text>
                    <div className="flex flex-col gap-4 items-start justify-start mt-[37px] w-[83%] md:w-full">
                      <CheckBox
                        className="font-normal not-italic text-blue_gray_700_01 text-left text-sm"
                        inputClassName="mr-[5px]"
                        name="unlimitedbandwi_One"
                        id="unlimitedbandwi_One2"
                        label="Unlimited Bandwitch"
                        size="sm"
                      ></CheckBox>
                      <CheckBox
                        className="font-normal not-italic text-blue_gray_700_01 text-left text-sm"
                        inputClassName="mr-[5px]"
                        name="encryptedconnec_One"
                        id="encryptedconnec_One2"
                        label="Encrypted Connection"
                        size="sm"
                      ></CheckBox>
                      <CheckBox
                        className="font-normal not-italic text-blue_gray_700_01 text-left text-sm"
                        inputClassName="mr-[5px]"
                        name="yestrafficlogs"
                        id="yestrafficlogs"
                        label="Yes Traffic Logs"
                        size="sm"
                      ></CheckBox>
                      <CheckBox
                        className="font-normal not-italic text-blue_gray_700_01 text-left text-sm"
                        inputClassName="mr-[5px]"
                        name="worksonalldevic_One"
                        id="worksonalldevic_One2"
                        label="Works on All Devices"
                        size="sm"
                      ></CheckBox>
                      <CheckBox
                        className="font-normal not-italic text-blue_gray_700_01 text-left text-sm"
                        inputClassName="mr-[5px]"
                        name="connectanyware"
                        id="connectanyware"
                        label="Connect Anyware"
                        size="sm"
                      ></CheckBox>
                    </div>
                    <Text
                      className="font-medium mt-[93px] text-center text-gray_900 w-auto"
                      as="h3"
                      variant="h3"
                    ></Text>
                    <Button
                      className="cursor-pointer font-bold leading-[normal] min-w-[177px] mt-[19px] text-base text-center text-red_500 w-auto"
                      shape="RoundedBorder22"
                      size="sm"
                      variant="OutlineRed500"
                    >
                      Select
                    </Button>
                  </div>
                  <div className="bg-white_A700 border-2 border-red_500 border-solid flex flex-1 flex-col items-center justify-end p-[33px] sm:px-5 rounded-[10px] w-full">
                    <Img
                      src="images/img_illustrationpremium.svg"
                      className="h-[165px] mt-[46px] w-auto"
                      alt="illustrationpre"
                    />
                    <Text
                      className="mt-[33px] text-center text-gray_900 w-auto"
                      as="h5"
                      variant="h5"
                    >
                      Premium Plan
                    </Text>
                    <div className="flex flex-col gap-4 items-start justify-start mt-[37px] w-[72%] md:w-full">
                      <CheckBox
                        className="font-normal not-italic text-blue_gray_700_01 text-left text-sm"
                        inputClassName="mr-[5px]"
                        name="unlimitedbandwi_One"
                        id="unlimitedbandwi_One3"
                        label="Unlimited Bandwitch"
                        size="sm"
                      ></CheckBox>
                      <CheckBox
                        className="font-normal not-italic text-blue_gray_700_01 text-left text-sm"
                        inputClassName="mr-[5px]"
                        name="encryptedconnec_One"
                        id="encryptedconnec_One3"
                        label="Encrypted Connection"
                        size="sm"
                      ></CheckBox>
                      <CheckBox
                        className="font-normal not-italic text-blue_gray_700_01 text-left text-sm"
                        inputClassName="mr-[5px]"
                        name="yestrafficlogs"
                        id="yestrafficlogs2"
                        label="Yes Traffic Logs"
                        size="sm"
                      ></CheckBox>
                      <CheckBox
                        className="font-normal not-italic text-blue_gray_700_01 text-left text-sm"
                        inputClassName="mr-[5px]"
                        name="worksonalldevic_One"
                        id="worksonalldevic_One3"
                        label="Works on All Devices"
                        size="sm"
                      ></CheckBox>
                      <CheckBox
                        className="font-normal not-italic text-blue_gray_700_01 text-left text-sm"
                        inputClassName="mr-[5px]"
                        name="connectanyware"
                        id="connectanyware2"
                        label="Connect Anyware"
                        size="sm"
                      ></CheckBox>
                      <CheckBox
                        className="font-normal not-italic text-blue_gray_700_01 text-left text-sm"
                        inputClassName="mr-[5px]"
                        name="getnewfeatures"
                        id="getnewfeatures"
                        label="Get New Features"
                        size="sm"
                      ></CheckBox>
                    </div>
                    <Text
                      className="font-medium mt-[53px] text-center text-gray_900 w-auto"
                      as="h3"
                      variant="h3"
                    ></Text>
                    <div className="md:h-16 h-[62px] mt-[19px] relative w-[68%]">
                      <div className="absolute backdrop-opacity-[0.5] bg-red_500_59 blur-[54.00px] bottom-[0] h-[45px] inset-x-[0] mx-auto rounded-[22px] w-[72%]"></div>
                      <Button
                        className="absolute cursor-pointer font-bold inset-x-[0] leading-[normal] min-w-[177px] mx-auto text-base text-center text-white_A700 top-[0] w-auto"
                        shape="RoundedBorder22"
                        size="sm"
                        variant="FillRed500"
                      >
                        Select
                      </Button>
                    </div>
                  </div>
                </List>
                <Text
                  className="leading-[50.00px] mt-[150px] text-center text-gray_900 w-[36%] sm:w-full"
                  as="h2"
                  variant="h2"
                >
                  Huge Global Network of Fast VPN
                </Text>
                <Text
                  className="leading-[30.00px] mt-5 not-italic text-blue_gray_700_01 text-center w-[51%] sm:w-full"
                  as="h6"
                  variant="h6"
                ></Text>
                <Img
                  src="images/img_hugeglobal.svg"
                  className="h-[537px] mt-[155px] w-auto"
                  alt="hugeglobal"
                />
              </div>
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start max-w-[1135px] mt-1.5 mx-auto md:px-5 w-full">
              <Img
                src="images/img_maskgroup_112x200.png"
                className="sm:flex-1 h-28 md:h-auto object-cover w-[18%] sm:w-full"
                alt="maskgroup_Two"
              />
              <Img
                src="images/img_maskgroup_50x156.png"
                className="sm:flex-1 h-[50px] md:h-auto sm:ml-[0] ml-[59px] object-cover w-[14%] sm:w-full"
                alt="maskgroup_Three"
              />
              <Img
                src="images/img_maskgroup_208x277.png"
                className="sm:flex-1 h-52 md:h-auto ml-5 sm:ml-[0] object-cover w-1/4 sm:w-full"
                alt="maskgroup_Four"
              />
              <Img
                src="images/img_maskgroup_63x187.png"
                className="sm:flex-1 h-[63px] md:h-auto sm:ml-[0] ml-[3px] object-cover w-[17%] sm:w-full"
                alt="maskgroup_Five"
              />
              <Img
                src="images/img_maskgroup_51x171.png"
                className="sm:flex-1 h-[51px] md:h-auto sm:ml-[0] ml-[59px] object-cover w-[16%] sm:w-full"
                alt="maskgroup_Six"
              />
            </div>
            <div className="flex flex-col items-center justify-start md:ml-[0] ml-[150px] mt-[50px] md:px-5 w-[91%] md:w-full">
              <div className="flex md:flex-col flex-row md:gap-[50px] items-start justify-between w-full">
                <div className="flex md:flex-1 flex-col items-center justify-start mb-[22px] w-[66%] md:w-full">
                  <Text
                    className="leading-[50.00px] text-center text-gray_900 w-[53%] sm:w-full"
                    as="h2"
                    variant="h2"
                  >
                    Trusted by Thousands of Happy Customer
                  </Text>
                  <Text
                    className="leading-[30.00px] mt-5 not-italic text-blue_gray_700_01 text-center w-[66%] sm:w-full"
                    as="h6"
                    variant="h6"
                  >
                    These are the stories of our customers who have joined us
                    with great pleasure when using this crazy feature.
                  </Text>
                  <div className="flex flex-col gap-3 items-start justify-start mt-[60px] w-full">
                    <div className="flex md:flex-col flex-row md:gap-[50px] items-start justify-between w-full">
                      <div className="h-[300px] relative w-[48%] md:w-full">
                        <div className="absolute backdrop-opacity-[0.5] bg-gray_900_5f blur-[114.00px] h-[300px] inset-[0] justify-center m-auto rounded-[10px] w-4/5"></div>
                        <div className="absolute bg-white_A700 border-2 border-red_500 border-solid flex flex-col inset-x-[0] items-center justify-start mx-auto p-[30px] sm:px-5 rounded-[10px] top-[0] w-full">
                          <div className="flex flex-col gap-5 items-center justify-start w-full">
                            <div className="flex flex-row items-center justify-start w-full">
                              <div className="flex flex-col items-center justify-start w-[54%]">
                                <div className="flex flex-row gap-5 items-center justify-between w-full">
                                  <Img
                                    src="images/img_ellipse175.png"
                                    className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                                    alt="ellipse175"
                                  />
                                  <div className="flex flex-col items-start justify-start w-auto">
                                    <Text
                                      className="text-center text-gray_900 w-auto"
                                      as="h5"
                                      variant="h5"
                                    >
                                      Viezh Robert
                                    </Text>
                                    <Text
                                      className="mt-0.5 not-italic text-blue_gray_700 text-center w-auto"
                                      variant="body1"
                                    >
                                      Warsaw, Poland
                                    </Text>
                                  </div>
                                </div>
                              </div>
                              <Text
                                className="ml-[108px] not-italic text-gray_900 text-left w-auto"
                                as="h6"
                                variant="h6"
                              >
                                4.5
                              </Text>
                              <Img
                                src="images/img_antdesignstarfilled.svg"
                                className="h-4 ml-2.5 w-4"
                                alt="antdesignstarfi"
                              />
                            </div>
                            <Text
                              className="leading-[30.00px] not-italic text-gray_900 text-left w-full"
                              as="h6"
                              variant="h6"
                            >
                              “Wow... I am very happy to use this VPN, it turned
                              out to be more than my expectations and so far
                              there have been no problems. LaslesVPN always the
                              best”.
                            </Text>
                          </div>
                        </div>
                      </div>
                      <div className="border-2 border-gray_300_01 border-solid flex md:flex-1 flex-col items-center justify-start p-[30px] sm:px-5 rounded-[10px] w-[48%] md:w-full">
                        <div className="flex flex-col gap-2 items-center justify-start mb-3 w-full">
                          <div className="flex flex-row items-center justify-between w-full">
                            <div className="flex flex-col items-center justify-start w-3/5">
                              <div className="flex flex-row gap-5 items-center justify-between w-full">
                                <Img
                                  src="images/img_ellipse175_50x50.png"
                                  className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                                  alt="ellipse175_One"
                                />
                                <div className="flex flex-col items-start justify-start w-auto">
                                  <Text
                                    className="text-gray_900 text-left w-auto"
                                    as="h5"
                                    variant="h5"
                                  >
                                    Yessica Christy
                                  </Text>
                                  <Text
                                    className="not-italic text-blue_gray_700 text-left w-auto"
                                    variant="body1"
                                  >
                                    Shanxi, China
                                  </Text>
                                </div>
                              </div>
                            </div>
                            <div className="flex flex-row gap-2.5 items-center justify-between w-[15%]">
                              <Text
                                className="not-italic text-gray_900 text-left w-auto"
                                as="h6"
                                variant="h6"
                              >
                                4.5
                              </Text>
                              <Img
                                src="images/img_antdesignstarfilled.svg"
                                className="h-4 w-4"
                                alt="antdesignstarfi_One"
                              />
                            </div>
                          </div>
                          <Text
                            className="leading-[30.00px] not-italic text-gray_900 text-left w-full"
                            as="h6"
                            variant="h6"
                          >
                            “I like it because I like to travel far and still
                            can connect with high speed.”.
                          </Text>
                        </div>
                      </div>
                    </div>
                    <Img
                      src="images/img_group1300.svg"
                      className="h-[15px] w-auto"
                      alt="group1300"
                    />
                  </div>
                </div>
                <div className="flex md:flex-1 flex-col md:gap-10 gap-[60px] justify-start md:mt-0 mt-60 w-[31%] md:w-full">
                  <div className="border-2 border-gray_300_01 border-solid flex flex-col items-center justify-start p-[30px] sm:px-5 rounded-[10px] w-full">
                    <div className="flex flex-col items-center justify-start mb-[17px] w-full">
                      <div className="flex flex-row items-center justify-between w-full">
                        <div className="flex flex-col items-center justify-start w-[59%]">
                          <div className="flex flex-row gap-5 items-center justify-between w-full">
                            <Img
                              src="images/img_ellipse175_1.png"
                              className="h-[50px] md:h-auto rounded-[50%] w-[50px]"
                              alt="ellipse175_Two"
                            />
                            <div className="flex flex-col items-center justify-start w-auto">
                              <Text
                                className="text-gray_900 text-left w-auto"
                                as="h5"
                                variant="h5"
                              >
                                Kim Young Jou
                              </Text>
                              <Text
                                className="not-italic text-blue_gray_700 text-left w-auto"
                                variant="body1"
                              >
                                Seoul, South Korea
                              </Text>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-row gap-2.5 items-center justify-between w-[15%]">
                          <Text
                            className="not-italic text-gray_900 text-left w-auto"
                            as="h6"
                            variant="h6"
                          >
                            4.5
                          </Text>
                          <Img
                            src="images/img_antdesignstarfilled.svg"
                            className="h-4 w-4"
                            alt="antdesignstarfi_Two"
                          />
                        </div>
                      </div>
                      <Text
                        className="leading-[30.00px] mt-[3px] not-italic text-gray_900 text-left w-full"
                        as="h6"
                        variant="h6"
                      >
                        “This is very unusual for my business that currently
                        requires a virtual private network that has high
                        security.”.
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-5 items-center justify-start md:ml-[0] ml-[100px] w-[35%] md:w-full">
                    <Button
                      className="flex h-[60px] items-center justify-center rounded-[50%] w-[60px]"
                      size="smIcn"
                      variant="icbOutlineRed500"
                    >
                      <Img
                        src="images/img_evaarrowbackfill.svg"
                        className="h-[30px]"
                        alt="evaarrowbackfil"
                      />
                    </Button>
                    <Button
                      className="flex h-[60px] items-center justify-center rounded-[50%] w-[60px]"
                      size="smIcn"
                      variant="icbOutlineRed500_1"
                    >
                      <Img
                        src="images/img_evaarrowbackfill_white_a700.svg"
                        className="h-[30px]"
                        alt="evaarrowbackfil_One"
                      />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:h-[628px] h-[679px] mt-[65px] md:px-5 relative w-full">
              <div className="absolute md:h-[563px] h-[663px] inset-[0] justify-center m-auto w-full">
                <footer className="absolute bg-gray_50 bottom-[0] flex inset-x-[0] items-center justify-center mx-auto w-full">
                  <div className="flex flex-col items-center justify-center mb-[104px] mt-[180px] mx-[150px] w-4/5">
                    <div className="flex md:flex-col flex-row md:gap-5 items-center justify-center w-full">
                      <div className="flex md:flex-1 flex-col items-start justify-start w-[30%] md:w-full">
                        <div className="flex flex-row gap-2.5 items-center justify-start w-[44%] md:w-full">
                          <Img
                            src="images/img_upload.svg"
                            className="h-9 w-[35px]"
                            alt="upload_One"
                          />
                          <Text
                            className="font-bold text-gray_900 text-left w-auto"
                            as="h4"
                            variant="h4"
                          >
                            LaslesVPN
                          </Text>
                        </div>
                        <Text
                          className="leading-[30.00px] mt-5 not-italic text-blue_gray_700 text-left w-full"
                          as="h6"
                          variant="h6"
                        >
                          LaslesVPN is a private virtual network that has unique
                          features and has high security.
                        </Text>
                        <div className="flex flex-row gap-5 items-center justify-start mt-[30px] w-[42%] md:w-full">
                          <div className="bg-red_500 flex flex-col h-[33px] items-center justify-start rounded-tl-[16px] rounded-tr-[16px] shadow-bs1 w-[33px]">
                            <Img
                              src="images/img_facebook.svg"
                              className="h-[33px] rounded-tl-[16px] rounded-tr-[16px] w-[33px]"
                              alt="facebook"
                            />
                          </div>
                          <div className="bg-red_500 flex flex-col h-[33px] items-center justify-start rounded-tl-[16px] rounded-tr-[16px] shadow-bs1 w-[33px]">
                            <Img
                              src="images/img_vector.svg"
                              className="h-[33px] rounded-tl-[16px] rounded-tr-[16px] w-[33px]"
                              alt="vector"
                            />
                          </div>
                          <div className="bg-red_500 flex flex-col h-[33px] items-center justify-start rounded-tl-[16px] rounded-tr-[16px] shadow-bs1 w-[33px]">
                            <Img
                              src="images/img_camera.svg"
                              className="h-[33px] rounded-tl-[16px] rounded-tr-[16px] w-[33px]"
                              alt="camera"
                            />
                          </div>
                        </div>
                        <Text
                          className="mt-[34px] not-italic text-blue_gray_200 text-center w-auto"
                          as="h6"
                          variant="h6"
                        ></Text>
                      </div>
                      <div className="flex md:flex-1 flex-col items-start justify-start md:ml-[0] ml-[230px] md:mt-0 mt-1.5 w-auto md:w-full">
                        <Text
                          className="text-gray_900 text-left w-auto"
                          as="h5"
                          variant="h5"
                        >
                          Product
                        </Text>
                        <Text
                          className="mt-[29px] not-italic text-blue_gray_700 text-left w-auto"
                          as="h6"
                          variant="h6"
                        >
                          Download{" "}
                        </Text>
                        <Text
                          className="mt-[22px] not-italic text-blue_gray_700 text-left w-auto"
                          as="h6"
                          variant="h6"
                        >
                          Pricing
                        </Text>
                        <Text
                          className="mt-[19px] not-italic text-blue_gray_700 text-left w-auto"
                          as="h6"
                          variant="h6"
                        >
                          Locations
                        </Text>
                        <Text
                          className="mt-[21px] not-italic text-blue_gray_700 text-left w-auto"
                          as="h6"
                          variant="h6"
                        >
                          Server
                        </Text>
                        <Text
                          className="mt-5 not-italic text-blue_gray_700 text-left w-auto"
                          as="h6"
                          variant="h6"
                        >
                          Countries
                        </Text>
                        <Text
                          className="mt-[22px] not-italic text-blue_gray_700 text-left w-auto"
                          as="h6"
                          variant="h6"
                        >
                          Blog
                        </Text>
                      </div>
                      <div className="flex md:flex-1 flex-col items-start justify-start md:ml-[0] ml-[126px] w-auto md:w-full">
                        <Text
                          className="text-gray_900 text-left w-auto"
                          as="h5"
                          variant="h5"
                        >
                          Engage
                        </Text>
                        <Text
                          className="mt-[27px] not-italic text-blue_gray_700 text-left w-auto"
                          as="h6"
                          variant="h6"
                        >
                          LaslesVPN ?{" "}
                        </Text>
                        <Text
                          className="mt-[21px] not-italic text-blue_gray_700 text-left w-auto"
                          as="h6"
                          variant="h6"
                        >
                          FAQ
                        </Text>
                        <Text
                          className="mt-5 not-italic text-blue_gray_700 text-left w-auto"
                          as="h6"
                          variant="h6"
                        >
                          Tutorials
                        </Text>
                        <Text
                          className="mt-[21px] not-italic text-blue_gray_700 text-left w-auto"
                          as="h6"
                          variant="h6"
                        >
                          About Us
                        </Text>
                        <a
                          href="javascript:"
                          className="font-normal mt-[22px] not-italic text-base text-blue_gray_700 text-left w-auto"
                        >
                          <Text className="">Privacy Policy</Text>
                        </a>
                        <a
                          href="javascript:"
                          className="font-normal mt-[19px] not-italic text-base text-blue_gray_700 text-left w-auto"
                        >
                          <Text className="">Terms of Service</Text>
                        </a>
                      </div>
                      <div className="flex md:flex-1 flex-col items-center justify-start md:ml-[0] ml-[126px] w-[11%] md:w-full">
                        <div className="flex flex-col items-start justify-start w-full">
                          <Text
                            className="text-gray_900 text-left w-auto"
                            as="h5"
                            variant="h5"
                          >
                            Earn Money
                          </Text>
                          <Text
                            className="mt-[27px] not-italic text-blue_gray_700 text-left w-auto"
                            as="h6"
                            variant="h6"
                          >
                            Affiliate
                          </Text>
                          <Text
                            className="mt-[21px] not-italic text-blue_gray_700 text-left w-auto"
                            as="h6"
                            variant="h6"
                          >
                            Become Partner
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </footer>
                <div className="absolute backdrop-opacity-[0.5] bg-gray_900_5f blur-[114.00px] h-[250px] inset-x-[0] mx-auto rounded-[10px] top-[0] w-3/4"></div>
              </div>
              <div className="absolute bg-white_A700 flex md:flex-col flex-row md:gap-10 inset-x-[0] items-center justify-between mx-auto p-[57px] md:px-10 sm:px-5 rounded-[10px] top-[0] w-4/5">
                <div className="flex flex-col gap-[17px] items-start justify-start ml-3 md:ml-[0] w-auto md:w-full">
                  <Text
                    className="leading-[45.00px] text-gray_900 text-left w-full"
                    as="h2"
                    variant="h2"
                  >
                    Subscribe Now for Get Special Features!
                  </Text>
                  <Text
                    className="not-italic text-blue_gray_700_01 text-left w-auto"
                    as="h6"
                    variant="h6"
                  >
                    <>Let&#39;s subscribe with us and find the fun.</>
                  </Text>
                </div>
                <div className="md:h-[60px] h-[85px] mr-3 relative w-1/4 md:w-full">
                  <div className="absolute backdrop-opacity-[0.5] bg-red_500_59 blur-[54.00px] bottom-[0] h-[60px] inset-x-[0] mx-auto rounded-[10px] w-[85%]"></div>
                  <Button
                    className="absolute cursor-pointer font-bold inset-x-[0] min-w-[250px] mx-auto text-base text-center text-white_A700 top-[0] w-auto"
                    shape="RoundedBorder10"
                    size="md"
                    variant="FillRed500"
                  >
                    Subscribe Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingpagePage;
